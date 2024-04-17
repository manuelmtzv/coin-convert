<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

interface BaseInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  modelValue: unknown;
  class?: string;
  onUpdate?: (value: string) => void;
}

interface BaseInputEmits {
  (event: "update:modelValue", value: string): void;
}

const props = defineProps<BaseInputProps>();
const emit = defineEmits<BaseInputEmits>();

const onInput = (value: string) => {
  emit("update:modelValue", value);
  if (props.onUpdate) props.onUpdate(value);
};
</script>

<template>
  <input
    v-bind="props"
    :value="modelValue"
    :class="cn('px-2 py-1 border rounded-md', props.class)"
    @input="onInput(($event.target as HTMLInputElement).value)"
  />
</template>
