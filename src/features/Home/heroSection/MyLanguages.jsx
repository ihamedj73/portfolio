import MyLanguageItem from "./MyLanguageItem";

function MyLanguages() {
  const languageList = [
    { language: "English", level: "Intermediate" },
    { language: "Persian", level: "Country Language" },
    { language: "Turkish", level: "Native language" },
    { language: "Germany || Deutsche", level: "Elementary" },
  ];

  return (
    <>
      <h2 className="slg:text-lg slg:mb-4 mb-3 font-medium lg:mb-5 lg:text-xl xl:mb-6 xl:text-2xl">
        My languages
      </h2>
      <ul className="slg:gap-3 flex flex-wrap items-center justify-between gap-2 text-base lg:gap-4 xl:gap-5">
        {languageList.map((ln) => (
          <MyLanguageItem
            key={ln.language}
            language={ln.language}
            level={ln.level}
          />
        ))}
      </ul>
    </>
  );
}

export default MyLanguages;
