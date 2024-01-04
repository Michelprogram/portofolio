<script setup lang="ts">
import { Image } from "astro:assets";
import {
  path,
  preview,
  type Project,
  nameSize,
  topicFilteredAndMaxSize,
} from "../../../utils/project";
import { projectPreviewLink, topicsWithoutMain } from "../../../utils/project";

interface Props {
  project: Project;
}

const MAX_SIZE_NAME = 20;
const MAX_SIZE_TOPIC = 20;

const { project } = defineProps<Props>();
</script>

<template>
  <div class="projects__item">
    <div class="projects__preview">
      <img
        :src="preview(project.name, project.default_branch)"
        onerror="this.src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'"
        alt="Preview project"
        width="10"
        height="400"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="projects__information">
      <div class="projects__title">
        <img
          :src="path(project.icon)"
          alt="icon"
          width="15"
          height="15"
          loading="lazy"
          decoding="async"
        />
        <h3>{{ nameSize(project.name, MAX_SIZE_NAME) }}</h3>
      </div>
      <p class="projects__topics" v-if="project.topics">
        <span
          v-for="topic in topicFilteredAndMaxSize(project.topics!, MAX_SIZE_TOPIC)"
          >{{ topic }}</span
        >
      </p>
    </div>
    <div class="projects__links">
      <a
        :href="projectPreviewLink(project.homepage, project.html_url)"
        target="_blank"
        class="underline"
      >
        View project
      </a>
      <a :href="project.html_url" target="_blank" class="underline">
        View code
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/styles/utils/functions";
@import "../../../../assets/styles/utils/colors";
@import "../../../../assets/styles/projects";

.projects {
  &__title {
    h3 {
      font-size: 1rem;
    }
  }

  &__links {
    flex-direction: column;

    gap: 15px;

    a {
      text-align: center;
      font-size: 1rem;
      margin-inline-end: 0;
    }

    a.underline {
      background-image: none;
    }
  }
}
</style>
