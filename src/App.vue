<script>
import Searchbar from "./components/Searchbar.vue";
import Main from "./components/Main.vue";
import { store } from "./data/store";

export default {
  components: {
    Searchbar,
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
  <Searchbar />
  <Main />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
