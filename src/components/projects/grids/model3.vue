<script lang="ts" setup>
import Horizontal from "../formats/Horizontal.vue";
import type { Project } from "../../../utils/project";

interface GridProps {
  projects: Array<Project>;
}

const { projects } = defineProps<GridProps>();
</script>

<template>
  <div class="projects__grid__3">
    <div
      v-for="(project, index) in projects"
      :class="`projects__grid__3__${index}`"
    >
      <Horizontal :project="project" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../../assets/styles/grid";

.projects__grid__3 {
  @extend .grid-layout;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr) 1px repeat(5, 1fr);

  div {
    &:nth-child(1) {
      grid-area: 1 / 1 / 5 / 3;
    }

    &:nth-child(2) {
      grid-area: 1 / 3 / 4 / 8;
    }

    &:nth-child(3) {
      grid-area: 5 / 1 / 7 / 3;
    }

    &:nth-child(4) {
      grid-area: 7 / 1 / 9 / 5;
    }

    &:nth-child(5) {
      grid-area: 4 / 3 / 7 / 5;
    }

    &:nth-child(6) {
      grid-area: 4 / 5 / 6 / 8;
    }

    &:nth-child(7) {
      grid-area: 6 / 5 / 9 / 8;
    }
  }
}
</style>
