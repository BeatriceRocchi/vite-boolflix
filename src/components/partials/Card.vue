<script>
import axios from "axios";
import { store } from "../../data/store";
import InfoBox from "./InfoBox.vue";

export default {
  components: {
    InfoBox,
  },
  data() {
    return {
      isFlagLoaded: true,
      isImgLoaded: true,
      store,
    };
  },
  props: {
    movieObject: Object,
  },
  methods: {
    getImagePath(image) {
      return new URL(`../../assets/img-flags/${image}.svg`, import.meta.url)
        .href;
    },

    calcVoteInStars() {
      return Math.round(this.movieObject.vote_average / 2);
    },

    matchCodeToGenre(movieGenreCodes) {
      let movieGenres = [];
      movieGenreCodes.forEach((genreCode) => {
        let genreMovieFounded = this.store.movie.genresList.find((item) => {
          return item.id === genreCode;
        });

        if (genreMovieFounded) {
          movieGenres.push(genreMovieFounded.name);
        }

        let genreTVFounded = this.store.tv.genresList.find((item) => {
          return item.id === genreCode;
        });

        if (genreTVFounded && !movieGenres.includes(genreTVFounded.name)) {
          movieGenres.push(genreTVFounded.name);
        }
      });
      return movieGenres.join(", ");
    },

    getMainActors(id) {
      store.mainActors = [];
      store.queryParamsCredits.movie_id = id;
      axios
        .get(store.apiUrlCredits + id + "/credits", {
          params: store.queryParamsCredits,
        })
        .then((result) => {
          if (result.data.cast.length > 0)
            for (let i = 0; i < 5; i++) {
              if (result.data.cast[i])
                store.mainActors[i] = result.data.cast[i];
            }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div
    v-if="
      movieObject.genre_ids.includes(store.researchGenre) ||
      store.researchGenre === ''
    "
    class="col custom_card p-0"
  >
    <!-- Card front -->
    <div class="custom_card_front">
      <div v-if="isImgLoaded">
        <img
          :src="`https://image.tmdb.org/t/p/w342/${movieObject.poster_path}`"
          :alt="movieObject.title"
          @error="isImgLoaded = false"
        />
      </div>
      <div
        class="d-flex justify-content-center align-items-center h-100"
        v-else
      >
        <i class="fa-solid fa-film custom_movie_icon"></i>
      </div>
    </div>

    <!-- Card back (on hover) -->
    <div class="custom_card_back">
      <!-- Card back: title -->
      <h5 class="text-center">{{ movieObject.title || movieObject.name }}</h5>
      <h6
        class="text-center"
        v-if="
          movieObject.title !== movieObject.original_title ||
          movieObject.name !== movieObject.original_name
        "
      >
        {{ movieObject.original_title || movieObject.original_name }}
      </h6>

      <!-- Card back: language or flag -->
      <div class="text-center" v-if="isFlagLoaded">
        <img
          class="flag_box"
          :src="getImagePath(movieObject.original_language)"
          @error="isFlagLoaded = false"
        />
      </div>

      <div v-else>{{ movieObject.original_language }}</div>

      <!-- Card back: vote average -->
      <div class="py-2 stars_box">
        <i v-for="n in calcVoteInStars()" :key="n" class="fa-solid fa-star"></i>
        <i
          v-for="n in 5 - calcVoteInStars()"
          :key="n"
          class="fa-regular fa-star"
        ></i>
      </div>

      <!-- Card back: genre -->
      <div class="genres_box py-2">
        <div v-show="movieObject.genre_ids.length !== 0">
          {{ matchCodeToGenre(movieObject.genre_ids) }}
        </div>
      </div>

      <!-- Card back: movie description -->
      <p>{{ movieObject.overview }}</p>

      <!-- Card back: more info -->
      <button
        class="btn btn_custom btn_info"
        @click="getMainActors(movieObject.id)"
      >
        More info
        <div class="info_box">
          <info-box />
        </div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.custom_card {
  background-color: lighten($color-black, 90%);
  width: 250px;
  height: 350px;
  margin: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 10px rgba($color-black, 90%);

  &_front {
    height: 100%;
    width: 100%;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .custom_movie_icon {
      font-size: 4.5rem;
      color: lighten($color-black, 40%);
    }
  }

  &_back {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    top: 0;
    left: 0;
    overflow-y: auto;

    // Comando per nascondere visualizzazione scrollbar
    &::-webkit-scrollbar {
      display: none;
    }

    .flag_box {
      height: 20px;
      border-radius: 2px;
    }

    .stars_box i {
      color: $color-star;
    }

    .genres_box div {
      display: inline;
      font-style: italic;
      font-size: 0.8rem;
    }

    .btn_info {
      font-size: 0.8rem;

      .info_box {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:focus .info_box {
        background-color: rgba($color-black, 0.5);
        z-index: 999;
        display: block;
      }
    }
  }

  &:hover {
    .custom_card_back {
      animation: 1s slidein ease-out;
      display: block;
      background-color: rgba($color-black, 0.6);
    }
  }
}

@keyframes slidein {
  from {
    margin-top: 100%;
    width: 100%;
  }

  to {
    margin-top: 0%;
    width: 100%;
  }
}
</style>
