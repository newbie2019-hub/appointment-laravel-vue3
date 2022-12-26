<script setup>
import { inject, ref, computed, onMounted } from "vue";

const index = ref(null);
const accordion = inject("accordion");

onMounted(() => {
    index.value = accordion.count;
});

const visible = computed(() => index.value == accordion.active);

const open = () => {
    if (visible.value) {
        accordion.active = null;
    } else {
        accordion.active = index.value;
    }
};

const start = (el) => {
    el.style.height = el.scrollHeight + "px";
};

const end = (el) => {
    el.style.height = "";
};
</script>
<template>
    <li class="accordion__item w-full">
        <div
            class="accordion__trigger"
            :class="{ accordion__trigger_active: visible }"
            @click="open"
        >
            <div class="flex items-center justify-between w-full">
                <slot name="accordion-trigger"></slot>
                <svg
                    v-if="!visible"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                </svg>
            </div>
        </div>
    </li>
    <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
    >
        <div class="accordion__content" v-show="visible">
            <ul>
                <slot name="accordion-content"></slot>
            </ul>
        </div>
    </transition>
</template>

<style scoped>
.accordion__item {
    cursor: pointer;
    /* padding: 10px 20px 10px 40px; */
    border-bottom: 1px solid #ebebeb;
    position: relative;
}

.accordion__trigger {
    display: flex;
    justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
    height: 0 !important;
    opacity: 0;
}
</style>
