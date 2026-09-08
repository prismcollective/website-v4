import PRISM_MARK from "../assets/intro/prism-mark.webp";
import UWATERLOO_CREST from "../assets/intro/uwaterloo-crest.png";
import CIRCUIT_BOARD from "../assets/intro/circuit-board.webp";
import GLOW from "../assets/intro/glow.png";
import LEFT_GLOW from "../assets/intro/left-glow.svg";
import PERSON_LEFT from "../assets/intro/person-left.svg";
import PERSON_MIDDLE from "../assets/intro/person-middle.svg";
import PERSON_RIGHT from "../assets/intro/person-right.svg";
import SPARKLES from "../assets/intro/sparkles.svg";
import InteractiveSquare from "./InteractiveSquare";

const INTRO_SQUARES = [
  {
    className: "absolute top-[158px] left-[18.42%] z-20 size-[54px] max-md:hidden",
    color: "#f2ffa1",
    label: "Animate lime intro square",
  },
  {
    className: "absolute top-[486px] left-[25.33%] z-20 size-7 max-md:hidden",
    color: "#ff096c",
    label: "Animate pink intro square",
  },
  {
    className: "absolute top-[469px] left-[8.53%] z-20 size-[74px] max-md:hidden",
    color: "var(--border-primary)",
    label: "Animate outlined intro square",
    outline: true,
  },
  {
    className: "absolute top-[-16px] left-1 z-20 size-[74px] max-md:hidden",
    color: "var(--border-primary)",
    label: "Animate outlined intro square",
    outline: true,
  },
  {
    className: "absolute top-[700px] left-[9%] z-20 size-[39px] max-md:hidden",
    color: "#09daff",
    glowColor: "#09daff",
    label: "Animate cyan intro square",
  },
];

const INTRO_EMISSION_TARGETS = INTRO_SQUARES.flatMap((square, squareIndex) =>
  [0, 1, 2].map((variant) => ({
    ...square,
    offset:
      variant === 0
        ? "0 0"
        : `${((squareIndex * 83 + variant * 127) % 321) - 160}px ${((squareIndex * 59 + variant * 97) % 281) - 140}px`,
    targetKey: `${squareIndex}-${variant}`,
  })),
);

export default function Intro() {
  return (
    <section
      id="about"
      className="relative min-h-[532px] w-full overflow-visible p-0 md:min-h-[878px] md:py-24 md:pt-[153px]"
    >
      <div
        className="pointer-events-none absolute top-[-116px] left-[-636px] flex h-[1075px] w-[1150px] items-center justify-center max-md:top-[124px] max-md:right-0 max-md:left-auto max-md:h-[803px] max-md:w-[788px]"
        aria-hidden="true"
      >
        <img
          src={LEFT_GLOW}
          alt=""
          className="h-[1150px] w-[1075px] max-w-none flex-none -rotate-90 max-md:h-[788px] max-md:w-[803px] max-md:opacity-40"
        />
      </div>
      {INTRO_EMISSION_TARGETS.map((square) => (
        <InteractiveSquare
          key={square.targetKey}
          className={square.className}
          color={square.color}
          glowColor={square.glowColor}
          outline={square.outline}
          outlineWidth="2.643px"
          spawnOrigin={{ x: 0.36, y: 0.5 }}
          style={{ translate: square.offset }}
          label={square.label}
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
          <span className="relative inline-block h-[1em] w-[1.15em] align-baseline">
            <span className="absolute top-1/2 left-0 flex h-[1.24em] -translate-y-1/2 items-end md:h-[1.3em]">
              <img src={PERSON_LEFT} alt="" className="h-full w-auto" />
              <img
                src={PERSON_MIDDLE}
                alt=""
                className="-ml-[0.22em] h-full w-auto md:-ml-[0.3em]"
              />
              <img
                src={PERSON_RIGHT}
                alt=""
                className="-ml-[0.22em] h-full w-auto md:-ml-[0.28em]"
              />
            </span>
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
