import ARROW_SMALL from "../assets/icons/footer-arrow.svg";
import FIGURE_BLUE from "../assets/join/figure-blue.svg";
import FIGURE_CENTER from "../assets/join/figure-center.svg";
import FIGURE_LEFT from "../assets/join/figure-left.svg";
import FIGURE_PURPLE from "../assets/join/figure-purple.svg";
import FIGURE_YELLOW from "../assets/join/figure-yellow.svg";
import InteractiveSquare from "./InteractiveSquare";

const SQUARES = [
  [75.7, 27.38, 1.92, 3.5, "#ad2694"],
  [72.78, 11.94, 2.22, 3.5, "#09daff"],
  [13.31, 22.13, 1.91, 3.5, "#ad2694"],
  [41.23, 79.12, 2.01, 3.18, "#f04181"],
  [88.61, 71.16, 3.42, 5.25, "#ffc340"],
  [51.81, 18.63, 3.43, 5.25, "#ffc340"],
  [38.91, 33.11, 3.43, 5.25, "#cd59a4"],
  [61.69, 49.99, 3.43, 5.25, "#e3d698"],
  [57.06, 71.16, 1.61, 2.39, "#c1bed5"],
  [15.32, 40.11, 3.43, 5.25, "#c8e2b4"],
  [9.17, 70.36, 2.22, 3.5, "#09daff"],
  [30.44, 44.89, 2.22, 3.5, "#b469b3"],
];

const JOIN_EMISSION_TARGETS = SQUARES.flatMap(
  ([left, top, width, height, color], squareIndex) =>
    [0, 1, 2].map((variant) => ({
      color,
      height,
      left:
        variant === 0
          ? left
          : Math.max(-4, Math.min(101, left + ((squareIndex * 17 + variant * 29) % 31) - 15)),
      targetKey: `${squareIndex}-${variant}`,
      top:
        variant === 0
          ? top
          : Math.max(-4, Math.min(101, top + ((squareIndex * 13 + variant * 23) % 29) - 14)),
      width,
    })),
);

function JoinArtwork() {
  return (
    <div
      className="relative aspect-[992/628] w-full"
      aria-label="Five colourful figures reaching toward one another"
      role="img"
    >
      <img
        src={FIGURE_LEFT}
        alt=""
        className="absolute top-0 left-[9.92%] h-[40.69%] w-[35.87%]"
      />
      <img
        src={FIGURE_CENTER}
        alt=""
        className="absolute top-[8.03%] left-[47.18%] h-[37.28%] w-[33.35%]"
      />
      <img
        src={FIGURE_BLUE}
        alt=""
        className="absolute top-[45.44%] left-[5.96%] h-[46.78%] w-[27.48%] rotate-[12.22deg] skew-x-[-1.66deg]"
      />
      <img
        src={FIGURE_PURPLE}
        alt=""
        className="absolute top-[58.69%] left-[31.55%] h-[37.44%] w-[32.29%]"
      />
      <img
        src={FIGURE_YELLOW}
        alt=""
        className="absolute top-[46.63%] left-[65.35%] h-[47.6%] w-[30.23%] -rotate-[17.59deg] skew-x-[2.29deg]"
      />

      {JOIN_EMISSION_TARGETS.map(
        ({ left, top, width, height, color, targetKey }, index) => (
        <InteractiveSquare
          key={targetKey}
          className="absolute"
          color={color}
          spawnOrigin={{ x: 0.5, y: 0.5 }}
          label={`Animate join artwork square ${index + 1}`}
          style={{
            height: `${height}%`,
            left: `${left}%`,
            top: `${top}%`,
            width: `${width}%`,
          }}
        />
        ),
      )}
    </div>
  );
}

export default function Join() {
  return (
    <section
      id="join"
      className="mx-auto min-h-[446.267px] w-full max-w-[1512px] p-0 md:min-h-0 md:pt-[123px]"
    >
      <div className="relative md:h-[628px]">
        <div className="w-full md:absolute md:top-0 md:left-[1.79%] md:w-[65.61%]">
          <JoinArtwork />
        </div>

        <div className="mt-4 flex flex-col items-start gap-4 md:absolute md:top-[95px] md:right-[4.7%] md:mt-0 md:w-[599px] md:items-end">
          <div className="flex flex-col gap-2 text-left md:gap-4 md:text-right">
            <h2 className="text-[48px] leading-none font-medium tracking-[-0.05em] md:text-header-1">
              join our team!
            </h2>
            <p className="text-[18px] leading-[1.2] font-medium tracking-[-0.03em] md:text-large-body">
              Join us as a technical contributor or PRISM Architect to help
              create projects, host experiences, and grow a community at the
              intersection of art, design, and technology.
            </p>
          </div>

          <a
            href="mailto:uwprism@gmail.com?subject=Joining%20PRISM"
            className="inline-flex items-center justify-center gap-1 overflow-hidden rounded-lg border-2 border-white bg-black px-4 py-2 text-[18px] leading-[1.2] font-medium tracking-[-0.03em] text-white transition-opacity hover:opacity-90 md:gap-[5.926px] md:px-[23.704px] md:py-4 md:text-body-1-heavy"
          >
            Open roles
            <img src={ARROW_SMALL} alt="" className="size-[18px] md:size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
