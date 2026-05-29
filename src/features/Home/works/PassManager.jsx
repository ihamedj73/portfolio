import LazyImage from "../../../UI/LazyImage";
import Technologies from "./Technologies";

function PassManager() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center sm:gap-14 md:gap-18 lg:gap-28 xl:gap-36">
      {/* Description Box */}
      <div className="flex flex-col gap-3 sm:col-[2/3] sm:row-[1/2] lg:gap-5">
        <h3 className="text-lg font-bold text-gray-600 uppercase lg:text-xl">
          Password Manager
        </h3>
        <p className="leading-[1.6] lg:text-lg">
          In the modern world, having a password manager is essential for
          greater security. I made this project open source to make it available
          to the public. I will soon create a mobile version of this
          application.
        </p>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-gray-700">Technology I used</h4>
          <Technologies
            title={"Frontend app"}
            techs={["Javascript", "HTML", "CSS"]}
          />
        </div>
        <a
          href="https://github.com/ihamedj73/password-manager"
          className="text-primary-600 border-b-primary-600 border-b pb-0.5"
        >
          See the project on GitHub
        </a>
      </div>

      {/* Image Box */}
      <div className="sm:row[1/2] justify-self-center sm:col-[1/2]">
        <LazyImage
          src={"/img/pass-manager.png"}
          alt={"password manager"}
          className="shadow-[0_0_2rem_rgba(0,0,255)] lg:shadow-[0_0_3rem_rgba(0,0,255)]"
        />
      </div>
    </div>
  );
}

export default PassManager;
