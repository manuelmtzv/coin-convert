import type { HistoricalCurrencyResponse } from "~/interfaces/HistoricalCurrencyResponse";
import moment from "moment";

export const useHistoricalCurrencyStore = defineStore(
  "historicalCurrency",
  () => {
    const historicalDates = ref<string[]>([]);
    const historicalRates = ref<number[]>([]);
    // const startAt = ref(moment().subtract(3, "month").format("YYYY-MM-DD"));
    const startAt = ref(moment().subtract(3, "year").format("YYYY-MM-DD"));
    const endAt = ref(moment().format("YYYY-MM-DD"));

    const conversionStore = useConversionStore();

    const fetchHistoricalCurrency = async () => {
      const data = await $fetch<HistoricalCurrencyResponse>(
        `https://api.frankfurter.app/${startAt.value}..${endAt.value}?from=${conversionStore.from}&to=${conversionStore.to}`
      );

      if (data) {
        setHistoricalRecords(data);
      }
    };

    const setHistoricalRecords = (response: HistoricalCurrencyResponse) => {
      historicalDates.value = Object.keys(response.rates);

      historicalRates.value = Object.values(response.rates).map((rate) => {
        return rate[conversionStore.to];
      });
    };

    watch([startAt, endAt], fetchHistoricalCurrency);

    return {
      startAt,
      endAt,
      historicalDates,
      historicalRates,
      fetchHistoricalCurrency,
    };
  }
);
