<script>
export default {
  props: {
    movieObject: Object,
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
      <div class="card-text">{{ movieObject.original_language }}</div>
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
}
</style>
