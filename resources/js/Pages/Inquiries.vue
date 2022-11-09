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
  import { stringLimit, formatNumeric } from '@/Composables/Utilities';

  const toast = useToast();

  const props = defineProps({
    inquiries: Object,
    errors: Object,
    todaysInquiry: Number,
    totalInquiries: Number,
  });

  const search = ref('');
  const inquiry_id = ref(null);

  let isDeleteModalShown = ref(false);
  let isViewModalShown = ref(false);

  const toggleViewModal = () => {
    isViewModalShown.value = !isViewModalShown.value;
  };

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
  };

  const deleteInquiry = () => {
    Inertia.delete(`/inquiries/${inquiry_id.value}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Inquiry has been deleted successfully!');
        inquiry_id.value = null;
        toggleDeleteModal();
      },
    });
  };

  const searchInquiry = debounce(() => {
    Inertia.get('/inquiries', { search: search.value }, { replace: true, preserveState: true });
  }, 300);

  // watchEffect(search, () => searchPost());
</script>

<template>
  <Head title="Dashboard" />

  <BreezeAuthenticatedLayout>
    <div class="max-w-8xl mx-auto px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
        <p class="font-medium text-xl">Inquiry Summary</p>
        <p>Here is an overview of your inquiries.</p>
      </div>
      <div class="py-8 max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-x-4 gap-y-4">
        <div class="bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(totalInquiries) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Inquiries</p>
            </div>
          </div>
          <span class="sr-only">Total Inquiries</span>
        </div>
        <div class="bg-blue-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(todaysInquiry) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Today's <br />Inquiry</p>
            </div>
          </div>
          <span class="sr-only">Today's Inquiry</span>
        </div>
      </div>
    </div>
    <div class="max-w-8xl mx-auto px-6 lg:px-8">
      <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
          <div class="overflow-x-auto shadow-sm sm:rounded-lg">
            <!-- <div class="p-6 bg-white border-b border-gray-200">Patients</div> -->
            <div class="">
              <div class="max-w-8xl mx-auto bg-white rounded-lg pb-6">
                <p class="text-xl font-medium">User Inquiries</p>
                <p class="text-sm text-gray-700">Shown below are the inquiries of your users.</p>
                <div class="flex justify-end mt-8">
                  <form-input label="Search Inquiry" for="search">
                    <floating-input id="search" v-model="search" @keyup="searchInquiry" />
                  </form-input>
                </div>
                <div class="overflow-x-auto mt-10">
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
                      <tr v-for="(inquiry, i) in inquiries.data" :key="i" class="hover:bg-gray-100">
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ inquiry.id }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ inquiry.email }}</td>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ inquiry.full_name }}</td>
                        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ inquiry.subject }}</td>
                        <td class="px-3 py-4 text-sm text-gray-900">{{ stringLimit(inquiry.message, 30) }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ inquiry.created_at }}</td>
                        <td class="relative whitespace-nowrap py-4 pr-4 text-sm sm:pr-6">
                          <Button
                            @click.prevent="
                              toggleViewModal();
                              selectedInquiry = { ...inquiry };
                            "
                            text
                            size="sm"
                            color="primary"
                            >View</Button
                          >
                          <Button
                            @click.prevent="
                              toggleDeleteModal();
                              inquiry_id = inquiry.id;
                            "
                            text
                            size="sm"
                            color="error"
                            >Delete</Button
                          >
                        </td>
                      </tr>
                      <tr v-if="inquiries.data.length == 0">
                        <td colspan="7">
                          <div class="mx-auto text-center py-4 font-medium text-gray-600">No data available ..</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-sm mt-2 text-gray-500">Showing {{ inquiries.from ?? 0 }} to {{ inquiries.to ?? 0 }} out of {{ inquiries.total ?? 0 }} inquiries.</p>
                <pagination :links="inquiries.links" right />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal v-if="isViewModalShown" @close="toggleViewModal">
        <template v-slot:title>
          <p class="font-bold text-xl">Inquiry Info</p>
        </template>
        <template v-slot:body>
          <p class="text-sm">Sender: &nbsp;{{ selectedInquiry.full_name }}</p>
          <p class="text-sm">Subject: &nbsp;{{ selectedInquiry.subject }}</p>
          <p class="text-sm">Created: &nbsp;{{ selectedInquiry.created_at }}</p>
          <p class="mt-4">Message:</p>
          <p class="text-sm mt-2 text-gray-600">
            {{ selectedInquiry.message }}
          </p>
        </template>
        <template v-slot:footer>
          <Button @click.prevent="toggleViewModal" text size="sm" color="gray">Close</Button>
        </template>
      </Modal>

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
