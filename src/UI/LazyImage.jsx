import { useEffect, useRef, useState } from "react";

function LazyImage({
  lazySrc = "img/lazy.jpg",
  src,
  alt,
  className,
  ...props
}) {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadImg = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      setIsVisible(true);
      observer.disconnect();

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      rootMargin: "200px",
    });

    if (imgRef.current) imgObserver.observe(imgRef.current);

    return () => imgObserver.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : lazySrc}
      alt={alt}
      className={`lazy-img ${className}`}
      {...props}
    />
  );
}

export default LazyImage;
