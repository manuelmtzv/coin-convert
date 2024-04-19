<script setup>
const { historicalStats, fetchHistoricalCurrency } = useHistoricalCurrency();

function formatStat(stat) {
  if (!stat) return null;

  return stat.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
}

const formattedStates = computed(() => {
  const stats = historicalStats.value;

  return {
    min: formatStat(stats?.min),
    max: formatStat(stats?.max),
    avg: formatStat(stats?.avg),
    median: formatStat(stats?.median),
  };
});

await fetchHistoricalCurrency();
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="stat">
      <p class="font-semibold">Min:</p>
      <span class="stat-value">{{ formattedStates?.min }}</span>
    </div>

    <div class="stat">
      <p class="font-semibold">Max:</p>
      <span class="stat-value">{{ formattedStates?.max }}</span>
    </div>

    <div class="stat">
      <p class="font-semibold">Average:</p>
      <span class="stat-value">{{ formattedStates?.avg }}</span>
    </div>

    <div class="stat">
      <p class="font-semibold">Median:</p>
      <span class="stat-value">{{ formattedStates?.median }}</span>
    </div>
  </div>
</template>

<style scoped>
.stat {
  @apply flex items-center gap-2 justify-center;
}
.stat-value {
  @apply truncate;
}
</style>
