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

const { from, to } = useConversion();

const { width } = useWindowSize();

const chartData = computed(() => ({
  labels: historicalDates.value,
  datasets: [
    {
      label: `Rates along ${startAt.value} to ${endAt.value}`,
      data: historicalRates.value,
      backgroundColor: "#803D3B",
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: width.value > 1000 ? "x" : "y",
  aspectRatio: width.value > 1000 ? 2 : 0.6,
  plugins: {
    title: {
      color: "#000",
      display: true,
      text: `Historical Currency Rates Conversion from ${from.value} to ${to.value}`,
      font: {
        size: 20,
        family: "Montserrat",
      },
    },
  },
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
    v-if="width > 1000"
    class="chart-line"
    :data="(chartData as ChartLineData)"
    :options="(chartOptions as ChartLineOptions)"
  />
</template>

<style scoped>
.chart-line {
  @apply p-2 md:p-6 border-2 border-gray-500 rounded-xl w-full;
}
</style>
