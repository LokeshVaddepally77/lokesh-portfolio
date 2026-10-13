import { useEffect, useState } from "react";

const themeColors = { dark: "#09090b", light: "#f5f4ef" };

// The inline script in index.html sets data-theme before first paint (from
// a saved choice, else the OS preference); this hook just reads it back and
// keeps <html> + the browser UI color in sync when the user toggles.
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColors[theme]);
  }, [theme]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked (private mode etc.) — the choice just won't persist.
    }
  };

  return [theme, toggle];
}
