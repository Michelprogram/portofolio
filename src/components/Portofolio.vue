<template>
  <div>
    <div class="title">
      <img src="../assets/img/icons/portofolio.svg" alt="" srcset="" />
      <h2>Portofolio</h2>
    </div>
    <div class="container-all">
      <Project
        :project="project"
        v-for="project in projects"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Data from "../data/project";
import Project from "../components/Project.vue";

export default defineComponent({
  name: "CPortofolio",
  components: {
    Project,
  },
  data() {
    return {
      projects: Data,
    };
  },
});
</script>

<style lang="scss">
.container-all {
  width: 85%;
  margin-left: 7.5%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
</style>
