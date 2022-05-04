<template>
  <div>
    <div v-if="projectExist()">
      <div class="title">
        <img src="../assets/img/icons/cheese.svg" alt="" srcset="" />
        <h2>{{ project.name }}</h2>
      </div>
      <div class="container-project-description">
        <div class="container-img">
          <img :src="project.image" alt="" />
        </div>
        <div class="container-description">
          <h3>Description</h3>
          <p>{{ project.long_description }}</p>
        </div>
        <div class="container-stats">
          {{ project.skills }}
        </div>
        <div class="production">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
          illum.
        </div>
      </div>
    </div>

    <div class="test" v-else>
      <img src="../assets/img/lost.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProject from "../interfaces/IProjects";
import Data from "../data/project";

export default defineComponent({
  name: "CProjectDescription",
  props: {
    id: Number,
  },
  methods: {
    projectExist(): boolean {
      return this.project != undefined;
    },
  },
  data() {
    return {
      project: Data.find((el) => el.id == this.id) as IProject,
    };
  },
});
</script>

<style lang="scss">
.container-project-description {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 29px;
}

.container-img {
  grid-area: 1 / 1 / 6 / 3;
}
.container-stats {
  grid-area: 3 / 3 / 6 / 5;
}
.container-description {
  grid-area: 1 / 3 / 3 / 7;
}
.production {
  grid-area: 3 / 5 / 6 / 7;
}
</style>
