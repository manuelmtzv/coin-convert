import type { HistoricalCurrencyResponse } from "~/interfaces/HistoricalCurrencyResponse";
import moment from "moment";

export const useHistoricalCurrencyStore = defineStore(
  "historicalCurrency",
  () => {
    const historicalDates = ref<string[]>([]);
    const historicalRates = ref<number[]>([]);
    const startAt = ref<string>(
      moment().subtract(3, "month").format("YYYY-MM-DD")
    );
    const endAt = ref<string | undefined>(moment().format("YYYY-MM-DD"));

    const { from, to } = useConversion();

    const fetchHistoricalCurrency = async () => {
      const data = await $fetch<HistoricalCurrencyResponse>(
        `https://api.frankfurter.app/${startAt.value}..${
          endAt.value ?? ""
        }?from=${from.value}&to=${to.value}`
      );

      if (data) {
        setHistoricalRecords(data);
      }
    };

    const setHistoricalRecords = (response: HistoricalCurrencyResponse) => {
      const { rates } = response;
      let dates = Object.keys(rates);
      let values = Object.values(rates).map((rate) => {
        return rate[to.value];
      });

      if (yearsBetween.value >= 3) {
        const { datesCollection, ratesCollection } = reduceHistorcialCurrency(
          dates,
          values
        );

        dates = datesCollection;
        values = ratesCollection;
      }

      historicalDates.value = dates;
      historicalRates.value = values;
    };

    const resetDates = () => {
      startAt.value = moment().subtract(3, "month").format("YYYY-MM-DD");
      endAt.value = moment().format("YYYY-MM-DD");
    };

    const historicalStats = computed(() => {
      if (!historicalRates.value.length) return undefined;

      const rates = [...historicalRates.value];

      return {
        min: Math.min(...rates),
        max: Math.max(...rates),
        avg: rates.reduce((a, b) => a + b, 0) / rates.length,
        median: rates.sort((a, b) => a - b)[Math.floor(rates.length / 2)],
      };
    });

    const yearsBetween = computed(() => {
      return moment(endAt.value).diff(moment(startAt.value), "years");
    });

    watch([from, to, startAt, endAt], fetchHistoricalCurrency);

    return {
      startAt,
      endAt,
      historicalDates,
      historicalRates,
      historicalStats,
      fetchHistoricalCurrency,
      resetDates,
    };
  }
);
