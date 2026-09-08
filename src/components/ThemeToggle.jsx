import { useEffect, useState } from "react";
import MOON_ICON from "../assets/icons/theme-moon.svg";
import SUN_ICON from "../assets/icons/theme-sun.svg";

export default function ThemeToggle({ fixedLight = false }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("prism-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#050505" : "#f8f7f4");
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="grid size-6 cursor-pointer place-items-center border-0 bg-transparent p-0"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    >
      <img
        className={`size-6 animate-[theme-icon-in_300ms_cubic-bezier(0.22,0.75,0.25,1)_both] ${fixedLight ? "brightness-0 invert" : ""}`}
        key={theme}
        src={theme === "dark" ? SUN_ICON : MOON_ICON}
        alt=""
      />
    </button>
  );
}
