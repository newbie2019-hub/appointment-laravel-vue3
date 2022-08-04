<script setup>
  const emit = defineEmits(['update:modelValue']);

  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    for: {
      type: [String, Number],
      default: null
    }
  });

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
  };
</script>
<template>
  <textarea
    :value="$attrs.modelValue"
    @input="updateValue"
    class="peer ring-0 outline-none border-2 p-2 placeholder-transparent rounded-lg w-full border-gray-500 dark:border-gray-600 text-gray-900 bg-transparent focus:border-blue-500"
    placeholder="Input Field"
  />
</template>
