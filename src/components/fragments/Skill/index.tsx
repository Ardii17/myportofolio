import BoxSkills from "@/components/elements/BoxSkills";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useContext, useEffect, useState } from "react";

const Skills = () => {
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
      title: "ts",
    },
    {
      name: "next-js",
      title: "next-js",
    },
  ]);
  const [tools, setTools] = useState([
    { name: "VSC", title: "Visual Studio Code" },
    { name: "canva", title: "Canva" },
    { name: "figma", title: "figma" },
  ]);

  return (
    <div
      ref={theme?.skillsRef}
      className="w-full lg:h-screen py-6 max-sm:px-8 sm:px-8 md:px-12 max-md:px-12 lg:px-14 sm:h-auto bg-center bg-cover bg-no-repeat"
      // data-aos="fade-up"
      style={{ backgroundImage: "url(./../Background/Background.png)" }}
    >
      <p className="text-center max-sm:px-4 text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        Keahlian Saya
      </p>
      <p className="text-white mb-4 max-sm:px-4 text-center opacity-70 text-sm">
        Keahlian saya dalam Programming dan alat yang saya gunakan 
      </p>
      <BoxSkills contentSkills={skills} titleSkills="Keahlian Pemrograman" />
      <BoxSkills contentSkills={tools} titleSkills="Alat yang digunakan" />
    </div>
  );
};

export default Skills;
