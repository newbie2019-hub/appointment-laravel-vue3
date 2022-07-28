<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import Button from '@/Components/Button/Button.vue';
  import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import Pagination from '@/Shared/Pagination.vue';
  import { debounce } from 'lodash';
  import { computed, ref, watch, watchEffect } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { useToast } from 'vue-toastification';
  import Modal from '@/Components/Modal/Modal.vue'

  const message = computed(() => usePage().props.value.flash.message)

  const toast = useToast();

  const props = defineProps({
    patients: Object,
    errors: Object,
  });

  const search = ref('');

  const isRestoreModalShown = ref(false);
  const isDeleteModalShown = ref(false);

  const selectedUser = useForm({}) 

  const toggleRestoreModal = () => {
    isRestoreModalShown.value = !isRestoreModalShown.value
  }

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value
  }

  const deletePatient = () => {
    console.log(selectedUser.value.id)
    // console.log(selectedUser.id.value)
    console.log(selectedUser)
    selectedUser.delete(`/patients/${selectedUser.value.id}`, {
      preserveState: true,
      onFinish: () => {
        toggleDeleteModal()
      },
      onSuccess: () => { 
        toast.success(message.value);
      },
      onError: () => { 
        toast.error('Something went wrong!')
      }
    })
  }

  const searchPatient = debounce(() => {
    Inertia.get('/patients', { search: search.value }, { replace: true, preserveState: true });
  }, 300);
</script>

<template>
  <Head title="Dashboard" />

  <BreezeAuthenticatedLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="overflow-x-auto shadow-sm sm:rounded-lg">
          <!-- <div class="p-6 bg-white border-b border-gray-200">Patients</div> -->
          <div class="">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white border-b border-gray-200 rounded-lg pb-6">
              <p class="text-xl font-medium">Patients Record</p>
              <p class="text-sm text-gray-700">Shown below are the records of your patients.</p>
              <div class="flex justify-end mt-7">
                <form-input label="Search Patient" for="search">
                  <floating-input v-model="search" @keyup="searchPatient" id="search" />
                </form-input>
              </div>
              <div class="p-6 overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">First Name</th>
                      <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Last Name</th>
                      <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Contact Number</th>
                      <th scope="col" class="px-3 py-3.5 text-left">Gender</th>
                      <th scope="col" class="px-3 py-3.5 text-left">Email</th>
                      <th scope="col" class="px-3 py-3.5 text-left">Created On</th>
                      <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Deleted At</th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-300 bg-white" >
                    <tr v-for="(patient, i) in patients.data" :key="i" :class="{ 'bg-red-100': patient.deleted_at }">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ patient.id }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ patient.first_name }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ patient.last_name }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ patient.contact_number }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900 capitalize">{{ patient.gender }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ patient.email }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ patient.created_at }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ patient.deleted_at }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                        <Button @click.prevent="" text size="sm" color="">View</Button>
                        <Button @click.prevent="" text size="sm" color="">Update</Button>
                        <Button v-if="!patient.deleted_at" @click.prevent="toggleDeleteModal(); selectedUser.value = {...patient}" text size="sm" color="error">Trash</Button>
                        <Button v-else @click.prevent="toggleDeleteModal(); selectedUser.value = {...patient}" text size="sm" color="success">Restore</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pagination :links="patients.links" right />
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <Modal v-if="isDeleteModalShown" @close="toggleDeleteModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Confirm Delete</p>
      </template>
      <template v-slot:body>
        <p class="text-sm text-gray-600">
          Are you sure you want to trash this service? <span class="text-sm text-red-500"><br />Note: This data can still be restored.</span>
        </p>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleDeleteModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="deletePatient" text size="sm" color="error">Confirm</Button>
      </template>
    </Modal>

    <Modal v-if="isRestoreModalShown" @close="toggleRestoreModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Confirm Restore</p>
      </template>
      <template v-slot:body>
        <p class="text-sm text-gray-600">Are you sure you want to make this service available again?</p>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleRestoreModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="restoreService" text size="sm" color="success">Restore</Button>
      </template>
    </Modal>
  </BreezeAuthenticatedLayout>
</template>
