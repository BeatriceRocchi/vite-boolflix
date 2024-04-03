<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { store } from "./data/store";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
