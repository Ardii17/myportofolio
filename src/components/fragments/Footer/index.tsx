import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <div className="py-4 px-14 text-center bg-[#111b40] text-white">
      <p className="max-sm:text-center max-md:text-center text-sm">
        {t("footer")}
      </p>
    </div>
  );
}
