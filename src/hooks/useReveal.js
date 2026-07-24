import { useEffect } from "react";

// Fades/slides in any [data-reveal] element the first time it scrolls into
// view. Components just add the attribute; pass a `key` (e.g. the route
// pathname) so it re-scans after the page's elements change.
export default function useReveal(key) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (elements.length === 0) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
