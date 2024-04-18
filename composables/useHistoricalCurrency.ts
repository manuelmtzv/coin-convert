export const useHistoricalCurrency = () => {
  const historicalCurrencyStore = useHistoricalCurrencyStore();
  const { fetchHistoricalCurrency } = historicalCurrencyStore;
  const state = storeToRefs(historicalCurrencyStore);

  return {
    ...state,
    fetchHistoricalCurrency,
  };
};
