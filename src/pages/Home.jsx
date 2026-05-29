import Courses from "../features/Home/courses/Courses";
import HeroSection from "../features/Home/heroSection/HeroSection";
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
    </>
  );
}

export default Home;
