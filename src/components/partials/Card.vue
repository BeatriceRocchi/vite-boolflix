<script>
export default {
  data() {
    return {
      isFlagLoaded: true,
      isImgLoaded: true,
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
  },
};
</script>

<template>
  <div class="col custom_card p-0">
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
    <div class="custom_card_back">
      <h5>{{ movieObject.title || movieObject.name }}</h5>
      <h6>
        {{ movieObject.original_title || movieObject.original_name }}
      </h6>
      <div v-if="isFlagLoaded">
        <img
          class="flag_box"
          :src="getImagePath(movieObject.original_language)"
          @error="isFlagLoaded = false"
        />
      </div>

      <div v-else>{{ movieObject.original_language }}</div>
      <div>
        <i v-for="n in calcVoteInStars()" :key="n" class="fa-solid fa-star"></i>
        <i
          v-for="n in 5 - calcVoteInStars()"
          :key="n"
          class="fa-regular fa-star"
        ></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.custom_card {
  background-color: lighten($color-black, 90%);
  width: 200px;
  height: 280px;
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
  }

  .flag_box {
    height: 20px;
    border-radius: 2px;
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
