<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import type {
  ChartLineData,
  ChartLineOptions,
} from "~/components/chart/Line.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import moment from "moment";

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
  aspectRatio: width.value > 1000 ? 2 : 0.9,
  plugins: {
    title: {
      color: "#000",
      display: true,
      text: "Historical Currency Rates",
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
  <div class="flex items-center gap-4">
    <VueDatePicker
      timezone="UTC"
      :model-value="startAt"
      @update:modelValue="(date: Date) => moment(date).format('YYYY-MM-DD')"
      required
      auto-apply
      :min-date="'1999-01-04'"
      :max-date="new Date()"
      format="yyyy-MM-dd"
      :enable-time-picker="false"
      :clearable="false"
    />

    <VueDatePicker
      timezone="UTC"
      v-model="endAt"
      @update:modelValue="(date: Date) => moment(date).format('YYYY-MM-DD')"
      auto-apply
      :enable-time-picker="false"
      :min-date="startAt"
      :max-date="new Date()"
      format="yyyy-MM-dd"
    />
  </div>

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
  @apply p-2 md:p-6 border-2 border-gray-500 rounded-xl;
}
</style>
