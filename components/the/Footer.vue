<script setup lang="ts"></script>

<template>
  <footer class="py-6 border-t">
    <BaseContainer class="flex items-center justify-between gap-4">
      <p class="text-sm flex-1">
        &copy; {{ new Date().getFullYear() }} Coin Convert
      </p>

      <p class="text-right text-sm flex-1">
        Made by
        <nuxt-link
          class="underline underline-offset-4 transition-colors duration-300 hover:text-gray-800"
          to="https://github.com/manuelmtzv"
          target="_blank"
          >Manuel Martínez</nuxt-link
        >
        with ❤️
      </p>
    </BaseContainer>
  </footer>
</template>
