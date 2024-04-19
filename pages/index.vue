<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-6 mb-6">
    <section
      class="flex flex-col lg:flex-row items-center justify-center gap-6 lg:px-14 py-6 md:py-10"
    >
      <figure class="hidden lg:block">
        <img src="~/assets/imgs/exchange.png" alt="" class="max-w-40" />
      </figure>

      <div class="grid gap-6">
        <h1 class="text-3xl md:text-4xl font-bold">Currency Exchange</h1>

        <div class="grid gap-2 text-lg md:text-xl font-light text-justify">
          <p>
            This is a simple currency exchange application, made with Nuxt 3 and
            the Frankfurter open-source API to get the latest exchange rates.
            You can get access to a wide range of currencies and rates published
            by the European Central Bank.
          </p>
          <p>
            You can also generate some charts to see the historical records of a
            currency over time.
          </p>
        </div>
      </div>
    </section>

    <hr />

    <CurrencyExchangeSection />

    <hr />

    <CurrencyHistoricalSection />
  </div>
</template>
