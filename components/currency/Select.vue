<script setup lang="ts">
interface CurrencySelectProps {
  modelValue: string;
  label: string;
  default?: string;
  omits?: string[];
}

interface CurrencySelectEmits {
  (event: "update:modelValue", value: string): void;
}

const { currencies, fetchCurrencies } = useCurrency();

const props = withDefaults(defineProps<CurrencySelectProps>(), {
  default: "USD",
  omits: () => [],
});
const emit = defineEmits<CurrencySelectEmits>();

const displayCurrencies = computed(() => {
  return currencies.value.filter(
    (currency) => !props.omits?.includes(currency)
  );
});

await fetchCurrencies();
</script>

<template>
  <label for="currency">
    {{ label }}
    {{ modelValue }}
    <select
      id="currency"
      :value="props.modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option
        v-for="currency in displayCurrencies"
        :key="currency"
        :value="currency"
        :selected="currency === props.modelValue"
      >
        {{ currency }}
      </option>
    </select>
  </label>
</template>
