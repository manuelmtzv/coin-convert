<script setup lang="ts">
interface BaseButtonProps {
  class?: string;
}

const props = defineProps<BaseButtonProps>();
</script>

<template>
  <button
    v-bind="props"
    :class="
      cn(
        'bg-transparent px-4 py-2 rounded-md border transition-all duration-300',
        props.class
      )
    "
    type="button"
  >
    <slot />
  </button>
</template>
