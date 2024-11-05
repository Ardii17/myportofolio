import { loadTranslations } from "../lib/loadTranslations.js";
import MainViews from "@/components/Views/mainViews";

export default function Home() {
  return <MainViews />;
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await loadTranslations(locale)),
    },
  };
}
