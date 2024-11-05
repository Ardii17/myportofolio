// src/lib/loadTranslations.js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function loadTranslations(locale) {
  return await serverSideTranslations(locale, ["common"]);
}
