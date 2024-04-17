export const useConversion = () => {
  const conversionStore = useConversionStore();

  const { fetchConversion, setAmount, reverseConversion } = conversionStore;
  const state = storeToRefs(conversionStore);

  return {
    ...state,
    setAmount,
    reverseConversion,
    fetchConversion,
  };
};
