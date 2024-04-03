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
  <header>{{ store.counter }}</header>
</template>

<style lang="scss" scoped></style>
