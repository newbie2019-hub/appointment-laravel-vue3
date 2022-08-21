<script setup>
  import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import { Head, useForm } from '@inertiajs/inertia-vue3';
  import FloatingInput from '@/Components/FloatingInput/FloatingInput.vue';
  import FormInput from '@/Components/FloatingInput/FormInput.vue';
  import Button from '@/Components/Button/Button.vue';
  import FloatingSelect from '@/Components/FloatingInput/FloatingSelect.vue';
  import { onMounted } from '@vue/runtime-core';
  import Modal from '@/Components/Modal/Modal.vue';
  import { useToast } from 'vue-toastification';
  import { ref } from 'vue';
  const toast = useToast();
  let imagePreview = null;

  const props = defineProps({
    user: Object,
    errors: Object,
  });

  let form = useForm({
    first_name: '',
    middle_name: '',
    last_name: '',
    address: '',
    gender: '',
    image: null,
    email: null,
    birthday: null,
    contact_number: null,
    image_preview: null,
    current_password: null,
    password: null,
    password_confirmation: null,
  });

  onMounted(() => {
    form.first_name = props.user.first_name;
    form.middle_name = props.user.middle_name;
    form.last_name = props.user.last_name;
    form.address = props.user.address;
    form.image = props.user.image;
    form.gender = props.user.gender;
    form.email = props.user.email;
    form.birthday = props.user.birthday;
    form.contact_number = props.user.contact_number;
    form.image_preview = null;
  });

  const isConfirmModalShown = ref(false);
  const isUpdatePasswordShown = ref(false);

  const toggleConfirmModal = () => {
    isConfirmModalShown.value = !isConfirmModalShown.value;
  };

  const toggleUpdatePasswordModal = () => {
    isUpdatePasswordShown.value = !isUpdatePasswordShown.value;
  };

  const saveChanges = () => {
    form.post(`/settings/update`, {
      preserveState: true,
      onError: () => {
        toast.error('Something went wrong!');
      },
      onSuccess: () => {
        toast.success('Account updated successfully!');
        form.image = null;
        form.image_preview = null;
        toggleConfirmModal();
        form.current_password = null;
      },
    });
  };

  const updatePassword = () => {
    form.post('settings/update-password', {
      preserveState: true,
      onError: () => {
        toast.error('Something went wrong!');
      },
      onSuccess: () => {
        toast.success('Account password successfully!');
        form.password = null;
        form.confirm_password = null;
        form.current_password = null;
        toggleUpdatePasswordModal();
      },
    });
  };

  const imageSelected = (event) => {
    form.image = event.target.files[0];
    form.image_preview = event.target.files[0];

    if (!form.image) {
      return false;
    }

    if (!form.image.type.match('image.*')) {
      return false;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      form.image_preview = e.target.result;
    };

    reader.readAsDataURL(form.image_preview);
  };

  const resetUploadedImage = () => {
    form.image_preview = null;
    form.image = null;
  };
</script>

<template>
  <Head title="Dashboard" />

  <BreezeAuthenticatedLayout>
    <div class="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <p class="text-xl font-medium">Account Settings</p>
          <p class="text-sm">Please make sure all of your informations are correct.</p>
        </div>

        <div class="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> First Name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex flex-col max-w-lg rounded-md shadow-sm">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  v-model="form.first_name"
                  autocomplete="firstname"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  :class="{ 'border-red-400': errors.first_name }"
                />
                <p v-if="errors.first_name" class="text-sm text-red-500">{{ errors.first_name }}</p>
              </div>
            </div>

            <label for="middlename" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Middle Name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex max-w-lg rounded-md shadow-sm">
                <input
                  type="text"
                  name="middlename"
                  id="middlename"
                  v-model="form.middle_name"
                  autocomplete="middlename"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <label for="lastname" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Last Name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex flex-col max-w-lg rounded-md shadow-sm">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  v-model="form.last_name"
                  autocomplete="lastname"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  :class="{ 'border-red-400': errors.last_name }"
                />
                <p v-if="errors.last_name" class="text-sm text-red-500">{{ errors.last_name }}</p>
              </div>
            </div>

            <label for="contactnumber" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Contact Number </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex flex-col max-w-lg rounded-md shadow-sm">
                <input
                  type="text"
                  name="contactnumber"
                  id="contactnumber"
                  v-model="form.contact_number"
                  autocomplete="contactnumber"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  :class="{ 'border-red-400': errors.contact_number }"
                />
                <p v-if="errors.contact_number" class="text-sm text-red-500">{{ errors.contact_number }}</p>
              </div>
            </div>

            <label for="birthday" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Date of Birth </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex flex-col max-w-lg rounded-md shadow-sm">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  v-model="form.birthday"
                  autocomplete="birthday"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  :class="{ 'border-red-400': errors.birthday }"
                />
                <p v-if="errors.birthday" class="text-sm text-red-500">{{ errors.birthday }}</p>
              </div>
            </div>

            <label for="address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Address </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex flex-col max-w-lg rounded-md shadow-sm">
                <textarea
                  type="text"
                  name="address"
                  id="address"
                  v-model="form.address"
                  autocomplete="address"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  :class="{ 'border-red-400': errors.address }"
                />
              </div>
              <p v-if="errors.birthday" class="text-sm text-red-500">{{ errors.address }}</p>
            </div>

            <label for="address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Gender </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex max-w-lg rounded-md shadow-sm">
                <floating-select v-model="form.gender">
                  <option value="Male" class="font-medium">Male</option>
                  <option value="Female" class="font-medium">Female</option>
                </floating-select>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg mt-14">
          <p class="text-xl font-medium">Profile Image</p>
          <p class="text-sm">Please choose a decent photo as this will be displayed publicly</p>
        </div>
        <div class="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
          <div class="flex items-center sm:border-t sm:border-gray-200 sm:pt-5 gap-x-6">
            <!--- Avatar Container --->
            <div class="flex items-center justify-center w-16 h-16 overflow-hidden border-2 border-gray-400 rounded-full shadow-md">
              <svg v-if="!props.user.image && !form.image_preview" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <img v-else-if="form.image_preview" :src="form.image_preview" class="h-full rounded-full object-fit" alt="" />
              <img v-else :src="`images/profile/${props.user.image}`" class="h-full rounded-full object-fit" alt="" />
            </div>
            <div class="flex">
              <input id="avatar" type="file" class="hidden" @change="imageSelected" accept="image/*" />
              <label for="avatar" class="px-3 py-2 text-xs font-medium tracking-wider text-white uppercase bg-blue-600 rounded-md hover:bg-blue-700 hover:cursor-pointer">Upload Image</label>
              <Button color="error" size="sm" :disabled="!form.image_preview" @click="resetUploadedImage">Reset Image</Button>
            </div>
          </div>
            <!-- <progress :value="form.progress?.percentage" max="100" class="w-full h-6">{{ form.progress?.percentage }}%</progress> -->
        </div>

        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg mt-14">
          <p class="text-xl font-medium">Login Credentials</p>
          <p class="text-sm">Please make sure to have a unique password.</p>
        </div>

        <div class="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Email Address </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex flex-col max-w-lg rounded-md shadow-sm">
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="form.email"
                  autocomplete="email"
                  class="w-full border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  :class="{ 'border-red-400': errors.email }"
                />
                <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
              </div>
            </div>

            <label for="password" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Password </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex max-w-lg rounded-md shadow-sm cursor-pointer group" @click="toggleUpdatePasswordModal">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value="*******"
                  autocomplete="password"
                  disabled
                  class="w-full transition duration-200 border-gray-400 shadow-sm cursor-pointer disabled:bg-gray-100 rounded-bl-md rounded-tl-md group-hover:ring-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <Button size="sm" class="ml-0 rounded-none rounded-r-md rounded-br-md group-hover:bg-blue-800 group-hover:ring-1 group-hover:ring-offset-0">Update</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-6 mx-auto space-y-6 max-w-7xl sm:mt-5 sm:space-y-5 lg:px-8">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          <label for="password" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> </label>
          <div class="max-w-lg sm:col-span-2">
            <div class="flex justify-end">
              <Button size="sm" @click.prevent="toggleConfirmModal">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal v-if="isConfirmModalShown" @close="toggleConfirmModal">
      <template v-slot:title>
        <p class="text-xl font-bold">Enter Current Password</p>
        <p class="text-sm text-gray-600">Please enter your current password to confirm your changes.</p>
      </template>
      <template v-slot:body>
        <form action="" class="mt-2">
          <form-input label="Enter Password" for="confirmpassword" :error="errors.current_password">
            <floating-input type="password" v-model="form.current_password" id="confirmpassword" required />
          </form-input>
        </form>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleConfirmModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="saveChanges" text size="sm" color="success">Confirm Changes</Button>
      </template>
    </Modal>

    <Modal v-if="isUpdatePasswordShown" @close="toggleUpdatePasswordModal">
      <template v-slot:title>
        <p class="text-xl font-bold">Update Password</p>
        <p class="text-sm text-gray-600">Please enter your current password to confirm your changes.</p>
      </template>
      <template v-slot:body>
        <form action="" class="mt-2">
          <form-input label="Current Password" for="current_password" :error="errors.current_password">
            <floating-input type="password" v-model="form.current_password" id="current_password" required />
          </form-input>
          <form-input class="mt-2" label="New Password" for="password" :error="errors.password">
            <floating-input type="password" v-model="form.password" id="password" required />
          </form-input>
          <form-input class="mt-2" label="Confirm Password" for="password_confirmation" :error="errors.password_confirmation">
            <floating-input type="password" v-model="form.password_confirmation" id="password_confirmation" required />
          </form-input>
        </form>
      </template>
      <template v-slot:footer>
        <Button @click.prevent="toggleUpdatePasswordModal" text size="sm" color="gray">Close</Button>
        <Button @click.prevent="updatePassword" text size="sm" color="success">Save Changes</Button>
      </template>
    </Modal>
  </BreezeAuthenticatedLayout>
</template>
