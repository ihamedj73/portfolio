import LazyImage from "../../../UI/LazyImage";
import MyLanguages from "./MyLanguages";

function HeroSection() {
  return (
    <section className="bg-primary-50 slg:py-14 py-6 sm:py-12">
      <div className="c-container slg:gap-10 flex flex-col gap-16 sm:grid sm:grid-cols-2 sm:gap-2 md:gap-8 lg:gap-16 xl:gap-32">
        <div className=" ">
          <h1 className="slg:text-3xl slg:mb-8 mb-6 text-2xl font-bold text-gray-700 lg:text-4xl xl:text-5xl">
            Hi, I'm Hamed jahangiry
          </h1>
          <p className="slg:text-lg slg:mb-5 mb-3 text-base font-medium text-gray-600 lg:mb-6 lg:text-xl xl:mb-7 xl:text-2xl">
            I'm a softer engineer, for{" "}
            <strong className="text-primary-500">5 years</strong>
          </p>

          <p className="slg:text-xl slg:mb-9 slg:gap-3 mb-7 flex flex-wrap gap-2 text-lg font-medium lg:mb-10 lg:gap-4 lg:text-2xl xl:mb-11 xl:gap-5 xl:text-3xl">
            <span className="bg-primary-100 text-primary-700 rounded-md px-2 py-0.5">
              ✔️ Full stack web developer
            </span>{" "}
            <span className="rounded-md bg-red-100 px-2 py-0.5 text-red-700">
              ✔️ Mobile developer
            </span>{" "}
            <span className="rounded-md bg-green-200 px-2 py-0.5 text-green-700">
              ✔️ DEVOPS
            </span>
          </p>
          <MyLanguages />
        </div>

        <div className="sm:self-center">
          <LazyImage
            src="img/me.jpg"
            alt="My picture"
            className="w-full rounded-md border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
