import LazyImage from "../../../UI/LazyImage";

function CourseItem({ course }) {
  return (
    <li className="shrink-0 basis-2xs">
      <article className="border-primary-100 h-full overflow-hidden rounded-xl border">
        <div>
          {/* <img src={course.imagePth} alt="" /> */}
          <LazyImage src={course.imagePth} alt={course.title} />
        </div>

        <div className="flex flex-col gap-3 p-3">
          <h4 className="leading-[1.6] font-bold text-gray-600">
            {course.title}
          </h4>
          <p className="text-sm leading-[1.6]">{course.description}</p>
          <p className="text-sm">
            <span>Instructor: </span>
            <strong>{course.creator}</strong>
          </p>
          <a
            href={course.link}
            rel="noopener"
            target="_blank"
            className="border-b-primary-500 text-primary-500 mt-auto self-start border-b py-1 font-bold"
          >
            Course page
          </a>
        </div>
      </article>
    </li>
  );
}

export default CourseItem;
