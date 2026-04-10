import { useEffect, useRef } from "react";

function LazyImage({
  lazySrc = "img/lazy.jpg",
  src,
  alt,
  className,
  ...props
}) {
  const ref = useRef();

  useEffect(
    function () {
      ref.current.src = src;
    },
    [src],
  );

  const handleImageLoad = function () {
    ref.current.classList.remove("lazy-img");
  };

  return (
    <img
      ref={ref}
      className={`lazy-img ${className}`}
      src={lazySrc}
      alt={alt}
      onLoad={handleImageLoad}
      {...props}
    />
  );
}

export default LazyImage;
