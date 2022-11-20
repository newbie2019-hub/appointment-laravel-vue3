<script setup>

  const emit = defineEmits(['update:modelValue']);

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
    name: {
        type: String,
        required: true
    }
  });


</script>

<template>
  <div class="inline-flex items-center gap-x-1">
    <input
      :id="props.for"
      type="radio"
      :value="value"
      :name="name"
      @change="emit('update:modelValue', value)"
    />
    <label :for="props.for">{{ label }}</label>
  </div>
</template>
