import type { HistoricalCurrencyResponse } from "~/interfaces/HistoricalCurrencyResponse";
import moment from "moment";

export const useHistoricalCurrencyStore = defineStore(
  "historicalCurrency",
  () => {
    const historicalDates = ref<string[]>([]);
    const historicalRates = ref<number[]>([]);
    const startAt = ref("1999-01-04");
    const endAt = ref(moment().format("YYYY-MM-DD"));

    const conversionStore = useConversionStore();

    const fetchHistoricalCurrency = async () => {
      const response = await useFetch<HistoricalCurrencyResponse>(
        `https://api.frankfurter.app/${startAt.value}..${endAt.value}?from=${conversionStore.from}&to=${conversionStore.to}`
      );

      const data = response.data.value;

      if (data) {
        historicalDates.value = Object.keys(data.rates);

        historicalRates.value = Object.values(data.rates).map((rate) => {
          return rate[conversionStore.to];
        });
      }
    };

    return {
      startAt,
      endAt,
      historicalDates,
      historicalRates,
      fetchHistoricalCurrency,
    };
  }
);
