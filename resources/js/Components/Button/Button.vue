<script setup>
  import { ref } from 'vue';

  let cssClass = ref('');

  const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'primary',
    },
    text: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  });

  const setButtonProperty = () => {
    if (props.text) {
      textButton();
    } else {
      coloredButton();
    }
  };

  const textButton = () => {
    switch (props.color) {
      case 'warning':
        cssClass = 'text-orange-500 hover:bg-orange-50 ring-orange-500';
        break;
      case 'success':
        cssClass = 'text-green-500 hover:bg-green-50 ring-green-500';
        break;
      case 'error':
        cssClass = 'text-red-500 hover:bg-red-50 ring-red-500';
        break;
      default:
        cssClass = 'text-blue-600 hover:bg-blue-50 ring-blue-500';
    }
  };

  const coloredButton = () => {
    switch (props.color) {
      case 'warning':
        cssClass = 'bg-orange-500 hover:bg-orange-400 ring-orange-500';
        break;
      case 'success':
        cssClass = 'bg-green-500 hover:bg-green-400 ring-green-500';
        break;
      case 'error':
        cssClass = 'bg-red-500 hover:bg-red-400 ring-red-500';
        break;
      default:
        cssClass = 'bg-blue-600 hover:bg-blue-500 ring-blue-500';
    }
  };

  const buttonSize = () => {
    switch (props.size) {
      case 'lg':
        cssClass += ' px-7 py-3 text-sm';
        break;
      case 'sm':
        cssClass += ' px-4 py-2 text-xs';
        break;
      default:
        cssClass += ' px-4 py-2';
        break;
    }
  };

  setButtonProperty();
  buttonSize();
</script>

<template>
  <button
    v-if="!isLink"
    :type="type"
    :disabled="disabled"
    class="duration-200 items-center ease-in-out font-medium inline-flex rounded uppercase focus:ring-2 ring-offset-2 text-white ml-2 tracking-wider disabled:cursor-not-allowed"
    :class="cssClass"
  >
    <slot />
  </button>
  <a
    href="#"
    v-else
    :type="type"
    :disabled="disabled"
    class="duration-200 items-center ease-in-out font-medium inline-flex rounded uppercase focus:ring-2 ring-offset-2 text-white ml-2 tracking-wider disabled:cursor-not-allowed"
    :class="cssClass"
  >
    <slot />
  </a>
</template>
