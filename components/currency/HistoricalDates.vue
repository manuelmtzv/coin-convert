<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import moment from "moment";

const { startAt, endAt } = useHistoricalCurrency();
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="date-input">
      <p>Start Date:</p>

      <VueDatePicker
        :model-value="startAt"
        @update:model-value="(date: Date) => startAt = moment(date).format('YYYY-MM-DD')"
        required
        auto-apply
        :min-date="'1999-01-04'"
        :max-date="new Date()"
        format="yyyy-MM-dd"
        :enable-time-picker="false"
        timezone="UTC"
        :clearable="false"
      />
    </div>

    <div class="date-input">
      <p>End Date:</p>

      <VueDatePicker
        :model-value="endAt"
        @update:model-value="(date: Date) => endAt = moment(date).format('YYYY-MM-DD')"
        auto-apply
        :min-date="startAt"
        :max-date="new Date()"
        format="yyyy-MM-dd"
        :enable-time-picker="false"
        timezone="UTC"
      />
    </div>
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
