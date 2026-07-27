import { ScrollSmoother } from "gsap/ScrollSmoother";

export const useForm = () => {
  const initScroll = () => {
    if (ScrollSmoother.get()) return ScrollSmoother.get();
    return ScrollSmoother.create({
      wrapper: "[data-gsap='smooth-wrapper']",
      content: "[data-gsap='smooth-content']",
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  };

  return {
    initScroll,
  };
};
