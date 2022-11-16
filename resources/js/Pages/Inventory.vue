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
  import { ref } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
  import { formatCurrency, formatNumeric } from '@/Composables/Utilities';
  import { useToast } from 'vue-toastification';
  const toast = useToast();

  const equipmentStatuses = ['Good Condition', 'For Repair', 'For Cleaning', 'For Disposal']
  const equipmentTypes = ['Equipment', 'Consumable', 'Basic Instruments']

  const equipmentStatus = (status) => equipmentStatuses[status - 1]
  const equipmentType = (type) => equipmentTypes[type - 1]

  const form = useForm({ id: null, service: null, price: null });

  const props = defineProps({
    inventory: Object,
    inventoryCount: [Object, Number],
    errors: Object,
    filters: Object,
    trashedInventoryCount: Number,
  });

  let search = ref(props.filters.search);
  let trashed = ref(props.filters.trashed);

  const isDeleteModalShown = ref(false);
  const isEquipmentModalShown = ref(false);

  const toggleDeleteModal = () => {
    isDeleteModalShown.value = !isDeleteModalShown.value;
  };

  const toggleEquipmentModal = () => {
    isEquipmentModalShown.value = !isEquipmentModalShown.value;
  };

  const selectedEquipment = ref({ id: null, equipment: null, quantity: null, type: null, unit: null, status: null });
  const equipment_id = ref(null);
  const isCreating = ref(false);
  const isRestoreModalShown = ref(false);

  const toggleRestoreModal = () => {
    selectedEquipment.value = { id: null, equipment: '', quantity: '', type: '', unit: null, status: '' };
    isRestoreModalShown.value = !isRestoreModalShown.value;
  };

  const initiateMethod = () => {
    isCreating.value ? storeEquipment() : updateService();
  };

  const storeEquipment = () => {
    Inertia.post(`/inventory`, selectedEquipment.value, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Equipment has been added successfully!');
        selectedEquipment.value = { id: null, equipment: null, quantity: null, type: null, unit: null, status: null };
        toggleEquipmentModal();
      },
    });
  };

  const deleteService = () => {
    Inertia.delete(`/inventory/${equipment_id.value}`, {
      preserveState: true,
      onFinish: () => {
        toggleDeleteModal();
      },
      onSuccess: () => {
        toast.success('Equipment has been moved to trash successfully!');
        equipment_id.value = null;
      },
    });
  };

  const updateService = () => {
    Inertia.put(`/inventory/${selectedEquipment.value.id}`, selectedEquipment.value, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Equipment has been updated successfully!');
        selectedEquipment.value = { id: null, equipment: null, quantity: null, type: null, unit: null, status: null };
        toggleEquipmentModal();
      },
    });
  };

  const restoreEquipment = () => {
    form.put(`/inventory/restore/${selectedEquipment.value.id}`, {
      preserveState: true,
      onSuccess: () => {
        toast.success('Equipment has been restored successfully!');
        toggleRestoreModal();
      },
    });
  };

  const searchInventory = debounce(() => {
    Inertia.get('/inventory', { search: search.value, trashed: trashed.value }, { preserveState: true });
  }, 300);
</script>

<template>
  <Head title="Offered Services" />

  <BreezeAuthenticatedLayout>
    <div class="max-w-8xl px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 mt-6 mx-auto">
        <p class="font-medium text-xl">Inventory Summary</p>
        <p>Here is an overview of your inventory.</p>
      </div>
      <div class="py-8 max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4">
        <div class="bg-red-500 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(trashedInventoryCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5">Trashed <br />Inventory</p>
            </div>
          </div>
          <span class="sr-only">Trashed Inventory</span>
        </div>
        <div class="bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md">
          <div class="flex justify-between">
            <div class="text-9xl flex items-center">{{ formatNumeric(inventoryCount) }}</div>
            <div class="flex flex-col items-end gap-y-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="uppercase font-medium tracking-wider leading-5 text-right">Total <br />Inventory</p>
            </div>
          </div>
          <span class="sr-only">Total Inventory</span>
        </div>
      </div>
    </div>

    <div class="py-10">
      <div class="max-w-8xl px-6 lg:px-8">
        <div class="overflow-x-auto sm:rounded-lg">
          <div class="">
            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6">
              <p class="text-xl font-medium">Inventory Equipment</p>
              <p class="text-sm text-gray-700">Shown below are your inventory equipments</p>
              <div class="flex justify-between mt-7 gap-x-2 mb-6">
                <form-input label="Filter Inventory" class="w-56">
                  <floating-select @change="searchInventory" v-model="trashed">
                    <option value="with">All Equipments</option>
                    <option value="">Active Inventory</option>
                    <option value="only">Trashed Inventory</option>
                  </floating-select>
                </form-input>
                <div class="flex gap-x-2">
                  <Button
                    @click.prevent="
                      toggleEquipmentModal();
                      isCreating = true;
                    "
                    size="sm"
                    color="success"
                    >Add Equipment</Button
                  >
                  <form-input label="Search Inventory" for="search">
                    <floating-input v-model="search" id="search" @keyup="searchInventory" />
                  </form-input>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr class="[&>*]:uppercase font-medium text-xs text-gray-500">
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">ID</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Equipment</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Type</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Status</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Unit</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Quantity</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Remarks</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Added On</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap">Deleted On</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 sm:pl-6 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="(inv, i) in inventory.data" :key="i" :class="{ 'bg-red-100': inv.deleted_at }" class="hover:bg-gray-100">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.id }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.equipment }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ equipmentType(inv.type) }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ equipmentStatus(inv.status) }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.unit }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.quantity }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.remarks }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.created_at }}</td>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{{ inv.deleted_at }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6">
                        <Button
                          text
                          size="sm"
                          v-if="inv.deleted_at"
                          @click.prevent="
                            toggleRestoreModal();
                            selectedEquipment = { ...inv };
                          "
                          >Restore</Button
                        >
                        <Button
                          text
                          size="sm"
                          v-else
                          @click.prevent="
                            isCreating = false;
                            toggleEquipmentModal();
                            selectedEquipment = { ...inv };
                          "
                          >Update</Button
                        >
                        <Button
                          text
                          size="sm"
                          color="error"
                          v-if="inv.deleted_at == null"
                          @click.prevent="
                            toggleDeleteModal();
                            equipment_id = inv.id;
                          "
                          >Trash</Button
                        >
                      </td>
                    </tr>
                    <tr v-if="inventory.data.length == 0">
                      <td colspan="6">
                        <div class="mx-auto text-center py-4 font-medium text-gray-600">No data available ..</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-sm mt-2 text-gray-500">Showing {{ inventory.from ?? 0 }} to {{ inventory.to ?? 0 }} out of {{ inventory.total ?? 0 }} inventory.</p>
              <pagination :links="inventory.links" right />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal v-if="isEquipmentModalShown" @close="toggleEquipmentModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Clinic Equipment</p>
        <p class="text-sm text-gray-600">All input fields are required</p>
      </template>
      <template v-slot:body>
        <form action="" class="mt-2">
          <form-input label="Equipment" for="service" :error="errors.equipment">
            <floating-input v-model="selectedEquipment.equipment" id="service" required aria-required />
          </form-input>
          <div class="grid grid-cols-2 gap-x-0.5">
              <form-input label="Unit" for="unit" class="mt-1" :error="errors.unit">
                <floating-input v-model="selectedEquipment.unit" id="unit" required aria-required />
              </form-input>
              <form-input label="Qty" for="qty" class="mt-1" :error="errors.quantity">
                <floating-input v-model="selectedEquipment.quantity" id="qty" required aria-required />
              </form-input>
          </div>
          <form-input label="Type" class="w-full mt-3">
            <floating-select v-model="selectedEquipment.type">
                <option value="" disabled>Please Select</option>
                <option value="1">Equipment</option>
                <option value="2">Consumables</option>
                <option value="3">Basic Instruments</option>
            </floating-select>
          </form-input>
          <form-input label="Status" class="w-full mt-3">
            <floating-select v-model="selectedEquipment.status">
                <option value="" disabled>Please Select</option>
                <option value="1">Good Condition</option>
                <option value="2">For Repair</option>
                <option value="3">For Cleaning</option>
                <option value="4">For Disposal</option>
            </floating-select>
          </form-input>
          <form-input label="Remarks" for="remarks" class="mt-3" :error="errors.remarks">
            <floating-input v-model="selectedEquipment.remarks" id="remarks" required aria-required />
          </form-input>
        </form>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleEquipmentModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="initiateMethod" text size="sm" color="success">Save</Button>
      </template>
    </Modal>

    <Modal v-if="isDeleteModalShown" @close="toggleDeleteModal">
      <template v-slot:title>
        <p class="font-bold text-xl">Confirm Delete</p>
      </template>
      <template v-slot:body>
        <p class="text-sm text-gray-600">
          Are you sure you want to trash this equipment? <span class="text-sm text-red-500"><br />Note: This data can still be restored.</span>
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
        <p class="text-sm text-gray-600">Are you sure you want to make this equipment available again?</p>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleRestoreModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="restoreEquipment" text size="sm" color="success">Restore</Button>
      </template>
    </Modal>
  </BreezeAuthenticatedLayout>
</template>
