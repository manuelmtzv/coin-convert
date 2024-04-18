import type { CurrencyConversionResponse } from "~/interfaces/CurrencyConversionResponse";
import { debounce } from "vue-debounce";

export const useConversionStore = defineStore("conversionStore", () => {
  const from = ref("USD");
  const to = ref("MXN");
  const amount = ref(1);
  const conversion = ref(0);
  const result = ref(0);
  const loadingConversion = ref(false);

  const setAmount = debounce((value: number | string) => {
    if (!value) value = 0;

    if (typeof value === "string") {
      const cleanValue = value.replaceAll(/\D/g, "");
      value = parseFloat(cleanValue);
    }

    amount.value = value;
  }, 50);

  const fetchConversion = async () => {
    loadingConversion.value = true;

    const data = await $fetch<CurrencyConversionResponse>(
      "https://api.frankfurter.app/latest",
      {
        params: {
          from: from.value,
          to: to.value,
        },
      }
    );

    loadingConversion.value = false;

    if (data) {
      conversion.value = +data.rates[to.value] * amount.value;
      localConversion();
    }
  };

  const localConversion = () => {
    result.value = amount.value * conversion.value;
  };

  const reverseConversion = () => {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
  };

  watch([from, to], fetchConversion);

  watch([amount], localConversion, { deep: true });

  return {
    from,
    to,
    amount,
    conversion,
    result,
    setAmount,
    fetchConversion,
    reverseConversion,
    loadingConversion,
  };
});
