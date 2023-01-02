<script setup>
import { Head, useForm, usePage } from "@inertiajs/inertia-vue3";
import Button from "@/Components/Button/Button.vue";
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import AccordionItem from "@/Components/Accordion/AccordionItem.vue";
import Accordion from "@/Components/Accordion/Accordion.vue";
import HealthForm from "@/Components/HealthForm.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import { ref, computed, watch, toRef, onMounted } from "vue";
import { formatCurrency } from "@/Composables/Utilities";
import { useToast } from "vue-toastification";
import VueMultiselect from "vue-multiselect";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import moment from "moment";

const toast = useToast();

const scrollpx = ref(0);
const handleScroll = () => (scrollpx.value = window.scrollY);

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
const authenticatedUser = computed(() => {
    return usePage().props.value.auth.user;
});

const errorMessage = computed(() => {
    return usePage().props.value.errors.error ?? "Something went wrong";
});

const isHealthFormShown = ref(false);

const validateFields = () => {
    if (form.schedule == null || form.schedule == "") {
        return toast.error("Please select a schedule!");
    }

    if (
        form.selected_services == null ||
        form.selected_services == "" ||
        form.selected_services.length == 0
    ) {
        return toast.error("Please select atleast 1 service");
    }

    if (form.message == null || form.message == "") {
        return toast.error("Message is empty!");
    }

    toggleHealthForm();
};
const toggleHealthForm = () =>
    (isHealthFormShown.value = !isHealthFormShown.value);

const form = useForm({
    schedule: "",
    selected_services: [],
    subtotal: 0,
    message: "",
    healthFormData: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
    },
});

const selectedService = toRef(form, "selected_services");

const setSubtotalValue = () => {
    form.subtotal = 0;
    form.selected_services.map((service) => {
        form.subtotal += parseFloat(service.price);
    });
};

watch(selectedService, setSubtotalValue);

const props = defineProps({
    errors: Object,
    services: Object,
});

const isOptionSelected = (id) => {
    let isSelected = false;
    form.selected_services.map((service) => {
        if (service.id == id) {
            isSelected = true;
        }
    });

    return isSelected;
};

const createAppointment = () => {
    if (authenticatedUser.value) {
        form.transform((data) => ({
            ...data,
            fixed_schedule: moment(data.schedule).format(),
        })).post("/appointments", {
            preserveState: true,
            onError: (err) => {
                // console.log(errorMessage.value)
                toast.error(
                    props.errors.error ??
                        "Please fill-in all the required fields"
                );
                toggleHealthForm();
            },
            onSuccess: () => {
                toast.success("Appointment created successfully!");
                form.reset();
                toggleHealthForm();
            },
        });
    } else {
        toast.error("Please login to your account first");
        window.location.href = "/login";
    }
};
</script>

<template>
    <Head title="Welcome" />
    <div
        class="fixed top-0 w-full z-20"
        :class="scrollpx >= 200 ? 'scrolled' : ''"
    >
        <nav
            class="flex justify-between items-center container py-6 md:max-w-7xl mx-auto px-6 sm:px-8 md:px-6"
        >
            <div>
                <p class="font-medium text-lg">M. Dental Clinic</p>
            </div>
            <div class="flex items-center">
                <ul class="hidden md:flex gap-x-6">
                    <li>
                        <a href="#home" class="navigation-link font-regular"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a href="#services" class="navigation-link font-regular"
                            >Services</a
                        >
                    </li>
                    <li>
                        <a
                            href="#appointment"
                            class="navigation-link font-regular"
                            >Appointment</a
                        >
                    </li>
                    <li>
                        <a href="#contact" class="navigation-link font-regular"
                            >Contact</a
                        >
                    </li>
                </ul>
                <div class="ml-8">
                    <Button
                        v-if="!authenticatedUser"
                        is-link
                        :href="route('login')"
                        color="accent-1"
                        >Login Account</Button
                    >
                    <Button
                        v-else
                        is-link
                        :href="route('dashboard')"
                        size="sm"
                        color="success"
                        >Account</Button
                    >
                </div>
            </div>
        </nav>
    </div>
    <section id="home" class="mx-auto hero-bg relative top-0">
        <div class="section-container max-h-container">
            <div class="md:-mt-12">
                <p class="text-base text-gray-500">
                    Manabat-Flores Dental Clinic
                </p>
                <div class="md:w-3/4">
                    <p class="text-6xl md:text-7xl">
                        <span class="text-violet-600 font-medium"
                            >Dental Health</span
                        >
                        is important
                    </p>
                </div>
                <div class="md:w-3/5 text-gray-500">
                    <p class="mt-4 text-base">
                        We will help you treat your teeth to keep your smile
                        perfect with a satisfying experience in a premium dental
                        clinic.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <div class="bottom-32 mx-auto relative section-container">
        <div class="px-6 py-8 bg-white drop-shadow-md rounded-md w-full">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-xl font-medium">Book an Appointment</p>
                    <p class="md:w-2/3 text-gray-500 mt-2">
                        Before filling-up the form please<span
                            class="font-medium text-black"
                        >
                            make sure your account is logged-in</span
                        >
                        before booking an appointment. You will receive an email
                        if your appointment is successful.
                    </p>
                </div>
                <div class="hidden md:flex">
                    <Button
                        type="button"
                        @click.prevent="validateFields"
                        color="accent-1"
                        >Book Now</Button
                    >
                </div>
            </div>
            <div class="my-5">
                <form class="flex gap-2 flex-wrap md:flex-nowrap">
                    <Datepicker
                        placeholder="Select Schedule"
                        class="w-full"
                        v-model="form.schedule"
                        :is24="false"
                        weekStart="0"
                        :disabledWeekDays="[0]"
                        minutesIncrement="30"
                        noMinutesOverlay
                        :startTime="{ hours: '10', minutes: '00' }"
                        :min-date="
                            moment().add(2, 'day').format('YYYY-MM-DDT00:00')
                        "
                        :max-date="
                            moment().add(2, 'month').format('YYYY-MM-DDT00:00')
                        "
                    />
                    <VueMultiselect
                        v-model="form.selected_services"
                        :options="services"
                        :multiple="true"
                        selectLabel="Select"
                        class="rounded-lg z-50"
                        deselectLabel="Deselect"
                        label="service"
                        track-by="id"
                    >
                        <template #option="props">
                            <div class="option__desc flex flex-col">
                                <span class="option__title">{{
                                    props.option.service
                                }}</span>
                                <span class="text-sm">{{
                                    formatCurrency(props.option.price)
                                }}</span>
                            </div>
                        </template>
                    </VueMultiselect>
                    <p
                        v-if="errors.selected_services"
                        class="mt-1 text-sm text-red-500"
                    >
                        {{ errors.selected_services }}
                    </p>
                    <form-input
                        for="message"
                        :error="errors.message"
                        label="Message"
                        class="w-full"
                    >
                        <floating-input id="message" v-model="form.message" />
                    </form-input>
                    <div class="block w-full md:hidden">
                        <Button
                            type="button"
                            @click.prevent="toggleHealthForm"
                            color="accent-1"
                            class="w-full"
                            >Book Now</Button
                        >
                    </div>
                </form>
            </div>
            <p class="text-gray-500">
                Please make sure to read our
                <a href="#faqs" class="text-blue-600 cursor-pointer"
                    >policies</a
                >
                before making an appointment.
            </p>
        </div>
    </div>

    <section class="mx-auto relative top-0">
        <div class="section-container text-center items-center justify-center">
            <div class="">
                <div>
                    <p class="text-2xl md:text-3xl font-medium">
                        What We Provide
                    </p>
                    <p class="md:w-1/3 mx-auto mt-2 text-gray-500">
                        We hear our customers that is why we continuously
                        improve our and provide more services for everyone.
                    </p>
                </div>
                <div
                    class="flex flex-wrap md:flex-nowrap justify-center items-center mt-8 gap-x-4 gap-y-4"
                >
                    <div class="md:w-1/3 py-4">
                        <div
                            class="rounded-full bg-violet-600 h-16 w-16 mx-auto shadow-md shadow-violet-200 flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-8 h-8 text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                />
                            </svg>
                        </div>
                        <p class="uppercase text-xl font-medium mt-6">
                            LATEST EQUIPMENT
                        </p>
                        <p class="text-gray-500 mt-2">
                            We ensure to have the latest equipment to provide
                            you a better service that you deserve.
                        </p>
                    </div>
                    <div class="md:w-1/3">
                        <div
                            class="rounded-full bg-violet-600 h-16 w-16 mx-auto shadow-md shadow-violet-200 flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-8 h-8 text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                />
                            </svg>
                        </div>
                        <p class="uppercase text-xl font-medium mt-6">
                            ONLINE APPOINTMENT
                        </p>
                        <p class="text-gray-500 mt-2">
                            As we value our customers, due to pandemic you can
                            now book for your appointment online.
                        </p>
                    </div>
                    <div class="md:w-1/3">
                        <div
                            class="rounded-full bg-violet-600 h-16 w-16 mx-auto shadow-md shadow-violet-200 flex justify-center items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-8 h-8 text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                        </div>
                        <p class="uppercase text-xl font-medium mt-6">
                            QUALITY SERVICE
                        </p>
                        <p class="text-gray-500 mt-2">
                            We offer you the best quality service for you and
                            your family at the most affordable price.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto relative my-12 mt-32">
        <div class="section-container items-center justify-center">
            <div class="">
                <div class="text-center">
                    <p class="text-2xl md:text-3xl font-medium">
                        Services We Offer
                    </p>
                    <p class="md:w-1/2 mx-auto mt-2 text-gray-500">
                        We will help you with dental health care with a wide
                        selection of categories that you can choose according to
                        your needs
                    </p>
                </div>
                <div class="inline-flex gap-2 flex-wrap mt-8 justify-center">
                    <div
                        class="w-[200px] md:w-[380px] border-2 border-gray-100 cursor-pointer rounded-md p-6 hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out"
                    >
                        <p class="text-xl font-medium">Dentures</p>
                        <p class="mt-2 text-gray-500">
                            Most common way to replace missing teeth and help
                            restore your smile.
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] border-2 border-gray-100 cursor-pointer rounded-md p-6 hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out"
                    >
                        <p class="text-xl font-medium">Extraction</p>
                        <p class="mt-2 text-gray-500">
                            Is the process of removing the teeth from its socket
                            in the bone.
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] border-2 border-gray-100 cursor-pointer rounded-md p-6 hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out"
                    >
                        <p class="text-xl font-medium">Cleaning</p>
                        <p class="mt-2 text-gray-500">
                            Preventative procedure to maintain or achieve
                            optimum oral health.
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] border-2 border-gray-100 cursor-pointer rounded-md p-6 hover:shadow-md hover:shadow-violet-100 duration-200 ease-in-out"
                    >
                        <p class="text-xl font-medium">Teeth Whitening</p>
                        <p class="mt-2 text-gray-500">
                            Tooth whitening is the process that lightens the
                            color of a tooth.
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] border-2 border-gray-100 cursor-pointer rounded-md p-6 hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out"
                    >
                        <p class="text-xl font-medium">Braces</p>
                        <p class="mt-2 text-gray-500">
                            Helps correct problems with your teeth, like
                            crowding, crooked teeth, or teeth that are out of
                            alignment
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] border-2 border-gray-100 cursor-pointer rounded-md p-6 hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out"
                    >
                        <p class="text-xl font-medium">FPO/Jacket</p>
                        <p class="mt-2 text-gray-500">
                            Caps off a severely damaged tooth protecting it from
                            further damage and replacing it the same time.
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out border-2 border-gray-100 cursor-pointer rounded-md p-6"
                    >
                        <p class="text-xl font-medium">Cleaning</p>
                        <p class="mt-2 text-gray-500">
                            Preventative procedure to maintain or achieve
                            optimum oral health.
                        </p>
                    </div>
                    <div
                        class="w-[200px] md:w-[380px] hover:shadow-violet-100 hover:shadow-md duration-200 ease-in-out border-2 border-gray-100 cursor-pointer rounded-md p-6"
                    >
                        <p class="text-xl font-medium">Surgery</p>
                        <p class="mt-2 text-gray-500">
                            Any surgical procedure that is necessary to be
                            performed on your teeth, gums, jaws or other oral
                            structures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-24 relative h-[540px]">
        <div
            class="hidden md:block absolute top-6 right-6 max-w-lg bg-white p-6 rounded-sm"
        >
            <p class="font-medium text-lg">Manabat-Flores Dental Clinic</p>
            <p class="text-gray-600 mt-2">
                We are currently located at
                <span class="font-medium text-black">
                    Purok 2 Sergio bayan, Calumpit, Bulacan.
                </span>
                You can visit our clinic for a walk-in reservation
            </p>
            <p class="font-medium text-black mt-4">
                Contact Number: (+63) 927 531 6736
            </p>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7711.566090016289!2d120.78300045077799!3d14.89340512561745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339656b1e4f46649%3A0x7f17b38b490ed2cd!2sSergio%20Bayan%2C%20Calumpit%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1672069422398!5m2!1sen!2sph"
            class="w-full"
            height="540"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </section>

    <section id="faqs" class="mx-auto relative my-12 mt-24">
        <div class="section-container items-center justify-center">
            <div class="flex md:flex-nowrap flex-wrap w-full gap-x-6 gap-y-2">
                <div class="md:w-1/2 mt-4">
                    <p class="font-medium text-xl md:text-2xl">
                        Frequently Asked Questions
                    </p>
                    <p class="text-gray-600 mt-2">
                        Everything you need to know about our appointments and
                        policies can be viewed here.
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <Accordion>
                        <AccordionItem>
                            <template #accordion-trigger>
                                <p class="text-lg py-4">
                                    What are your policies in making
                                    appointments?
                                </p>
                            </template>
                            <template #accordion-content>
                                <ul class="ml-4 mt-4">
                                    <li>• No walk-in due to pandemic</li>
                                    <li>
                                        • Make your appointment a day before the
                                        schedule. Please follow the clinic hours
                                    </li>
                                    <li>
                                        • No symptoms of COVID like colds, cough
                                        or fever
                                    </li>
                                    <li>
                                        • No history of close contact to
                                        symptomatic, 7 days prior to the
                                        appointment
                                    </li>
                                </ul>
                            </template>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <template #accordion-trigger>
                                <p class="text-lg py-4">
                                    What are the records that are being kept for
                                    each patients?
                                </p>
                            </template>
                            <template #accordion-content>
                                <ul class="ml-4 mt-4">
                                    <li>
                                        • Their personal records (health
                                        declaration forms, medical records,
                                        etc.,) and dental records
                                        (transactions/done procedures, balance)
                                    </li>
                                </ul>
                            </template>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <template #accordion-trigger>
                                <p class="text-lg py-4">
                                    What is your opening time?
                                </p>
                            </template>
                            <template #accordion-content>
                                <ul class="ml-4 mt-4">
                                    <li>
                                        • We are open from Monday-Saturday 10 -
                                        5 PM
                                    </li>
                                </ul>
                            </template>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <template #accordion-trigger>
                                <p class="text-lg py-4">
                                    What are the forms and requirements for each
                                    patients?
                                </p>
                            </template>
                            <template #accordion-content>
                                <ul class="ml-4 mt-4">
                                    <li>
                                        • Health declaration form and
                                        appointment being set prior to the
                                        scheduled date
                                    </li>
                                </ul>
                            </template>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-violet-100 w-full h-full relative py-10 mt-32">
        <div class="section-container items-center flex-wrap">
            <div class="flex flex-wrap items-center justify-between w-full">
                <div class="mb-4">
                    <p class="text-2xl font-medium">
                        <span class="text-violet-500">Nothing beats</span> a
                        great smile.
                    </p>
                    <p class="text-gray-700">
                        Never miss an opportunity to smile. Book an appointment
                        now!
                    </p>
                </div>
                <Button is-link href="#home" color="accent-1">Book Now!</Button>
            </div>
            <div
                class="w-full mt-12 flex md:flex-nowrap flex-wrap justify-between"
            >
                <div class="w-full md:w-1/3">
                    <p class="text-xl font-medium">GET IN TOUCH</p>
                    <div class="mt-2.5">
                        <p class="font-medium text-gray-600">
                            Purok 2 Sergio bayan, Calumpit, Bulacan, Philippines
                        </p>
                        <p class="font-medium text-gray-600">
                            (+63) 927 531 6736
                        </p>
                        <p class="font-medium text-gray-600">
                            manabatfloresdentalclinic@gmail.com
                        </p>
                    </div>
                </div>
                <div class="w-full md:w-max mt-4">
                    <p class="text-xl font-medium">LINKS</p>
                    <div class="mt-2.5">
                        <a
                            href="#home"
                            class="hover:text-violet-600 block text-gray-600 font-medium"
                            >Home</a
                        >
                        <a
                            href="#services"
                            class="hover:text-violet-600 block text-gray-600 font-medium"
                            >Services</a
                        >
                        <a
                            href="#appointment"
                            class="hover:text-violet-600 block text-gray-600 font-medium"
                            >Appointment</a
                        >
                        <a
                            href="#location"
                            class="hover:text-violet-600 block text-gray-600 font-medium"
                            >Location</a
                        >
                    </div>
                </div>
                <div class="w-full md:w-1/3 mt-4">
                    <p class="text-xl font-medium">WORKING DAYS</p>
                    <div class="mt-2.5">
                        <p class="font-medium text-gray-600">
                            Monday - Saturday
                        </p>
                        <p class="font-medium text-gray-600">
                            10:00 AM - 5:00 PM
                        </p>
                    </div>
                </div>
            </div>
            <hr class="my-6 w-full mt-10 bg-violet-200 h-[2px]" />
            <p class="text-left">2022 - Manabat-Flores Dental Clinic</p>
        </div>
    </section>

    <HealthForm
        :max-width="600"
        scrollable
        v-if="isHealthFormShown"
        :data="form.healthFormData"
        @emit-close="toggleHealthForm"
        @emit-save-appointment="createAppointment"
    />
</template>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
    background: #ffffff;
    border: 1px solid gray;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
    padding: 0.4rem;
    border-radius: 8px;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
    fill: #313131;
}

.scrolled {
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.428);
    z-index: 999;
}

.hero-bg {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
            to right,
            #d9d2ff,
            rgba(245, 243, 255, 0.25)
        ),
        url("images/bg-hero.png");
    background-position: right;
    background-repeat: no-repeat;
}

* {
    margin: 0;
    padding: 0;
}
</style>
