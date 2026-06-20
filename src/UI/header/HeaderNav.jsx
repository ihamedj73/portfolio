import { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import HeaderLogo from "./HeaderLogo";

function HeaderNav() {
  const [open, setOpen] = useState(false);

  function handleGotoSection(e, sectionId) {
    e.preventDefault();

    const SkillsSectionEl = document.getElementById(sectionId);
    SkillsSectionEl.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(function () {
    // Sticky nav
    const headerEl = document.querySelector("#main-header");
    const headerHight = headerEl.getBoundingClientRect().height;
    const heroEl = document.querySelector("#hero-section");

    const stickyNavClasses = "fixed top-0 right-0 left-0 z-10";

    const stickyNav = function (entries) {
      const entry = entries.at(0);
      if (!entry.isIntersecting) {
        headerEl.classList.add("fixed");
        headerEl.classList.add("top-0");
        headerEl.classList.add("right-0");
        headerEl.classList.add("left-0");
        headerEl.classList.add("z-10");
      } else {
        headerEl.classList.remove("fixed");
        headerEl.classList.remove("top-0");
        headerEl.classList.remove("right-0");
        headerEl.classList.remove("left-0");
        headerEl.classList.remove("z-10");
      }
    };

    const heroObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${headerHight}px`,
    });

    heroObserver.observe(heroEl);

    return () => heroObserver.disconnect();
  }, []);

  return (
    <header
      id="main-header"
      className="bg-primary-50 border-b border-b-gray-100 py-3"
    >
      <div className="big-container flex items-center justify-between">
        <HeaderLogo />
        <nav
          className={`fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-white/50 text-gray-600 backdrop-blur-md transition-all duration-300 ease-in-out md:visible md:static md:h-auto md:w-fit md:translate-x-0 md:bg-inherit md:backdrop-blur-none ${
            !open ? "invisible -translate-x-full" : ""
          }`}
        >
          <ul className="z-40 flex flex-col items-center gap-6 text-lg font-bold text-gray-600 md:z-0 md:flex-row">
            <li>
              <a href="#skills" onClick={(e) => handleGotoSection(e, "skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#works" onClick={(e) => handleGotoSection(e, "works")}>
                Works
              </a>
            </li>
            <li>
              <a
                href="#courses"
                onClick={(e) => handleGotoSection(e, "courses")}
              >
                courses
              </a>
            </li>
            {/* <li>
              <a
                href="#practices"
                onClick={(e) => handleGotoSection(e, "practices")}
              >
                practices
              </a>
            </li> */}
          </ul>
        </nav>
        <button
          className="from-primary-50 to-primary-100 z-50 rounded-full bg-linear-to-tr p-1 md:hidden"
          onClick={() => setOpen((open) => !open)}
          aria-label={`${open ? "close" : "open"} nav`}
        >
          {!open ? (
            <HiMenu className="h-8 w-8" />
          ) : (
            <HiOutlineX className="h-8 w-8" />
          )}
        </button>
      </div>
    </header>
  );
}

export default HeaderNav;
