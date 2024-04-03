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
  <div id="searchbar" class="d-flex align-items-center justify-content-end p-3">
    <input
      type="text"
      class="form-control mx-3"
      placeholder="Cerca un titolo..."
      aria-label="Movie name"
      v-model="store.movieToSearch"
    />
    <button @click="$emit('searchMovie')" class="btn btn-danger">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
#searchbar {
  background-color: $color-black;
  height: 10vh;

  input {
    width: 40%;
  }
}
</style>
