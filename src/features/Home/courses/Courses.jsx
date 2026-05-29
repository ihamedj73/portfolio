import { useAnimation } from "../../../hooks/useAnimation";
import { sectionPadding } from "../heroSection/sectionPadding";
import { COURSES_DATA } from "./courseData";
import CourseList from "./CourseList";

function Courses() {
  const sectionRef = useAnimation(animateSection);

  function animateSection() {
    sectionRef.current.classList.remove("translate-y-20");
    sectionRef.current.classList.remove("opacity-0");
  }

  return (
    <section
      ref={sectionRef}
      id="courses"
      className={`${sectionPadding} translate-y-20 opacity-0 duration-400`}
    >
      <div className="c-container">
        <span className="text-primary-500 mb-1 block text-sm font-bold uppercase md:text-base">
          Courses I took
        </span>
        <h2 className="mb-6 text-xl font-bold text-gray-600 md:mb-8 md:text-2xl xl:text-3xl">
          These are the courses I took on the path to learning programming.{" "}
        </h2>

        <div className="mb-6 md:mb-8">
          <h3 className="mb-4 font-bold text-gray-600">
            Finished courses <strong>({COURSES_DATA.length})</strong>
          </h3>
          <div className="overflow-x-auto">
            <CourseList courses={COURSES_DATA} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
