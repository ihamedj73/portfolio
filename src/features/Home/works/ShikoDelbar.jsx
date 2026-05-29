import { useAnimation } from "../../../hooks/useAnimation";
import LazyImage from "../../../UI/LazyImage";
import Technologies from "./Technologies";

function ShikoDelbar() {
  const descRef = useAnimation(animateDesc);
  const imageRef = useAnimation(animateImage);

  function animateDesc() {
    descRef.current.classList.remove("-translate-x-20");
    descRef.current.classList.remove("translate-y-12");
    descRef.current.classList.remove("opacity-0");
  }
  function animateImage() {
    imageRef.current.classList.remove("translate-x-20");
    imageRef.current.classList.remove("translate-y-12");
    imageRef.current.classList.remove("opacity-0");
  }

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
      {/* Description Box */}
      <div
        ref={descRef}
        className="flex -translate-x-20 translate-y-12 flex-col gap-3 opacity-0 duration-400 lg:gap-5"
      >
        <h3 className="text-lg font-bold text-gray-600 uppercase lg:text-xl">
          Shik O Delbar
        </h3>
        <p className="leading-[1.6] lg:text-lg">
          Online store for women This store sells a variety of products for
          women. The biggest challenge this project had for me was the variety
          in the type of a product, so that a product could have several types
          and the employer wanted to set separate prices and discounts for each
          type
        </p>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-gray-700">Technology I used</h4>
          <Technologies
            title={"For backend"}
            techs={["Django", " Django rest framework", "postgresql", "Redis"]}
          />

          <Technologies
            title={"For frontend"}
            techs={["Nextjs", "Tailwindcss"]}
          />
        </div>
        <a
          href="#"
          className="text-primary-600 border-b-primary-600 self-start border-b pb-0.5"
        >
          See the project demo
        </a>
      </div>

      {/* Image Box */}
      <div
        ref={imageRef}
        className="translate-x-20 translate-y-12 justify-self-center opacity-0 duration-400"
      >
        <LazyImage
          src={"/img/shikdelbar.png"}
          alt={"shik o delbar"}
          className="h-96 shadow-[0_0_2rem_rgba(0,0,255)] lg:shadow-[0_0_3rem_rgba(0,0,255)]"
        />
      </div>
    </div>
  );
}

export default ShikoDelbar;
