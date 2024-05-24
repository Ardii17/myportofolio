import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, useEffect } from "react";
import {
  ThemeContext,
  ThemeProvider,
} from "@/components/elements/ThemeContext";
import VanillaTilt from "vanilla-tilt";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    VanillaTilt.init(theme?.tiltRef.current, {
      max: 25,
      speed: 300,
      glare: true,
      "max-glare": 0.9,
    });

    return () => theme?.tiltRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
