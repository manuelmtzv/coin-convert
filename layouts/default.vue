<template>
  <div class="app">
    <TheHeader />

    <BaseContainer class="flex-1 h-full my-4">
      <slot />
    </BaseContainer>

    <TheFooter />
  </div>
</template>
