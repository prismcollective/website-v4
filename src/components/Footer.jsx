import MASK_CENTER from "../assets/footer/mask-center.svg";
import MASK_LEFT from "../assets/footer/mask-left.svg";
import MASK_LOWER_RIGHT from "../assets/footer/mask-lower-right.svg";
import PHOTO_CENTER_LEFT from "../assets/footer/photo-center-left.png";
import PHOTO_CENTER from "../assets/footer/photo-center.png";
import PHOTO_LEFT from "../assets/footer/photo-left.png";
import PHOTO_LOWER_RIGHT from "../assets/footer/photo-lower-right.png";
import PHOTO_MID_RIGHT from "../assets/footer/photo-mid-right.png";
import PHOTO_MID from "../assets/footer/photo-mid.png";
import PHOTO_RIGHT from "../assets/footer/photo-right.png";
import PRISM_GLOW from "../assets/footer/prism-glow.png";
import INSTAGRAM from "../assets/icons/instagram.svg";
import LINKEDIN from "../assets/icons/linkedin.svg";
import MAIL from "../assets/icons/mail.svg";
import MOBILE_MAIL from "../assets/icons/mobile-menu-mail.svg";
import TWITTERX from "../assets/icons/twitter.svg";

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/prismcollectiv_",
    icon: INSTAGRAM,
    label: "@prismcollectiv_",
    alt: "Instagram",
  },
  {
    href: "https://x.com/prismcollectiv_",
    icon: TWITTERX,
    label: "@prismcollectiv_",
    alt: "Twitter / X",
  },
  {
    href: "https://linkedin.com/company/prism-collectiv",
    icon: LINKEDIN,
    label: "/company/prism-collectiv",
    alt: "LinkedIn",
  },
  {
    href: "mailto:uwprism@gmail.com",
    icon: MAIL,
    compactIcon: MOBILE_MAIL,
    label: "uwprism@gmail.com",
    alt: "Email",
  },
];

const DESCRIPTION =
  "PRISM is a playground for creative technology — a community where artists, engineers, and curious creators come together to build wildly creative things. From art installations to workshops and experiments, we turn ideas into reality through collaboration across disciplines.".toUpperCase();

function SocialLinks({ compact = false }) {
  return (
    <div
      className={
        compact
          ? "flex gap-2 md:hidden"
          : "mx-auto hidden w-fit grid-cols-[max-content_max-content] gap-x-[clamp(48px,8vw,120px)] gap-y-6 md:grid"
      }
    >
      {SOCIAL_LINKS.map(({ href, icon, compactIcon, label, alt }) => {
        const external = href.startsWith("http");

        return (
          <a
            key={alt}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={compact ? `${alt}: ${label}` : undefined}
            className={
              compact
                ? "grid size-12 place-items-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                : "flex w-full items-center gap-2"
            }
          >
            <img
              src={compact ? (compactIcon ?? icon) : icon}
              alt=""
              className={`${compact ? (alt === "Email" ? "size-8" : "size-7") : alt === "Email" ? "size-[26px]" : "size-9"} ${compact ? alt === "Email" ? "invert" : "" : "[filter:var(--footer-icon-filter)]"}`}
            />
            {!compact && (
              <span className="text-body-1-heavy whitespace-nowrap">
                {label}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}

function DesktopCollage() {
  // These percentages mirror the Figma composition and scale as one responsive canvas.
  const maskStyle = (source) => ({
    WebkitMaskImage: `url(${source})`,
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskImage: `url(${source})`,
    maskPosition: "center",
    maskRepeat: "no-repeat",
    maskSize: "100% 100%",
  });

  return (
    <div
      className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[min(1512px,100vw)] -translate-x-1/2 md:block"
      aria-hidden="true"
    >
      <div
        className="absolute top-[48.5507%] left-[-8.1349%] h-[64.8551%] w-[36.7394%]"
        data-scroll-reveal
        data-reveal-delay="80"
        style={maskStyle(MASK_LEFT)}
      >
        <img src={MASK_LEFT} alt="" className="absolute inset-0 size-full" />
        <div className="absolute top-0 left-[3.0603%] h-[94.8125%] w-[84.7885%] overflow-hidden">
          <img
            src={PHOTO_LEFT}
            alt=""
            className="absolute top-[-66.57%] left-[-16.36%] h-[219.75%] w-[184.87%] max-w-none"
          />
        </div>
      </div>

      <div
        className="absolute top-[29.3996%] left-[80.754%] h-[106.6253%] w-[59.3254%] overflow-hidden"
        data-scroll-reveal
        data-reveal-delay="140"
      >
        <img
          src={PHOTO_RIGHT}
          alt=""
          className="absolute top-[-39.42%] left-[-16.22%] h-[162.72%] w-[116.22%] max-w-none"
        />
      </div>

      <img
        src={PHOTO_MID_RIGHT}
        alt=""
        data-scroll-reveal
        data-reveal-delay="200"
        className="absolute top-[61.6977%] left-[56.9444%] h-[54.0373%] w-[30.6217%] object-cover"
      />

      <div
        className="absolute top-[52.4845%] left-[49.0741%] h-[78.882%] w-[19.9074%] overflow-hidden"
        data-scroll-reveal
        data-reveal-delay="260"
      >
        <img
          src={PHOTO_MID}
          alt=""
          className="absolute top-[-73.39%] left-[-187.37%] h-[173.35%] w-[292.2%] max-w-none"
        />
      </div>

      <div
        className="absolute top-[65.2174%] left-[24.4048%] h-[71.4803%] w-[36.2765%]"
        data-scroll-reveal
        data-reveal-delay="320"
        style={maskStyle(MASK_CENTER)}
      >
        <img src={MASK_CENTER} alt="" className="absolute inset-0 size-full" />
        <div className="absolute top-[-6.3722%] left-[-11.8505%] h-[108.9066%] w-[114.6764%] overflow-hidden">
          <img
            src={PHOTO_CENTER}
            alt=""
            className="absolute top-[-78.74%] left-[-50.46%] h-[222.64%] w-[199.47%] max-w-none"
          />
        </div>
      </div>

      <div
        className="absolute top-[52.4845%] left-[20.1058%] h-[54.9689%] w-[23.0159%] overflow-hidden"
        data-scroll-reveal
        data-reveal-delay="380"
      >
        <img
          src={PHOTO_CENTER_LEFT}
          alt=""
          className="absolute top-[-133.8%] left-[-218.54%] h-[273.92%] w-[627.88%] max-w-none"
        />
      </div>

      <div
        className="absolute top-[71.3251%] left-[56.9444%] h-[31.8323%] w-[47.7513%]"
        data-scroll-reveal
        data-reveal-delay="440"
        style={maskStyle(MASK_LOWER_RIGHT)}
      >
        <img
          src={MASK_LOWER_RIGHT}
          alt=""
          className="absolute inset-0 size-full"
        />
        <div className="absolute top-[-16.9106%] left-0 h-[109.2683%] w-[99.5845%] overflow-hidden">
          <img
            src={PHOTO_LOWER_RIGHT}
            alt=""
            className="absolute top-0 left-0 h-[104.62%] w-full max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <p
        className="mx-auto hidden w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] pb-[90px] text-center text-body-1-heavy uppercase md:block"
        data-scroll-reveal
      >
        {DESCRIPTION}
      </p>

      <section className="relative h-[438px] overflow-hidden bg-black px-4 py-8 text-white md:h-[min(966px,63.8889vw)] md:bg-[var(--footer-surface)] md:px-0 md:py-0 md:text-[var(--footer-text)] md:backdrop-blur-[12.9px]">
        <img
          src={PRISM_GLOW}
          alt=""
          aria-hidden="true"
          data-footer-prism
          className="pointer-events-none absolute top-[68px] left-[134px] z-0 h-[333px] w-[339px] max-w-none -rotate-[6.35deg] opacity-25 blur-[5.8px] md:top-[2%] md:left-1/2 md:h-[62%] md:w-auto md:-translate-x-1/2 md:rotate-0 md:opacity-20 md:blur-[18px]"
        />

        <div className="relative z-10 flex h-full flex-col justify-between md:mx-auto md:h-[63.8716%] md:w-[89.881%] md:items-center md:justify-center md:gap-[clamp(24px,3.5714vw,54px)]">
          <div className="flex flex-col items-start gap-4 md:items-center md:gap-[clamp(24px,3.5714vw,54px)]">
            <h2
              className="font-prism-title text-[72px] leading-[0.8] tracking-[-0.03em] whitespace-nowrap md:text-center md:text-[clamp(100px,13.2275vw,200px)]"
              data-scroll-reveal
            >
              PRISM
              <br />
              Collective
            </h2>

            <div
              className="md:block"
              data-scroll-reveal
              data-reveal-delay="100"
            >
              <SocialLinks compact={true} />
              <SocialLinks />
            </div>
          </div>

          <p
            className="max-w-[38rem] text-left text-xs leading-[1.3] tracking-[-0.03em] text-[#d2d2d2] uppercase md:hidden"
            data-scroll-reveal
            data-reveal-delay="180"
          >
            {DESCRIPTION}
          </p>
        </div>

        <DesktopCollage />
      </section>
    </footer>
  );
}
