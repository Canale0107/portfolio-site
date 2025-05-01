// src/hooks/useSectionObserver.js
import { useEffect } from "react";

export default function useSectionObserver(sectionIds) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              history.replaceState(null, "", `#${id}`);
            }
          }
        }
      },
      {
        rootMargin: "0px 0px -50% 0px", // セクションが画面中央に来たら発火
        threshold: 0.1,
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);
}
