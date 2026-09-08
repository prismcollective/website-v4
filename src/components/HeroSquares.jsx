import InteractiveSquare from "./InteractiveSquare";

const squares = [
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

const offsetValue = (value, offset) =>
  offset === 0 ? value : `calc(${value} + ${offset}px)`;

const emissionTargets = squares.flatMap((square, squareIndex) =>
  [0, 1, 2].map((variant) => {
    const desktopX =
      variant === 0 ? 0 : ((squareIndex * 73 + variant * 131) % 281) - 140;
    const desktopY =
      variant === 0 ? 0 : ((squareIndex * 47 + variant * 89) % 221) - 110;
    const mobileX =
      variant === 0 ? 0 : ((squareIndex * 37 + variant * 61) % 101) - 50;
    const mobileY =
      variant === 0 ? 0 : ((squareIndex * 29 + variant * 43) % 121) - 60;

    return {
      ...square,
      desktop: [
        offsetValue(square.desktop[0], desktopX),
        offsetValue(square.desktop[1], desktopY),
        square.desktop[2],
        square.desktop[3],
      ],
      mobile: [
        offsetValue(square.mobile[0], mobileX),
        offsetValue(square.mobile[1], mobileY),
        square.mobile[2],
        square.mobile[3],
      ],
      targetKey: `${squareIndex}-${variant}`,
    };
  }),
);

function HeroSquare({ square, index }) {
  const [desktopLeft, desktopTop, desktopWidth, desktopHeight] = square.desktop;
  const [mobileLeft, mobileTop, mobileWidth, mobileHeight] =
    square.mobile;

  return (
    <InteractiveSquare
      color={square.color}
      glowColor={square.glowColor}
      outline={square.outline}
      spawnOrigin={{ x: 0.49, y: 0.415 }}
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
        {emissionTargets.map((square, index) => (
          <HeroSquare square={square} index={index} key={square.targetKey} />
        ))}
      </div>
    </div>
  );
}
