<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import type {
  ChartLineData,
  ChartLineOptions,
} from "~/components/chart/Line.vue";

const {
  startAt,
  endAt,
  historicalDates,
  historicalRates,
  fetchHistoricalCurrency,
} = useHistoricalCurrency();

const { width } = useWindowSize();

const chartData = computed(() => ({
  labels: historicalDates.value,
  datasets: [
    {
      label: endAt.value
        ? `Records from ${startAt.value} to ${endAt.value}`
        : `Records since ${startAt.value}`,
      data: historicalRates.value,
      backgroundColor: "#141E46",
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: width.value > 1000 ? "x" : "y",
  aspectRatio: width.value > 1000 ? 2 : 0.6,
}));

await fetchHistoricalCurrency();
</script>

<template>
  <ChartLine
    v-if="width <= 1000"
    class="chart-line"
    :data="(chartData as ChartLineData)"
    :options="(chartOptions as ChartLineOptions)"
  />

  <ChartLine
    v-else
    class="chart-line"
    :data="(chartData as ChartLineData)"
    :options="(chartOptions as ChartLineOptions)"
  />
</template>

<style scoped>
.chart-line {
  @apply p-2 md:p-6 border-2 border-gray-500 rounded-xl w-full shadow-md;
}
</style>
