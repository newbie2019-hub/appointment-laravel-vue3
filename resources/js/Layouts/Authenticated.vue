<script setup>
  import { ref } from 'vue';
  import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
  import BreezeDropdown from '@/Components/Dropdown.vue';
  import BreezeDropdownLink from '@/Components/DropdownLink.vue';
  import BreezeNavLink from '@/Components/NavLink.vue';
  import BreezeResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
  import Sidebar from '@/Components/Sidebar.vue';
  import Navbar from '@/Components/Navbar.vue';
  import { Link } from '@inertiajs/inertia-vue3';

  const showingNavigationDropdown = ref(false);

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
