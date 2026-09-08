import InteractiveSquare from "./InteractiveSquare";

const HERO_PALETTE = [
  {
    color: "#09daff",
    glowColor: "#09daff",
    desktop: ["64.338%", "340.33px", "48px", "48px"],
    mobile: ["297.78px", "421.81px", "41.56px", "41.56px"],
  },
  {
    color: "#ffc340",
    glowColor: "#ffc340",
    desktop: ["68.089%", "678.48px", "40px", "38px"],
    mobile: ["78.54px", "616.35px", "34px", "32.11px"],
  },
  {
    color: "#cd59a4",
    glowColor: "#cd59a4",
    desktop: ["49.765%", "373.05px", "31px", "29px"],
    mobile: ["196.55px", "281.55px", "26.44px", "24.56px"],
  },
  {
    color: "#e3d698",
    glowColor: "#e3d698",
    desktop: ["61.164%", "538.86px", "31px", "29px"],
    mobile: ["146.84px", "482.56px", "26.44px", "24.56px"],
  },
  {
    color: "#c8e2b4",
    glowColor: "#c8e2b4",
    desktop: ["45.148%", "239.98px", "27px", "27px"],
    mobile: ["269.77px", "173.71px", "22.67px", "22.67px"],
  },
  {
    color: "#09daff",
    glowColor: "#09daff",
    desktop: ["44.859%", "591.22px", "16px", "16px"],
    mobile: ["15.68px", "328.94px", "13.22px", "13.22px"],
  },
  {
    color: "#b469b3",
    glowColor: "#b469b3",
    desktop: ["42.695%", "674.12px", "29px", "29px"],
    mobile: ["-74.05px", "332.54px", "24.56px", "24.56px"],
  },
  {
    color: "#ffffff",
    glowColor: "#ffffff",
    outline: true,
    desktop: ["68.089%", "388.33px", "83px", "83px"],
    mobile: ["286.49px", "526.64px", "71.78px", "71.78px"],
  },
  {
    color: "#ffffff",
    glowColor: "#ffffff",
    outline: true,
    desktop: ["59.144%", "739.56px", "40px", "40px"],
    mobile: ["-9.63px", "570.36px", "34px", "34px"],
  },
  {
    color: "#ffffff",
    glowColor: "#ffffff",
    outline: true,
    desktop: ["35.336%", "253.07px", "59px", "59px"],
    mobile: ["187.71px", "92.95px", "51px", "51px"],
  },
];

// A single flat field: every entry is an independent emission target rather
// than one of three variants clustered around a parent square.
const HERO_SQUARES = Array.from({ length: 30 }, (_, index) => {
  const paletteSquare = HERO_PALETTE[(index * 7) % HERO_PALETTE.length];
  const sizeScale = 0.62 + ((index * 19) % 73) / 100;
  const desktopSize = 12 + Math.round(42 * sizeScale);
  const mobileSize = 9 + Math.round(32 * sizeScale);

  return {
    ...paletteSquare,
    desktop: [
      `${32 + ((index * 47 + 13) % 48)}%`,
      `${105 + ((index * 131 + 29) % 690)}px`,
      `${desktopSize}px`,
      `${desktopSize}px`,
    ],
    mobile: [
      `${-52 + ((index * 83 + 17) % 446)}px`,
      `${62 + ((index * 109 + 31) % 650)}px`,
      `${mobileSize}px`,
      `${mobileSize}px`,
    ],
    targetKey: `hero-square-${index}`,
  };
});

function HeroSquare({ square, index }) {
  const [desktopLeft, desktopTop, desktopWidth, desktopHeight] = square.desktop;
  const [mobileLeft, mobileTop, mobileWidth, mobileHeight] =
    square.mobile;

  return (
    <InteractiveSquare
      color={square.color}
      directionJitter={1.5}
      glowColor={square.glowColor}
      outline={square.outline}
      spawnOrigin={{ x: 0.49, y: 0.35 }}
      emissionIndex={index}
      emissionTotal={HERO_SQUARES.length}
      minSpawnDuration={12500}
      maxSpawnDuration={15500}
      minSpawnScale={0.38}
      maxSpawnScale={0.9}
      className="absolute left-[var(--desktop-left)] top-[var(--desktop-top)] h-[var(--desktop-height)] w-[var(--desktop-width)] cursor-pointer border-0 bg-transparent p-0 max-[800px]:left-[var(--mobile-left)] max-[800px]:top-[var(--mobile-top)] max-[800px]:h-[var(--mobile-height)] max-[800px]:w-[var(--mobile-width)]"
      style={{
        "--desktop-left": desktopLeft,
        "--desktop-top": desktopTop,
        "--desktop-width": desktopWidth,
        "--desktop-height": desktopHeight,
        "--mobile-left": mobileLeft,
        "--mobile-top": mobileTop,
        "--mobile-width": mobileWidth,
        "--mobile-height": mobileHeight,
      }}
      label={`Animate decorative square ${index + 1}`}
    />
  );
}

export default function HeroSquares() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] max-[800px]:left-1/2 max-[800px]:h-[852px] max-[800px]:w-[393px] max-[800px]:-translate-x-1/2"
      aria-hidden="false"
    >
      <div className="pointer-events-auto contents">
        {HERO_SQUARES.map((square, index) => (
          <HeroSquare square={square} index={index} key={square.targetKey} />
        ))}
      </div>
    </div>
  );
}
