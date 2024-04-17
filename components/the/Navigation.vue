<template>
  <nav class="flex items-center gap-4">
    <nuxt-link to="https://github.com/manuelmtzv/coin-convert" target="_blank">
      <Icon name="uil:github" color="black" size="1.5rem" />
    </nuxt-link>

    <nuxt-link to="https://www.frankfurter.app/" target="_blank">
      <figure
        class="inline-flex items-center gap-2 px-1 md:px-2 py-1 rounded-lg border-2 border-gray-600 hover:border-gray-800 transition-colors duration-300"
      >
        <span class="hidden md:block">Currency API</span>
        <Icon name="uil:server" color="black" size="1.5rem" />
      </figure>
    </nuxt-link>
  </nav>
</template>

<style scoped></style>
