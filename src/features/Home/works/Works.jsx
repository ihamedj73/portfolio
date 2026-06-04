import { useEffect, useRef } from "react";
import { sectionPadding } from "../heroSection/sectionPadding";
import GamaGain from "./GamaGain";
import PassManager from "./PassManager";
import ShikoDelbar from "./ShikoDelbar";
import { useAnimation } from "../../../hooks/useAnimation";

function Works() {
  const sectionRef = useAnimation(animate);

  function animate() {
    // select heading and description
    const heading = sectionRef.current.querySelector("#works-header");
    const description = sectionRef.current.querySelector("#works-description");
    // animate them
    heading.classList.remove("opacity-0");
    heading.classList.remove("-translate-x-24");
    description.classList.remove("opacity-0");
    description.classList.remove("translate-y-12");
  }

  return (
    <section
      ref={sectionRef}
      id="works"
      className={`${sectionPadding} bg-gray-25`}
    >
      {/* Works header */}
      <div className="c-container">
        <h2
          id="works-header"
          className="mb-3 -translate-x-24 text-center text-xl font-bold text-gray-700 opacity-0 duration-300 sm:text-2xl md:text-2xl xl:text-3xl"
        >
          Some of my works
        </h2>
        <p
          id="works-description"
          className="mb-8 translate-y-12 text-center leading-[1.6] opacity-0 delay-300 duration-300 sm:mb-10 sm:text-lg md:mb-16 md:text-xl lg:mb-20 xl:mb-24"
        >
          These are projects that I built myself from scratch, from design to
          coding.
        </p>
        <div className="mb-8 flex flex-col gap-12 overflow-y-hidden sm:mb-10 md:mb-16 md:gap-16 md:overflow-visible lg:mb-20 lg:gap-20 xl:mb-24 xl:gap-24">
          <ShikoDelbar />
          <GamaGain />
          <PassManager />
        </div>
        <p className="text-center font-semibold sm:text-lg md:text-xl lg:text-2xl">
          I even designed and built this portfolio project myself ☺️
        </p>
      </div>
    </section>
  );
}

export default Works;
