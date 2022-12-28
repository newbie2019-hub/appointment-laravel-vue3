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
        class="bg-white px-1 cursor-text text-gray-800 left-0 -top-2.5 scale-75 text-sm duration-200 ease-in-out absolute peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-3 peer-focus:-top-2.5 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-blue-500"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>
