import type { CurrencyListResponse } from "~/interfaces/CurrecyListResponse";

export const useCurrencyStore = defineStore("currenciesStore", () => {
  const currenciesObject = ref<CurrencyListResponse>({});
  const currencies = computed(() => Object.keys(currenciesObject.value));

  const fetchCurrencies = async () => {
    const response = await useFetch<CurrencyListResponse>(
      "https://api.frankfurter.app/currencies"
    );
    const data = response.data.value;

    if (data) {
      currenciesObject.value = data;
    }
  };

  const getCurrencyName = (currency: string) => {
    return currenciesObject.value[currency];
  };

  return {
    currencies,
    fetchCurrencies,
    getCurrencyName,
  };
});
