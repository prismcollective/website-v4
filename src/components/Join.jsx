import ARROW_SMALL from "../assets/icons/footer-arrow.svg";
import FIGURE_BLUE from "../assets/join/figure-blue.svg";
import FIGURE_CENTER from "../assets/join/figure-center.svg";
import FIGURE_LEFT from "../assets/join/figure-left.svg";
import FIGURE_PURPLE from "../assets/join/figure-purple.svg";
import FIGURE_YELLOW from "../assets/join/figure-yellow.svg";
import InteractiveSquare from "./InteractiveSquare";

const JOIN_COLORS = [
  "#ad2694",
  "#09daff",
  "#f04181",
  "#ffc340",
  "#cd59a4",
  "#e3d698",
  "#c1bed5",
  "#c8e2b4",
  "#b469b3",
];

const JOIN_ARTWORK_ASPECT_RATIO = 992 / 628;

const JOIN_SQUARES = Array.from({ length: 36 }, (_, index) => {
  const size = 1.55 + ((index * 29) % 21) / 10;

  return {
    color: JOIN_COLORS[(index * 5) % JOIN_COLORS.length],
    height: size * JOIN_ARTWORK_ASPECT_RATIO,
    left: 5 + ((index * 47 + 11) % 89),
    targetKey: `join-square-${index}`,
    top: 7 + ((index * 61 + 17) % 84),
    width: size,
  };
});

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

      {JOIN_SQUARES.map(
        ({ left, top, width, height, color, targetKey }, index) => (
        <InteractiveSquare
          key={targetKey}
          className="absolute"
          color={color}
          spawnOrigin={{ x: 0.5, y: 0.5 }}
          emissionIndex={index}
          emissionTotal={JOIN_SQUARES.length}
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
