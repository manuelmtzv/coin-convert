export const useCurrency = () => {
  const currencyStore = useCurrencyStore();
  const { fetchCurrencies, getCurrencyName } = currencyStore;
  const state = storeToRefs(currencyStore);

  return {
    ...state,
    fetchCurrencies,
    getCurrencyName,
  };
};
