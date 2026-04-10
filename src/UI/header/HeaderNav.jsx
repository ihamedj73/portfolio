import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import HeaderLogo from "./HeaderLogo";

function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary-50 border-b border-b-gray-100 py-3">
      <div className="c-container flex items-center justify-between">
        <HeaderLogo />
        <nav
          className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-white/50 text-gray-600 backdrop-blur-xs transition-all duration-300 ease-in-out md:visible md:static md:h-auto md:w-fit md:translate-x-0 md:bg-inherit md:backdrop-blur-none ${
            !open ? "invisible -translate-x-full" : ""
          }`}
        >
          <ul className="z-40 flex flex-col items-center gap-6 text-lg font-medium md:z-0 md:flex-row">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#practices">practices</a>
            </li>
            <li>
              <a href="#courses">courses</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
        <button
          className="from-primary-50 to-primary-100 z-50 rounded-full bg-linear-to-tr p-1 md:hidden"
          onClick={() => setOpen((open) => !open)}
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
