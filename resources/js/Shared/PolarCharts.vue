<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    series: {
      type: [Object, Array],
      default: [],
    },
    labels: {
      type: [Object, Array],
      default: [],
    },
    chartOptions: {
      type: Object,
      default: {
        chart: {
          width: '100%',
          type: 'polarArea',
        },
        labels: [],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: 'right',
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6,
          },
        },
      },
    },
  });

  onMounted(() => {
    // console.log(props.chartOptions);
    props.chartOptions.labels = props.labels
  });
</script>
<template>
  <div id="chart">
    <apexchart type="polarArea" class="w-full" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
