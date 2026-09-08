import { useEffect, useState } from "react";
import CLOSE_ICON from "../assets/icons/menu-close.svg";
import MENU_ICON from "../assets/icons/menu.svg";
import INSTAGRAM from "../assets/icons/instagram.svg";
import LINKEDIN from "../assets/icons/linkedin.svg";
import MAIL from "../assets/icons/mobile-menu-mail.svg";
import TWITTERX from "../assets/icons/twitter.svg";
import MENU_PRISM from "../assets/intro/mobile-menu-prism.svg";
import MENU_PRISM_SHADOW_LEFT from "../assets/intro/mobile-menu-prism-shadow-left.svg";
import MENU_PRISM_SHADOW_RIGHT from "../assets/intro/mobile-menu-prism-shadow-right.svg";
import ThemeToggle from "./ThemeToggle";

const DESCRIPTION =
  "PRISM is a playground for creative technology — a community where artists, engineers, and curious creators come together to build wildly creative things. From art installations to workshops and experiments, we turn ideas into reality through collaboration across disciplines.";

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#join", label: "join us" },
];

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/prismcollectiv_",
    icon: INSTAGRAM,
    label: "PRISM on Instagram",
  },
  {
    href: "https://x.com/prismcollectiv_",
    icon: TWITTERX,
    label: "PRISM on X",
  },
  {
    href: "https://linkedin.com/company/prism-collectiv",
    icon: LINKEDIN,
    label: "PRISM on LinkedIn",
  },
  {
    href: "mailto:uwprism@gmail.com",
    icon: MAIL,
    label: "Email PRISM",
  },
];

function NavigationLinks({ onNavigate }) {
  return NAV_LINKS.map(({ href, label }) => (
    <a
      className="border-b border-transparent hover:border-current"
      href={href}
      key={href}
      onClick={onNavigate}
    >
      {label}
    </a>
  ));
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="relative z-[3] mx-auto flex w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] items-center justify-end pt-[3.8rem] text-lg max-[800px]:pt-6">
      <button
        className="hidden size-8 cursor-pointer border-0 bg-transparent p-0 max-[800px]:block"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-nav"
        onClick={() => setOpen(true)}
      >
        <img
          className="size-8 [filter:var(--line-art-filter)]"
          src={MENU_ICON}
          alt=""
        />
      </button>

      <nav
        className="flex items-center gap-9 max-[800px]:hidden"
        aria-label="Primary navigation"
      >
        <NavigationLinks />
        <ThemeToggle fixedLight={true} />
      </nav>

      {open && (
        <nav
          className="fixed inset-0 z-50 min-h-svh animate-[mobile-menu-surface-in_180ms_ease-out_both] overflow-y-auto bg-[var(--surface-page)] text-[var(--text-primary)] min-[801px]:hidden"
          id="mobile-site-nav"
          aria-label="Mobile navigation"
        >
          <button
            className="absolute top-[30px] right-7 grid size-5 cursor-pointer animate-[mobile-menu-close-in_240ms_80ms_ease-out_both] place-items-center border-0 bg-transparent p-0"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <img
              className="size-5 [filter:var(--line-art-filter)]"
              src={CLOSE_ICON}
              alt=""
            />
          </button>

          <div
            className="pointer-events-none absolute inset-0 animate-[mobile-menu-prism-in_520ms_100ms_cubic-bezier(0.22,0.75,0.25,1)_both]"
            aria-hidden="true"
          >
            <img
              className="absolute top-[33.92%] left-[60.58%] h-[13.01%] w-[28.16%]"
              src={MENU_PRISM}
              alt=""
            />
            <img
              className="absolute top-[44.69%] left-[58.4%] h-[4.25%] w-[16.28%] opacity-60 blur-[4px]"
              src={MENU_PRISM_SHADOW_LEFT}
              alt=""
            />
            <img
              className="absolute top-[44.83%] left-[74.68%] h-[4.11%] w-[13.85%] opacity-60 blur-[4px]"
              src={MENU_PRISM_SHADOW_RIGHT}
              alt=""
            />
          </div>

          <div className="relative mx-auto flex w-[calc(100%_-_54px)] max-w-[339px] flex-col items-start gap-6 pt-[85px] pb-10">
            <div className="flex w-full flex-col items-start justify-center gap-9 text-[22px] leading-none font-medium tracking-[-0.03em] [animation:mobile-menu-item-in_420ms_60ms_cubic-bezier(0.22,0.75,0.25,1)_both]">
              <NavigationLinks onNavigate={() => setOpen(false)} />
              <ThemeToggle />
            </div>

            <div className="flex h-8 w-full items-center gap-4 [animation:mobile-menu-item-in_420ms_130ms_cubic-bezier(0.22,0.75,0.25,1)_both]">
              {SOCIAL_LINKS.map(({ href, icon, label }) => {
                const external = href.startsWith("http");

                return (
                  <a
                    className="grid size-8 place-items-center"
                    href={href}
                    key={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                  >
                    <img
                      className={`size-8 object-contain ${icon === MAIL ? "[filter:var(--line-art-filter)]" : "[filter:var(--footer-icon-filter)]"}`}
                      src={icon}
                      alt=""
                    />
                  </a>
                );
              })}
            </div>

            <div className="w-full [animation:mobile-menu-item-in_460ms_200ms_cubic-bezier(0.22,0.75,0.25,1)_both]">
              <h2 className="font-prism-title m-0 w-[303px] text-[72px] leading-[0.8] tracking-[-0.03em]">
                PRISM
                <br />
                Collective
              </h2>
            </div>

            <p className="m-0 w-full animate-[mobile-menu-item-in_460ms_270ms_cubic-bezier(0.22,0.75,0.25,1)_both] text-justify text-xs leading-[1.2] tracking-[-0.03em] text-[var(--text-muted)] uppercase">
              {DESCRIPTION}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
