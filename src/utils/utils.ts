import type { CSSProperty } from "astro/types";

type Target = HTMLElement | Array<HTMLElement>;

export type ObserverOption = {
  actionOnAppear: Function;
  actionOnLeave: Function;
  options?: IntersectionObserverInit;
};

export class Observer {
  target: Target;
  option: ObserverOption;

  constructor(target: Target, option: ObserverOption) {
    this.target = target;
    this.option = option;
  }

  Run() {
    const observer = new IntersectionObserver((tr) => {
      tr.forEach((tr) => {
        if (tr.isIntersecting) this.option.actionOnAppear(tr);
        if (!tr.isIntersecting) this.option.actionOnLeave(tr);
      });
    }, this.option.options);

    if (this.target instanceof HTMLElement) {
      observer.observe(this.target);
    } else {
      this.target.forEach((tr) => observer.observe(tr));
    }
  }
}

enum Stage {
  Close = "close",
  Open = "open",
  Opening = "opening",
  Closing = "closing",
}

export class ProjectBehavior {
  private readonly projects: Array<HTMLDivElement>;
  private readonly closers: Array<HTMLImageElement>;
  private index: number;

  constructor(projectSelector: string, closerSelector: string) {
    this.projects = Array.from(
      document.querySelectorAll(projectSelector),
    ) as Array<HTMLDivElement>;

    this.closers = Array.from(
      document.querySelectorAll(closerSelector),
    ) as Array<HTMLImageElement>;

    this.index = 0;
  }

  private getCurrentProject = () => this.projects[this.index];

  private getOtherProjects = () =>
    this.projects.filter((_, i) => i != this.index);

  public watcher() {
    this.projects.forEach((project) => {
      project.addEventListener("animationend", (e) => {
        project.classList.replace(Stage.Opening, Stage.Open);
      });

      project.addEventListener("click", () => {
        this.index = parseInt(project.getAttribute("data-index")!);
        this.extendSelectProject();
      });
    });

    this.closers.forEach((closer) => {
      closer.addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeProject();
      });
    });
  }

  private extendSelectProject() {
    this.getOtherProjects().forEach((project) =>
      project.classList.add(Stage.Close),
    );

    this.getCurrentProject().classList.add(Stage.Opening);
  }

  private closeProject() {
    this.getOtherProjects().forEach((project) =>
      project.classList.remove(Stage.Close),
    );

    this.getCurrentProject().classList.remove(Stage.Open);
  }
}

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomNumberNotFloor = (min: number, max: number) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};

export const randomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export type MeteorInformation = {
  className: string;
  style: Partial<Record<CSSProperty, string>>;
};

export const computeDateFromBeginning = (date: Date) => {
  return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
};

export const isMobile = () =>
  window.matchMedia("only screen and (max-width: 760px)").matches;
