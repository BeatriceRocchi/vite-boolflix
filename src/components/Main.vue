<script>
import { store } from "../data/store";
import Card from "./partials/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div class="container container_custom">
      <div class="card_wrapper d-flex flex-wrap justify-content-around">
        <Card
          v-for="movie in store.moviesList"
          :key="movie.id"
          :movieObject="movie"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

main {
  background-color: lighten($color-black, 30%);
  height: 90vh;
  overflow-y: auto;

  .container_custom {
    width: 95%;
  }
}
</style>
