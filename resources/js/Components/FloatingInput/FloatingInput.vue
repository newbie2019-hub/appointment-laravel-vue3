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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
  };
</script>
<template>
  <input
    :type="props.type"
    :value="$attrs.modelValue"
    @input="updateValue"
    :disabled="props.disabled"
    class="peer ring-0 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed border-1 py-2 px-3 placeholder-transparent rounded-lg w-full border-gray-200 dark:border-gray-600 text-gray-900 bg-transparent focus:border-violet-500"
    placeholder="Input Field"
  />
</template>
