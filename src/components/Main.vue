<script>
import { store } from "../data/store";
import Card from "./partials/Card.vue";

export default {
  props: {
    searchType: String,
  },
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    title() {
      return this.searchType === "movie" ? "film" : "serie TV";
    },
  },
};
</script>

<template>
  <main>
    <div class="container container_custom">
      <h3 class="text-capitalize">{{ title }}</h3>
      <div class="card_wrapper d-flex flex-wrap justify-content-around">
        <Card
          v-for="movie in store[searchType]"
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
    padding: 30px 0;
  }
}
</style>
