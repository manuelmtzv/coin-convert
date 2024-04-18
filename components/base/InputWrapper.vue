<script setup lang="ts">
import { cn } from "#imports";

interface InputWrapperProps {
  label?: string;
  error?: string;
  class?: string;
  labelClass?: string;
  errorClass?: string;
}

defineProps<InputWrapperProps>();
</script>

<template>
  <label :class="cn('flex flex-col gap-2', $props.class)">
    <p v-if="label" :class="cn('', labelClass)">{{ label }}</p>

    <slot />

    <span v-if="error" :class="cn('text-red-500 text-sm', errorClass)">{{
      error
    }}</span>
  </label>
</template>
