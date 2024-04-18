<script setup lang="ts">
import "@vuepic/vue-datepicker/dist/main.css";
import "floating-vue/dist/style.css";
import moment from "moment";

moment.locale();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
