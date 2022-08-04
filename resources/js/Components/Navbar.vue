<script setup>
  import { ref } from 'vue';
  import { Link } from '@inertiajs/inertia-vue3';

  const emit = defineEmits(['toggleSidebar']);

  const emitToggleSidebar = () => {
    emit('toggleSidebar');
  };
</script>

<template>
  <nav class="top-0 right-0 md:pl-64 bg-white py-3">
    <div class="justify-between flex items-center px-4">
      <div class="flex gap-x-2 items-center">
        <div @click.prevent="emitToggleSidebar" class="p-2 cursor-pointer duration-200 ease-in-out hover:bg-gray-100 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div class="rounded-full bg-blue-400 w-12 h-12 border-gray-100 flex items-center justify-center">
          <svg v-if="!$page.props.auth.user.image" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
          <img :src="`images/profile/${$page.props.auth.user.image}`" class="object-fit rounded-full h-full" alt="" />
        </div>
        <div class="flex flex-col leading-4">
          <p>{{ $page.props.auth.user.full_name }}</p>
          <p class="text-gray-600 text-sm">{{ $page.props.auth.user.email }}</p>
        </div>
      </div>
      <Link :href="route('logout')" method="POST" as="button" class="flex gap-x-1 hover:bg-red-100 px-4 py-2 rounded-md duration-200 ease-in-out md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </Link>
    </div>
  </nav>
</template>
