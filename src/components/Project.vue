<template>
  <div class="container-project">
    <img :src="project.image" alt="" />
    <div :class="isHexagone() ? 'container-title' : 'container-title-2'">
      <p class="title">{{ project.name }}</p>
      <p class="description">{{ project.short_description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hexagone from "../components/Hexagone.vue";

@Options({
  props: {
    project: Object,
  },
  components: {
    Hexagone,
  },
})
export default class Project extends Vue {
  isHexagone(): boolean {
    const rd: Number = Math.floor(Math.random() * 3);
    return rd == 0;
  }
}
</script>

<style lang="scss">
@use "../assets/scss/variables" as var;

.container-project {
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    img {
      filter: blur(5px);
    }
    .container-title > .title:after,
    .container-title-2 > .title:after {
      width: 100%;
    }
    .container-title-2 {
      top: 0%;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    transition: all 0.5s ease-in;
  }

  .container-title {
    position: absolute;
    background: var.$container-color;

    border-radius: 50%;
    width: 125px;
    height: 125px;

    top: 70%;
    left: 50%;

    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    white-space: nowrap;

    .title {
      color: var.$title-color;
      position: relative;
      width: auto;

      &:after {
        content: "";
        width: 0%;
        height: 10px;
        position: absolute;
        bottom: 0%;
        left: 0%;
        z-index: -1;
        background: linear-gradient(
          to top,
          hsl(0, 0%, 100%) 0%,
          var.$background-color 100%
        );
        transition: width 0.5s ease-in-out;
      }
    }
    .description {
      color: var.$title-color-unactive;
    }
  }

  .container-title-2 {
    position: absolute;
    top: -80px;
    left: 0%;
    width: 100%;
    height: 80px;
    background: var.$container-color;
    transition: all 0.5s ease-in-out;
    text-align: center;

    .title {
      color: var.$title-color;
      position: relative;
      width: auto;

      &:after {
        content: "";
        width: 0%;
        height: 10px;
        position: absolute;
        bottom: 0%;
        left: 0%;
        z-index: -1;
        background: linear-gradient(
          to top,
          hsl(0, 0%, 100%) 0%,
          var.$background-color 100%
        );
        transition: width 0.5s ease-in-out;
      }
    }

    .description {
      color: var.$title-color-unactive;
    }
  }
}
</style>
