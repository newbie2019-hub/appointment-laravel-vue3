<template>
  <div class="h-[420px]">
    <vue-cal class="vuecal--blue-theme" :events="events" :time-from="9 * 60" :time-to="17 * 60" :on-event-click="onEventClick"/>
  </div>
</template>
<script setup>
  import VueCal from 'vue-cal';
  import 'vue-cal/dist/vuecal.css';
  import moment from 'moment';
  import { watchEffect, onMounted, ref } from 'vue';

  const emits = defineEmits(['emitEvent'])

  const props = defineProps({
    data: {
      type: [Object, Array],
      value: [],
    },
  });

  watchEffect(() => {});

  const events = ref([]);

  const onEventClick = (event, e) => {
    emits('emitEvent', event)
    e.stopPropagation()
  }

  onMounted(() => {
    props.data.map((event) => {
      const start = moment(event.schedule).format('YYYY-MM-DD HH:mm');
      const end = moment(event.schedule).add(1, 'hour').format('YYYY-MM-DD HH:mm');
      events.value.push({ title: event.patient.full_name, start: start, end: end });
    });
  });
</script>
