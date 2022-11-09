<script setup>
import { onMounted, computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";

const emit = defineEmits(["close"]);
const authenticatedUser = computed(() => {
    return usePage().props.value.auth.user;
});
const props = defineProps({
    isVisible: {
        type: Boolean,
        value: false,
    },
});

const isCurrentRoute = (data) => {
    return route().current(data)
        ? "text-blue-500 [&>span]:font-bold [&>svg]:text-blue-500"
        : "";
};

const closeSidebar = () => {
    emit("close");
};
</script>

<template>
    <teleport to="body">
        <div
            @click.prevent="closeSidebar"
            v-show="isVisible"
            class="w-full h-screen bg-gray-700/50 z-30 fixed inset-0 md:hidden"
        ></div>
    </teleport>
    <aside
        :class="{ hidden: !isVisible }"
        class="w-64 fixed left-0 top-0 h-screen md:block z-40 border-r"
        aria-label="Sidebar"
    >
        <div class="overflow-y-auto bg-gray-50 dark:bg-gray-800 h-full">
            <div class="flex-col items-center justify-center mb-10">
                <img
                    src="/images/logo.png"
                    alt=""
                    class="mx-auto mt-4"
                    width="80"
                />
                <p class="text-center mt-3 font-medium">
                    Manabat-Flores <br />Dental Clinic
                </p>
            </div>
            <p class="text-gray-700 font-medium ml-4">Main Menu</p>
            <ul class="space-y-1 mt-2">
                <li>
                    <Link
                        :href="route('dashboard')"
                        :class="isCurrentRoute('dashboard')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                            ></path>
                            <path
                                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                            ></path>
                        </svg>
                        <span class="ml-3">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        :href="route('appointments.index')"
                        :class="isCurrentRoute('appointments.index')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Appointment</span
                        >
                        <!-- <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
                    </Link>
                </li>
                <li>
                    <Link
                        v-if="authenticatedUser.is_admin"
                        :href="route('services.index')"
                        :class="isCurrentRoute('services.index')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Services</span
                        >
                        <!-- <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> -->
                    </Link>
                </li>
                <li>
                    <Link
                        v-if="authenticatedUser.is_admin"
                        :href="route('patients.index')"
                        :class="isCurrentRoute('patients.index')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Patients</span
                        >
                    </Link>
                </li>
                <!-- <li>
          <Link
            v-if="authenticatedUser.is_admin"
            :href="route('inquiries.index')"
            :class="isCurrentRoute('inquiries.index')"
            class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Inquiries</span>
          </Link>
        </li> -->
                <li>
                    <Link
                        v-if="authenticatedUser.is_admin"
                        :href="route('payments.index')"
                        :class="isCurrentRoute('payments.index')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Payments</span
                        >
                    </Link>
                </li>
                <li>
                    <Link
                        v-if="authenticatedUser.is_admin"
                        :href="route('inventory.index')"
                        :class="isCurrentRoute('inventory.index')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            class="flex-shrink-0 w-5  h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M21.04 12.13C21.18 12.13 21.31 12.19 21.42 12.3L22.7 13.58C22.92 13.79 22.92 14.14 22.7 14.35L21.7 15.35L19.65 13.3L20.65 12.3C20.76 12.19 20.9 12.13 21.04 12.13M19.07 13.88L21.12 15.93L15.06 22H13V19.94L19.07 13.88M19 3C20.1 3 21 3.9 21 5V9L11 19V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Inventory</span
                        >
                    </Link>
                </li>
                <li>
                    <Link
                        :href="route('settings.index')"
                        :class="isCurrentRoute('settings.index')"
                        class="flex items-center pl-9 pr-4 py-3 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <svg
                            class="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Settings</span
                        >
                    </Link>
                </li>
            </ul>
            <div
                class="absolute bottom-7 left-0 mx-auto flex items-center justify-center w-full"
            >
                <Link
                    :href="route('logout')"
                    method="POST"
                    as="button"
                    class="flex gap-x-1 hover:bg-red-100 px-4 py-2 rounded-md duration-200 ease-in-out"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                    Logout
                </Link>
            </div>
        </div>
    </aside>
</template>
