export const useConversion = () => {
  const conversionStore = useConversionStore();

  const { fetchConversion, setAmount } = conversionStore;
  const state = storeToRefs(conversionStore);

  return {
    ...state,
    fetchConversion,
    setAmount,
  };
};
