<script setup lang="ts">
import type { Project } from "../../utils/project";
import { path, nameSize, topicSize } from "../../utils/project";
import { computed, ref } from "vue";

const props = defineProps({
    secondary: {
        required: true,
        type: Array<Project>,
    },
});

const titleSecondary = ref<HTMLHeadingElement | null>(null);

const MAX_SIZE_NAME = 20;
const MAX_SIZE_TOPIC = 50;

const sleep = (millisecond: number) =>
    new Promise((resolve) => setTimeout(resolve, millisecond));

const isOpen = ref(false);

const isLocked = ref(false);

const animationName = ref("come-from-right");

const projects = ref(props.secondary?.slice(0, 6));

const toggleAnimationName = () => {
    if (animationName.value === "come-from-right") {
        animationName.value = "come-from-left";
    } else {
        animationName.value = "come-from-right";
    }
};

const toggle = async () => {
    isLocked.value = true;

    if (!isOpen.value) {
        for (let i = 6; i < props.secondary?.length; i++) {
            await sleep(50);
            projects.value.push(props.secondary[i]);
            toggleAnimationName();
        }
    } else {
        titleSecondary.value?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        for (let i = projects.value.length; i > 6; i--) {
            await sleep(50);
            projects.value.pop();
            toggleAnimationName();
        }
    }

    isLocked.value = false;

    isOpen.value = !isOpen.value;
};

const buttonText = computed(() => {
    return isOpen.value ? "view less..." : "view more...";
});

const clsButton = computed(() => ({
    underline: true,
    disable__button: isLocked.value,
}));
</script>

<template>
    <div class="projects__secondary">
        <div class="projects__secondary__title">
            <h3 ref="titleSecondary">Secondary ({{ secondary.length }})</h3>
            <p>
                In addition to my main projects, I have a collection of
                secondary endeavors during my leisure time. These projects,
                though still a work in progress, serve as a wellspring of
                inspiration and creative exploration. These undertakings, though
                not adorned with the metaphorical red carpet treatment that my
                main projects receive, hold a special place in my coding
                repository. Despite some of them are unfinished, these secondary
                projects contribute significantly to my growth as a developer,
                offering a diverse range of experiences that fuel my passion for
                coding.
            </p>
        </div>
        <transition-group
            :name="animationName"
            tag="div"
            class="projects__secondary__container"
        >
            <div
                v-for="(project, index) in projects"
                :key="index"
                class="projects__secondary__description"
            >
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
                        v-for="(topic, j) in topicSize(
                            project.topics,
                            MAX_SIZE_TOPIC,
                        )"
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
        </transition-group>
        <div class="projects__secondary__view__more">
            <a @click="toggle" :class="clsButton">{{ buttonText }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/utils/functions" as *;
@use "../../../assets/styles/utils/colors" as *;
@use "../../../assets/styles/utils/fonts" as *;

.come-from-right-enter-active,
.come-from-right-leave-active {
    transition: all 1s ease;
}
.come-from-right-enter-from,
.come-from-right-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.come-from-left-enter-active,
.come-from-left-leave-active {
    transition: all 1s ease;
}
.come-from-left-enter-from,
.come-from-left-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.projects__secondary {
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 20px;

    &__title {
        text-align: justify;
        p {
            color: $text-1;
        }

        h3 {
            margin: 5% 0;
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__description {
        display: grid;
        grid-template-columns: 1.75fr 1fr;
        grid-template-rows: 1fr;

        @media (min-width: px-to-rem(1280px)) {
            grid-template-columns: 0.45fr 1fr 0.25fr;
        }

        &__icon {
            display: flex;
            gap: 20px;

            p {
                color: $text-1;
            }
        }

        &__topics {
            display: none;
            @media (min-width: px-to-rem(1280px)) {
                display: flex;
                gap: 10px;
            }
        }

        &__link {
            text-align: center;
            background-image: none;
            padding-bottom: 0;
        }
    }

    &__view__more {
        text-align: center;
        cursor: pointer;
    }
}

.disable__button {
    cursor: default;
    pointer-events: none;
}
</style>
