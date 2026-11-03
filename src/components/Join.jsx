import ARROW_SMALL from "../assets/icons/footer-arrow.svg";
import JOIN_ART from "../assets/illustrations/prism-join.webp";
import InteractiveSquare from "./InteractiveSquare";

const JOIN_COLORS = [
  "#f4f7a2",
  "#d9ffb7",
  "#b7f3e2",
  "#aee9ff",
  "#d6c7ff",
  "#f5c8e6",
  "#fff0a8",
  "#cce8c7",
  "#d9f6ff",
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
      aria-label="A luminous abstract form representing creative collaboration"
      role="img"
    >
      <div className="illustration-glow absolute top-[-11%] left-[3%] w-[65%]">
        <img
          src={JOIN_ART}
          alt=""
          className="pointer-events-none h-auto w-full max-w-none [filter:saturate(1.08)_contrast(1.03)_drop-shadow(0_0_42px_rgba(191,255,167,0.14))]"
        />
      </div>

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
