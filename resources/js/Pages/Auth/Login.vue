<script setup>
  import BreezeCheckbox from '@/Components/Checkbox.vue';
  import BreezeGuestLayout from '@/Layouts/Guest.vue';
  import BreezeInput from '@/Components/Input.vue';
  import BreezeLabel from '@/Components/Label.vue';
  import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
  import { useToast } from 'vue-toastification';

  const toast = useToast();

  const props = defineProps({
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
        toast.error(props.errors.auth ?? 'Something went wrong!');
      },
    });
  };
</script>

<template>
  <BreezeGuestLayout>
    <Head title="Log in" />
    <div v-if="status" class="fixed top-0 left-0 w-full bg-white py-2 font-medium text-sm text-green-600 ">
      <p>{{ status }}</p>
    </div>
    <div class="flex w-full">
      <div class="flex flex-col flex-1 h-screen items-center justify-center bg-white w-full text-left md:max-w-xl">
        <div class="w-full md:max-w-sm shadow-lg bg-white max-w-sm px-10 py-8 rounded-lg md:p-0 md:shadow-none">
          <div>
            <p class="text-3xl font-bold mt-2">Sign-in to your account</p>
            <p class="text-sm mb-4 mt-1">Please enter your login credentials to proceed to your account.</p>
          </div>
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

            <div class="mt-4 flex justify-between items-center">
              <label class="flex items-center">
                <BreezeCheckbox name="remember" v-model:checked="form.remember" />
                <span class="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link v-if="canResetPassword" :href="route('password.request')" class="hover:underline text-sm text-blue-400 hover:text-blue-700"> Forgot your password? </Link>
            </div>
            <div class="flex items-center justify-end mt-12 mb-4">
              <button :disabled="form.processing" type="submit" class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 duration-200 ease-in-out rounded-lg w-full disabled:bg-blue-400 disabled:cursor-progress">Log-in Account</button>
            </div>
          </form>

          <hr class="mt-10 mb-6" />

          <div class="mt-4 text-center">
            <span class="text-sm">Don't have an account?</span> <Link :href="route('register')" class="text-sm text-gray-600 hover:text-blue-500 relative"> Sign-Up</Link>
          </div>
        </div>
      </div>
      <div class="hidden md:block flex-1 w-96">
        <img src="images/alwayssmile.jpg" class="h-screen object-fit w-full blur-[1px]" alt="" />
      </div>
    </div>

    <!--
    <p class="text-2xl font-medium mt-2">Welcome, User</p>
    <p class="text-sm mb-4">Please login to your account to proceed.</p>
-->
  </BreezeGuestLayout>
</template>
