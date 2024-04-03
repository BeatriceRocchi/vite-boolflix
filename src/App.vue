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
    getApis() {
      // API on movie
      axios
        .get(this.store.apiUrlMovie, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.movieToSearch,
          },
        })
        .then((result) => {
          this.store.moviesList = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        });

      // API on TV series
      axios
        .get(this.store.apiUrlTV, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.movieToSearch,
          },
        })
        .then((result) => {
          let seriesListTemp = [];
          seriesListTemp = result.data.results;
          this.store.seriesTVList = seriesListTemp.map(
            ({ name: title, original_name: original_title, ...rest }) => ({
              title,
              original_title,
              ...rest,
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <Searchbar @searchMovie="getApis" />
  <Main />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
