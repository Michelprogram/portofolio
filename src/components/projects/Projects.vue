<script setup lang="ts">

import Main from "./Favorite.vue";
import type {Project} from "../../utils/project.ts";

const props = defineProps({
  main:{
    required: true,
    type:Array<Project>,
  }
})
</script>

<template>
  <section class="projects">
    <div>
      <h2 class="projects__title">Projects</h2>
      <h3 class="projects__secondary__title">
        Favorite ({{ main.length }})
      </h3>
      <Main :main="main" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/utils/functions";
@import "../../../assets/styles/utils/colors";
@import "../../../assets/styles/utils/fonts";

.projects {
  &__wrapper {
    padding-block: 40px;

    .projects__title {
      font-size: clamp(2.5rem, 0.7rem + 6.68vw, 5.5rem);

      @media (min-width: px-to-rem(1280px)) {
        margin-bottom: 20px;
      }
    }

    .projects__secondary__title {
      margin: 10px 0px;
    }
  }
}
</style>
