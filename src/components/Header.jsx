import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-[3] mx-auto flex w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] items-center justify-between pt-[3.8rem] text-lg max-[800px]:pt-6">
      <a
        className="font-semibold tracking-[-0.04em]"
        href="#top"
        aria-label="PRISM Collective home"
      >
        PRISM
      </a>
      <button
        className="relative z-[5] hidden border-0 bg-transparent max-[800px]:block"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "close" : "menu"}
      </button>
      <nav
        id="site-nav"
        className={`${open ? "max-[800px]:flex" : "max-[800px]:hidden"} flex items-center gap-9 max-[800px]:fixed max-[800px]:inset-0 max-[800px]:z-[4] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-8 max-[800px]:bg-[var(--surface-page)] max-[800px]:px-6 max-[800px]:py-[5.5rem] max-[800px]:text-[2rem] max-[800px]:text-[var(--text-primary)]`}
        aria-label="Primary navigation"
      >
        <a
          className="border-b border-transparent hover:border-current"
          href="#about"
          onClick={() => setOpen(false)}
        >
          about
        </a>
        <a
          className="border-b border-transparent hover:border-current"
          href="#projects"
          onClick={() => setOpen(false)}
        >
          projects
        </a>
        <a
          className="border-b border-transparent hover:border-current"
          href="#join"
          onClick={() => setOpen(false)}
        >
          join us
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
