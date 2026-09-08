import { useState } from "react";
import CARD_STAR from "../assets/impact/card-star.svg";
import LINE_LEFT from "../assets/impact/history-line-left.svg";
import LINE_MIDDLE from "../assets/impact/history-line-middle.svg";
import LINE_VERTICAL from "../assets/impact/history-line-vertical.svg";
import LINES_CENTER from "../assets/impact/history-lines-center.svg";
import LINES_RIGHT from "../assets/impact/history-lines-right.svg";
import PERSON_LEFT from "../assets/intro/person-left.svg";
import PERSON_MIDDLE from "../assets/intro/person-middle.svg";
import PERSON_RIGHT from "../assets/intro/person-right.svg";

const CARDS = [
  {
    title: "THE GAP",
    body: "UWaterloo's technical talent often lacks an outlet for creative expression. PRISM fills this void, creating the interdisciplinary space needed to merge engineering rigor with artistic ambition.",
    position: { left: 0, top: 97 },
  },
  {
    title: "THE STRUCTURE",
    body: "We support student-led projects with funding, tools, and mentorship while building large-scale public sculptures and hosting workshops and events in Waterloo, Toronto & beyond.",
    position: { left: "7.78%", top: 557 },
  },
  {
    title: "THE IMPACT",
    body: "Over 500 members strong, we’ve supported 15+ student projects and taken interactive art from campus to major public festivals like Lumière and Nuit Blanche.",
    position: { left: "62%", top: 779 },
  },
];

const FIGURES = [
  {
    src: PERSON_LEFT,
    label: "The gap",
    aspect: "40.6473 / 76.6452",
    desktop: { top: 0, left: "39.53%", width: "28.92%" },
    mobile: { top: "8.2%", left: 0, height: "89.1%", width: "47.82%" },
  },
  {
    src: PERSON_MIDDLE,
    label: "The structure",
    aspect: "43.0141 / 77.0755",
    desktop: { top: 21, left: "58.49%", width: "30.6%" },
    mobile: {
      top: "10.5%",
      left: "31.35%",
      height: "89.6%",
      width: "50.61%",
    },
  },
  {
    src: PERSON_RIGHT,
    label: "The impact",
    aspect: "30.6656 / 77.0755",
    desktop: { top: 19, left: "78.18%", width: "21.82%" },
    mobile: {
      top: "10.5%",
      right: 0,
      height: "89.6%",
      width: "36.08%",
    },
  },
];

function CardSurface({ card, compact = false }) {
  return (
    <div className="w-full bg-[var(--border-primary)] p-px [clip-path:polygon(0_0,100%_0,100%_100%,32px_100%,0_calc(100%_-_32px))]">
      <div
        className={`${compact ? "min-h-[218px] px-6 pt-6 pb-12" : "min-h-[247px] px-7 pt-6 pb-12"} flex w-full flex-col gap-5 bg-[var(--surface-card)] [clip-path:polygon(0_0,100%_0,100%_100%,31px_100%,0_calc(100%_-_31px))]`}
      >
        <div className="flex w-full items-start justify-between gap-4">
          <div className="border border-[var(--border-primary)] px-3 py-2.5 md:px-4 md:py-2">
            <h3 className="text-[22px] leading-none font-medium tracking-[-0.03em] whitespace-nowrap md:text-large-body md:leading-[1.2]">
              {card.title}
            </h3>
          </div>
          <img
            src={CARD_STAR}
            alt=""
            className="size-9 shrink-0 [filter:var(--line-art-filter)] md:size-[37.2px]"
          />
        </div>
        <p className="w-full text-left text-base leading-[1.25] font-medium tracking-[-0.03em] md:text-body-1-heavy md:leading-[1.2]">
          {card.body}
        </p>
      </div>
    </div>
  );
}

function HistoryCard({ card }) {
  return (
    <article
      className="absolute z-20 w-[min(448px,38%)] animate-[carousel-copy-in_320ms_ease-out_both]"
      style={card.position}
    >
      <CardSurface card={card} />
    </article>
  );
}

function FigureButton({ figure, index, activeCard, setActiveCard, mobile }) {
  const active = activeCard === index;
  const visualState = mobile
    ? active
      ? "z-[6] blur-0 opacity-100"
      : "blur-[7px] opacity-60 hover:blur-[3px] hover:opacity-80"
    : "blur-0 opacity-100";

  return (
    <button
      type="button"
      className={`group absolute z-[5] cursor-pointer border-0 bg-transparent p-0 transition-[filter,opacity] duration-500 ${visualState}`}
      onClick={() => setActiveCard(index)}
      aria-label={`Show ${figure.label} card`}
      aria-pressed={active}
      style={
        mobile
          ? figure.mobile
          : { ...figure.desktop, aspectRatio: figure.aspect }
      }
    >
      <img
        src={figure.src}
        alt=""
        className="block size-full object-contain"
      />
    </button>
  );
}

export default function ImpactCards() {
  const [activeCard, setActiveCard] = useState(0);
  const [connectorAnimation, setConnectorAnimation] = useState(0);

  const selectCard = (index) => {
    setActiveCard(index);
    setConnectorAnimation((iteration) => iteration + 1);
  };

  return (
    <section className="mx-auto my-16 w-full md:my-24 md:w-[min(calc(100%_-_2_*_var(--page-gutter)),1350px)]">
      <h2 className="mb-8 text-[48px] leading-none font-medium tracking-[-0.05em] md:mb-12 md:text-header-1">
        our mission
      </h2>

      <div className="flex w-full flex-col gap-4 min-[1100px]:hidden">
        <div
          className="relative w-full overflow-visible [--figure-connector-stroke:1px]"
          role="group"
          aria-label="Choose a figure to highlight its story"
          style={{ aspectRatio: "361 / 395.1337" }}
        >
          {FIGURES.map((figure, index) => (
            <FigureButton
              key={figure.label}
              figure={figure}
              index={index}
              activeCard={activeCard}
              setActiveCard={selectCard}
              mobile
            />
          ))}
          <span
            key={`mobile-line-${activeCard}-${connectorAnimation}`}
            className="pointer-events-none absolute top-[43.05%] bottom-[-17px] z-[8] w-[var(--figure-connector-stroke)] origin-top animate-[connector-mobile-straight-in_700ms_cubic-bezier(0.22,0.75,0.25,1)_both] bg-[linear-gradient(to_bottom,#fff_0%,#fff_72%,var(--border-primary)_100%)]"
            style={{ left: ["34.5%", "59.2%", "86.6%"][activeCard] }}
            aria-hidden="true"
          />
          <span
            key={`mobile-square-${activeCard}-${connectorAnimation}`}
            className="pointer-events-none absolute top-[37.2%] z-10 aspect-square w-[6.4%] animate-[connector-square-in_260ms_ease-out_both] border-[length:var(--figure-connector-stroke)] border-white"
            style={{ left: ["31.3%", "56%", "83.4%"][activeCard] }}
            aria-hidden="true"
          />
        </div>

        <article key={CARDS[activeCard].title}>
          <CardSurface card={CARDS[activeCard]} compact />
        </article>
      </div>

      <div className="relative hidden min-h-[1160px] w-full overflow-hidden min-[1100px]:block">
        {FIGURES.map((figure, index) => (
          <FigureButton
            key={figure.label}
            figure={figure}
            index={index}
            activeCard={activeCard}
            setActiveCard={selectCard}
          />
        ))}

        <div
          className="pointer-events-none absolute top-[230px] left-[38.5%] z-10 h-[355px] w-[39.17%]"
          key={`center-${activeCard === 1 ? connectorAnimation : "still"}`}
        >
          <img
            src={LINES_CENTER}
            alt=""
            className={`${activeCard === 1 ? "animate-[connector-center-in_650ms_cubic-bezier(0.22,0.75,0.25,1)_both]" : ""} size-full [filter:var(--line-art-filter)]`}
          />
          <span
            className={`${activeCard === 1 ? "animate-[connector-square-in_260ms_650ms_ease-out_both]" : ""} absolute top-0 right-0 size-11 border border-white`}
            aria-hidden="true"
          />
        </div>
        <div
          className="pointer-events-none absolute top-[230px] left-[90.63%] z-10 h-[581px] w-[44.477px]"
          key={`right-${activeCard === 2 ? connectorAnimation : "still"}`}
        >
          <img
            src={LINES_RIGHT}
            alt=""
            className={`${activeCard === 2 ? "animate-[connector-right-in_620ms_cubic-bezier(0.22,0.75,0.25,1)_both]" : ""} size-full [filter:var(--line-art-filter)]`}
          />
          <span
            className={`${activeCard === 2 ? "animate-[connector-square-in_260ms_620ms_ease-out_both]" : ""} absolute top-0 left-0 size-11 border border-white`}
            aria-hidden="true"
          />
        </div>
        <div key={`left-${activeCard === 0 ? connectorAnimation : "still"}`}>
            <img
              src={LINE_LEFT}
              alt=""
              className={`${activeCard === 0 ? "animate-[connector-x-in_280ms_ease-out_both]" : ""} pointer-events-none absolute top-[133px] left-[30.52%] z-10 h-px w-[105px] origin-left [filter:var(--line-art-filter)]`}
            />
            <img
              src={LINE_VERTICAL}
              alt=""
              className={`${activeCard === 0 ? "animate-[connector-elbow-in_300ms_240ms_ease-out_both]" : ""} pointer-events-none absolute top-[133px] left-[38.59%] z-10 h-px w-[120px] origin-left rotate-90 [filter:var(--line-art-filter)]`}
            />
            <img
              src={LINE_MIDDLE}
              alt=""
              className={`${activeCard === 0 ? "animate-[connector-x-in_380ms_500ms_ease-out_both]" : ""} pointer-events-none absolute top-[252px] left-[38.5%] z-10 h-px w-[17.72%] origin-left [filter:var(--line-art-filter)]`}
            />
            <span
              className={`${activeCard === 0 ? "animate-[connector-square-in_260ms_850ms_ease-out_both]" : ""} absolute top-[230px] left-[calc(56.22%_-_22px)] z-10 size-11 border border-white`}
              aria-hidden="true"
            />
        </div>

        {CARDS.map((card) => (
          <HistoryCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
