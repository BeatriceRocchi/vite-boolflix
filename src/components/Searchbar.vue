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
  <header class="d-flex align-items-center justify-content-between p-3">
    <!-- Logo Boolflix -->
    <img
      class="logo"
      src="../assets/img/logo_Boolflix.png"
      alt="Logo Boolflix"
    />

    <!-- Searchbar -->
    <div class="d-flex align-items-center h-100">
      <!-- Searchbar: input film title -->
      <input
        type="text"
        class="form-control me-3"
        placeholder="Cerca un titolo..."
        aria-label="Movie name"
        v-model="store.queryParams.query"
      />

      <!-- Searchbar: select movies and/or TV series -->
      <select
        v-model="store.researchType"
        class="form-select me-3"
        aria-label="Type of search"
      >
        <option selected value="">All</option>
        <option value="movie">Film</option>
        <option value="tv">Serie TV</option>
      </select>

      <!-- Searchbar: select genre -->
      <select
        v-model="store.researchGenre"
        class="form-select me-3"
        aria-label="Type of genre"
      >
        <option selected value="">All</option>

        <option
          v-show="store.researchType === 'movie' || store.researchType === ''"
          v-for="genre in store.movie.genresList"
          :key="genre.id"
          :value="genre.id"
        >
          {{ genre.name }}
        </option>
        <option
          v-show="store.researchType === 'tv' || store.researchType === ''"
          v-for="genre in store.tv.genresList"
          :key="genre.id"
          :value="genre.id"
        >
          {{ genre.name }}
        </option>
      </select>

      <!-- Searchbar: search icon and button -->
      <button @click="$emit('searchMovie')" class="btn btn_custom me-2">
        Cerca
      </button>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
header {
  background-color: $color-black;
  height: 10vh;

  .logo {
    height: 45px;
  }

  input {
    width: fit-content;
  }

  .fa-magnifying-glass {
    line-height: 100%;
  }
}
</style>
