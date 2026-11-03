import PRISM_MARK from "../assets/intro/prism-mark.webp";
import UWATERLOO_CREST from "../assets/intro/uwaterloo-crest.png";
import CIRCUIT_BOARD from "../assets/intro/circuit-board.webp";
import GLOW from "../assets/intro/glow.png";
import SPARKLES from "../assets/intro/sparkles.svg";
import INTRO_ART from "../assets/illustrations/prism-intro.webp";
import MISSION_ART from "../assets/illustrations/prism-mission-composite.webp";
import InteractiveSquare from "./InteractiveSquare";

const INTRO_COLORS = ["#f2ffa1", "#ff096c", "#09daff", "#b469b3"];

const INTRO_SQUARES = Array.from({ length: 15 }, (_, index) => {
  const outline = index % 7 === 3;
  const size = 22 + ((index * 31) % 54);

  return {
    color: outline
      ? "var(--border-primary)"
      : INTRO_COLORS[(index * 3) % INTRO_COLORS.length],
    left: 1 + ((index * 43 + 7) % 31),
    outline,
    size,
    targetKey: `intro-square-${index}`,
    top: -16 + ((index * 137 + 41) % 777),
  };
});

export default function Intro() {
  return (
    <section
      id="about"
      className="relative min-h-[532px] w-full overflow-visible p-0 md:min-h-[878px] md:py-24 md:pt-[153px]"
    >
      <div
        className="absolute top-[18px] left-0 flex h-[760px] w-[520px] items-center justify-center max-md:top-[92px] max-md:right-[-176px] max-md:left-auto max-md:h-[540px] max-md:w-[432px]"
        data-illustration-glow
        aria-hidden="true"
      >
        <img
          src={INTRO_ART}
          alt=""
          className="size-full max-w-none flex-none object-contain opacity-65 [filter:saturate(1.08)_contrast(1.04)_drop-shadow(0_0_44px_rgba(57,163,255,0.16))] max-md:opacity-45"
        />
      </div>
      {INTRO_SQUARES.map((square, index) => (
        <InteractiveSquare
          key={square.targetKey}
          className="absolute z-20 max-md:hidden"
          color={square.color}
          outline={square.outline}
          outlineWidth="2.643px"
          spawnOrigin={{ x: 0.36, y: 0.5 }}
          emissionIndex={index}
          emissionTotal={INTRO_SQUARES.length}
          style={{
            height: square.size,
            left: `${square.left}%`,
            top: square.top,
            width: square.size,
          }}
        />
      ))}

      {/* Header 2 (56px / medium / -5% / 110%) at md+; mobile uses a scaled-down size */}
      <div className="relative z-10 mx-auto w-full md:w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))]">
        <p className="ml-[1.1%] w-[98.9%] font-sans text-[32px] leading-[1.2] font-medium tracking-[-0.05em] text-[var(--text-primary)] md:ml-auto md:max-w-[885px] md:text-header-2 md:leading-[1.25]">
          PRISM Collective{" "}
          <span className="relative inline-block h-[1em] w-[1.15em] align-baseline md:w-[1.55em]">
            <img
              src={PRISM_MARK}
              alt=""
              className="absolute top-1/2 left-0 size-[1.15em] -translate-y-1/2 md:size-[1.55em]"
            />
          </span>{" "}
          is a creative technology company at the{" "}
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[0.06em] underline-offset-[0.08em]"
          >
            University of Waterloo
          </a>{" "}
          <span className="relative inline-block h-[1em] w-[1.15em] align-baseline md:w-[1.3em]">
            <img
              src={UWATERLOO_CREST}
              alt="University of Waterloo crest"
              className="absolute top-1/2 left-0 size-[1.15em] -translate-y-1/2 md:size-[1.3em]"
            />
          </span>{" "}
          supporting{" "}
          <a
            href="#projects"
            className="inline-block border-[1.5px] border-[var(--border-primary)] px-[0.12em]"
          >
            interdisciplinary projects
            <span className="relative ml-[0.18em] inline-block h-[1em] w-[0.82em] align-baseline">
              <img
                src={CIRCUIT_BOARD}
                alt=""
                className="absolute top-1/2 left-0 h-[1.12em] w-[0.82em] -translate-y-1/2 object-cover"
              />
            </span>
          </a>{" "}
          at the intersection of art and technology. We cultivate a space{" "}
          <span className="relative inline-block h-[1em] w-[0.96em] align-baseline">
            <img
              src={GLOW}
              alt=""
              className="absolute top-1/2 left-0 h-[1.55em] w-[0.96em] -translate-y-1/2"
            />
          </span>{" "}
          where artists, engineers, scientists, and designers come together{" "}
          <span
            className="relative inline-block h-[1em] w-[1.65em] align-baseline"
            data-illustration-glow
          >
            <img
              src={MISSION_ART}
              alt=""
              className="absolute top-1/2 left-0 h-[1.55em] w-[1.65em] -translate-y-1/2 object-contain [filter:saturate(1.08)_contrast(1.04)]"
            />
          </span>{" "}
          to{" "}
          <span className="relative inline-block h-[1em] w-[2.37em] align-baseline">
            <img
              src={SPARKLES}
              alt=""
              className="absolute top-1/2 left-0 h-[0.9em] w-[2.37em] -translate-y-1/2"
            />
          </span>{" "}
          collaborate, experiment, and create.
        </p>
      </div>
    </section>
  );
}
