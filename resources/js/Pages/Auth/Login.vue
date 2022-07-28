<script setup>
  import BreezeButton from '@/Components/Button/Button.vue';
  import BreezeCheckbox from '@/Components/Checkbox.vue';
  import BreezeGuestLayout from '@/Layouts/Guest.vue';
  import BreezeInput from '@/Components/Input.vue';
  import BreezeLabel from '@/Components/Label.vue';
  import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
  import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
  import { useToast } from 'vue-toastification';

  const toast = useToast();

  defineProps({
    canResetPassword: Boolean,
    status: String,
    errors: Object,
  });

  const form = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = () => {
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
      onError: () => {
        toast.error('Something went wrong!')
      }
    });
  };
</script>

<template>
  <BreezeGuestLayout>
    <Head title="Log in" />

    <!-- <BreezeValidationErrors class="mb-4" /> -->

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <p class="text-2xl font-medium mt-2">Welcome, User</p>
    <p class="text-sm mb-4">Please login to your account to proceed.</p>

    <form @submit.prevent="submit">
      <div>
        <BreezeLabel for="email" value="Email" />
        <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />
        <p class="text-sm text-red-500">{{ errors.email }}</p>
      </div>

      <div class="mt-4">
        <BreezeLabel for="password" value="Password" />
        <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" />
        <p class="text-sm text-red-500">{{ errors.password }}</p>
      </div>

      <div class="block mt-3">
        <label class="flex items-center">
          <BreezeCheckbox name="remember" v-model:checked="form.remember" />
          <span class="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>

      <div class="mt-4">
        <Link v-if="canResetPassword" :href="route('password.request')" class="mt-4 hover:underline text-sm text-blue-400 hover:text-blue-700"> Forgot your password? </Link>
      </div>
      <div class="flex items-center justify-end mt-4">
        <button type="submit" class="text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm">Login</button>
      </div>
    </form>
  </BreezeGuestLayout>
</template>
