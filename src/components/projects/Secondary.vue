<script setup lang="ts">
import type { Project } from "../../utils/project";
import { path, nameSize, topicSize } from "../../utils/project";

const props = defineProps({
  secondary: {
    required: true,
    type: Array<Project>,
  },
});

const MAX_SIZE_NAME = 20;
const MAX_SIZE_TOPIC = 50;
</script>

<template>
  <div class="projects__secondary">
    <div class="projects__secondary__title">
      <p>
        In addition to my main projects, I have a collection of secondary
        endeavors during my leisure time. These projects, though still a work in
        progress, serve as a wellspring of inspiration and creative exploration.
        These undertakings, though not adorned with the metaphorical red carpet
        treatment that my main projects receive, hold a special place in my
        coding repository. Despite some of them are unfinished, these secondary
        projects contribute significantly to my growth as a developer, offering
        a diverse range of experiences that fuel my passion for coding.
      </p>
    </div>
    <div class="projects__secondary__container">
      <div v-for="(project, i) in secondary" :key="i">
        <div class="projects__secondary__description">
          <div class="projects__secondary__description__icon">
            <img
              :src="path(project.icon)"
              :alt="`icon ${project.icon}`"
              width="25"
              height="25"
              loading="lazy"
              decoding="async"
            />
            <p>{{ nameSize(project.name, MAX_SIZE_NAME) }}</p>
          </div>
          <div class="projects__secondary__description__topics">
            <span
              v-for="(topic, j) in topicSize(project.topics, MAX_SIZE_TOPIC)"
              :key="j"
            >
              {{ topic }}
            </span>
          </div>
          <a
            class="projects__secondary__description__link underline"
            :href="project.html_url"
            >View code</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/utils/functions";
@import "../../../assets/styles/utils/colors";
@import "../../../assets/styles/utils/fonts";

.projects__secondary {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    text-align: justify;
    p {
      color: $text-1;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__description {
    display: grid;
    grid-template-columns: 0.45fr 1fr 0.25fr;
    grid-template-rows: 1fr;

    &__icon {
      display: flex;
      gap: 20px;

      p {
        color: $text-1;
      }
    }

    &__topics {
      display: flex;
      gap: 10px;
    }

    &__link {
      text-align: center;
      background-image: none;
      padding-bottom: 0px;
    }
  }
}
</style>
