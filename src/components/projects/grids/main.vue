<script setup lang="ts">
import Vertical from "../formats/Vertical.vue";
import Horizontal from "../formats/Horizontal.vue";
import type { Project } from "../../../utils/project";

interface MainProps {
  size: number;
  first: Project;
  second: Project;
}

const { first, second, size } = defineProps<MainProps>();
</script>

<template>
  <div class="projects__primary__main">
    <div class="projects__primary__main__title">
      <p>
        As you can see, I have {{ size }} favorite(s) projects on my GitHub.
        Main projects are like the VIPs of my coding repository – they get the
        red carpet treatment, complete with bug-shaped confetti and code
        snippets.
      </p>
    </div>
    <div class="projects__primary__main__second__last__project">
      <Vertical :project="second" />
    </div>
    <div class="projects__primary__main__last__project">
      <Horizontal :project="first" />
    </div>

    <div class="projects__primary__main__scrolling">
      <h3>What a wave huh !</h3>
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Water%20Wave.png"
        alt="Computer Mouse"
        width="50"
        height="50"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/styles/utils/colors";
@import "../../../../assets/styles/utils/fonts";
@import "../../../../assets/styles/grid";

.projects {
  &__primary {
    height: fit-content;

    margin-bottom: 15px;

    &__flex {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-height: none;
    }

    &__main {
      @extend .grid-layout;

      grid-template-columns: 4fr 1fr;
      grid-template-rows: repeat(4, minmax(auto, 1fr));

      &__title {
        border-radius: 8px;

        display: flex;

        justify-content: center;
        align-items: center;

        p {
          color: $text-1;
          padding: 0.5rem;
        }
      }

      &__last__project {
        display: block;
        border-radius: 8px;
        grid-row: 2 / 5;
      }

      &__second__last__project {
        grid-column: 2 / 3;
        grid-row: 1 / 4;
      }

      &__scrolling {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: $green-bg;
        border-radius: 8px;

        h3 {
          width: 50%;
        }

        img {
          object-fit: contain;
        }
      }
    }
  }
}
</style>
