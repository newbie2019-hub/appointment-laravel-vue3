<script setup>
  import { ref } from 'vue';
  import Sidebar from '@/Components/Sidebar.vue';
  import Navbar from '@/Components/Navbar.vue';

  let isVisible = ref(false);

  const toggleSidebar = () => {
    isVisible.value = !isVisible.value;
  };
</script>

<template>
  <div>
    <div class="min-h-screen">
      <Sidebar :is-visible="isVisible" @close="toggleSidebar"/>
      <Navbar @toggleSidebar="toggleSidebar" />
      <main>
        <div class="md:pl-64">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
