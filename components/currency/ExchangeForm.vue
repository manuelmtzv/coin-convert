<script setup lang="ts">
const { getCurrencyName } = useCurrency();
const {
  from,
  to,
  amount,
  result,
  setAmount,
  conversion,
  fetchConversion,
  reverseConversion,
} = useConversion();

await fetchConversion();
</script>

<template>
  <div
    class="flex flex-col md:flex-row border-2 items-center border-gray-600 p-5 rounded-xl shadow-md max-w-5xl mx-auto gap-1 w-full"
  >
    <div class="flex flex-col gap-5 flex-1 w-full">
      <h2 class="text-3xl">Consult currency exchange</h2>
      <BaseInput
        class="text-center text-2xl font-light border-gray-400 py-2 focus:outline-none rounded-xl"
        :model-value="amount"
        @update:model-value="setAmount"
        type="text"
      />

      <fieldset class="flex items-center gap-4">
        <CurrencySelect label="From:" v-model="from" :omits="[to]" />

        <CurrencySelect label="To:" v-model="to" :omits="[from]" />
      </fieldset>
    </div>

    <div class="flex-1 w-full">
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl text-center font-base truncate">
          {{ result.toLocaleString() }} {{ to }}
        </h3>

        <p class="text-lg font-light">
          1 {{ getCurrencyName(from) }} equals to
        </p>
        <p>{{ conversion }} {{ getCurrencyName(to) }}</p>

        <BaseButton
          class="px-3 py-1 border border-gray-700"
          @click="reverseConversion"
        >
          Reverse currencies
        </BaseButton>
      </div>
    </div>
  </div>
</template>
