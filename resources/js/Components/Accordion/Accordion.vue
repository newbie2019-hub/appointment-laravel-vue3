<script setup>
import { ref, computed, onMounted, provide } from "vue";

const accordion = ref({ count: 0, active: null });
provide("accordion", accordion.value);
</script>
<template>
    <ul class="accordion">
        <slot></slot>
    </ul>
</template>

<style scoped>
.accordion {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.accordion__item:last-child {
    border-bottom: none;
}
</style>
