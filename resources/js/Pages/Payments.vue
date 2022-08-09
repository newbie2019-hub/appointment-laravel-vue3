<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import Button from '@/Components/Button/Button.vue';
  import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import Pagination from '@/Shared/Pagination.vue';
  import { debounce } from 'lodash';
  import { computed, ref, watch, watchEffect } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { useToast } from 'vue-toastification';
  import Modal from '@/Components/Modal/Modal.vue';
  import { formatNumeric, stringLimit } from '@/Composables/Utilities';

  const message = computed(() => usePage().props.value.flash.message);

  const toast = useToast();

  const props = defineProps({
    monthlyPaymentsCount: Number,
    paymentsCount: [Object, Number],
    payments: Object,
    errors: Object,
    filters: Object,
  });

  let search = ref(props.filters.search);

  const isViewModalShown = ref(false);

  let selectedUser = useForm({id: null, first_name: null, middle_name: null, last_name: null, gender: null, address: null, birthday: null});

  const toggleViewModal = () => {
    isViewModalShown.value = !isViewModalShown.value;
  };

  const searchPayment = debounce(() => {
    Inertia.get('/patients', { search: search.value }, { replace: true, preserveState: true });
  }, 300);
</script>

<template>
  <Head title="Payments" />

  <BreezeAuthenticatedLayout>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
        <p class="font-medium text-xl">Payments Summary</p>
        <p>Here is an overview of your transactions.</p>
      </div>
      <div class="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4">
        <div class="bg-orange-500 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(monthlyPaymentsCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Monthly <br />Transactions</p>
            </div>
          </div>
          <span class="sr-only">Monthly Transactions</span>
        </div>
        <div class="bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(paymentsCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Payments</p>
            </div>
          </div>
          <span class="sr-only">Total Payments</span>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="py-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="overflow-x-auto shadow-sm sm:rounded-lg">
            <div class="">
              <div class="max-w-7xl mx-auto bg-white rounded-lg pb-6">
                <p class="text-xl font-medium">Payment Records</p>
                <p class="text-sm text-gray-700">Shown below are the records of your payment transactions.</p>
                <div class="flex justify-end mt-7 mb-7">
                  <form-input label="Search Payment" for="search">
                    <floating-input v-model="search" @keyup="searchPayment" id="search" />
                  </form-input>
                </div>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                      <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Appointment ID</th>
                        <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Patient</th>
                        <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Schedule</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Payment Type</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Total</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Amount Tendered</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Change</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Receipt</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-300 bg-white">
                      <tr v-for="(payment, i) in payments.data" :key="i" class="hover:bg-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.id }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.appointment.id }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.appointment.patient.full_name }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.appointment.schedule }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.payment_type }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.total }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.amount_tendered }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ payment.change }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <a v-if="payment.payment_type == 'Stripe'" :href="payment.receipt_url" target="_">View</a>
                        </td>
                      
                      </tr>
                      <tr v-if="payments.data.length == 0">
                        <td colspan="8">
                          <div class="mx-auto text-center py-4 font-medium text-gray-600">No data available ..</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-sm mt-2 text-gray-500">Showing {{ payments.from ?? 0 }} to {{ payments.to ?? 0 }} out of {{ payments.total ?? 0 }} payment records.</p>
                <pagination :links="payments.links" right />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </BreezeAuthenticatedLayout>
</template>
