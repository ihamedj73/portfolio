import Courses from "../features/Home/courses/Courses";
import HeroSection from "../features/Home/heroSection/HeroSection";
import { sectionPadding } from "../features/Home/heroSection/sectionPadding";
import SkillsSection from "../features/Home/skillsSection/SkillsSection";
import Works from "../features/Home/works/Works";
import HeaderNav from "../UI/header/HeaderNav";

function Home() {
  return (
    <>
      <HeaderNav />
      <main>
        <HeroSection />
        <SkillsSection />
        <Works />
        <Courses />
      </main>
      <footer
        className={`${sectionPadding} bg-primary-900 text-primary-50 border-b-primary-500 border-b-4`}
      >
        <p className="text-center">Copyright &copy; 2026 by Hamed jahangiry</p>
      </footer>
    </>
  );
}

export default Home;
