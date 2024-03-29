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
        if (tr.isIntersecting) this.option.actionOnAppear();
        if (!tr.isIntersecting) this.option.actionOnLeave();
      });
    }, this.option.options);

    if (this.target instanceof HTMLElement) {
      observer.observe(this.target);
    } else {
      this.target.forEach((tr) => observer.observe(tr));
    }
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
