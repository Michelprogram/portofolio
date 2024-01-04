<script setup lang="ts">
import Horizontal from "../formats/Horizontal.vue";
import Vertical from "../formats/Vertical.vue";
import type { Project } from "../../../utils/project";

interface GridProps {
  projects: Array<Project>;
}

const { projects } = defineProps<GridProps>();
</script>

<template>
  <div class="projects__grid__1">
    <div class="projects__grid__1__top__left">
      <Horizontal :project="projects[0]" />
    </div>

    <div class="projects__grid__1__bottom__left">
      <Horizontal :project="projects[1]" />
    </div>

    <div class="projects__grid__1__middle">
      <Vertical :project="projects[2]" />
    </div>

    <div class="projects__grid__1__right">
      <Vertical :project="projects[3]" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../../assets/styles/grid";

.projects__grid__1 {
  @extend .grid-layout;

  grid-template-columns: 1.75fr repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  &__top__left {
    grid-area: 1 / 1 / 3 / 2;
  }

  &__bottom__left {
    grid-area: 3 / 1 / 5 / 2;
  }

  &__middle {
    grid-area: 1 / 2 / 5 / 3;
  }

  &__right {
    grid-area: 1 / 3 / 5 / 4;
  }
}
</style>
