import BoxBlog from "@/components/elements/Boxblog";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useTranslation } from "next-i18next";
import { useContext } from "react";

const Blogs = () => {
  const { t } = useTranslation("common");
  const theme = useContext(ThemeContext);

  return (
    <div
      ref={theme?.blogRef}
      className="w-full lg:parallax lg:h-screen h-auto py-6 max-sm:px-8 sm:px-8 md:px-12 max-md:px-12 lg:px-14 bg-[#111b40] lg:block justify-center min-lg:parallax"
    >
      <p className="text-center text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        {t("projects-title")}
      </p>
      <p className="text-white text-sm opacity-70 text-center mb-4">
        {t("projects-description")}
      </p>
      <div className="flex gap-6 justify-center w-full flex-wrap">
        <BoxBlog
          img="./../IMGProject/forum.png"
          href="https://forum-kampus.vercel.app/"
          title="Forum Kampus"
          desc={t("projects-1")}
        />
        <BoxBlog
          img="./../IMGProject/Mafwork.png"
          href="https://mafwork.vercel.app/"
          title="Mafwork"
          desc={t("projects-2")}
        />
        <BoxBlog
          img="./../IMGProject/mafstore.jpeg"
          href="https://mafstore.vercel.app/"
          title="Mafstore"
          desc={t("projects-3")}
        />
      </div>
    </div>
  );
};

export default Blogs;
