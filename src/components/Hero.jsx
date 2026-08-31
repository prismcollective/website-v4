import heroArt from "../assets/hero/hero-art.webp";
import Header from "./Header";

export default function Hero() {
  return (
    <section
      className="relative min-h-[min(925px,100svh)] bg-[#050505] text-white max-[800px]:min-h-[750px]"
      id="top"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={heroArt}
        alt=""
        aria-hidden="true"
      />
      <Header />
      <div className="absolute bottom-[6.5rem] left-1/2 z-[2] mx-auto flex w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] -translate-x-1/2 items-end justify-between max-[800px]:bottom-12 max-[800px]:block">
        <h1 className="m-0 font-prism-title text-[clamp(5rem,13.2vw,12.5rem)] leading-[0.8] font-normal tracking-[-0.03em]">
          PRISM
          <br />
          Collective
        </h1>
        <p className="m-0 w-[min(29rem,34vw)] text-right text-[clamp(1.35rem,2.12vw,2rem)] leading-[1.2] font-medium tracking-[-0.03em] max-[800px]:mt-10 max-[800px]:ml-auto max-[800px]:w-[85%]">
          a playground for artists, engineers, and creative minds
        </p>
      </div>
    </section>
  );
}
