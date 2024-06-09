import {icones as randomIcones} from "./icones.ts";

const GIT_HUB_TOKEN = import.meta.env.GIT_HUB_TOKEN;

type ProjectContainer = {
  Main: Array<Project>;
  Secondary: Array<Project>;
};

export const path = (path: string) => {
  const splitted = path.split("/");
  splitted[2] = encodeURIComponent(splitted[2]);
  return `https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/${splitted.join(
    "/"
  )}`;
};

export const preview = (name: string, branch: string = "main") => {
  return `https://raw.githubusercontent.com/Michelprogram/${name}/${branch}/preview/preview.png`;
};

export type Project = {
  name: string;
  html_url: string;
  languages_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  topics: Array<string>;
  homepage: string;
  icon: string;
  preview: string;
  default_branch: string;
};

export const topicsWithoutMain = (topics: Array<string>) => {
  return topics.filter((topic) => topic != "main");
};

export const projectPreviewLink = (
  homepage: string | undefined,
  htmlurl: string
) => {
  return homepage ? homepage : htmlurl;
};

export const topicSize = (topics: Array<string>, max: number) => {
  let size = 0;

  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    if (size + topic.length >= max) {
      const newArray = topics.slice(0, i);
      newArray.push("...");
      return newArray;
    }
    size += topic.length;
  }

  return topics;
};

export const nameSize = (name: string, max: number) => {
  if (name.length >= max) return name.slice(0, 25).concat("...");
  return name;
};

export const topicFilteredAndMaxSize = (topics: Array<string>, max:number) => {
  topics = topicsWithoutMain(topics);

  return topicSize(topics, max);
};

export const fetchProjects = async (): Promise<ProjectContainer> => {
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