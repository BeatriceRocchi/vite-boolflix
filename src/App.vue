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
      this.store[type].itemList = [];
      this.store[type].itemFiltered = [];
      axios
        .get(store.apiUrl + type, {
          params: store.queryParams,
        })
        .then((result) => {
          this.store[type].itemList = result.data.results;

          this.filterGenre(this.store[type].itemList, type);

          if (store.researchGenre !== "") {
            this.store[type].itemList = store[type].itemFiltered;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    filterGenre(fullList, type) {
      fullList.forEach((item) => {
        if (item.genre_ids.includes(store.researchGenre)) {
          store[type].itemFiltered.push(item);
        }
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
