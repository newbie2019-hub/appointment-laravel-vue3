<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import Button from '@/Components/Button/Button.vue';
  import { Head, useForm } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import Pagination from '@/Shared/Pagination.vue';
  import Modal from '@/Components/Modal/Modal.vue';
  import { debounce } from 'lodash';
  import { ref, watch, watchEffect } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { formatCurrency, formatNumeric } from '@/Composables/Utilities';
  import { useToast } from 'vue-toastification';
  const toast = useToast();

  const form = useForm({ id: null, service: null, price: null });

  const props = defineProps({
    services: Object,
    errors: Object,
    filters: Object,
    trashedServicesCount: Number,
  });

  let search = ref(props.filters.search);
  let trashed = ref(props.filters.trashed);

  const isDeleteModalShown = ref(false);
  const isServiceModalShown = ref(false);

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
  };

  const toggleServiceModal = () => {
    isServiceModalShown.value = !isServiceModalShown.value;
  };

  const selectedService = ref({ id: null, service: null, price: null });
  const service_id = ref(null);
  const isCreating = ref(false);
  const isRestoreModalShown = ref(false);

  const toggleRestoreModal = () => {
    isRestoreModalShown.value = !isRestoreModalShown.value;
  };

  const initiateMethod = () => {
    isCreating.value ? storeService() : updateService();
  };

  const storeService = () => {
    Inertia.post(`/services`, selectedService.value, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Service has been added successfully!');
        selectedService.value = { id: null, service: null, price: null };
        toggleServiceModal();
      },
    });
  };

  const deleteService = () => {
    Inertia.delete(`/services/${service_id.value}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Service has been moved to trash successfully!');
        service_id.value = null;
        toggleDeleteModal();
      },
    });
  };

  const updateService = () => {
    Inertia.put(`/services/${selectedService.value.id}`, selectedService.value, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Service has been updated successfully!');
        selectedService.value = { id: null, service: null, price: null };
        toggleServiceModal();
      },
    });
  };

  const restoreService = () => {
    form.put(`/services/restore/${selectedService.value.id}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Service has been restored successfully!');
        toggleRestoreModal();
      },
    });
  };

  const searchServices = debounce(() => {
    Inertia.get('/services', { search: search.value, trashed: trashed.value }, { preserveState: true });
  }, 300);
</script>

<template>
  <Head title="Offered Services" />

  <BreezeAuthenticatedLayout>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
        <p class="font-medium text-xl">Services Summary</p>
        <p>Here is an overview of your services.</p>
      </div>
      <div class="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4">
        <div class="bg-red-500 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(trashedServicesCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5">Trashed <br />Services</p>
            </div>
          </div>
          <span class="sr-only">Trashed Services</span>
        </div>
        <div class="bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(services.data.length) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Services</p>
            </div>
          </div>
          <span class="sr-only">Total Services</span>
        </div>
      </div>
    </div>

    <div class="py-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6">
              <p class="text-xl font-medium">Offered Services</p>
              <p class="text-sm text-gray-700">Shown below are the services you offer.</p>
              <div class="flex justify-between mt-7 gap-x-2 mb-6">
                <form-input label="Filter Service" class="w-48">
                  <floating-select @change="searchServices" v-model="trashed">
                    <option value="with">All Services</option>
                    <option value="">Active Services</option>
                    <option value="only">Trashed Services</option>
                  </floating-select>
                </form-input>
                <div class="flex gap-x-2">
                  <Button
                    @click.prevent="
                      toggleServiceModal();
                      isCreating = true;
                    "
                    size="sm"
                    color="success"
                    >Add Service</Button
                  >
                  <form-input label="Search Service" for="search">
                    <floating-input v-model="search" id="search" @keyup="searchServices" />
                  </form-input>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Service Type</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Price</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Created On</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Deleted On</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 sm:pl-6 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="(service, i) in services.data" :key="i" :class="{ 'bg-red-100': service.deleted_at }">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.id }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.service }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ formatCurrency(service.price) }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.created_at }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ service.deleted_at }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                        <Button
                          text
                          size="sm"
                          v-if="service.deleted_at"
                          @click.prevent="
                            toggleRestoreModal();
                            selectedService = { ...service };
                          "
                          >Restore</Button
                        >
                        <Button
                          text
                          size="sm"
                          v-else
                          @click.prevent="
                            isCreating = false;
                            toggleServiceModal();
                            selectedService = { ...service };
                          "
                          >Update</Button
                        >
                        <Button
                          text
                          size="sm"
                          color="error"
                          v-if="service.deleted_at == null"
                          @click.prevent="
                            toggleDeleteModal();
                            service_id = service.id;
                          "
                          >Trash</Button
                        >
                      </td>
                    </tr>
                    <tr v-if="services.data.length == 0">
                      <td colspan="6">
                        <div class="mx-auto text-center py-4 font-medium text-gray-600">No data available ..</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-sm mt-2 text-gray-500">Showing {{ services.from ?? 0 }} to {{ services.to ?? 0 }} out of {{ services.total ?? 0 }} services.</p>
              <pagination :links="services.links" right />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal v-if="isServiceModalShown" @close="toggleServiceModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Offered Service</p>
        <p class="text-sm text-gray-600">All input fields are required</p>
      </template>
      <template v-slot:body>
        <form action="" class="mt-2">
          <form-input label="Service Type" for="service" :error="errors.service">
            <floating-input v-model="selectedService.service" id="service" required aria-required />
          </form-input>
          <form-input label="Price" for="price" class="mt-3" :error="errors.price">
            <floating-input type="number" v-model="selectedService.price" id="price" required aria-required />
          </form-input>
        </form>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleServiceModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="initiateMethod" text size="sm" color="success">Save</Button>
      </template>
    </Modal>

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
        <Button @click.prevent="deleteService" text size="sm" color="error">Confirm</Button>
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
