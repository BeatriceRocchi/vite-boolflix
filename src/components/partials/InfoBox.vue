<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div
    class="info_wrapper h-100 d-flex justify-content-center align-items-center"
  >
    <div v-if="store.mainActors.length > 0" class="text_box text-start">
      <h5>Cast</h5>
      <div class="d-flex justify-content-center my-4">
        <div
          class="actor_box d-flex flex-column align-items-center"
          v-for="actor in store.mainActors"
          :key="actor.id"
        >
          <div class="img_box mb-2">
            <img
              :src="`https://image.tmdb.org/t/p/w342/${actor.profile_path}`"
              :alt="actor.name"
            />
          </div>
          <div>{{ actor.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.text_box {
  color: $color-white;
  background-color: lighten($color-black, 20%);
  padding: 20px;
  box-shadow: 0 0 20px 5px $color-black;
  position: relative;

  .actor_box {
    width: fit-content;
    margin: 0 20px;
  }

  .img_box {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: lighten($color-black, 30%);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
