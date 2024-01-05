<script setup lang="ts">
import { icones as randomIcones } from "../../utils/icones";
import type { Project } from "../../utils/project";

import Main from "./Favorite.vue";
import Secondary from "./Secondary.vue";

const GIT_HUB_TOKEN = import.meta.env.GIT_HUB_TOKEN;

type ProjectContainer = {
  Main: Array<Project>;
  Secondary: Array<Project>;
};

const fetchProjects = async (): Promise<ProjectContainer> => {
  const PROJECT: ProjectContainer = {
    Main: [],
    Secondary: [],
  };

  const request = await fetch(
    "http://api.github.com/users/Michelprogram/repos?per_page=100",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "Bearer " + GIT_HUB_TOKEN,
      },
    }
  );

  const projects = (await request.json()) as Array<Project>;
  const icones = await randomIcones();

  projects
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .forEach((project, index) => {
      project.icon = icones[index].path;

      if (project.topics.includes("main")) {
        PROJECT.Main.push(project);
      } else {
        PROJECT.Secondary.push(project);
      }
    });

  return PROJECT;
};

const projects = await fetchProjects();
</script>

<template>
  <section class="projects">
    <img
      src="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/blob/master/Emojis/Activities/1st%20Place%20Medal.png"
      alt=""
    />
    <div class="wrapper projects__wrapper">
      <h2 class="projects__title">Projects</h2>
      <h3 class="projects__secondary__title">
        Favorite ({{ projects.Main.length }})
      </h3>
      <Main :main="projects.Main" />
      <div class="projects__secondary">
        <h3 class="projects__secondary__title">
          Secondary ({{ projects.Secondary.length }})
        </h3>
        <Secondary :secondary="projects.Secondary" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/utils/functions";
@import "../../../assets/styles/utils/colors";
@import "../../../assets/styles/utils/fonts";

.projects {
  &__wrapper {
    padding-block: 40px;

    .projects__title {
      font-size: clamp(2.5rem, 0.7rem + 6.68vw, 5.5rem);

      @media (min-width: px-to-rem(1280px)) {
        margin-bottom: 20px;
      }
    }

    .projects__secondary__title {
      margin: 10px 0px;
    }
  }
}
</style>
