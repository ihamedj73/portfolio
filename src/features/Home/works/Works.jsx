import { sectionPadding } from "../heroSection/sectionPadding";
import GamaGain from "./GamaGain";
import PassManager from "./PassManager";
import ShikoDelbar from "./ShikoDelbar";

function Works() {
  return (
    <section id="works" className={`${sectionPadding} bg-gray-25`}>
      {/* Works header */}
      <div className="c-container">
        <h2 className="mb-3 text-center text-xl font-bold text-gray-700 sm:text-2xl md:text-2xl xl:text-3xl">
          Some of my works
        </h2>
        <p className="mb-8 text-center leading-[1.6] sm:mb-10 sm:text-lg md:mb-16 md:text-xl lg:mb-20 xl:mb-24">
          These are projects that I built myself from scratch, from design to
          coding.
        </p>
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          <ShikoDelbar />
          <GamaGain />
          <PassManager />
        </div>
      </div>
    </section>
  );
}

export default Works;
