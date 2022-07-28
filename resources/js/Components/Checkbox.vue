<script setup>
  import { computed } from 'vue';

  const emit = defineEmits(['update:checked']);

  const props = defineProps({
    for: {
      type: [String, Number],
      default: null
    },
    checked: {
      type: [Array, Boolean],
      default: false,
    },
    value: {
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
  });

  const proxyChecked = computed({
    get() {
      return props.checked;
    },

    set(val) {
      emit('update:checked', val);
    },
  });
</script>

<template>
  <div class="inline-flex items-center gap-x-1">
    <input
      :id="props.for"
      type="checkbox"
      :value="value"
      v-model="proxyChecked"
      class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
    <label :for="props.for">{{ label }}</label>
  </div>
</template>
