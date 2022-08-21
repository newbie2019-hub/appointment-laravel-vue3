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
  import { formatCurrency, formatNumeric, stringLimit } from '@/Composables/Utilities';

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

  let selectedUser = useForm({ id: null, first_name: null, middle_name: null, last_name: null, gender: null, address: null, birthday: null });

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
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="mx-auto mt-6 sm:px-6 lg:px-8">
        <p class="text-xl font-medium">Payments Summary</p>
        <p>Here is an overview of your transactions.</p>
      </div>
      <div class="flex flex-wrap py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-4 gap-x-4">
        <div class="flex-1 p-4 text-white bg-orange-500 rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="flex items-center text-9xl">{{ formatNumeric(monthlyPaymentsCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p class="font-medium leading-5 tracking-wider text-right uppercase">Monthly <br />Transactions</p>
            </div>
          </div>
          <span class="sr-only">Monthly Transactions</span>
        </div>
        <div class="flex-1 p-4 text-white bg-green-600 rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="flex items-center text-9xl">{{ formatNumeric(paymentsCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="font-medium leading-5 tracking-wider text-right uppercase">Total <br />Payments</p>
            </div>
          </div>
          <span class="sr-only">Total Payments</span>
        </div>
      </div>
    </div>
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="py-8">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="overflow-x-auto shadow-sm sm:rounded-lg">
            <div class="">
              <div class="pb-6 mx-auto bg-white rounded-lg max-w-7xl">
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
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Appt. ID</th>
                        <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Patient</th>
                        <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Schedule</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Payment Type</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Total</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Amount Tendered</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Change</th>
                        <th scope="col" class="px-3 py-3.5 text-left">Receipt</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                      <tr v-for="(payment, i) in payments.data" :key="i" class="hover:bg-gray-200">
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ payment.id }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ payment.appointment.id }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ payment.appointment.patient.full_name }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ payment.appointment.schedule }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ payment.payment_type }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ formatCurrency(payment.total) }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ formatCurrency(payment.amount_tendered) }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ formatCurrency(payment.change) }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                          <Button text is-link color="success" size="sm" v-if="payment.payment_type == 'Stripe'" :href="payment.receipt_url" target="_">View Receipt</Button>
                          <Button is-link v-else :href="route('invoice.generate', payment.appointment.id)" text size="sm" color="success"
                            >View Receipt</Button
                          >
                        </td>
                      </tr>
                      <tr v-if="payments.data.length == 0">
                        <td colspan="8">
                          <div class="py-4 mx-auto font-medium text-center text-gray-600">No data available ..</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-2 text-sm text-gray-500">Showing {{ payments.from ?? 0 }} to {{ payments.to ?? 0 }} out of {{ payments.total ?? 0 }} payment records.</p>
                <pagination :links="payments.links" right />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BreezeAuthenticatedLayout>
</template>
