<template>
  <div class="h-[420px]">
    <vue-cal class="vuecal--blue-theme" :events="events" />
  </div>
</template>
<script setup>
  import VueCal from 'vue-cal';
  import 'vue-cal/dist/vuecal.css';
  import moment from 'moment';
  import { watchEffect, onMounted, ref } from 'vue';

  const props = defineProps({
    data: {
      type: [Object, Array],
      value: [],
    },
  });

  watchEffect(() => {});

  const events = ref([]);

  onMounted(() => {
    props.data.map((event) => {
      const start = moment(event.schedule).format('YYYY-MM-DD HH:mm');
      const end = moment(event.schedule).add(1, 'hour').format('YYYY-MM-DD HH:mm');
      events.value.push({ title: event.patient.full_name, start: start, end: end });
    });
  });
</script>
