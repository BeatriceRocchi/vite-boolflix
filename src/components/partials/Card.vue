<script>
export default {
  data() {
    return {
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
  },
};
</script>

<template>
  <div class="card custom_card">
    <div class="card-body">
      <h5 class="card-title">{{ movieObject.title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        {{ movieObject.original_title }}
      </h6>
      <div v-if="isImgLoaded">
        <img
          class="flag_box"
          :src="getImagePath(movieObject.original_language)"
          @error="isImgLoaded = false"
        />
      </div>

      <div v-else>{{ movieObject.original_language }}</div>
      <div class="card-text">{{ movieObject.vote_average }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.custom_card {
  background-color: lighten($color-black, 90%);
  width: 200px;
  height: 300px;
  margin: 15px;

  .flag_box {
    height: 20px;
    border-radius: 2px;
  }
}
</style>
