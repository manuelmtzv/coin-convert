<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import moment from "moment";
import { MIN_DATE, MAX_YEARS } from "~/config/currencyDefaults";

const { startAt, endAt, resetDates } = useHistoricalCurrency();

type DateTarget = "startAt" | "endAt";

const updateDate = (target: DateTarget, date?: Date) => {
  if (target === "startAt") {
    startAt.value = moment(date).format("YYYY-MM-DD");
  } else {
    endAt.value = date ? moment(date).format("YYYY-MM-DD") : undefined;
  }
};

const limitRanges = computed(() => ({
  start: {
    min: endAt.value
      ? moment(endAt.value).subtract(MAX_YEARS, "year").toDate()
      : MIN_DATE,
    max: new Date(),
  },
  end: {
    min: startAt.value,
    max: moment(moment(startAt.value).add(MAX_YEARS, "year")).isBefore(
      new Date()
    )
      ? moment(startAt.value).add(MAX_YEARS, "year").toDate()
      : new Date(),
  },
}));
</script>

<template>
  <div class="flex items-end gap-4">
    <div class="date-input">
      <p>Start Date:</p>

      <VueDatePicker
        :model-value="startAt"
        @update:model-value="(date: Date) => updateDate('startAt', date)"
        required
        auto-apply
        :min-date="limitRanges.start.min"
        :max-date="limitRanges.end.max"
        format="yyyy-MM-dd"
        :enable-time-picker="false"
        timezone="UTC"
        :clearable="false"
        prevent-min-max-navigation
        focus-start-date
      />
    </div>

    <div class="date-input">
      <p>End Date:</p>

      <VueDatePicker
        :model-value="endAt"
        @update:model-value="(date?: Date) => updateDate('endAt', date)"
        auto-apply
        :min-date="limitRanges.end.min"
        :max-date="limitRanges.end.max"
        :start-date="endAt ?? limitRanges.end.max"
        format="yyyy-MM-dd"
        :enable-time-picker="false"
        timezone="UTC"
        prevent-min-max-navigation
        focus-start-date
      />
    </div>

    <BaseButton
      class="py-1.5 px-2.5 bg-slate-800"
      v-tooltip="'Reiniciar fechas'"
      @click="resetDates"
    >
      <Icon name="uil:redo" class="text-white" />
    </BaseButton>
  </div>
</template>

<style scoped>
.date-input {
  @apply flex flex-col gap-2 w-full z-0;
}

.date-input p {
  @apply text-sm font-light;
}
</style>
