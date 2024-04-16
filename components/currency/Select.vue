<script setup lang="ts">
interface CurrencySelectProps {
  modelValue: string;
  label: string;
  omit?: string[];
}

interface CurrencySelectEmits {
  (event: "update:modelValue", value: string): void;
}

const { currencies, fetchCurrencies } = useCurrency();

const props = defineProps<CurrencySelectProps>();
const emit = defineEmits<CurrencySelectEmits>();

await fetchCurrencies();
</script>

<template>
  <label for="currency">
    {{ label }}
    <select
      id="currency"
      :value="props.modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-for="currency in currencies" :key="currency" :value="currency">
        {{ currency }}
      </option>
    </select>
  </label>
</template>
