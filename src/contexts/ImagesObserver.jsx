import { createContext, useContext, useEffect } from "react";

const ImagesObserverContext = createContext();

function ImagesObserverProvider({ children }) {
  useEffect(function () {
    const imgTargets = document.querySelectorAll("img[data-src]");

    const loadImg = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "150px",
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  }, []);

  return (
    <ImagesObserverContext.Provider value={{}}>
      {children}
    </ImagesObserverContext.Provider>
  );
}

const useImagesObserver = function () {
  const context = useContext(ImagesObserverContext);

  if (context === undefined) {
    throw new Error(
      "ImagesObserverContext was used outside of ImagesObserverProvider",
    );
  }

  return context;
};

export { ImagesObserverProvider, useImagesObserver };
