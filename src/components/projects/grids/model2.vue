<script setup lang="ts">
import Vertical from "../formats/Vertical.vue";
import type { Project } from "../../../utils/project";

interface GridProps {
  projects: Array<Project>;
}

const { projects } = defineProps<GridProps>();
</script>

<template>
  <div class="projects__grid__2">
    <div
      v-for="(project, index) in projects"
      :class="`projects__grid__2__${index}`"
    >
      <Vertical :project="project" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../../assets/styles/grid";

.projects__grid__2 {
  @extend .grid-layout;

  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
}
</style>
