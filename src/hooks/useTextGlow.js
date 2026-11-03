import { useEffect, useRef } from "react";

const TEXT_SELECTOR = "h1, h2, h3, p, a, button, label, [role='button']";

function wrapTextNodes(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("#top, [data-page-glow-letter]")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];

  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();

    [...node.textContent].forEach((character) => {
      if (/\s/.test(character)) {
        fragment.append(character);
        return;
      }

      const letter = document.createElement("span");
      letter.dataset.pageGlowLetter = "";
      letter.style.pointerEvents = "none";
      letter.textContent = character;
      fragment.append(letter);
    });

    node.replaceWith(fragment);
  });
}

function unwrapTextNodes(element) {
  element.querySelectorAll("[data-page-glow-letter]").forEach((letter) => {
    letter.replaceWith(letter.textContent);
  });
  element.normalize();
}

export default function useTextGlow(rootRef) {
  const activeElementRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!root || !finePointer.matches) return undefined;

    const clearGlow = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (activeElementRef.current) unwrapTextNodes(activeElementRef.current);
      activeElementRef.current = null;
    };

    const updateGlow = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      const target = event.target.closest?.(TEXT_SELECTOR);
      const element = target && root.contains(target) && !target.closest("#top")
        ? target
        : null;

      if (element !== activeElementRef.current) {
        clearGlow();
        activeElementRef.current = element;
        if (element) wrapTextNodes(element);
      }

      if (!element) return;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      const pointerX = event.clientX;
      const pointerY = event.clientY;
      frameRef.current = requestAnimationFrame(() => {
        const glowRadius = 180;

        element.querySelectorAll("[data-page-glow-letter]").forEach((letter) => {
          const bounds = letter.getBoundingClientRect();
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
          const coreOpacity = 0.28 + proximity * 0.67;

          letter.style.textShadow = [
            `0 0 ${7 - proximity * 2}px rgba(255,255,255,${coreOpacity})`,
            `0 0 16px rgba(255,255,255,${proximity * 0.8})`,
            `0 0 30px rgba(255,255,255,${proximity * 0.55})`,
          ].join(",");
        });
      });
    };

    root.addEventListener("pointermove", updateGlow);
    root.addEventListener("pointerleave", clearGlow);

    return () => {
      root.removeEventListener("pointermove", updateGlow);
      root.removeEventListener("pointerleave", clearGlow);
      clearGlow();
    };
  }, [rootRef]);
}
