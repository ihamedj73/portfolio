import {
  DiAws,
  DiCss3,
  DiDjango,
  DiDocker,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiPython,
  DiReact,
  DiTypo3,
} from "react-icons/di";
import SkillsListItem from "./SkillsListItem";
import { TbBrandReactNative, TbSql } from "react-icons/tb";
import { FcNext } from "react-icons/fc";
import { SiKubernetes, SiNextdotjs } from "react-icons/si";
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { FiFigma } from "react-icons/fi";

const skills = [
  {
    backgroundColor: "#4584b6",
    textColor: "white",
    skill: "Python",
    icon: <DiPython aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#F0DB4F",
    textColor: "#323330",
    skill: "Javascript",
    icon: <DiJavascript aria-hidden size={24} color="#323330" />,
  },
  {
    backgroundColor: "#007acc",
    textColor: "white",
    skill: "Typescript",
    icon: <DiTypo3 aria-hidden size={24} color="white" />,
  },

  {
    backgroundColor: "#F4470B",
    textColor: "white",
    skill: "HTML",
    icon: <DiHtml5 aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#2060AB",
    textColor: "white",
    skill: "CSS",
    icon: <DiCss3 aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#61DBFB",
    textColor: "#04323d",
    skill: "React",
    icon: <DiReact aria-hidden size={24} color="#04323d" />,
  },
  {
    backgroundColor: "#61DBFB",
    textColor: "#04323d",
    skill: "React Native",
    icon: <TbBrandReactNative aria-hidden size={24} color="#04323d" />,
  },
  {
    backgroundColor: "#202020",
    textColor: "white",
    skill: "Nextjs",
    icon: <RiNextjsLine aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#1AA8B4 ",
    textColor: "white",
    skill: "Tailwindcss",
    icon: (
      <RiTailwindCssFill stroke="white" aria-hidden size={24} color="white" />
    ),
  },
  {
    backgroundColor: "#092D1F",
    textColor: "white",
    skill: "Django",
    icon: <DiDjango stroke="white" aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#b8494b",
    textColor: "white",
    skill: "DjangoRestFramework",
    icon: <DiDjango stroke="white" aria-hidden size={24} color="white" />,
  },

  {
    backgroundColor: "#007EA3",
    textColor: "white",
    skill: "Docker",
    icon: <DiDocker stroke="white" aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#98B1EA",
    textColor: "#272e3f",
    skill: "kubernetes",
    icon: <SiKubernetes stroke="white" aria-hidden size={24} color="#272e3f" />,
  },
  {
    backgroundColor: "#E94D32",
    textColor: "white",
    skill: "Git",
    icon: <DiGit stroke="white" aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#000",
    textColor: "white",
    skill: "Github",
    icon: <DiGithub stroke="white" aria-hidden size={24} color="white" />,
  },
  {
    backgroundColor: "#844DF7",
    textColor: "white",
    skill: "Figma",
    icon: <FiFigma stroke="white" aria-hidden size={24} />,
  },
];

function SkillsList() {
  const [active, setActive] = useState(false);

  const listRef = useRef(null);

  // useEffect(function () {
  //   setTimeout(function () {
  //     setActive(true);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const loadImg = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      setActive(true);
      observer.disconnect();
      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      rootMargin: "2px",
    });

    if (listRef.current) imgObserver.observe(listRef.current);

    return () => imgObserver.disconnect();
  }, []);

  return (
    <ul className="flex flex-wrap justify-between gap-2" ref={listRef}>
      {skills.map((s, i) => (
        <SkillsListItem
          key={s.skill}
          backgroundColor={s.backgroundColor}
          textColor={s.textColor}
          skill={s.skill}
          icon={s.icon}
          transitionDelay={i * 0.06}
          active={active}
        />
      ))}
      <li className="bg-amber-600"></li>
    </ul>
  );
}

export default SkillsList;
