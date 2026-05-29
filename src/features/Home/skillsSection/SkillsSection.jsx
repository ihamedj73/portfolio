import { sectionPadding } from "../heroSection/sectionPadding";
import SkillsList from "./SkillsList";

function SkillsSection() {
  return (
    <section id="skills" className={`${sectionPadding}`}>
      <div className="c-container">
        <span className="text-primary-500 mb-1 block text-sm font-bold uppercase md:text-base">
          My Skills
        </span>
        <h2 className="mb-4 text-xl font-bold text-gray-600 md:mb-8 md:text-2xl xl:text-3xl">
          Languages, Frameworks And Tools I know
        </h2>
        <SkillsList />
      </div>
    </section>
  );
}

export default SkillsSection;
