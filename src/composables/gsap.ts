import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { isAbsent } from "@/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const useGsap = () => {
  gsap.registerPlugin(
    SplitText,
    DrawSVGPlugin,
    ScrollTrigger,
    ScrollSmoother,
  );

  const worker = (
    selector: string,
    cb: (gsap: GSAP, root: HTMLDivElement) => void,
  ) => {
    const root = document.querySelector<HTMLDivElement>(selector);
    if (isAbsent(root)) return;
    return gsap.context(() => cb(gsap, root), root);
  };

  return {
    worker,
  };
};
