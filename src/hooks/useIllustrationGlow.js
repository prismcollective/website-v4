import { useEffect, useRef } from "react";

export default function useIllustrationGlow(rootRef) {
  const frameRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!root || !canHover.matches) return undefined;

    const illustrations = () =>
      root.querySelectorAll("[data-illustration-glow]");

    const resetGlow = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      illustrations().forEach((illustration) =>
        illustration.style.removeProperty("filter"),
      );
    };

    const updateGlow = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      const pointerX = event.clientX;
      const pointerY = event.clientY;

      frameRef.current = requestAnimationFrame(() => {
        const glowRadius = 220;

        illustrations().forEach((illustration) => {
          const bounds = illustration.getBoundingClientRect();
          const distanceX = Math.max(
            bounds.left - pointerX,
            0,
            pointerX - bounds.right,
          );
          const distanceY = Math.max(
            bounds.top - pointerY,
            0,
            pointerY - bounds.bottom,
          );
          const distance = Math.hypot(distanceX, distanceY);
          const proximity = Math.max(0, 1 - distance / glowRadius) ** 2;

          if (proximity === 0) {
            illustration.style.removeProperty("filter");
            return;
          }

          illustration.style.filter = [
            `drop-shadow(0 0 ${5 + proximity * 3}px rgba(255,255,255,${proximity * 0.72}))`,
            `drop-shadow(0 0 20px rgba(126,211,255,${proximity * 0.5}))`,
            `drop-shadow(0 0 38px rgba(192,124,255,${proximity * 0.32}))`,
          ].join(" ");
        });
      });
    };

    root.addEventListener("pointermove", updateGlow);
    root.addEventListener("pointerleave", resetGlow);

    return () => {
      root.removeEventListener("pointermove", updateGlow);
      root.removeEventListener("pointerleave", resetGlow);
      resetGlow();
    };
  }, [rootRef]);
}
