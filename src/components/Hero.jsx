import heroArt from "../assets/hero/hero-art.webp";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-art" src={heroArt} alt="" aria-hidden="true" />
      <Header />
      <div className="hero-copy container">
        <h1 className="display-title">
          PRISM
          <br />
          Collective
        </h1>
        <p>a playground for artists, engineers, and creative minds</p>
      </div>
    </section>
  );
}
