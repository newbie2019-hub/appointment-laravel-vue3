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
      case 'accent-1':
        cssClass = 'bg-violet-600 hover:bg-violet-500 ring-violet-500 disabled:bg-violet-300 disabled:hover:bg-violet-300';
        break;
      case 'warning':
        cssClass = 'bg-orange-500 hover:bg-orange-400 ring-orange-500 disabled:bg-orange-300 disabled:hover:bg-orange-300';
        break;
      case 'success':
        cssClass = 'bg-green-600 hover:bg-green-500 ring-green-500 disabled:bg-green-300 disabled:hover:bg-green-300';
        break;
      case 'error':
        cssClass = 'bg-red-500 hover:bg-red-400 ring-red-500 disabled:bg-red-300 disabled:hover:bg-red-300';
        break;
      default:
        cssClass = 'bg-blue-600 hover:bg-blue-500 ring-blue-500 disabled:bg-blue-300 disabled:hover:bg-blue-300';
    }
  };

  const buttonSize = () => {
    switch (props.size) {
      case 'lg':
        cssClass += ' px-8 py-4 text-sm';
        break;
      case 'sm':
        cssClass += ' px-4 py-2 text-xs';
        break;
      default:
        cssClass += ' px-6 py-2.5 text-sm';
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
    class=" items-center text-center tracking-wider text-white duration-200 whitespace-nowrap ease-in-out rounded focus:ring-2 ring-offset-2 disabled:cursor-not-allowed"
    :class="cssClass"
  >
    <slot />
  </button>
  <a
    href="#"
    v-else
    :type="type"
    :disabled="disabled"
    class=" items-center tracking-wider text-white duration-200 ease-in-out rounded focus:ring-2 ring-offset-2 disabled:cursor-not-allowed"
    :class="cssClass"
  >
    <slot />
  </a>
</template>
