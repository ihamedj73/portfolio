import { useEffect, useRef } from "react";

export function useAnimation(callback) {
  const ref = useRef(null);
  useEffect(
    function () {
      function animateSection(entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        callback();
      }

      const sectionObserver = new IntersectionObserver(animateSection, {
        rootMargin: "-100px",
      });

      if (ref.current) sectionObserver.observe(ref.current);

      return () => sectionObserver.disconnect();
    },
    [callback],
  );

  return ref;
}
