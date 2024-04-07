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
  methods: {
    nextPage(isNext, type) {
      isNext ? store[type].currentPage++ : store[type].currentPage--;
      this.$emit("changePage");
    },
  },
};
</script>

<template>
  <main>
    <div class="container container_custom">
      <!-- Popular movie section -->
      <div v-if="store[searchType].itemList.length === 0">
        <h3 class="text-capitalize">Most popular</h3>
        <div class="row row-cols-5 justify-content-center">
          <Card
            v-for="popularMovie in store.popularMoviesList"
            :key="popularMovie.id"
            :movieObject="popularMovie"
          />
        </div>
      </div>

      <!-- Searched movie/serie TV section -->
      <h3 v-if="store[searchType].itemList.length > 0" class="text-capitalize">
        {{ title }}
      </h3>
      <div class="row row-cols-5 justify-content-center">
        <Card
          v-for="movie in store[searchType].itemList"
          :key="movie.id"
          :movieObject="movie"
        />
      </div>

      <!-- Paginazaione -->
      <div
        v-if="store[searchType].itemList.length > 0"
        class="d-flex justify-content-center align-items-center"
      >
        <i
          v-if="store[searchType].currentPage > 1"
          @click="nextPage(false, searchType)"
          class="fa-solid fa-angles-left"
        ></i>
        <div class="m-3">
          Pagina {{ store[searchType].currentPage }} di
          {{ store[searchType].totalPages }}
        </div>
        <i
          v-if="store[searchType].currentPage < store[searchType].totalPages"
          @click="nextPage(true, searchType)"
          class="fa-solid fa-angles-right"
        ></i>
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
