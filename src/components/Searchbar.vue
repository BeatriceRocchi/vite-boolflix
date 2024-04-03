<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div id="searchbar">Searchbar</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
#searchbar {
  display: flex;
  align-items: center;
  background-color: $color-black;
  height: 10vh;
}
</style>
