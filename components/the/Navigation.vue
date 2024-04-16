<template>
  <nav class="flex items-center gap-4">
    <nuxt-link to="/">
      <Icon name="uil:home-alt" color="black" size="1.5rem" />
    </nuxt-link>

    <nuxt-link to="/about">
      <Icon name="uil:info-circle" color="black" size="1.5rem" />
    </nuxt-link>

    <nuxt-link to="https://www.frankfurter.app/" target="_blank">
      <figure
        class="inline-flex items-center gap-2 px-2 py-1 rounded-lg border-2 border-gray-600 hover:border-gray-800 transition-colors duration-300"
      >
        Currency API
        <Icon name="uil:server" color="black" size="1.5rem" />
      </figure>
    </nuxt-link>
  </nav>
</template>

<style scoped></style>
