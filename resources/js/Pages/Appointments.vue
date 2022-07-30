<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import Button from '@/Components/Button/Button.vue';
  import { Head, useForm } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import Pagination from '@/Shared/Pagination.vue';
  import Modal from '@/Components/Modal/Modal.vue';
  import { debounce } from 'lodash';
  import { ref, watch, watchEffect } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { formatCurrency, formatNumeric } from '@/Composables/Utilities';
  import { useToast } from 'vue-toastification';

  const toast = useToast();

  const form = useForm({ id: null, service: null, price: null });

  const props = defineProps({
    appointments: Object,
    errors: Object,
    filters: Object,
    trashedAppointmentsCount: Number
  });

  let search = ref(props.filters.search);
  let trashed = ref(props.filters.trashed);

  const searchAppointment = debounce(() => {
    Inertia.get('/appointments', { search: search.value, trashed: trashed.value }, { preserveState: true });
  }, 300);


</script>

<template>
  <Head title="Patient Appointments" />

  <BreezeAuthenticatedLayout>
    <div class="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-3 gap-x-3">
      <div class="bg-red-500 flex-1 p-4 text-white rounded-md">
        <div class="flex justify-between">
          <div class="text-9xl flex items-center">{{ formatNumeric(trashedAppointmentsCount) }}</div>
          <div class="flex flex-col items-end gap-y-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <p class="uppercase font-medium tracking-wider leading-5">Trashed <br />Appointments</p>
          </div>
        </div>
        <span class="sr-only">Trashed Appointments</span>
      </div>
      <div class="bg-green-600 flex-1 p-4 text-white rounded-md">
        <div class="flex justify-between">
          <div class="text-9xl flex items-center">{{ formatNumeric(appointments.data.length)}}</div>
          <div class="flex flex-col items-end gap-y-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Appointments</p>
          </div>
        </div>
        <span class="sr-only">Total Appointments</span>
      </div>
    </div>
    <div class="py-10">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6">
              <p class="text-xl font-medium">All Appointments</p>
              <p class="text-sm text-gray-700">Shown below are the appointments record</p>
              <div class="flex justify-between mt-7 gap-x-2 mb-6">
                <form-input label="Filter Service" class="w-48">
                  <floating-select @change="searchAppointment" v-model="trashed">
                    <option value="with">All Appointments</option>
                    <option value="">Active Appointments</option>
                    <option value="only">Trashed Appointments</option>
                  </floating-select>
                </form-input>
                <div class="flex gap-x-2">
                  <Button
                    @click.prevent="
                      isCreating = true;
                    "
                    size="sm"
                    color="success"
                    >Add Appointment</Button
                  >
                  <form-input label="Search Appointment" for="search">
                    <floating-input v-model="search" id="search" @keyup="searchAppointment" />
                  </form-input>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Patient</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Email</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Schedule</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Sub Total</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Created On</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Deleted On</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 sm:pl-6 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="(appointment, i) in appointments.data" :key="i" :class="{ 'bg-red-100': appointment.deleted_at }">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.id }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.patient.full_name }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.patient.email }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.schedule }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ formatCurrency(appointment.subtotal) }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.created_at }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.deleted_at }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                       
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pagination :links="appointments.links" right />
            </div>
          </div>
        </div>
      </div>
    </div>

  </BreezeAuthenticatedLayout>
</template>
