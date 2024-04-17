<script setup lang="ts">
// const { from, to, amount, result, setAmount, fetchConversion } =
//   useConversion();

// await fetchConversion();
</script>

<template>
  <div>
    <!-- <div>Hello, Coin Convert!</div>

    <CurrencySelect label="From" v-model="from" :omits="[to]" />
    <CurrencySelect label="To" v-model="to" :omits="[from]" />

    <input
      :value="amount"
      type="text"
      @input="setAmount(($event.target as HTMLInputElement).value)"
    />

    <p>First result: {{ result }}</p> -->

    <CurrencyExchangeForm />
  </div>
</template>
