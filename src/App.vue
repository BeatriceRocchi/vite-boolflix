<script>
import Searchbar from "./components/Searchbar.vue";
import Main from "./components/Main.vue";
import { store } from "./data/store";
import axios from "axios";

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
  methods: {
    getApi(type) {
      axios
        .get(store.apiUrl + type, {
          params: store.queryParams,
        })
        .then((result) => {
          this.store[type] = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getAllGenre() {
      axios
        .get(store.apiUrlGenre, {
          params: store.queryParamsGenre,
        })
        .then((result) => {
          this.store.genresList = result.data.genres;
        });
    },
  },

  mounted() {
    this.getAllGenre();
  },
};
</script>

<template>
  <Searchbar @searchMovie="getApi('movie'), getApi('tv')" />
  <Main
    v-if="store.researchType === 'movie' || store.researchType === ''"
    :searchType="'movie'"
  />
  <Main
    v-if="store.researchType === 'tv' || store.researchType === ''"
    :searchType="'tv'"
  />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
