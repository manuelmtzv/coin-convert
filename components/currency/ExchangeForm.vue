<script setup lang="ts">
const { from, to, amount, amountWarning, setAmount, fetchConversion } =
  useConversion();
import { MAX_AMOUNT_DIGITS } from "~/config/currencyDefaults";

await fetchConversion();
</script>

<template>
  <div class="flex flex-col gap-5 flex-1 w-full">
    <h2 class="text-3xl">Consult currency exchange</h2>
    <BaseInputWrapper :error="amountWarning">
      <BaseInput
        class="text-center text-2xl font-light border-gray-400 py-2 focus:outline-none rounded-xl w-full"
        :model-value="amount"
        @update:model-value="setAmount"
        :maxlength="MAX_AMOUNT_DIGITS"
        type="text"
      />
    </BaseInputWrapper>

    <fieldset class="flex items-center gap-4">
      <CurrencySelect label="From:" v-model="from" :omits="[to]" />

      <CurrencySelect label="To:" v-model="to" :omits="[from]" />
    </fieldset>
  </div>
</template>
