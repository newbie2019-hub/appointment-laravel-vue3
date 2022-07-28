<script setup></script>

<template>
  <nav class="top-0 right-0 md:pl-64 bg-white py-3">
    <div class="justify-between flex items-center px-4">
      <div class="flex gap-x-2 items-center">
        <div class="rounded-full p-2 bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex flex-col leading-4">
          <p>{{ $page.props.auth.user.full_name }}</p>
          <p class="text-gray-600 text-sm">{{ $page.props.auth.user.email }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>
