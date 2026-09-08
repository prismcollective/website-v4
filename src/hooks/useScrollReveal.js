import { useLayoutEffect } from "react";

const REVEAL_SELECTOR =
  ":scope > main > section:not(#projects), :scope > main > #projects [data-scroll-reveal], :scope > footer [data-scroll-reveal]";

export default function useScrollReveal(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!root || reduceMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const sections = [...root.querySelectorAll(REVEAL_SELECTOR)];
    const animations = new Set();

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(24px)";
      section.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            const section = entry.target;
            const animation = section.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                delay: Number(section.dataset.revealDelay ?? index * 70),
                duration: 650,
                easing: "cubic-bezier(0.22, 0.75, 0.25, 1)",
                fill: "forwards",
              },
            );

            animations.add(animation);
            animation.onfinish = () => {
              animations.delete(animation);
              section.style.removeProperty("opacity");
              section.style.removeProperty("transform");
              section.style.removeProperty("will-change");
            };

            observer.unobserve(section);
          });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      sections.forEach((section) => {
        section.style.removeProperty("opacity");
        section.style.removeProperty("transform");
        section.style.removeProperty("will-change");
      });
    };
  }, [rootRef]);
}
