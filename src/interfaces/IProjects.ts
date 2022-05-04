import ISkills from "./Iskills";

export default interface IProject {
  id: number;
  name: string;
  short_description: string;
  long_description?: string;
  skills?: Array<ISkills>;
  production?: string;
  image: string;
  github: string;
}
