import { useState } from "react";
import { HiLockClosed, HiMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/Logo.svg";

function HeaderNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="container flex items-center justify-between py-3">
      <div>
        <a href="" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8" />
          <span className="">Hamed Jahangiry</span>
        </a>
      </div>
      <nav
        className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-white/50 text-gray-600 backdrop-blur-xs transition-all duration-300 ease-in-out ${
          !open ? "invisible -translate-x-full" : ""
        }`}
      >
        <ul className="z-40 flex flex-col gap-6 text-lg font-medium">
          <li>
            <a href="#">section 1</a>
          </li>
          <li>
            <a href="#">section 2</a>
          </li>
          <li>
            <a href="#">section 2</a>
          </li>
        </ul>
      </nav>
      <button
        className="from-primary-50 to-primary-100 z-50 rounded-full bg-linear-to-tr p-1"
        onClick={() => setOpen((open) => !open)}
      >
        {!open ? (
          <HiMenu className="h-8 w-8" />
        ) : (
          <HiOutlineX className="h-8 w-8" />
        )}
      </button>
    </header>
  );
}

export default HeaderNav;
