<script setup>
  import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';
  import Button from '@/Components/Button/Button.vue';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import HealthForm from '@/Components/HealthForm.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import FloatingTextArea from '@/Components/FloatingInput/FloatingTextArea.vue';
  import { ref, computed, watch, toRef, onMounted } from 'vue';
  import Checkbox from '@/Components/Checkbox.vue';
  import { formatCurrency } from '@/Composables/Utilities';
  import { MapIcon, CalendarIcon } from '@heroicons/vue/solid';
  import { useToast } from 'vue-toastification';
  import VueMultiselect from 'vue-multiselect';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  import moment from 'moment';

  const toast = useToast();

  const scrollpx = ref(0);
  const handleScroll = () => scrollpx.value = window.scrollY

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  })
  const authenticatedUser = computed(() => {
    return usePage().props.value.auth.user;
  });

  const errorMessage = computed(() => {
    return usePage().props.value.errors.error ?? 'Something went wrong';
  });

  const isHealthFormShown = ref(false)

  const toggleHealthForm = () => isHealthFormShown.value = !isHealthFormShown.value

  const form = useForm({
    schedule: '',
    selected_services: [],
    subtotal: 0,
    message: '',
    healthFormData: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
    }
  });

  const selectedService = toRef(form, 'selected_services');

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
      form
        // .transform((data) => ({ ...data, schedule: moment(data.schedule).format('YYYY-MM-DD HH:mm') }))
        .post('/appointments', {
          preserveState: true,
          onError: (err) => {
            // console.log(errorMessage.value)
            toast.error(props.errors.error ?? 'Please fill-in all the required fields');
            toggleHealthForm()
          },
          onSuccess: () => {
            toast.success('Appointment created successfully!');
            form.reset();
            toggleHealthForm()
          },
        });
    } else {
      toast.error('Please login to your account first');
      window.location.href = '/login';
    }
  };

</script>

<template>
  <Head title="Welcome" />
  <nav class="flex justify-between container pt-8 sticky top-0 z-20 md:max-w-6xl mx-auto px-6 sm:px-8 md:px-6" :class="scrollpx >= 200 ? 'scrolled' : ''">
    <div>
      <p class="font-bold text-lg">M. Dental Clinic</p>
    </div>
    <ul class="hidden md:flex gap-x-6">
      <li>
        <a href="#home" class="navigation-link font-medium">Home</a>
      </li>
      <li>
        <a href="#services" class="navigation-link font-medium">Services</a>
      </li>
      <li>
        <a href="#appointment" class="navigation-link font-medium">Appointment</a>
      </li>
      <li>
        <a href="#contact" class="navigation-link font-medium">Contact Us</a>
      </li>
    </ul>
    <div>
      <Button v-if="!authenticatedUser" is-link :href="route('login')" size="sm" color="success">Sign In</Button>
      <Button v-else is-link :href="route('dashboard')" size="sm" color="success">Account</Button>
    </div>
  </nav>
  <div class="container mt-12 sm:mt-4 px-6 sm:px-8 md:px-6 mx-auto md:max-w-6xl">
    <div id="home" class="relative flex-wrap md:flex md:flex-nowrap w-full h-[80vh] z-10 items-center top-0">
      <div class="w-full sm:w-full md:w-1/2">
        <div class="">
          <p>Welcome to</p>
          <p class="text-3xl font-medium mt-1">Manabat Dental Clinic</p>
          <p class="text-5xl md:text-6xl font-medium mt-3">Your <span class="text-blue-600">Dental Health</span> is Important to Us!</p>
          <p class="mt-4">We will help you treat your teeth to keep your smile perfect with a satisfying experience in a premium dental clinic.</p>
        </div>
        <button
          class="ease-in-out text-sm duration-150 bg-blue-500  hover:bg-blue-600 focus:ring-2 ring-offset-2 text-white px-6 py-4 rounded-full mt-5"
        >
          Make Appointment
        </button>
      </div>
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <div class="rounded-full w-96 h-96 relative overflow-hidden">
            <img src="/images/hero.jpg" class="object-cover w-full h-full" alt="">
        </div>
      </div>
    </div>
  </div>

  <div id="services" class="relative pt-20 pb-20 mb-20">
    <div class="container mx-auto flex-col md:flex gap-x-4 gap-y-8 md:flex-row px-6 sm:px-8 md:px-6 md:max-w-6xl">

      <div class="w-full">
        <p class="text-blue-500 font-medium">Our Services</p>
        <p class="text-5xl font-medium mt-2">Best Quality Service</p>
        <p class="mt-4">We offer you the best quality service for you and your family at the most affordable price.</p>
      </div>
      <div class="w-full">
          <div class="px-6 py-4">
            <p class="text-2xl font-medium">Offered Services</p>
            <p class="text-gray-600">Here are our offered services that you can avail in our clinic</p>
            <div class="w-full">
                <p class="flex mt-2 gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Teeth Whitening
                </p>
                <p class="flex  mt-2 gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Root Canal
                </p>
                <p class="flex mt-2 gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Modern Anesthetic
                </p>
                <p class="flex mt-2 gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dentures
                </p>
                <p class="flex mt-2 gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Braces
                </p>
                <p class="flex mt-2 gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Cleaning
                </p>
              </div>
          </div>
      </div>
    </div>
  </div>

  <div id="appointment" class="relative pt-15 pb-20 mb-15">
    <div class="container gap-y-4 gap-x-6 mx-auto flex flex-col md:flex-row px-6 sm:px-8 md:px-6 md:max-w-6xl">
      <div class="w-full md:w-1/2 relative">
        <div class="mx-auto sm:mt-20">
          <p class="text-blue-500 font-medium">Online Appointment</p>
          <p class="text-5xl font-medium mt-2">Schedule for an Appointment</p>
          <p class="mt-4 w-3/4">Fill-up the form to check the availability of your desired date for your appointment. If it is available we will then reserve it just for you.</p>
          <p>{{ form.first_name }}</p>
        </div>
        <CalendarIcon class="absolute h-96 top-0 z-[-1] text-gray-50" />
      </div>
      <div class="w-full md:w-1/2">
        <div class="bg-white drop-shadow-md px-10 py-10">
          <p class="text-xl font-medium">Appointment Form</p>
          <p class="text-sm mt-1 mb-2">
            Please create an account if you do not have one. It will be used for the monitoring of your appointment status. Creating an account is free and will always be.
          </p>
          <form class="flex flex-col">
            <Datepicker placeholder="Select Schedule" v-model="form.schedule" :is24="false" weekStart="0" :disabledWeekDays="[0]" minutesIncrement="30" noMinutesOverlay :startTime="{ hours: '10', minutes: '00'}" :min-date="moment().add(2, 'day').format('YYYY-MM-DDT00:00')" :max-date="moment().add(2, 'month').format('YYYY-MM-DDT00:00')"/>
            <form-input for="message" :error="errors.message" label="Message" class="mt-3">
              <floating-text-area id="message" v-model="form.message" />
            </form-input>
            <p class="mt-2 font-medium">Select Service</p>
            <div class="flex flex-wrap">
              <VueMultiselect
                v-model="form.selected_services"
                :options="services"
                :multiple="true"
                selectLabel="Select"
                class="border-2 border-gray-500 rounded-lg"
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
            </div>
            <p class="mt-2">Subtotal: {{ formatCurrency(form.subtotal) }}</p>
            <a v-if="!authenticatedUser" :href="route('login')" class="text-sm mt-6">Already have an <span class="underline decoration-wavy hover:text-blue-500">account?</span></a>
            <div class="justify-end flex mt-6">
              <Button type="button" @click.prevent="toggleHealthForm" size="sm">Make Appointment</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="about" class="relative pt-12 pb-15 mb-20">
    <div class="container gap-x-6 mx-auto flex gap-y-8 flex-col-reverse md:flex-row px-6 items-center sm:px-8 md:px-6 md:max-w-6xl">
      <div class="w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.0602543030805!2d120.67080431437381!3d15.044783170071193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f71be8895741%3A0x28fb6d6849ab6d25!2sManabat%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1658401388093!5m2!1sen!2sph"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          height="320"
          class="z-[-1] w-full"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="w-full md:w-1/2 relative">
        <div class="mx-auto z-20 md:text-right">
          <p class="text-blue-500 font-medium">Our Location</p>
          <p class="text-5xl font-medium mt-2">
            Manabat-Flores <br />
            Dental Clinic
          </p>
          <p class="mt-4">We are currently located at 2000 MacArthur Hwy, San Fernando, 2000 Pampanga. You can visit our clinic for a walk-in reservation</p>
          <p>{{ form.first_name }}</p>
        </div>
        <MapIcon class="absolute -top-20 w-96 -right-8 z-[-1] text-gray-50" />
      </div>
    </div>
  </div>

  <div id="contact" class="relative w-full bg-blue-500 p-12 mt-36">
    <div class="container gap-x-6 mx-auto gap-y-10 flex flex-col md:flex-row px-6 sm:px-8 md:px-6 md:max-w-6xl">
      <div class="w-full md:w-1/2 text-white">
        <p class="font-medium text-xl">GET IN TOUCH</p>

        <p class="mt-3">Address: 2000 MacArthur Hwy, San Fernando, 2000 Pampanga, Philippines</p>
        <p>Contact Number: (+63) 935 123 4567</p>
        <p>Email Address: no-reply@manabat-dental.com</p>
      </div>
      <div class="w-full md:w-1/2 text-white">
        <p class="font-medium text-xl">FOLLOW US ON:</p>
      </div>
      <div class="w-full md:w-1/2 text-white">
        <p class="font-medium text-xl">PAGE LINKS</p>
        <div class="mt-3 hover:translate-x-2 duration-200 ease-in-out">
          <a href="#home" class="">Home</a>
        </div>
        <div class="hover:translate-x-2 duration-200 ease-in-out">
          <a href="#appointments" class="">Appointments</a>
        </div>
        <div class="hover:translate-x-2 duration-200 ease-in-out">
          <a href="#services" class="">Services</a>
        </div>
        <div class="hover:translate-x-2 duration-200 ease-in-out">
          <a href="#contact" class="">Contact</a>
        </div>
      </div>
    </div>
  </div>

  <HealthForm v-if="isHealthFormShown" :data="form.healthFormData" @emit-close="toggleHealthForm" @emit-save-appointment="createAppointment"/>
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
    height: 75px;
    background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1.5rem 5rem;
    z-index: 999;
    top: 4px;
    border-radius: 4px;
  }

</style>
