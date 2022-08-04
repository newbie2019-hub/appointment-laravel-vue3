<script setup>
  const props = defineProps({
    textSize: {
      type: String,
      default: 'xs',
    },
    color: {
      type: String,
      default: 'blue',
    },
    label: {
      type: String,
      default: 'Chips',
    },
    flat: {
     type: Boolean,
     default: false
    }
  });
</script>
<template>
  <div class="px-3 py-2 rounded-full text-white text-center" :class="`bg-${props.color}-600 text-${props.textSize} ${props.flat ? 'shadow-md' : ''}`">
    {{ label }}
  </div>
</template>
