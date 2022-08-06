<script setup>
  import { onMounted } from 'vue';

  let props = defineProps({
    series: {
      type: [Object, Array],
      default: [
        {
          name: 'Weekly Income',
          data: [],
        },
      ],
    },
    labels: {
      type: [Object, Array],
      default: [],
    },
    chartOptions: {
      type: Object,
      default: {
        chart: {
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'date',
          categories: [],
          convertedCatToNumeric: false,
        },
        fill: {
         colors: ['#22a34a']
        },
        markers: {
         colors: ['#22a34a']
        },
        tooltip: {
          x: {
            format: 'YYYY-MM-DD',
          },
        },
      },
    },
  });

  onMounted(() => {
    props.chartOptions.xaxis.categories =  props.labels ;
  });
</script>
<template>
  <div id="chart">
    <apexchart type="area" class="w-full" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
