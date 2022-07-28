<script setup>
  const props = defineProps({
    error: {
      type: String,
      value: null,
    },
    label: {
      type: String,
      value: 'Placeholder',
    },
    for: {
      type: String,
      value: null,
    },
  });
</script>
<template>
  <div>
    <div class="relative" v-bind="$attrs">
      <slot />
      <label
        :for="props.for"
        class="bg-white px-1 text-gray-800 left-0 -top-3 scale-75 text-base duration-200 ease-in-out absolute peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-3 peer-focus:-top-2.5 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-blue-500"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>
