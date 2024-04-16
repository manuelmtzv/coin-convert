<script setup lang="ts">
const { from, to, amount, result, setAmount } = useConversion();
</script>

<template>
  <div>Hello, Coin Convert!</div>

  <CurrencySelect label="From" v-model="from" />
  <CurrencySelect label="To" v-model="to" />

  <input
    :value="amount"
    type="text"
    @input="setAmount(($event.target as HTMLInputElement).value)"
  />

  <p>First result: {{ result }}</p>
</template>
