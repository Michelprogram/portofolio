import { randomNumber } from "./utils.ts";
import * as fs from "fs/promises";
import { readFile } from "fs/promises";
import type { Project } from "./project.ts";

type IconeInfo = {
  path: string;
  name: string;
};

type ProjectContainer = {
  Main: Array<Project>;
  Secondary: Array<Project>;
};

const randomIcones = async (loop: number): Promise<Array<IconeInfo>> => {
  const res: Array<IconeInfo> = [];

  const icones = await fs.readFile(".idea/httpRequests/icones.json");

  const data = JSON.parse(icones.toString());

  //const data = await icones()

  //await fs.writeFile(".idea/httpRequests/icones.json",JSON.stringify(data))

  for (let i = 0; i < loop; i++) {
    res.push(data[randomNumber(0, data.length)]);
  }

  return res;
};

export const fetchProjectsFake = async () => {
  const PROJECT: ProjectContainer = {
    Main: [],
    Secondary: [],
  };

  const request = await readFile(".idea/httpRequests/projects.json");

  const projects = JSON.parse(request.toString()) as Array<Project>;
  const icones = await randomIcones(projects.length);

  projects
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
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
