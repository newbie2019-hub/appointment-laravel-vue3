<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import Button from "@/Components/Button/Button.vue";
import { Head, useForm, usePage } from "@inertiajs/inertia-vue3";
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import FloatingSelect from "@/Components/FloatingInput/FloatingSelect.vue";
import FloatingTextArea from "@/Components/FloatingInput/FloatingTextArea.vue";
import Chip from "@/Components/Chip.vue";
import Pagination from "@/Shared/Pagination.vue";
import Modal from "@/Components/Modal/Modal.vue";
import { debounce } from "lodash";
import { ref, watch, computed, toRef, onMounted } from "vue";
import {
    formatCurrency,
    formatNumeric,
    stringLimit,
    chipColor,
} from "@/Composables/Utilities";
import { useToast } from "vue-toastification";
import PolarCharts from "@/Shared/PolarCharts.vue";
import AreaChart from "@/Shared/AreaChart.vue";
const props = defineProps({
    errors: Object,
    filters: Object,
    appointmentsIncome: Number,
    todaysAppointment: Number,
    payments: Object,
    monthlyIncome: [String, Number],
    annualIncome: [String, Number],
    chartServices: Object,
    appointments: Object,
    appointmentsIncome: [Object, Array],
});

const labels = props.chartServices.map((service) => service.service);
const series = props.chartServices.map(
    (service) => service.monthly_appointments_count
);

const areaChartLabel = props.appointmentsIncome.map(
    (areaChartIncome) => areaChartIncome.date
);
const areaChartSeries = [
    {
        name: "Income",
        data: props.appointmentsIncome.map((areaChartIncome) =>
            String(areaChartIncome.subtotal)
        ),
    },
];
</script>
<template>
    <Head title="Patient Appointments" />

    <BreezeAuthenticatedLayout>
        <div class="px-6 max-w-8xl lg:px-8">
            <div class="mx-auto mt-6 sm:px-6 lg:px-8">
                <p class="text-xl font-medium">Sales Summary</p>
                <p>Here is an overview of your sales.</p>
            </div>
        </div>
        <div class="px-6 max-w-8xl lg:px-8">
            <div
                class="flex flex-wrap py-8 max-w-8xl sm:px-6 lg:px-8 gap-x-4 md:flex-row gap-y-4"
            >
                <div class="flex-1 p-4 text-white bg-orange-500 rounded-md">
                    <div class="flex justify-between">
                        <div class="flex items-center text-4xl">
                            {{ formatNumeric(todaysAppointment) }}
                        </div>
                        <div class="flex flex-col items-end gap-y-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-10 h-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                            <p
                                class="font-medium leading-5 tracking-wider text-right uppercase"
                            >
                                Todays <br />Appointments
                            </p>
                        </div>
                    </div>
                    <span class="sr-only">Todays Appointments</span>
                </div>

                <div class="flex-1 p-4 text-white bg-blue-600 rounded-md">
                    <div class="flex justify-between">
                        <div class="flex items-center text-4xl">
                            {{ formatCurrency(monthlyIncome) }}
                        </div>
                        <div class="flex flex-col items-end gap-y-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-9 w-9"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p
                                class="font-medium leading-5 tracking-wider text-right uppercase"
                            >
                                Monthly <br />Income
                            </p>
                        </div>
                    </div>
                    <span class="sr-only">Monthly Income</span>
                </div>
                <div class="flex-1 p-4 text-white bg-green-600 rounded-md">
                    <div class="flex justify-between">
                        <div class="flex items-center text-4xl">
                            {{ formatCurrency(annualIncome) }}
                        </div>
                        <div class="flex flex-col items-end gap-y-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-9 w-9"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p
                                class="font-medium leading-5 tracking-wider text-right uppercase"
                            >
                                Annual <br />Income
                            </p>
                        </div>
                    </div>
                    <span class="sr-only">Annual Income</span>
                </div>
            </div>
        </div>

        <div class="">
            <div class="mx-auto max-w-8xl sm:px-6 lg:px-8">
                <div
                    class="px-6 max-w-8xl lg:px-8"
                    v-if="$page.props.auth.user.is_admin"
                >
                    <div class="md:flex gap-x-2">
                        <div class="flex-1 w-full md:w-1/2">
                            <div class="mt-8 mb-8">
                                <p class="text-xl font-medium">
                                    Services Summary
                                </p>
                                <p class="text-sm">
                                    Monthly overview of services booked by
                                    patients.
                                </p>
                            </div>
                            <polar-charts :labels="labels" :series="series" />
                        </div>
                        <div class="flex-1 w-full md:w-1/2">
                            <div class="mt-8 mb-8">
                                <p class="text-xl font-medium">
                                    Completed Appointments
                                </p>
                                <p class="text-sm">
                                    Here is an overview of your completed
                                    appointments for this week.
                                </p>
                            </div>
                            <area-chart
                                :labels="areaChartLabel"
                                :series="areaChartSeries"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 mx-auto max-w-8xl lg:px-8">
            <div class="py-8">
                <div class="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div class="overflow-x-auto sm:rounded-lg">
                        <div class="">
                            <div
                                class="pb-6 mx-auto bg-white rounded-lg max-w-8xl"
                            >
                                <p class="text-xl font-medium">
                                    Payment Records
                                </p>
                                <p class="text-sm text-gray-700">
                                    Shown below are the records of your payment
                                    transactions.
                                </p>
                                <div class="flex justify-end mt-7 mb-7">
                                    <form-input
                                        label="Search Payment"
                                        for="search"
                                        class="w-52 md:w-64"
                                    >
                                        <floating-input
                                            v-model="search"
                                            @keyup="searchPayment"
                                            id="search"
                                        />
                                    </form-input>
                                </div>
                                <div class="overflow-x-auto">
                                    <table
                                        class="min-w-full divide-y divide-gray-300"
                                    >
                                        <thead class="bg-gray-50">
                                            <tr
                                                class="[&>*]:uppercase font-medium text-xs text-gray-500"
                                            >
                                                <th
                                                    scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left sm:pl-6"
                                                >
                                                    ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"
                                                >
                                                    Appt. ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left whitespace-nowrap"
                                                >
                                                    Patient
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left whitespace-nowrap"
                                                >
                                                    Schedule
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Payment Type
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Total
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Amount Tendered
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Change
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Receipt
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="bg-white divide-y divide-gray-300"
                                        >
                                            <tr
                                                v-for="(
                                                    payment, i
                                                ) in payments.data"
                                                :key="i"
                                                class="hover:bg-gray-100"
                                            >
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{ payment.id }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{ payment.appointment.id }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{
                                                        payment.appointment
                                                            .patient.full_name
                                                    }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{
                                                        payment.appointment
                                                            .schedule
                                                    }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{ payment.payment_type }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{
                                                        formatCurrency(
                                                            payment.total
                                                        )
                                                    }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{
                                                        formatCurrency(
                                                            payment.amount_tendered
                                                        )
                                                    }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    {{
                                                        formatCurrency(
                                                            payment.change
                                                        )
                                                    }}
                                                </td>
                                                <td
                                                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                                                >
                                                    <Button
                                                        text
                                                        is-link
                                                        color="success"
                                                        size="sm"
                                                        v-if="
                                                            payment.payment_type ==
                                                            'Stripe'
                                                        "
                                                        :href="
                                                            payment.receipt_url
                                                        "
                                                        target="_"
                                                        >View Receipt</Button
                                                    >
                                                    <Button
                                                        is-link
                                                        v-else
                                                        :href="
                                                            route(
                                                                'invoice.generate',
                                                                payment
                                                                    .appointment
                                                                    .id
                                                            )
                                                        "
                                                        text
                                                        size="sm"
                                                        color="success"
                                                        >View Receipt</Button
                                                    >
                                                </td>
                                            </tr>
                                            <tr
                                                v-if="payments.data.length == 0"
                                            >
                                                <td colspan="8">
                                                    <div
                                                        class="py-4 mx-auto font-medium text-center text-gray-600"
                                                    >
                                                        No data available ..
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p class="mt-2 text-sm text-gray-500">
                                    Showing {{ payments.from ?? 0 }} to
                                    {{ payments.to ?? 0 }} out of
                                    {{ payments.total ?? 0 }} payment records.
                                </p>
                                <pagination :links="payments.links" right />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
