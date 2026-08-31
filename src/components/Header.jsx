import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="PRISM Collective home">
        PRISM
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "close" : "menu"}
      </button>
      <nav
        id="site-nav"
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Primary navigation"
      >
        <a href="#about" onClick={() => setOpen(false)}>
          about
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          projects
        </a>
        <a href="#join" onClick={() => setOpen(false)}>
          join us
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
