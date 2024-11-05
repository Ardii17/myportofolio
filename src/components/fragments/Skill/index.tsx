import BoxSkills from "@/components/elements/BoxSkills";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useTranslation } from "next-i18next";
import { useContext, useState } from "react";

const Skills = () => {
  const { t } = useTranslation("common");
  const theme = useContext(ThemeContext);
  const [skills, setSkills] = useState([
    {
      name: "bootstrap",
      title: "Bootstrap",
    },
    {
      name: "css",
      title: "CSS",
    },
    {
      name: "html",
      title: "HTML",
    },
    {
      name: "java",
      title: "Java",
    },
    {
      name: "js",
      title: "Javascript",
    },
    {
      name: "react",
      title: "React",
    },
    {
      name: "wind",
      title: "Tailwind",
    },
    {
      name: "ts",
      title: "TypeScript",
    },
    {
      name: "next-js",
      title: "Next JS",
    },
    {
      name: "dart",
      title: "Dart",
    },
    {
      name: "flutter",
      title: "Flutter",
    },
  ]);

  const [tools, setTools] = useState([
    { name: "VSC", title: "Visual Studio Code" },
    { name: "canva", title: "Canva" },
    { name: "figma", title: "Figma" },
    { name: "android-studio", title: "Android Studio" },
  ]);

  return (
    <div
      ref={theme?.skillsRef}
      className="w-full lg:h-screen py-6 max-sm:px-8 sm:px-8 md:px-12 max-md:px-12 lg:px-14 sm:h-auto bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(./../Background/Background.png)" }}
    >
      <p className="text-center max-sm:px-4 text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        {t("skills-title")}
      </p>
      <p className="text-white mb-4 max-sm:px-4 text-center opacity-70 text-sm">
        {t("skills-description")}
      </p>
      <BoxSkills
        contentSkills={skills}
        titleSkills={t("skills-proramming-title")}
      />
      <BoxSkills
        contentSkills={tools}
        titleSkills={t("tools-proramming-title")}
      />
    </div>
  );
};

export default Skills;
