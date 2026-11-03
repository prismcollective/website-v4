import { useEffect, useRef, useState } from "react";
import heroArt from "../assets/illustrations/prism-hero.webp";
import Header from "./Header";
import HeroSquares from "./HeroSquares";

function GlowLetters({ text }) {
  // Keep words intact while retaining a separately glowable span per letter.
  return text.split(/(\s+)/).map((token, tokenIndex) => {
    if (/^\s+$/.test(token)) {
      return " ";
    }

    return (
      <span
        className="inline-block whitespace-nowrap"
        aria-hidden="true"
        key={`${token}-${tokenIndex}`}
      >
        {[...token].map((character, characterIndex) => (
          <span
            className="pointer-events-auto inline-block [text-shadow:0_0_7px_rgba(255,255,255,0.28)]"
            data-hero-letter
            key={`${character}-${characterIndex}`}
          >
            {character}
          </span>
        ))}
      </span>
    );
  });
}

export default function Hero() {
  const [artLoaded, setArtLoaded] = useState(false);
  const heroRef = useRef(null);
  const glowFrameRef = useRef(null);

  useEffect(
    () => () => {
      if (glowFrameRef.current) {
        cancelAnimationFrame(glowFrameRef.current);
      }
    },
    [],
  );

  const resetLetterGlow = () => {
    if (glowFrameRef.current) {
      cancelAnimationFrame(glowFrameRef.current);
    }

    heroRef.current
      ?.querySelectorAll("[data-hero-letter]")
      .forEach((letter) => letter.style.removeProperty("text-shadow"));
  };

  const updateLetterGlow = (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;

    const pointerX = event.clientX;
    const pointerY = event.clientY;

    if (glowFrameRef.current) {
      cancelAnimationFrame(glowFrameRef.current);
    }

    glowFrameRef.current = requestAnimationFrame(() => {
      const glowRadius = 180;

      // Direct style updates avoid a full React render for every pointer movement.
      heroRef.current
        ?.querySelectorAll("[data-hero-letter]")
        .forEach((letter) => {
          const bounds = letter.getBoundingClientRect();
          // Distance to the glyph box feels natural even when the cursor is inside it.
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

  return (
    <section
      className="relative h-svh min-h-svh overflow-hidden bg-[#081126] text-white"
      id="top"
      ref={heroRef}
      onPointerMove={updateLetterGlow}
      onPointerLeave={resetLetterGlow}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(41,92,255,0.24),transparent_42%),radial-gradient(circle_at_42%_80%,rgba(255,31,143,0.16),transparent_36%)]"
        aria-hidden="true"
      />
      <img
        className={`pointer-events-none absolute top-[-8%] right-[-4%] h-[118%] w-auto max-w-none object-contain transition-[opacity,transform,filter] duration-1000 ease-out [filter:saturate(1.08)_contrast(1.04)_drop-shadow(0_0_50px_rgba(57,163,255,0.2))] max-[800px]:top-[14%] max-[800px]:right-[-38%] max-[800px]:h-[92%] ${artLoaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
        src={heroArt}
        alt=""
        aria-hidden="true"
        onLoad={() => setArtLoaded(true)}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_54.137%,rgba(0,0,0,0.68)_100%)]"
        aria-hidden="true"
      />
      <HeroSquares />
      <Header />
      <div className="pointer-events-none absolute bottom-[6.5rem] left-1/2 z-[2] mx-auto flex w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] -translate-x-1/2 items-end justify-between max-[800px]:top-[99px] max-[800px]:bottom-auto max-[800px]:w-[336px] max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-start max-[800px]:gap-4">
        <h1
          className="m-0 font-prism-title text-[clamp(5rem,13.2vw,12.5rem)] leading-[0.8] font-normal tracking-[-0.03em] max-[800px]:w-full max-[800px]:text-center max-[800px]:text-[72px]"
          aria-label="PRISM Collective"
        >
          <GlowLetters text="PRISM" />
          <br />
          <GlowLetters text="Collective" />
        </h1>
        <p
          className="m-0 w-[min(29rem,34vw)] text-right text-[clamp(1.35rem,2.12vw,2rem)] leading-[1.2] font-medium tracking-[-0.03em] max-[800px]:w-[316px] max-[800px]:text-center max-[800px]:text-[22px] max-[800px]:leading-none"
          aria-label="a playground for artists, engineers, and creative minds"
        >
          <GlowLetters text="a playground for artists, engineers, and creative minds" />
        </p>
      </div>
    </section>
  );
}
