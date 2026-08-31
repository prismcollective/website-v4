import PRISM_LOGO from "../assets/intro/prism-logo.png";
import UWATERLOO from "../assets/intro/uwaterloo.png";
import CHIP from "../assets/intro/chip.svg";
import GLOW from "../assets/intro/glow.png";
import PEOPLE from "../assets/intro/people.svg";
import STARS from "../assets/intro/stars.svg";

export default function Intro() {
  return (
    <section className="max-w-[1360px] mx-auto px-6 py-24">
      {/* Header 2 (56px / medium / -5% / 110%) at md+; mobile uses a scaled-down size */}
      <p className="text-[var(--text-primary)] font-sans text-3xl font-medium leading-[1.1] tracking-[-0.05em] md:text-header-2 max-w-4xl">
        PRISM Collective{" "}
        <img
          src={PRISM_LOGO}
          alt=""
          className="inline-block w-10 h-10 md:w-14 md:h-14 align-middle rounded-full"
        />{" "}
        is a creative technology company at the University of Waterloo{" "}
        <img
          src={UWATERLOO}
          alt=""
          className="inline-block w-8 h-8 md:w-12 md:h-12 align-middle rounded"
        />{" "}
        supporting interdisciplinary projects{" "}
        <img
          src={CHIP}
          alt=""
          className="inline-block w-12 h-4 md:w-16 md:h-5 align-middle"
        />{" "}
        at the intersection of art and technology. We cultivate a space{" "}
        <img
          src={GLOW}
          alt=""
          className="inline-block w-6 h-10 md:w-8 md:h-14 align-middle"
        />{" "}
        where artists, engineers, scientists, and designers come together{" "}
        <span className="inline-flex align-middle gap-0.5">
          <img src={PEOPLE} alt="" className="w-6 h-10 md:w-8 md:h-14" />
          <img src={STARS} alt="" className="w-5 h-10 md:w-6 md:h-14" />
        </span>{" "}
        to collaborate, experiment, and create.
      </p>
    </section>
  );
}
