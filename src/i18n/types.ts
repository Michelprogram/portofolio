export type Experience = {
  title: string;
  from: Date;
  to: Date;
  place: string;
  icon: string;
  description: string;
};

export type Article = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export type Translation = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  skills: {
    title: string;
    description: string;
    singular: string;
    plural: string;
  };
  project: {
    title: string;
  };
  experience: {
    title: string;
    items: Experience[];
  };
  next: {
    title: string;
    description: string;
    animationDescription: string;
  };
  hobbies: {
    title: string;
  };
  articles: {
    title: string;
    description: string;
    items: Article[];
  };
};
