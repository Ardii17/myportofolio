import { ThemeContext } from "@/components/elements/ThemeContext";
import TypingParallax from "@/components/elements/TypedParallax";
import { getFile } from "@/lib/firebase/service";
import { useTranslation } from "next-i18next";
import { useContext } from "react";

const Home = () => {
  const { t } = useTranslation("common");
  const theme = useContext(ThemeContext);
  const handleDownload = async () => {
    try {
      await getFile((urlDownload: string) => {
        window.open(urlDownload, "_blank");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={theme?.berandaRef}
      className="w-full lg:parallax max-sm:px-6 sm:px-6 md:px-12 max-md:px-12 lg:px-20 h-screen min-w-screen flex justify-end items-center"
    >
      <div className="text-white lg:w-2/3 max-sm:w-full md:w-1/2 flex flex-col gap-3">
        <p className="text-2xl tracking-wide font-semibold max-sm:text-xl max-md:text-xl">
          {t("home-sayhi")}
          <span className="text-yellow-400">{t("home-welcome")}</span>
        </p>
        <TypingParallax />
        <p>{t("home-description")}</p>
        <button
          className="place-self-start bg-yellow-600 px-4 py-2 rounded hover:bg-yellow-700"
          onClick={handleDownload}
        >
          {t("home-cv")}
        </button>
      </div>
      <div className="lg:w-1/2 max-md:w-1/2 md:w-1/2 max-sm:hidden lg:parallax">
        <img
          src="./../Backgrounds/Programming.png"
          alt="Programming"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Home;
