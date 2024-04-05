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
      <div class="row row-cols-5 justify-content-center">
        <Card
          v-for="movie in store[searchType].itemList"
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
  .container_custom {
    padding: 30px 0;
  }
}
</style>
