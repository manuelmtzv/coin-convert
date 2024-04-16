import type { CurrencyConversionResponse } from "~/interfaces/CurrencyConversionResponse";

export const useConversionStore = defineStore("conversionStore", () => {
  const from = ref("USD");
  const to = ref("MXN");
  const amount = ref(1);
  const result = ref(0);

  const fetchConversion = async () => {
    const response = await useFetch<CurrencyConversionResponse>(
      "https://api.frankfurter.app/latest",
      {
        params: {
          from: from.value,
          to: to.value,
        },
      }
    );
    const data = response.data.value;

    if (data) {
      result.value = data.rates[to.value] * amount.value;
    }
  };

  const localConversion = () => {};

  watch([from, to], fetchConversion);

  return {
    from,
    to,
    amount,
    result,
    fetchConversion,
  };
});
