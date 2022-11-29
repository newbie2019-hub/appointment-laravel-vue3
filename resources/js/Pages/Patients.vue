<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import Button from "@/Components/Button/Button.vue";
import { Head, useForm, usePage } from "@inertiajs/inertia-vue3";
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import FloatingSelect from "@/Components/FloatingInput/FloatingSelect.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import Pagination from "@/Shared/Pagination.vue";
import { debounce } from "lodash";
import { computed, ref, watch, watchEffect } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useToast } from "vue-toastification";
import Modal from "@/Components/Modal/Modal.vue";
import { formatNumeric, stringLimit } from "@/Composables/Utilities";
import { Link } from "@inertiajs/inertia-vue3";

const message = computed(() => usePage().props.value.flash.message);

const toast = useToast();

const props = defineProps({
    patients: Object,
    errors: Object,
    filters: Object,
    trashedPatientsCount: Number,
});

let search = ref(props.filters.search);
let trashed = ref(props.filters.trashed);

const approveModalShown = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);
const isRestoreModalShown = ref(false);
const isDeleteModalShown = ref(false);
const isViewModalShown = ref(false);
const isUpdateModalShown = ref(false);
const visibleRef = ref(false);

let selectedUser = useForm({
    id: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    gender: null,
    address: null,
    birthday: null,
});

const onShow = () => {
    visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);

const toggleRestoreModal = () => {
    isRestoreModalShown.value = !isRestoreModalShown.value;
};

const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
};

const toggleViewModal = () => {
    isViewModalShown.value = !isViewModalShown.value;
};

const toggleUpdateModal = (data = null) => {
    selectedUser.id = data?.id;
    selectedUser.first_name = data?.first_name;
    selectedUser.middle_name = data?.middle_name;
    selectedUser.last_name = data?.last_name;
    selectedUser.gender = data?.gender;
    selectedUser.address = data?.address;
    selectedUser.birthday = data?.birthday;
    isUpdateModalShown.value = !isUpdateModalShown.value;
};

const approveUser = () => {
    selectedUser.put(`/approve/${selectedUser.value.id}`, {
        preserveState: true,
        onFinish: () => {
            approveModalShown.value = false;
        },
        onSuccess: () => {
            toast.success("Account has been approved successfully!");
        },
        onError: () => {
            toast.error("Something went wrong!");
        },
    });
};

const deletePatient = () => {
    selectedUser.delete(`/patients/${selectedUser.value.id}`, {
        preserveState: true,
        onFinish: () => {
            toggleDeleteModal();
        },
        onSuccess: () => {
            toast.success(message.value);
        },
        onError: () => {
            toast.error("Something went wrong!");
        },
    });
};

const updatePatient = () => {
    selectedUser
        .transform((data) => ({ ...data }))
        .put(`patients/${selectedUser.id}`, {
            preserveState: true,
            onSuccess: () => {
                toast.success(`${message.value}`);
                toggleUpdateModal();
            },
            onError: () => {
                toast.error("Something went wrong!");
            },
        });
};

const restorePatient = () => {
    selectedUser.put(`/patients/restore/${selectedUser.value.id}`, {
        preserveState: true,
        onFinish: () => {
            toggleRestoreModal();
        },
        onSuccess: () => {
            toast.success("Account has been restored successfully!");
        },
        onError: () => {
            toast.error("Something went wrong!");
        },
    });
};

const searchPatient = debounce(() => {
    Inertia.get(
        "/patients",
        { search: search.value, trashed: trashed.value },
        { replace: true, preserveState: true }
    );
}, 300);
</script>

<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <div class="max-w-8xl mx-auto px-6 lg:px-8">
            <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
                <p class="font-medium text-xl">Patients Summary</p>
                <p>Here is an overview of your patients.</p>
            </div>
            <div
                class="py-8 max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4"
            >
                <div
                    class="bg-red-500 flex-1 p-4 text-white rounded-md md:max-w-md"
                >
                    <div class="flex justify-between">
                        <div class="text-9xl flex items-center">
                            {{ formatNumeric(trashedPatientsCount) }}
                        </div>
                        <div class="flex flex-col items-end gap-y-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-10 w-10"
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
                                class="uppercase font-medium tracking-wider leading-5"
                            >
                                Trashed <br />Patients
                            </p>
                        </div>
                    </div>
                    <span class="sr-only">Trashed Patients</span>
                </div>
                <div
                    class="bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md"
                >
                    <div class="flex justify-between">
                        <div class="text-9xl flex items-center">
                            {{ formatNumeric(patients.data.length) }}
                        </div>
                        <div class="flex flex-col items-end gap-y-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            <p
                                class="uppercase font-medium tracking-wider leading-5 text-right"
                            >
                                Total <br />Patients
                            </p>
                        </div>
                    </div>
                    <span class="sr-only">Total Patients</span>
                </div>
            </div>
        </div>
        <div class="max-w-8xl mx-auto px-6 lg:px-8">
            <div class="py-8">
                <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-x-auto sm:rounded-lg">
                        <div class="">
                            <div
                                class="max-w-8xl mx-auto bg-white rounded-lg pb-6"
                            >
                                <p class="text-xl font-medium">
                                    Patients Record
                                </p>
                                <p class="text-sm text-gray-700">
                                    Shown below are the records of your
                                    patients.
                                </p>
                                <div class="flex justify-between mt-7 mb-7">
                                    <form-input
                                        label="Filter Patients"
                                        class="w-52"
                                    >
                                        <floating-select
                                            @change="searchPatient"
                                            v-model="trashed"
                                        >
                                            <option value="with">
                                                All Patients
                                            </option>
                                            <option value="">
                                                Active Patients
                                            </option>
                                            <option value="only">
                                                Trashed Patients
                                            </option>
                                        </floating-select>
                                    </form-input>
                                    <form-input
                                        label="Search Patient"
                                        for="search"
                                        class="w-52 md:w-72"
                                    >
                                        <floating-input
                                            v-model="search"
                                            @keyup="searchPatient"
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
                                                    class="py-3.5 pl-4 pr-3 text-left whitespace-nowrap sm:pl-6"
                                                >
                                                    Valid ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"
                                                >
                                                    Full Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left whitespace-nowrap"
                                                >
                                                    Address
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left whitespace-nowrap"
                                                >
                                                    Contact Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Gender
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left sm:pl-6"
                                                >
                                                    Approved
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left"
                                                >
                                                    Created On
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-3 py-3.5 text-left whitespace-nowrap"
                                                >
                                                    Deleted At
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="divide-y divide-gray-300 bg-white"
                                        >
                                            <tr
                                                v-for="(
                                                    patient, i
                                                ) in patients.data"
                                                :key="i"
                                                :class="{
                                                    'bg-red-100':
                                                        patient.deleted_at,
                                                }"
                                                class="hover:bg-gray-100"
                                            >
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                                >
                                                    <img
                                                        v-if="patient?.valid_id"
                                                        @click.prevent="
                                                            onShow();
                                                            imgsRef = `/images/${patient.valid_id}`;
                                                        "
                                                        :src="`images/${patient.valid_id}`"
                                                        class="rounded-md cursor-pointer"
                                                        alt="Valid ID"
                                                    />
                                                    <p v-else class="text-gray-400 text-xs">No Valid ID</p>
                                                </td>
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 flex items-center gap-x-2"
                                                >
                                                    <div
                                                        class="rounded-full bg-blue-400 w-8 h-8 border-gray-100 flex items-center justify-center"
                                                    >
                                                        <svg
                                                            v-if="
                                                                !patient.image
                                                            "
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 text-white"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                        <img
                                                            :src="`images/profile/${patient.image}`"
                                                            class="object-fit rounded-full h-full"
                                                            alt=""
                                                        />
                                                    </div>
                                                    {{ patient.full_name }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    {{
                                                        stringLimit(
                                                            patient.address
                                                        )
                                                    }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    {{ patient.contact_number }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900 capitalize"
                                                >
                                                    {{ patient.gender }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    {{ patient.email }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    <div
                                                        class="px-4 py-2 text-xs text-white rounded-full flex justify-center items-center"
                                                        :class="
                                                            parseInt(
                                                                patient.is_approved
                                                            )
                                                                ? 'bg-green-600'
                                                                : 'bg-red-600'
                                                        "
                                                    >
                                                        {{
                                                            parseInt(
                                                                patient.is_approved
                                                            )
                                                                ? "Approved"
                                                                : "Pending"
                                                        }}
                                                    </div>
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    {{ patient.created_at }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    {{ patient.deleted_at }}
                                                </td>
                                                <td
                                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6"
                                                >
                                                    <Button
                                                        v-if="
                                                            !parseInt(
                                                                patient.is_approved
                                                            )
                                                        "
                                                        @click.prevent="
                                                            approveModalShown = true;
                                                            selectedUser.value =
                                                                { ...patient };
                                                        "
                                                        text
                                                        size="sm"
                                                        color="success"
                                                        >Approve</Button
                                                    >
                                                    <Button
                                                        @click.prevent="
                                                            toggleViewModal();
                                                            selectedUser.value =
                                                                { ...patient };
                                                        "
                                                        text
                                                        size="sm"
                                                        color=""
                                                        >View</Button
                                                    >
                                                    <Button
                                                        @click.prevent="
                                                            toggleUpdateModal(
                                                                patient
                                                            )
                                                        "
                                                        text
                                                        size="sm"
                                                        color=""
                                                        >Update</Button
                                                    >
                                                    <Button
                                                        v-if="
                                                            !patient.deleted_at
                                                        "
                                                        @click.prevent="
                                                            toggleDeleteModal();
                                                            selectedUser.value =
                                                                { ...patient };
                                                        "
                                                        text
                                                        size="sm"
                                                        color="error"
                                                        >Trash</Button
                                                    >
                                                    <Button
                                                        v-else
                                                        @click.prevent="
                                                            selectedUser.value =
                                                                { ...patient };
                                                            toggleRestoreModal();
                                                        "
                                                        text
                                                        size="sm"
                                                        color="success"
                                                        >Restore</Button
                                                    >
                                                </td>
                                            </tr>
                                            <tr
                                                v-if="patients.data.length == 0"
                                            >
                                                <td colspan="9">
                                                    <div
                                                        class="mx-auto text-center py-4 font-medium text-gray-600"
                                                    >
                                                        No data available ..
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p class="text-sm mt-2 text-gray-500">
                                    Showing {{ patients.from ?? 0 }} to
                                    {{ patients.to ?? 0 }} out of
                                    {{ patients.total ?? 0 }} patients.
                                </p>
                                <pagination :links="patients.links" right />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal v-if="approveModalShown" @close="approveModalShown = false">
            <template #title>
                <p class="font-bold text-xl">Confirm Approve</p>
                <p class="text-sm mt-2">
                    Are you sure you want to approve this account?
                </p>
            </template>
            <template #footer>
                <Button
                    @click.prevent="approveModalShown = false"
                    text
                    size="sm"
                    color=""
                    >Cancel</Button
                >
                <Button
                    @click.prevent="approveUser"
                    text
                    size="sm"
                    color="success"
                    >Approve</Button
                >
            </template>
        </Modal>

        <Modal v-if="isViewModalShown" @close="toggleViewModal">
            <template #title>
                <p class="font-bold text-xl">Patient Information</p>
                <p class="text-sm">Here are the informations of the patient</p>
            </template>
            <template #body>
                <div
                    class="rounded-full bg-blue-400 w-16 h-16 border-gray-100 flex items-center justify-center mx-auto mt-4"
                >
                    <svg
                        v-if="!selectedUser.value.image"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <img
                        :src="`images/profile/${selectedUser.value.image}`"
                        class="object-fit rounded-full h-full"
                        alt=""
                    />
                </div>
                <div class="text-center">
                    <p class="mt-2 font-medium">
                        {{ selectedUser.value.full_name }}
                    </p>
                    <p class="text-sm">{{ selectedUser.value.email }}</p>
                </div>
                <div class="flex mt-4 gap-x-2">
                    <div class="w-1/2">
                        <p class="text-sm font-medium">
                            Address: {{ selectedUser.value.address }}
                        </p>
                        <p class="text-sm font-medium">
                            Birthday: {{ selectedUser.value.birthday }}
                        </p>
                    </div>
                    <div class="w-1/2">
                        <p class="text-sm font-medium">
                            Gender: {{ selectedUser.value.gender }}
                        </p>
                        <p class="text-sm font-medium">
                            Contact: {{ selectedUser.value.contact_number }}
                        </p>
                    </div>
                </div>
            </template>
            <template #footer>
                <Button
                    @click.prevent="toggleViewModal"
                    text
                    size="sm"
                    color="gray"
                    >Close</Button
                >
                <Link
                    :href="route('patients.show', selectedUser.value.id)"
                    class="text-xs text-blue-600 px-4 py-2 hover:text-blue-700 flex justify-center items-center hover:bg-blue-100 uppercase font-medium rounded-sm"
                    >View Records</Link
                >
            </template>
        </Modal>

        <Modal v-if="isDeleteModalShown" @close="toggleDeleteModal">
            <template #title>
                <p class="font-bold text-xl">Confirm Delete</p>
            </template>
            <template #body>
                <p class="text-sm text-gray-600">
                    Are you sure you want to trash this service?
                    <span class="text-sm text-red-500"
                        ><br />Note: This data can still be restored.</span
                    >
                </p>
            </template>
            <template #footer>
                <Button
                    @click.prevent="toggleDeleteModal"
                    text
                    size="sm"
                    color="gray"
                    >Close</Button
                >
                <Button
                    @click.prevent="deletePatient"
                    text
                    size="sm"
                    color="error"
                    >Confirm</Button
                >
            </template>
        </Modal>

        <Modal v-if="isUpdateModalShown" @close="toggleUpdateModal">
            <template #title>
                <p class="font-bold text-xl">Update User</p>
                <p class="text-sm">All input fields are required.</p>
            </template>
            <template #body>
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
                            v-model="selectedUser.first_name"
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
                            label="Middle Name "
                            class="mt-3"
                        >
                            <floating-input
                                type="text"
                                id="middlename"
                                v-model="selectedUser.middle_name"
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
                                v-model="selectedUser.last_name"
                                autofocus
                                autocomplete="name"
                            />
                        </form-input>
                    </div>
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
                            v-model="selectedUser.address"
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
                            <floating-select v-model="selectedUser.gender">
                                <option value="Male" class="font-medium">
                                    Male
                                </option>
                                <option value="Female" class="font-medium">
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
                                v-model="selectedUser.birthday"
                            />
                        </form-input>
                    </div>
                </div>
            </template>
            <template #footer>
                <Button
                    @click.prevent="toggleUpdateModal"
                    text
                    size="sm"
                    color="gray"
                    >Close</Button
                >
                <Button
                    @click.prevent="updatePatient"
                    text
                    size="sm"
                    color="success"
                    >Save Changes</Button
                >
            </template>
        </Modal>

        <Modal v-if="isRestoreModalShown" @close="toggleRestoreModal">
            <template #title>
                <p class="font-bold text-xl">Confirm Restore</p>
            </template>
            <template #body>
                <p class="text-sm text-gray-600">
                    Are you sure you want to restore this account? All of its
                    transaction data will be restored as well.
                </p>
            </template>
            <template #footer>
                <Button
                    @click.prevent="toggleRestoreModal"
                    text
                    size="sm"
                    color="gray"
                    >Close</Button
                >
                <Button
                    @click.prevent="restorePatient"
                    text
                    size="sm"
                    color="success"
                    >Restore</Button
                >
            </template>
        </Modal>

        <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="imgsRef"
            :index="indexRef"
            @hide="onHide"
        ></vue-easy-lightbox>
    </BreezeAuthenticatedLayout>
</template>
