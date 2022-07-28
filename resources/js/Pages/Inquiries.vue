<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import Button from '@/Components/Button/Button.vue';
  import { Head } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import Pagination from '@/Shared/Pagination.vue';
  import Modal from '@/Components/Modal/Modal.vue';
  import { debounce } from 'lodash';
  import { ref, watch, watchEffect } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { useToast } from 'vue-toastification';

  const toast = useToast()

  const props = defineProps({
    inquiries: Object,
    errors: Object,
  });

  const search = ref('');
  const inquiry_id = ref(null);

  let isDeleteModalShown = ref(false);

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
  };

  const deleteInquiry = () => {
    Inertia.delete(`/inquiries/${inquiry_id.value}`, { 
        preserveState: true,
        onSuccess: () => { 
            toast.success('Inquiry has been deleted successfully!')
            inquiry_id.value = null
            toggleDeleteModal()
        }
    })
  }

  const searchInquiry = debounce(() => {
    Inertia.get('/inquiries', { search: search.value }, { replace: true, preserveState: true });
  }, 300);

  // watchEffect(search, () => searchPost());
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
              <p class="text-xl font-medium">User Inquiries</p>
              <p class="text-sm text-gray-700">Shown below are the inquiries of your users.</p>
              <div class="flex justify-end">
                <form-input label="Search Inquiry" for="search">
                  <floating-input v-model="search" @keyup="searchInquiry" />
                </form-input>
              </div>
              <div class="p-6 overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Email</th>
                      <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Full Name</th>
                      <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Subject</th>
                      <th scope="col" class="px-3 py-3.5 text-left">Message</th>
                      <th scope="col" class="px-3 py-3.5 text-left">Date Created</th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="(inquiry, i) in inquiries.data" :key="i">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ inquiry.id }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ inquiry.email }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ inquiry.full_name }}</td>
                      <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ inquiry.subject }}</td>
                      <td class="px-3 py-4 text-sm text-gray-900">{{ inquiry.message }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ inquiry.created_at }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                        <Button @click.prevent="toggleDeleteModal(); inquiry_id = inquiry.id" text size="sm" color="error">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pagination :links="inquiries.links" right />
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
            Are you sure you want to delete this user inquiry? <span class="text-sm text-red-500"><br />Note: You cannot undo this action.</span>
          </p>
        </template>
        <template v-slot:footer>
          <Button @click.prevent="toggleDeleteModal" text size="sm" color="gray">Close</Button>
          <Button @click.prevent="deleteInquiry" text size="sm" color="error">Confirm</Button>
        </template>
      </Modal>
    </div>
  </BreezeAuthenticatedLayout>
</template>
