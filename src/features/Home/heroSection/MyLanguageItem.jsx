function MyLanguageItem({ language, level }) {
  return (
    <li className="center-all gap-2 rounded-md border border-gray-400 px-2 py-1">
      <span className="slg:text-base text-sm font-bold text-gray-600 lg:text-lg xl:text-xl">
        {language}
      </span>{" "}
      <span className="slg:text-sm text-xs lg:text-base xl:text-lg">
        ({level})
      </span>
    </li>
  );
}

export default MyLanguageItem;
