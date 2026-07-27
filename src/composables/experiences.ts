import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useExperiences = () => {
  const init = (gsap: GSAP, root: HTMLElement) => {
    const track = root.querySelector<HTMLElement>("[data-scroll-track]");
    const path = root.querySelector<SVGPathElement>("[data-gsap-path]");
    if (!track) return;

    const getScrollAmount = () => {
      const last = track.querySelector<HTMLElement>(
        "[data-component='experience']:last-child",
      );
      if (!last) return -(track.scrollWidth - window.innerWidth);
      const lastCenter = last.offsetLeft + last.offsetWidth / 2;
      const viewportCenter = window.innerWidth / 2;
      return -(lastCenter - viewportCenter);
    };

    const tween = gsap
      .timeline()
      .to(track, { x: getScrollAmount, ease: "none" }, 0);

    if (path) {
      gsap.set(path, { drawSVG: 0 });
      tween.to(path, { drawSVG: "100%", ease: "none" }, 0);
    }

    const distance = () => Math.max(1, Math.abs(getScrollAmount()));

    ScrollTrigger.create({
      trigger: root,
      start: "top 20%",
      end: () => `+=${distance()}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    root
      .querySelectorAll<HTMLElement>("[data-component='experience']")
      .forEach((card) => {
        const description = card.querySelector("[data-gsap-description]");
        if (!description) return;

        gsap.from(description, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: "left 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

    gsap.to("[data-gsap-path]", {
      drawSVG: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "[data-component-experiences]",
        start: "top 20%",
        end: () => tween.scrollTrigger?.end ?? "+=3000",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  };

  return { init };
};
