import { type Translation } from "./types";

export const en: Translation = {
  hero: {
    titleLine1: "Nice to",
    titleLine2: "meet you! I'm",
    subtitle:
      "Hanging out on Knowhere, I'm a software engineer building stuff to power Rick's microverse.",
    cta: "Let's talk!",
  },
  skills: {
    title: "Skills",
    description: "and lot more...",
    singular: "Year of experience",
    plural: "Years of experience",
  },
  project: {
    title: "Projects",
  },
  experience: {
    title: "Experiences",
    items: [
      {
        title: "Learning ...",
        from: new Date("2016-01-01"),
        to: new Date("2019-01-01"),
        place: "Tours, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien%20Monster.png",
        description:
          "During my freshman year of high school, I dipped my toes into programming with Python. It instantly clicked, and I just knew I wanted to keep learning more about it.",
      },
      {
        title: "Way more intensive",
        from: new Date("2019-01-01"),
        to: new Date("2021-01-01"),
        place: "Tours, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png",
        description:
          "I honestly can't remember why, but I decided to tackle root-me.org. One of the first challenges was building a TCP server, so I started hacking away at it from home while learning the basics of C/C++ at university.",
      },
      {
        title: "Sandwich course EDF",
        from: new Date("2021-01-01"),
        to: new Date("2022-01-01"),
        place: "Nantes, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png",
        description:
          "I needed a company for my work-study program and landed a spot at EDF, the French energy giant. I built web apps using Symfony and coded C# plugins for AutoCAD. This is also when I really started deep-diving into development just for fun (side projects).",
      },
      {
        title: "Final step",
        from: new Date("2022-01-01"),
        to: new Date("2024-01-01"),
        place: "Rennes, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Beer%20Mug.png",
        description:
          "Still happily working at EDF while grinding through my Master's degree! During this phase, I shifted gears into automation, using Jenkins and Ansible to build out a complete DevOps architecture.",
      },
      {
        title: "Time to move to Canada",
        from: new Date("2022-01-01"),
        to: new Date("2024-01-01"),
        place: "Montreal, Canada",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Flag%20Canada.png",
        description:
          "I crossed the ocean to start a new CS degree at ETS. While studying, I stumbled into an amazing opportunity at a brand new startup called Caido. It threw me into a field I wasn't super familiar with networking but I ended up specializing as a frontend engineer working with some awesome tech.",
      },
    ],
  },
  next: {
    title: "What's next",
    description:
      "I've always loved the thrill of moving to a new city for school, and now I'm super excited about heading to work in Canada. It's not just about diving into a new culture and exploring the country—it's also a fantastic chance to level up my English skills.",
    animationDescription: "I'm cooking up the future animation...",
  },
  hobbies: {
    title: "Hobbies",
  },
  articles: {
    title: "Articles",
    description: "by me",
    items: [
      {
        title: "How to craft a full wood house with your dad.",
        description:
          "My dad had a crazy idea to build a full wood house with his own hands (mostly).",
        image: "wood-house",
        link: "/articles/wood-house",
      },
      {
        title: "How reverse engineering the photon protocol.",
        description:
          "In this article, I'll show you how I reverse engineered the photon protocol to create a blazing fast packets parser.",
        image: "wood-house",
        link: "/articles/wood-house",
      },
      {
        title: "How reverse engineering the photon protocol.",
        description:
          "In this article, I'll show you how I reverse engineered the photon protocol to create a blazing fast packets parser.",
        image: "wood-house",
        link: "/articles/wood-house",
      },
    ],
  },
};
