<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import Button from '@/Components/Button/Button.vue';
  import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import FloatingTextArea from '@/Components/FloatingInput/FloatingTextArea.vue';
  import Chip from '@/Components/Chip.vue';
  import Pagination from '@/Shared/Pagination.vue';
  import Modal from '@/Components/Modal/Modal.vue';
  import { loadStripe } from '@stripe/stripe-js/pure';
  import { debounce } from 'lodash';
  import { ref, watch, watchEffect, computed, toRef, onMounted } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { formatCurrency, formatNumeric, stringLimit, chipColor } from '@/Composables/Utilities';
  import { useToast } from 'vue-toastification';
  import Calendar from '@/Components/Calendar.vue';
  import VueMultiselect from 'vue-multiselect';
  import moment from 'moment';

  const errorMessage = computed(() => {
    return usePage().props.value.errors.error ?? 'Something went wrong';
  });

  let cardElement, stripe;

  onMounted(async () => {
    stripe = await loadStripe(usePage().props.value.stripe.public_key);
    const elements = stripe.elements();
    cardElement = elements.create('card');
  });

  const processPayment = async() => {
    const { paymentMethod, error } = await stripe.createPaymentMethod(
        'card', cardElement, {
            billing_details: { 
              name: selectedAppointment.value.patient.full_name,
              email: selectedAppointment.value.patient.email,
              address: {
                line1: selectedAppointment.value.patient.address
              } 
            }
        }
    );

    if (error) {
       console.log(error)
    } else {
       selectedAppointment.value.paymentMethodId = paymentMethod.id
       Inertia.post(route('payment.store'), selectedAppointment.value, {
         onError: () => {
          toast.error('Something went wrong')
         }
       })
    }
  };

  const toast = useToast();

  let form = useForm({ id: null, service: null, price: null, subtotal: 0, selected_services: [], user_id: null, message: '', schedule: '' });
  const selectedAppointment = ref({ id: null, message: null, schedule: null, patient: { first_name: null, last_name: null } });

  const isAppointmentModalShown = ref(false);
  const isCreating = ref(false);
  const isDeleteModalShown = ref(false);
  const isRestoreModalShown = ref(false);
  const isCreateModalShown = ref(false);
  const isPaymentModalShown = ref(false);
  const initializePaymentModal = ref(false)

  const selectedService = toRef(form, 'selected_services');

  const togglePaymentModal = () => {
    initializePaymentModal.value = true
    isPaymentModalShown.value = !isPaymentModalShown.value;
    if (isPaymentModalShown.value) {
      setTimeout(() => {
        initializePaymentModal.value = false
        cardElement.mount('#card-element');
      }, 1200);
    }
  };

  const toggleAppointmentModal = () => {
    isAppointmentModalShown.value = !isAppointmentModalShown.value;
  };

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
  };

  const toggleRestoreModal = () => {
    isRestoreModalShown.value = !isRestoreModalShown.value;
  };

  const toggleCreateModal = (data = null) => {
    if (data != null) {
      form.message = data.message;
      form.id = data.id;
      form.user_id = data.patient;
      form.selected_services = data.services?.map((service) => service.service);
      form.schedule = moment(data.schedule).format('YYYY-MM-DDThh:mm');
    }
    isCreateModalShown.value = !isCreateModalShown.value;
  };

  const initiateMethod = () => {
    if (isCreating.value) {
      saveAppointment();
    } else {
      updateAppointment();
    }
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

  const restoreAppointment = () => {
    form.put(`/appointments/restore/${selectedAppointment.value.id}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Appointment has been restored successfully!');
        toggleRestoreModal();
      },
    });
  };

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

  const finishedAppointment = () => {
    form.put(`/appointments/finished/${selectedAppointment.value.id}`, {
      preserveState: true,
      onError: () => {
        toast.error('Something went wrong');
      },
      onSuccess: () => {
        toast.success(`${usePage().props.value.flash.message}`);
        toggleAppointmentModal();
      },
    });
  };

  const saveAppointment = () => {
    form
      .transform((data) => ({ ...data, user_id: data?.user_id?.id }))
      .post('/appointments', {
        preserveState: true,
        onError: (err) => {
          toast.error(`${errorMessage.value}`);
        },
        onSuccess: () => {
          toast.success('Appointment created successfully!');
          toggleCreateModal();
          form.reset();
        },
      });
  };

  const updateAppointment = () => {
    form
      .transform((data) => ({ ...data, user_id: data?.user_id?.id }))
      .put(`/appointments/${form.id}`, {
        preserveState: true,
        onError: (err) => {
          toast.error(`${errorMessage.value}`);
        },
        onSuccess: () => {
          toast.success('Appointment update successfully!');
          toggleCreateModal();
          form.reset();
        },
      });
  };

  const props = defineProps({
    appointments: Object,
    errors: Object,
    filters: Object,
    trashedAppointmentsCount: Number,
    todaysAppointment: Number,
    services: Object,
    users: Object,
  });

  const setSubtotalValue = () => {
    form.subtotal = 0;
    form.selected_services?.map((service) => {
      form.subtotal += parseFloat(service.price);
    });
  };

  watch(selectedService, setSubtotalValue);

  let search = ref(props.filters.search);
  let trashed = ref(props.filters.trashed);

  const searchAppointment = debounce(() => {
    Inertia.get('/appointments', { search: search.value, trashed: trashed.value }, { preserveState: true });
  }, 300);

  const searchPatient = debounce((val) => {
    Inertia.get(
      '/appointments',
      { search: val },
      {
        preserveState: true,
        only: ['users'],
      },
    );
  }, 300);
</script>

<template>
  <Head title="Patient Appointments" />

  <BreezeAuthenticatedLayout>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
        <p class="font-medium text-xl">Appointment Summary</p>
        <p>Here is an overview of your appointments.</p>
      </div>
      <div class="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-x-4 md:flex-row gap-y-4">
        <div class="bg-red-500 flex-1 p-4 text-white rounded-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(trashedAppointmentsCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Trashed <br />Appointments</p>
            </div>
          </div>
          <span class="sr-only">Trashed Appointments</span>
        </div>
        <div class="bg-green-600 flex-1 p-4 text-white rounded-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(appointments.data.length) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Appointments</p>
            </div>
          </div>
          <span class="sr-only">Total Appointments</span>
        </div>
        <div class="bg-blue-600 flex-1 p-4 text-white rounded-md">
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
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
        <p class="font-medium text-xl">Appointment Calendar</p>
        <p>Here is an overview of your appointments.</p>
      </div>
      <div class="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 md:flex gap-x-4">
        <div class="flex-1 w-full">
          <Calendar :data="appointments.data" />
        </div>
      </div>
    </div>

    <div class="py-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
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
                      toggleCreateModal();
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
                    <tr v-for="(appointment, i) in appointments.data" :key="i" class="hover:bg-gray-200" :class="{ 'bg-red-100': appointment.deleted_at }">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.id }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Chip :label="appointment.appointment_status" :color="chipColor(appointment.appointment_status)" />
                      </td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.patient.full_name }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.patient.email }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ appointment.schedule }}</td>
                      <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ stringLimit(appointment.message) }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ formatCurrency(appointment.subtotal) }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Chip :label="appointment.payment_status" :color="chipColor(appointment.payment_status)" />
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
                          v-if="!appointment.deleted_at && ((appointment.appointment_status != 'Approved' && appointment.appointment_status != 'Finished') || $page.props.auth.user.is_admin)"
                          @click="
                            isCreating = false;
                            toggleCreateModal(appointment);
                          "
                          text
                          size="sm"
                          color="success"
                          >Update</Button
                        >
                        <Button v-if="!appointment.deleted_at" @click.prevent="togglePaymentModal(); selectedAppointment = {...appointment}" text size="sm" color="">Payment</Button>
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
                    <tr v-if="appointments.data.length == 0">
                      <td colspan="11">
                        <div class="mx-auto text-center py-4 font-medium text-gray-600">No data available ..</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-sm mt-2 text-gray-500">Showing {{ appointments.from ?? 0 }} to {{ appointments.to ?? 0 }} out of {{ appointments.total ?? 0 }} appointments.</p>
              <pagination :links="appointments.links" right />
            </div>
          </div>
        </div>
      </div>
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
          v-if="
            selectedAppointment.deleted_at == null && selectedAppointment.appointment_status == 'Approved' && selectedAppointment.appointment_status != 'Cancelled' && $page.props.auth.user.is_admin
          "
          @click.prevent="finishedAppointment"
          text
          size="sm"
          color="success"
          >Mark as Finished</Button
        >
        <Button
          v-if="
            selectedAppointment.deleted_at == null && selectedAppointment.appointment_status == 'Pending' && selectedAppointment.appointment_status != 'Cancelled' && $page.props.auth.user.is_admin
          "
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

    <Modal v-if="isPaymentModalShown" @close="togglePaymentModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Payment Transaction</p>
        <p class="text-gray-500">Please fill-in all the fields</p>
      </template>
      <template v-slot:body>
        <div v-if="initializePaymentModal">
          <p class="text-center mt-4 mb-1 font-medium text-gray-500">Loading Secure Payment ...</p>
        </div>
        <div id="card-element" class="mt-2"></div>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="togglePaymentModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="processPayment" text size="sm" color="success">Proceed</Button>
      </template>
    </Modal>

    <Modal v-if="isCreateModalShown" @close="toggleCreateModal">
      <template v-slot:title>
        <p class="font-bold text-xl">{{ isCreating ? 'New Appointment' : 'Update Appointment' }}</p>
        <p>Please fill-in all fields.</p>
      </template>
      <template v-slot:body>
        <form class="flex flex-col">
          <form-input for="appointment" :error="errors.schedule" label="Date and Time" class="mt-3">
            <floating-input type="datetime-local" id="appointment" v-model="form.schedule" />
          </form-input>
          <form-input for="message" :error="errors.message" label="Message" class="mt-2">
            <floating-text-area id="message" v-model="form.message" />
          </form-input>
          <p class="mt-2 text-sm">Select Service</p>
          <VueMultiselect
            v-model="form.selected_services"
            :options="services"
            :multiple="true"
            class="border-2 border-gray-500 rounded-lg"
            selectLabel="Select"
            deselectLabel="Deselect"
            label="service"
            track-by="id"
          >
            <template #option="props">
              <div class="option__desc flex flex-col">
                <span class="option__title">{{ props.option.service }}</span>
                <span class="text-sm">{{ formatCurrency(props.option.price) }}</span>
              </div>
            </template>
          </VueMultiselect>
          <p v-if="errors.selected_services" class="mt-1 text-sm text-red-500">{{ errors.selected_services }}</p>
          <div v-if="$page.props.auth.user.is_admin">
            <p class="mt-2 text-sm">Select Patient</p>
            <VueMultiselect
              v-model="form.user_id"
              @search-change="searchPatient"
              :options="users"
              :multiple="false"
              class="border-2 border-gray-500 rounded-lg"
              selectLabel="Select"
              deselectLabel="Deselect"
              label="full_name"
              track-by="id"
              :disabled="!isCreating"
            >
            </VueMultiselect>
            <p v-if="errors.user_id" class="mt-1 text-sm text-red-500">{{ errors.user_id }}</p>
          </div>
          <p class="mt-2">Subtotal: {{ formatCurrency(form.subtotal) }}</p>
        </form>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleCreateModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="initiateMethod" text size="sm" color="success">Save Appointment</Button>
      </template>
    </Modal>

    <Modal v-if="isRestoreModalShown" @close="toggleRestoreModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Confirm Restore</p>
      </template>
      <template v-slot:body>
        <p class="text-sm text-gray-600">Are you sure you want to restore this scheduled appointment? This might cause conflicts to some of the schedules.</p>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleRestoreModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="restoreAppointment" text size="sm" color="success">Restore</Button>
      </template>
    </Modal>
  </BreezeAuthenticatedLayout>
</template>
