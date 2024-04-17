<script setup lang="ts">
const chartData = ref({
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Rates along timeline",
      data: [40, 20, 12],
      backgroundColor: "#803D3B",
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
});
</script>

<template>
  <div class="p-6 border-2 border-gray-500 rounded-xl">
    <ChartLine :data="chartData" :options="chartOptions" />
  </div>
</template>
