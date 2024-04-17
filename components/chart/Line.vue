<script setup lang="ts">
import { Line } from "vue-chartjs";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";

export type ChartLineOptions = ChartOptions<"line">;
export type ChartLineData = ChartData<"line">;

export interface ChartLineProps {
  data: ChartLineData;
  options: ChartLineOptions;
}

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defineProps<ChartLineProps>();
</script>

<template>
  <Line :data="data" :options="options" />
</template>
