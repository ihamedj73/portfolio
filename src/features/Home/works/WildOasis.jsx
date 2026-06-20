import { useAnimation } from "../../../hooks/useAnimation";
import LazyImage from "../../../UI/LazyImage";
import Technologies from "./Technologies";

function WildOasis() {
  const desRef = useAnimation(animateDes);
  const imageRef = useAnimation(animateImage);

  function animateDes() {
    desRef.current.classList.remove("scale-0");
  }
  function animateImage() {
    imageRef.current.classList.remove("scale-0");
  }

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center sm:gap-14 md:gap-18 lg:gap-28 xl:gap-36">
      {/* Description Box */}
      <div
        ref={desRef}
        className="flex scale-0 flex-col gap-3 duration-400 lg:gap-5"
      >
        <h3 className="flex items-center gap-4 text-lg font-bold text-gray-600 uppercase lg:text-xl">
          <span>The Wild Oasis</span>
          <span className="text-sm font-medium text-gray-500 capitalize">
            (Rebuild)
          </span>
        </h3>
        <p className="leading-[1.6] lg:text-lg">
          Hotel Management Application. This project was created in one of the
          training courses. I recreated it and created the entire backend
          myself, but the frontend was created as an exercise.
        </p>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-gray-700">Technology I used</h4>
          <Technologies
            title={"For backend"}
            techs={["Django", " Django rest framework"]}
          />

          <Technologies
            title={"For frontend"}
            techs={["React (vite)", "Styled component"]}
          />
        </div>
        <a
          href="https://github.com/ihamedj73/The-while-oasis-admin"
          className="text-primary-600 border-b-primary-600 self-start border-b pb-0.5"
        >
          See the project on GitHub
        </a>
      </div>

      {/* Image Box */}
      <div ref={imageRef} className="scale-0 duration-400">
        <LazyImage
          src={"/img/the-wild-oasis.png"}
          alt={"Dashboard of the wild oasis web application"}
          className="shadow-[0_0_2rem_rgba(0,0,255)] lg:shadow-[0_0_3rem_rgba(0,0,255)]"
        />
      </div>
    </div>
  );
}

export default WildOasis;
