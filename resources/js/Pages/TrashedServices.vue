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
  import { formatCurrency } from '@/Composables/Utilities';
  import { useToast } from 'vue-toastification';

  const toast = useToast();

  const props = defineProps({
    trashedServices: Object,
    errors: Object,
    filters: Object,
  });

  let search = ref(props.filters.searchTrashed);
  const isRestoreModalShown = ref(false);

  const toggleRestoreModal = () => {
    isRestoreModalShown.value = !isRestoreModalShown.value;
  };

  const selectedService = ref({ id: null, service: null, price: null });
  const service_id = ref(null);

  const restoreService = () => {
    Inertia.put(`/trashedServices/${service_id.value}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Service has been restored successfully!');
        service_id.value = null;
        toggleRestoreModal();
      },
    });
  };

  const searchServices = debounce(() => {
    Inertia.get('/services', { searchTrashed: search.value }, { preserveState: true });
  }, 300);
</script>

<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="overflow-x-auto shadow-sm sm:rounded-lg">
      <div class="">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6">
          <p class="text-xl font-medium">Trashed Services</p>
          <p class="text-sm text-gray-700">Shown below are the services you offer.</p>
          <div class="flex justify-end mt-7 gap-x-2 mb-6">
            <form-input label="Search Service" for="trashedSearch">
              <floating-input v-model="search" id="trashedSearch" @keyup="searchServices" />
            </form-input>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Service Type</th>
                  <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Price</th>
                  <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Created On</th>
                  <th scope="col" class="px-3 py-3.5 text-left whitespace-nowrap">Deleted On</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(service, i) in trashedServices.data" :key="i">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.id }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.service }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ formatCurrency(service.price) }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.created_at }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.deleted_at }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                    <Button
                      text
                      size="sm"
                      @click.prevent="
                        toggleRestoreModal();
                        selectedService = { ...service };
                      "
                      >Restore</Button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <pagination :links="trashedServices.links" right />
        </div>
      </div>
    </div>
  </div>

  <Modal v-if="isRestoreModalShown" @close="toggleRestoreModal">
    <template v-slot:title>
      <p class="font-bold text-xl">Confirm Delete</p>
    </template>
    <template v-slot:body>
      <p class="text-sm text-gray-600">Are you sure you want to make this service available again?</p>
    </template>
    <template v-slot:footer>
      <Button @click.prevent="toggleRestoreModal" text size="sm" color="gray">Close</Button>
      <Button @click.prevent="restoreService" text size="sm" color="error">Restore</Button>
    </template>
  </Modal>
</template>
