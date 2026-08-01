import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { isAbsent } from "@/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const MediaQuery = {
  isDesktop: "(min-width: 800px)",
  isMobile: "(max-width: 799px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export type MediaQuery = (typeof MediaQuery)[keyof typeof MediaQuery];

export const useGsap = () => {
  gsap.registerPlugin(SplitText, DrawSVGPlugin, ScrollTrigger, ScrollSmoother);

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

  return {
    worker,
  };
};
