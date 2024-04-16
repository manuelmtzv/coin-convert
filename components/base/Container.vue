<script setup lang="ts">
interface ContainerProps {
  class?: string;
}

defineProps<ContainerProps>();
</script>

<template>
  <div :class="cn('container mx-auto px-4', $props.class)">
    <slot />
  </div>
</template>
