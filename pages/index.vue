<script setup lang="ts">
const conversioStore = useConversionStore();
const { result } = storeToRefs(useConversionStore());

await conversioStore.fetchConversion();
</script>

<template>
  <div>Hello, Coin Convert!</div>

  <p>First result: {{ result }}</p>
</template>
