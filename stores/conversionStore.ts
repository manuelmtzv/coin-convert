import type { CurrencyConversionResponse } from "~/interfaces/CurrencyConversionResponse";
import { useClamp } from "@vueuse/math";
import { MIN_AMOUNT, MAX_AMOUNT } from "~/config/currencyDefaults";

export const useConversionStore = defineStore("conversionStore", () => {
  const from = ref("USD");
  const to = ref("MXN");
  const amount = ref(1);
  const conversion = ref(0);
  const result = ref(0);
  const loadingConversion = ref(false);

  const amountWarning = ref<string | undefined>(undefined);

  const setAmount = (value: number | string) => {
    if (!value) value = 0;

    if (typeof value === "string") {
      const parsed = Number(value);

      if (!isNaN(parsed)) {
        value = parsed;
        amountWarning.value = undefined;
      } else {
        amountWarning.value = "Please make sure to enter a valid amount.";
        return;
      }
    }

    amount.value =
      value != 0 ? useClamp(value, MIN_AMOUNT, Number(MAX_AMOUNT)).value : 0;
  };

  const fetchConversion = async () => {
    loadingConversion.value = true;

    const data = await $fetch<CurrencyConversionResponse>(
      "https://api.frankfurter.app/latest",
      {
        params: {
          from: from.value,
          to: to.value,
        },
      }
    );

    loadingConversion.value = false;

    if (data) {
      conversion.value = +data.rates[to.value];
      localConversion();
    }
  };

  const localConversion = () => {
    result.value = amount.value * conversion.value;
  };

  const reverseConversion = () => {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
  };

  watch([from, to], fetchConversion);

  watch([amount], localConversion, { deep: true });

  return {
    from,
    to,
    amount,
    amountWarning,
    conversion,
    result,
    setAmount,
    fetchConversion,
    reverseConversion,
    loadingConversion,
  };
});
