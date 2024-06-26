import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, useEffect, useState } from "react";
import {
  ThemeContext,
  ThemeProvider,
} from "@/components/elements/ThemeContext";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  const theme = useContext(ThemeContext);

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
