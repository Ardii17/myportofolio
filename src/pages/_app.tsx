import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useContext } from "react";
import Head from "next/head";
import {
  ThemeContext,
  ThemeProvider,
} from "@/components/elements/ThemeContext";


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ardiansyah</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="icon" href="/./../Backgrounds/logo.png" type="image/png" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);