import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { isAbsent } from "@/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin, Flip } from "gsap/all";
import { GSDevTools } from "gsap/GSDevTools";

export const MediaQuery = {
  isDesktop: "(min-width: 800px)",
  isMobile: "(max-width: 799px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export type MediaQuery = (typeof MediaQuery)[keyof typeof MediaQuery];

export const useGsap = () => {
  gsap.registerPlugin(
    SplitText,
    DrawSVGPlugin,
    ScrollTrigger,
    ScrollSmoother,
    Draggable,
    InertiaPlugin,
    MotionPathPlugin,
    Flip,
  );

  if (import.meta.env.DEV) {
    gsap.registerPlugin(GSDevTools);
  }

  const worker = (
    options: { selector: string; mediaQuery?: MediaQuery },
    cb: (gsap: GSAP, root: HTMLDivElement) => void,
  ) => {
    const { selector, mediaQuery } = options;
    const root = document.querySelector<HTMLDivElement>(selector);
    if (isAbsent(root)) return;

    const mm = gsap.matchMedia();
    return gsap.context(() => {
      if (mediaQuery) {
        return mm.add(mediaQuery, () => {
          cb(gsap, root);
        });
      }
      return cb(gsap, root);
    }, root);
  };

  const workers = (
    options: { selector: string; mediaQuery?: MediaQuery },
    cb: (
      gsap: GSAP,
      root: HTMLDivElement,
      q: (selector: string) => Element[],
    ) => void,
  ) => {
    const { selector, mediaQuery } = options;
    const roots = [...document.querySelectorAll<HTMLDivElement>(selector)];
    if (isAbsent(roots) || roots.length === 0) return;
    const mm = gsap.matchMedia();

    return roots.map((root) => {
      const q = gsap.utils.selector(root);

      return gsap.context(() => {
        if (mediaQuery) {
          return mm.add(mediaQuery, () => {
            cb(gsap, root, q);
          });
        }
        return cb(gsap, root, q);
      }, root);
    });
  };

  return {
    worker,
    workers,
  };
};
