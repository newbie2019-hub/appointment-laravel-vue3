<template>
    <div class="h-[500px]">
        <vue-cal
            ref="vuecal"
            class="vuecal--blue-theme"
            :events="events"
            :time-from="9 * 60"
            :time-to="17 * 60"
            :on-event-click="onEventClick"
            :special-hours="specialHours"
            :disable-views="disabledViews"
            :hide-view-selector="hideViewSelector"
            :cell-click-hold="false"
            :drag-to-create-event="false"
        />
    </div>
</template>
<script setup>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import moment from "moment";
import { watchEffect, onMounted, ref } from "vue";

const emits = defineEmits(["emitEvent"]);
const vuecal = ref('')
const props = defineProps({
    data: {
        type: [Object, Array],
        value: [],
    },
    disabledViews: {
        type: [Array, Object],
        default: [],
    },
    hideViewSelector: {
        type: Boolean,
        default: false,
    },
    hideTitleBar: {
        type: Boolean,
        default: false,
    },
});

const dailyHours = [
    { from: 9 * 60, to: 12 * 60, class: "business-hours" },
    { from: 12 * 60, to: 13 * 60, class: "bg-red-100"},
    { from: 13 * 60, to: 18 * 60, class: "business-hours" },
];
const specialHours = ref({
    1: dailyHours,
    2: dailyHours,
    3: dailyHours,
    4: dailyHours,
    5: dailyHours,
    6: dailyHours,
});
watchEffect(() => {});

const events = ref([]);

const onEventClick = (event, e) => {
    emits("emitEvent", event);
    e.stopPropagation();
};

onMounted(() => {
    props.data.map((event) => {
        const start = moment(event.schedule).format("YYYY-MM-DD HH:mm");
        const end = moment(event.schedule)
            .add(1, "hour")
            .format("YYYY-MM-DD HH:mm");
        events.value.push({
            title: event.patient?.full_name ?? 'Occupied',
            start: start,
            end: end,
        });
    });
});
</script>
