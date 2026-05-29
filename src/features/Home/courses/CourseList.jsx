import CourseItem from "./CourseItem";

function CourseList({ courses }) {
  return (
    <ul className="flex flex-nowrap items-stretch gap-4">
      {courses.map((course) => (
        <CourseItem key={course.title} course={course} />
      ))}
    </ul>
  );
}

export default CourseList;
