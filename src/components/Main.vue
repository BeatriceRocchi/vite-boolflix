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
  <main>
    <button @click="store.counter++">Incrementa counter</button>
  </main>
</template>

<style lang="scss" scoped></style>
