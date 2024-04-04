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
  <div class="custom_card">
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
  margin: 15px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;

  &_front {
    height: 100%;

    img {
      width: 100%;
      height: auto;
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
    top: 0;
    left: 0;
  }

  .flag_box {
    height: 20px;
    border-radius: 2px;
  }

  &:hover {
    .custom_card_back {
      cursor: pointer;
      display: block;
      background-color: rgba($color-black, 0.5);
    }
  }
}
</style>
