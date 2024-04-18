<script setup lang="ts">
const { getCurrencyName } = useCurrency();
const { result, reverseConversion, loadingConversion, ...rest } =
  useConversion();

const state = reactive({
  from: rest.from.value,
  to: rest.to.value,
  conversion: 0,
});

const { from, to, conversion } = toRefs(state);

watch(
  loadingConversion,
  (value) => {
    if (value) return;

    state.from = rest.from.value;
    state.to = rest.to.value;
    state.conversion = rest.conversion.value;
  },
  { immediate: true }
);

const formattedResult = computed(() => {
  return {
    shortFormat: !loadingConversion.value
      ? result.value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })
      : "0",
    longFormat: result.value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
    }),
  };
});
</script>

<template>
  <div
    :class="['flex-1 w-full transition-all', loadingConversion && 'blur-sm']"
  >
    <div class="flex flex-col items-center gap-4">
      <h3
        class="text-3xl text-center font-base truncate max-w-[28rem]"
        v-tooltip="`${formattedResult.longFormat} ${to}`"
      >
        {{ formattedResult.shortFormat }} {{ to }}
      </h3>

      <p class="text-lg font-light">1 {{ getCurrencyName(from) }} equals to</p>
      <p>{{ conversion }} {{ getCurrencyName(to) }}</p>

      <BaseButton
        class="px-3 py-1 border border-gray-700"
        @click="reverseConversion"
      >
        Reverse currencies
      </BaseButton>
    </div>
  </div>
</template>
