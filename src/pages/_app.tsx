import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, useEffect, useState } from "react";
import {
  ThemeContext,
  ThemeProvider,
} from "@/components/elements/ThemeContext";
import VanillaTilt from "vanilla-tilt";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    VanillaTilt.init(theme?.tiltRef.current, {
      max: 25,
      speed: 300,
      glare: isMobile,
      "max-glare": 0.9,
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      theme?.tiltRef.current.vanillaTilt.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>My Portofolio</title>
        <link rel="icon" href="/./../Backgrounds/logo.png" type="image/png" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
