<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import { Head, usePage, useForm } from '@inertiajs/inertia-vue3';
  import { formatCurrency, formatNumeric, stringLimit, chipColor } from '@/Composables/Utilities';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import FloatingTextArea from '@/Components/FloatingInput/FloatingTextArea.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import Modal from '@/Components/Modal/Modal.vue';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import Button from '@/Components/Button/Button.vue';
  import Chip from '@/Components/Chip.vue';
  import { useToast } from 'vue-toastification';
  import Calendar from '@/Components/Calendar.vue';
  import VueMultiselect from 'vue-multiselect';
  import PolarCharts from '@/Shared/PolarCharts.vue';
  import AreaChart from '@/Shared/AreaChart.vue';
  import { ref, computed, watch } from 'vue';
  import { Inertia } from '@inertiajs/inertia';

  import { debounce } from 'lodash';

  const isDeleteModalShown = ref(false);
  const isAppointmentModalShown = ref(false);

  const selectedAppointment = ref({ id: null, message: null, schedule: null, patient: { first_name: null, last_name: null } });
  const form = useForm({ id: null, service: null, price: null, subtotal: 0, selected_services: [], user_id: null, message: '', schedule: '' });

  const props = defineProps({
    totalInquiries: Number,
    patientsCount: Number,
    servicesCount: Number,
    todaysAppointment: Number,
    appointments: Object,
    filters: Object,
    chartServices: Object,
    appointmentsIncome: [Object, Array],
  });

  const labels = props.chartServices.map((service) => service.service);
  const series = props.chartServices.map((service) => service.monthly_appointments_count);

  const areaChartLabel = props.appointmentsIncome.map((areaChartIncome) =>  areaChartIncome.date )
  const areaChartSeries = [{name: 'Income', data: props.appointmentsIncome.map((areaChartIncome) => String(areaChartIncome.subtotal))}]


  const approveAppointment = () => {
    form.put(`/appointments/approve/${selectedAppointment.value.id}`, {
      preserveState: true,
      onError: () => {
        toast.error('Something went wrong');
      },
      onSuccess: () => {
        toast.success('Appointment has been approved successfully!');
        toggleAppointmentModal();
      },
    });
  };

  const deleteAppointment = () => {
    Inertia.delete(`/appointments/${selectedAppointment.value.id}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Appointment has been moved to trash successfully!');
        toggleDeleteModal();
      },
    });
  };

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
  };

  const toggleAppointmentModal = () => {
    isAppointmentModalShown.value = !isAppointmentModalShown.value;
  };

  const errorMessage = computed(() => {
    return usePage().props.value.errors.error ?? 'Something went wrong';
  });

  const toast = useToast();

  let search = ref(props.filters.search);
  let trashed = ref(props.filters.trashed);

  const searchAppointment = debounce(() => {
    Inertia.get(
      '/dashboard',
      { search: search.value, trashed: trashed.value },
      {
        preserveState: true,
        only: ['appointments'],
      },
    );
  }, 300);
</script>

<template>
  <Head title="Dashboard" />

  <BreezeAuthenticatedLayout>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="bg-white overflow-hidden sm:rounded-lg">
        <div class="p-6">
          <p class="text-xl font-medium">Welcome to Dashboard</p>
          <p class="text-sm text-gray-600">Shown below are the summary of your transactions and records.</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4">
        <div class="bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(servicesCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Services</p>
            </div>
          </div>
          <span class="sr-only">Total Services</span>
        </div>
        <div class="bg-blue-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(patientsCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Patients</p>
            </div>
          </div>
          <span class="sr-only">Total Patients</span>
        </div>
        <div class="bg-orange-600 flex-1 p-4 text-white rounded-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(todaysAppointment) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Today's <br />Appointments</p>
            </div>
          </div>
          <span class="sr-only">Today's Appointments</span>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="md:flex  gap-x-2">
          <div class="flex-1 w-full md:w-1/2">
            <div class="mt-8 mb-8">
              <p class="font-medium text-xl">Services Summary</p>
              <p class="text-sm">Monthly overview of services booked by patients.</p>
            </div>
            <polar-charts :labels="labels" :series="series" />
          </div>
          <div class="flex-1 w-full md:w-1/2">
            <div class="mt-8 mb-8">
              <p class="font-medium text-xl">Completed Appointments</p>
              <p class="text-sm">Here is an overview of your completed appointments for this week.</p>
            </div>
            <area-chart :labels="areaChartLabel" :series="areaChartSeries" />
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mt-8 mb-6">
          <p class="font-medium text-xl">Appointment Calendar</p>
          <p>Here is an overview of your appointments.</p>
        </div>
        <div class="flex-1 w-full">
          <Calendar :data="appointments" />
        </div>
      </div>

      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6 mt-10">
        <p class="text-xl font-medium">Latest Appointments</p>
        <p class="text-sm text-gray-700">Shown below are the latest appointments.</p>
        <div class="flex justify-between mt-7 gap-x-2 mb-6">
          <form-input label="Filter Service" class="w-48">
            <floating-select @change="searchAppointment" v-model="trashed">
              <option value="with">All Appointments</option>
              <option value="">Active Appointments</option>
              <option value="only">Trashed Appointments</option>
            </floating-select>
          </form-input>
          <div class="flex gap-x-2">
            <form-input label="Search Appointment" for="search">
              <floating-input v-model="search" id="search" @keyup="searchAppointment" />
            </form-input>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Status</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Patient</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Email</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Schedule</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Message</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Sub Total</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Payment</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Created On</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Deleted On</th>
                <th scope="col" class="py-3.5 pl-4 pr-3 sm:pl-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="(appointment, i) in appointments" :key="i" class="hover:bg-gray-200" :class="{ 'bg-red-100': appointment.deleted_at }">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <Chip :label="appointment.appointment_status" :color="chipColor(appointment.appointment_status)"/>
                </td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 gap-x-2">
                  <div class="flex items-center gap-x-2">
                    <div class="rounded-full bg-blue-500 w-8 h-8 border-gray-100 flex items-center justify-center">
                      <svg v-if="!appointment.patient.image" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <img :src="`images/profile/${appointment.patient.image}`" class="object-fit rounded-full h-full" alt="" />
                    </div>
                    {{ appointment.patient.full_name }}
                  </div>
                </td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.patient.email }}</td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.schedule }}</td>
                <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ stringLimit(appointment.message) }}</td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ formatCurrency(appointment.subtotal) }}</td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <Chip :label="appointment.payment_status" :color="chipColor(appointment.payment_status)"/>
                </td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.created_at }}</td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.deleted_at }}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                  <Button
                    text
                    size="sm"
                    @click="
                      toggleAppointmentModal();
                      selectedAppointment = appointment;
                    "
                    >Details</Button
                  >
                  <Button
                    v-if="!appointment.deleted_at"
                    @click.prevent="
                      toggleDeleteModal();
                      selectedAppointment = appointment;
                    "
                    text
                    size="sm"
                    color="error"
                    >Trash</Button
                  >
                </td>
              </tr>
              <tr v-if="appointments.length == 0">
                <td colspan="9">
                  <div class="mx-auto text-center py-4 font-medium text-gray-600">No data available ..</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2 text-gray-500">Showing the latest entry of appointments from patients.</p>
      </div>

      <Modal v-if="isAppointmentModalShown" @close="toggleAppointmentModal">
        <template v-slot:title>
          <p class="font-bold text-xl">Appointment Information</p>
          <p class="text-sm text-gray-600">Here are the informations for this appointment</p>
        </template>
        <template v-slot:body>
          <p class="mb-2 mt-3">Patient Information</p>
          <p class="text-sm">Full Name: {{ selectedAppointment.patient.full_name }}</p>
          <p class="text-sm">Email: {{ selectedAppointment.patient.email }}</p>
          <p class="text-sm">Gender: {{ selectedAppointment.patient.gender }}</p>
          <p class="mb-2 mt-4">Appointment Information</p>
          <p class="text-sm">Schedule: {{ selectedAppointment.schedule }}</p>
          <p class="text-sm">Message: {{ selectedAppointment.message }}</p>
          <p class="text-sm">Created: {{ selectedAppointment.created_at }}</p>
          <p class="mb-2 mt-4">Services Selected</p>
          <p class="text-sm" v-for="services in selectedAppointment.services" :key="services.id">{{ services.service.service }} - {{ formatCurrency(services.service.price) }}</p>
        </template>
        <template v-slot:footer>
          <Button @click.prevent="toggleAppointmentModal" text size="sm" color="gray">Close</Button>
          <Button
            v-if="selectedAppointment.appointment_status == 'Pending' && selectedAppointment.appointment_status != 'Cancelled' && $page.props.auth.user.is_admin"
            @click.prevent="approveAppointment"
            text
            size="sm"
            color="success"
            >Approve</Button
          >
        </template>
      </Modal>

      <Modal v-if="isDeleteModalShown" @close="toggleDeleteModal">
        <template v-slot:title>
          <p class="font-bold text-xl">Confirm Delete</p>
        </template>
        <template v-slot:body>
          <p class="text-sm text-gray-600">Are you sure you want to move this appointment to trash? Once moved to trash the appointment status will be marked as cancelled and cannot be restored.</p>
        </template>
        <template v-slot:footer>
          <Button @click.prevent="toggleDeleteModal" text size="sm" color="gray">Close</Button>
          <Button @click.prevent="deleteAppointment" text size="sm" color="error">Confirm</Button>
        </template>
      </Modal>
    </div>
  </BreezeAuthenticatedLayout>
</template>
