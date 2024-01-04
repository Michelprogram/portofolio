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