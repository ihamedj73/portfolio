import LazyImage from "../LazyImage";

function HeaderLogo() {
  return (
    <a
      href="#"
      className="flex items-center"
      aria-label="Navigate to home page"
    >
      <LazyImage src="Logo.svg" alt="Logo" className="w-12" />
      <span className="">Hamed Jahangiry</span>
    </a>
  );
}

export default HeaderLogo;
