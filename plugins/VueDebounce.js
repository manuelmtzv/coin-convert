import vueDebounce from "vue-debounce";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueDebounce);
});
