<template>
  <div class="container-project" @click="goTo()">
    <img :src="project.image" alt="" />
    <div :class="isHexagone() ? 'container-title' : 'container-title-2'">
      <p class="title">{{ project.name }}</p>
      <p class="description">{{ project.short_description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IProject from "../interfaces/IProjects";

export default defineComponent({
  name: "CProject",
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
  methods: {
    isHexagone(): boolean {
      const rd: Number = Math.floor(Math.random() * 2);
      return rd == 0;
    },
    goTo(): void {
      this.$router.push({
        name: "project",
        params: { id: this.project.id },
      });
    },
  },
});
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

  .container-obj {
    position: absolute;
    background: var.$container-color;

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
      }
    }

    .description {
      color: var.$title-color-unactive;
    }
  }

  .container-title {
    @extend .container-obj;

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
      &:after {
        transition: width 0.5s ease-in-out;
      }
    }
  }

  .container-title-2 {
    @extend .container-obj;

    top: -80px;
    left: 0%;
    width: 100%;
    height: 80px;
    transition: all 0.5s ease-in-out;
    text-align: center;

    .title {
      z-index: 1;

      &:after {
        transition: width 0.5s ease-in-out 0.5s;
      }
    }
  }
}
</style>
