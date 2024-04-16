export const useCurrency = () => {
  const currencyStore = useCurrencyStore();
  const { fetchCurrencies } = currencyStore;
  const state = storeToRefs(currencyStore);

  return {
    ...state,
    fetchCurrencies,
  };
};
