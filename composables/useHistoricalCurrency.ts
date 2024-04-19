export const useHistoricalCurrency = () => {
  const historicalCurrencyStore = useHistoricalCurrencyStore();
  const { fetchHistoricalCurrency, resetDates } = historicalCurrencyStore;
  const state = storeToRefs(historicalCurrencyStore);

  return {
    ...state,
    fetchHistoricalCurrency,
    resetDates,
  };
};
