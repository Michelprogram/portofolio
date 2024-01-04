<script setup lang="ts">
import type { Project } from "../../../utils/project";
import Vertical from "./Vertical.vue";

interface Props {
  projects: Array<Project>;
}

const { projects } = defineProps<Props>();
</script>

<template>
  <div class="projects__grid__rest">
    <Vertical :project="projects[0]" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/styles/grid";

.projects__grid__rest {
  @extend .grid-layout;

  width: 260px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}
</style>
