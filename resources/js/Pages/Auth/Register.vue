<script setup>
import Button from "@/Components/Button/Button.vue";
import BreezeGuestLayout from "@/Layouts/Guest.vue";
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import FloatingSelect from "@/Components/FloatingInput/FloatingSelect.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import { useToast } from "vue-toastification";
import MedicalForm from "@/Components/MedicalForm.vue";
import moment from "moment";

import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

let   isLoading     = ref(false)
const toast         = useToast();
const medFormShown  = ref(false);

const form = useForm({
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    email: "",
    image_preview: "",
    valid_id: "",
    address: "",
    contact_number: "63",
    password: "",
    birthday: "",
    password_confirmation: "",
    terms: false,
    medFormData: {
        dental_questions: Array(19).fill("No"),
        medical_questions: Array(36).fill("No"),
    },
});

const toggleMedForm = () => {
    medFormShown.value = !medFormShown.value;
};

const setDentalSelected = () => {
    form.medFormData.dental_questions = Array(19).fill("No");
};

const validateFields = () => {
    if (registrationSteps.value.currentStep == 1) {
        const regex = /^(63)/;
        if (form.first_name.trim() == "") {
            return toast.error("First Name is required!");
        }
        if (form.last_name.trim() == "") {
            return toast.error("Last Name is required!");
        }
        if (form.contact_number.trim() == "") {
            return toast.error("Contact Number is required!");
        }
        if (
            form.contact_number.length < 12 ||
            form.contact_number.length > 12
        ) {
            return toast.error(
                "Contact Number min-max length is 12 and a prefix of 63"
            );
        }
        if (!regex.test(form.contact_number)) {
            return toast.error("Contact Number must have a prefix of 63");
        }
        if (form.address.trim() == "") {
            return toast.error("Address is required!");
        }
        if (form.gender == "") {
            return toast.error("Gender is required!");
        }
        if (form.birthday == "") {
            return toast.error("Date of birth is required!");
        }

        let dateDiff = moment(moment().format("YYYY-MM-DD")).diff(
            moment(form.birthday).format("YYYY-MM-DD"),
            "days"
        );

        if (dateDiff < 30) {
            return toast.error("Date of birth is invalid!");
        }
    }

    if (registrationSteps.value.currentStep == 2) {
        if (form.email == "") {
            return toast.error("Email Address is required");
        }
        if (form.password == "") {
            return toast.error("Password is required");
        }
        if (form.password_confirmation == "") {
            return toast.error("Password confirmation is required");
        }
        if (form.password !== form.password_confirmation) {
            return toast.error("Password doesn't match");
        }
        if (form.valid_id == "") {
            return toast.error("Valid ID is required");
        }
    }
    registrationSteps.value.currentStep =
        registrationSteps.value.currentStep + 1;
};

const initiateMethod = async () => {
    let medUnanswered = false;
    let dentalUnanswered = false;

    form.medFormData.medical_questions.map((q) => {
        if (q == "" || q == undefined) {
            if (!medUnanswered) {
                medUnanswered = true;
            }
        }
    });

    form.medFormData.dental_questions.map((q) => {
        if (q == "" || q == undefined) {
            if (!dentalUnanswered) {
                dentalUnanswered = true;
            }
        }
    });

    if (medUnanswered || dentalUnanswered)
        return toast.error("All fiends are required for your records");

    toggleMedForm();
    submit();
};

const imageSelected = (event) => {
    form.valid_id = event.target.files[0];
    form.image_preview = event.target.files[0];

    if (!form.valid_id) {
        return false;
    }

    if (!form.valid_id.type.match("image.*")) {
        return false;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        form.image_preview = e.target.result;
    };

    reader.readAsDataURL(form.image_preview);
};

const submit = () => {
    isLoading.value = true;
    form.post(route("register"), {
        onFinish: () => {
            form.reset("password", "password_confirmation");
        },
        onSuccess: () => {
            toast.success(
                "Account created! \nPlease check your email as your account \nstatus is still on pending"
            );
        },
        onError: () => {
            registrationSteps.value.currentStep = 1
            toast.error("Some fields are incorrect or missing!")
        }
    });
    isLoading.value = false;
};

const props = defineProps({
    errors: Object,
});

let registrationSteps = ref({ currentStep: 1, totalSteps: 3 });
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Register" />
        <div class="flex w-full">
            <div
                class="flex flex-col flex-1 h-screen items-center justify-center bg-white w-full text-left md:max-w-xl"
            >
                <div
                    class="w-full md:max-w-sm shadow-lg bg-white max-w-sm px-10 py-8 rounded-lg md:p-0 md:shadow-none"
                >
                    <p class="text-2xl font-medium mt-2">Welcome, User</p>
                    <p class="text-sm mb-4">
                        We need some of your information to proceed.
                    </p>

                    <div class="w-full relative flex gap-x-4 flex-wrap">
                        <form @submit.prevent="submit" class="pb-3">
                            <div v-if="registrationSteps.currentStep == 1">
                                <div class="flex flex-wrap">
                                    <p class="font-medium">
                                        Personal Information
                                    </p>
                                    <div class="w-full">
                                        <form-input
                                            for="firstname"
                                            :error="errors.first_name"
                                            label="First Name"
                                            class="mt-3"
                                        >
                                            <floating-input
                                                type="text"
                                                id="firstname"
                                                v-model="form.first_name"
                                                autofocus
                                                autocomplete="name"
                                            />
                                        </form-input>
                                    </div>
                                    <div class="flex gap-x-2">
                                        <div class="w-1/2">
                                            <form-input
                                                for="middlename"
                                                :error="errors.middle_name"
                                                label="Middle Name (Optional)"
                                                class="mt-3"
                                            >
                                                <floating-input
                                                    type="text"
                                                    id="middlename"
                                                    v-model="form.middle_name"
                                                    autofocus
                                                    autocomplete="name"
                                                />
                                            </form-input>
                                        </div>
                                        <div class="w-1/2">
                                            <form-input
                                                for="lastname"
                                                :error="errors.last_name"
                                                label="Last Name"
                                                class="mt-3"
                                            >
                                                <floating-input
                                                    type="text"
                                                    id="lastname"
                                                    v-model="form.last_name"
                                                    autofocus
                                                    autocomplete="name"
                                                />
                                            </form-input>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <form-input
                                            for="contact_number"
                                            :error="errors.contact_number"
                                            label="Contact Number"
                                            class="mt-3"
                                        >
                                            <floating-input
                                                type="text"
                                                id="contact_number"
                                                v-model="form.contact_number"
                                                autofocus
                                            />
                                        </form-input>
                                    </div>
                                    <div class="w-full">
                                        <form-input
                                            for="address"
                                            :error="errors.address"
                                            label="Address"
                                            class="mt-3"
                                        >
                                            <floating-input
                                                type="text"
                                                id="address"
                                                v-model="form.address"
                                                autofocus
                                                autocomplete="address"
                                            />
                                        </form-input>
                                    </div>
                                    <div class="flex w-full gap-x-2">
                                        <div class="w-1/2">
                                            <form-input
                                                for="gender"
                                                :error="errors.gender"
                                                label="Gender"
                                                class="mt-3"
                                            >
                                                <floating-select
                                                    v-model="form.gender"
                                                >
                                                    <option
                                                        value="Male"
                                                        class="font-medium"
                                                    >
                                                        Male
                                                    </option>
                                                    <option
                                                        value="Female"
                                                        class="font-medium"
                                                    >
                                                        Female
                                                    </option>
                                                </floating-select>
                                            </form-input>
                                        </div>
                                        <div class="w-1/2">
                                            <form-input
                                                for="gender"
                                                :error="errors.gender"
                                                label="Date of Birth"
                                                class="mt-3"
                                            >
                                                <floating-input
                                                    type="date"
                                                    v-model="form.birthday"
                                                />
                                            </form-input>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="registrationSteps.currentStep == 2">
                                <div class="flex flex-wrap">
                                    <p class="font-medium">
                                        Account Information
                                    </p>
                                    <div class="w-full">
                                        <form-input
                                            for="email"
                                            :error="errors.email"
                                            label="Email Address"
                                            class="mt-3"
                                        >
                                            <floating-input
                                                type="email"
                                                id="email"
                                                v-model="form.email"
                                                autofocus
                                                autocomplete="email"
                                            />
                                        </form-input>
                                    </div>
                                    <div class="w-full">
                                        <form-input
                                            for="password"
                                            :error="errors.password"
                                            label="Password"
                                            class="mt-3"
                                        >
                                            <floating-input
                                                type="password"
                                                id="password"
                                                v-model="form.password"
                                                autocomplete="new-password"
                                            />
                                        </form-input>
                                    </div>
                                    <div class="w-full">
                                        <form-input
                                            for="password_confirmation"
                                            :error="
                                                errors.password_confirmation
                                            "
                                            label="Confirm Password"
                                            class="mt-3"
                                        >
                                            <floating-input
                                                type="password"
                                                id="password_confirmation"
                                                v-model="
                                                    form.password_confirmation
                                                "
                                                autocomplete="new-password"
                                            />
                                        </form-input>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm mt-3">Valid ID</p>
                                        <input
                                            type="file"
                                            id="valid_id"
                                            @change="imageSelected"
                                        />
                                        <p class="text-red-500 text-sm">
                                            {{ errors.valid_id }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div v-if="registrationSteps.currentStep == 3">
                                <p class="font-medium">Confirm Registration</p>
                                <p>
                                    Please confirm that all your inputs are
                                    correct. We do not share any of your
                                    informations to the public.
                                </p>
                            </div>

                            <div id="pagination" class="w-full gap-x-4 mt-2">
                                <p class="text-sm mt-4 mb-2">
                                    Already have an account?
                                    <Link
                                        :href="route('login')"
                                        class="text-gray-600 hover:text-blue-500 relative"
                                        >Sign-in
                                    </Link>
                                </p>
                                <p class="mt-3">
                                    Step {{ registrationSteps.currentStep }} of
                                    {{ registrationSteps.totalSteps }}
                                </p>
                            </div>
                            <div class="flex w-full justify-end">
                                <button
                                    type="submit"
                                    :disabled="
                                        registrationSteps.currentStep == 1 ||
                                        isLoading
                                    "
                                    @click.prevent="
                                        registrationSteps.currentStep =
                                            registrationSteps.currentStep - 1
                                    "
                                    class="text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"
                                >
                                    Previous
                                </button>
                                <button
                                    v-if="registrationSteps.currentStep != 3"
                                    type="submit"
                                    :disabled="
                                        registrationSteps.currentStep == 3
                                    "
                                    @click.prevent="validateFields"
                                    class="text-violet-600 hover:text-violet-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"
                                >
                                    Next
                                </button>
                                <button
                                    v-if="registrationSteps.currentStep == 3"
                                    @click.prevent="medFormShown = true"
                                    class="text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm"
                                    :disabled="isLoading"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MedicalForm
                v-if="medFormShown"
                :data="form.medFormData"
                @emit-close="toggleMedForm"
                @register-account="initiateMethod"
                @set-dental-selected="setDentalSelected"
            />
            <div class="hidden md:block flex-1 w-96">
                <img
                    src="images/alwayssmile.jpg"
                    class="h-screen object-fit w-full blur-[1px]"
                    alt=""
                />
            </div>
        </div>
    </BreezeGuestLayout>
</template>
