<script>
import Searchbar from "./components/Searchbar.vue";
import CardContainer from "./components/CardContainer.vue";
import { store } from "./data/store";
import axios from "axios";

export default {
  components: {
    Searchbar,

    CardContainer,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getPopularMovie() {
      axios
        .get(store.apiUrlPopolarMovie, {
          params: store.queryParamsPopular,
        })
        .then((result) => {
          store.popularMoviesList = result.data.results;
        });
    },

    reset(type) {
      this.store[type].currentPage = 1;
    },

    getApi(type) {
      this.store[type].itemList = [];
      this.store[type].itemFiltered = [];
      this.store.popularMoviesList = [];
      this.store.queryParams.page = this.store[type].currentPage;

      axios
        .get(store.apiUrl + type, {
          params: store.queryParams,
        })
        .then((result) => {
          this.store[type].currentPage = result.data.page;
          this.store[type].totalPages = result.data.total_pages;
          this.store[type].itemList = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getAllGenre(type) {
      axios
        .get(store.apiUrlGenre + type + "/list", {
          params: store.queryParamsGenre,
        })
        .then((result) => {
          this.store[type].genresList = result.data.genres;
        });
    },
  },

  mounted() {
    this.getAllGenre("movie");
    this.getAllGenre("tv");
    this.getPopularMovie();
  },
};
</script>

<template>
  <Searchbar
    @searchMovie="reset('movie'), reset('tv'), getApi('movie'), getApi('tv')"
  />

  <CardContainer
    v-if="store.popularMoviesList.length > 0"
    :searchType="'movie'"
  />

  <div v-else>
    <CardContainer
      @changePage="getApi('movie')"
      v-if="store.researchType === 'movie' || store.researchType === ''"
      :searchType="'movie'"
    />
    <CardContainer
      @changePage="getApi('tv')"
      v-if="store.researchType === 'tv' || store.researchType === ''"
      :searchType="'tv'"
    />
  </div>
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
