<script setup lang="ts">
import type { Project } from "../../utils/project";

import { computed, ref, type Component } from "vue";

import MainComponent from "./grids/main.vue";
import Model3 from "./grids/model3.vue";
import Model2 from "./grids/model2.vue";
import Model1 from "./grids/model1.vue";
import Rest from "./formats/Rest.vue";

import { randomElement } from "../../utils/utils";

const props = defineProps({
  main: {
    required: true,
    type: Array<Project>,
  },
});

const randomComponent = computed(() => {
  let size = 2;

  const res: Array<{
    component: Component;
    start: number;
    end: number;
  }> = [];

  const components = [
    {
      component: Model1,
      delta: 4,
    },
    {
      component: Model2,
      delta: 4,
    },
    {
      component: Model3,
      delta: 7,
    },
  ];

  while (size < props.main.length) {
    const component = randomElement(components);

    const addition = size + component.delta;

    if (addition > props.main.length) {
      break;
    }

    res.push({
      component: component.component,
      start: size,
      end: addition,
    });

    size += component.delta;
  }

  for (let index = 0; index < props.main.length - size; index++) {
    res.push({
      component: Rest,
      start: size + index,
      end: size + index + 1,
    });
  }

  return res;
});

const components = ref(randomComponent);
</script>

<template>
  <div class="scroller">
    <div v-for="index in 2" :key="index" class="scroller__inner">
      <div>
        <MainComponent :size="main.length" :first="main[0]" :second="main[1]" />
      </div>
      <div v-for="(component, index) in components">
        <component
          :key="index"
          :is="component.component"
          :projects="main.slice(component.start, component.end)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/utils/functions";
@import "../../../assets/styles/utils/colors";
@import "../../../assets/styles/utils/fonts";

.scroller {
  display: flex;
  max-width: 1110px;

  mask: linear-gradient(90deg, transparent, white 2%, white 98%, transparent);

  gap: 1rem;

  &__inner {
    height: 600px;
    display: flex;
    gap: 1rem;
    animation: scroll 40s linear infinite;
  }
}

@keyframes scroll {
  to {
    transform: translate(calc(-100% - 2rem), 0);
  }
}
</style>
