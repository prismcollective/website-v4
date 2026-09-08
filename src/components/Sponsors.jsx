import ARTSBUILD_ONTARIO_LOGO from "../assets/sponsors/artsbuild-ontario.png";
import LUMIERE_LOGO from "../assets/sponsors/lumiere.png";
import NUIT_BLANCHE_LOGO from "../assets/sponsors/nuit-blanche.png";
import SOCRATICA_LOGO from "../assets/sponsors/socratica.svg";
import UNIVERSITY_OF_WATERLOO_LOGO from "../assets/sponsors/university-of-waterloo.png";
import VELOCITY_LOGO from "../assets/sponsors/velocity.png";

const sponsors = [
  {
    name: "University of Waterloo",
    href: "https://uwaterloo.ca/",
    logo: UNIVERSITY_OF_WATERLOO_LOGO,
  },
  {
    name: "Velocity",
    href: "https://www.velocityincubator.com/",
    logo: VELOCITY_LOGO,
  },
  {
    name: "Socratica",
    href: "https://socratica.info/",
    logo: SOCRATICA_LOGO,
  },
  {
    name: "ArtsBuild Ontario",
    href: "https://www.artsbuildontario.ca/",
    logo: ARTSBUILD_ONTARIO_LOGO,
  },
  {
    name: "Lumière",
    href: "https://ontarioplace.com/en/special_programs/lumiere/",
    logo: LUMIERE_LOGO,
  },
  {
    name: "Nuit Blanche",
    href: "https://www.toronto.ca/explore-enjoy/festivals-events/nuitblanche/",
    logo: NUIT_BLANCHE_LOGO,
  },
];

export default function Sponsors() {
  return (
    <section className="mx-auto flex w-full flex-col gap-4 py-16 md:mt-20 md:w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] md:py-24">
      <h2 className="text-[48px] leading-none font-medium tracking-[-0.05em] md:text-header-2">
        a thank you to our sponsors.
      </h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 py-8 sm:grid-cols-3 md:grid-cols-6 md:gap-x-8 md:py-12">
        {sponsors.map(({ name, href, logo }) => (
          <a
            className="flex min-w-0 items-center justify-center"
            href={href}
            key={name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name}`}
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-16 w-full max-w-[180px] object-contain [filter:var(--line-art-filter)] md:h-[86px]"
            />
          </a>
        ))}
      </div>
      <p className="text-[18px] leading-[1.2] font-medium tracking-[-0.03em] md:text-large-body">
        we are grateful for your support that has made it possible for us to
        continue to build up this community of creatives.
      </p>
    </section>
  );
}
