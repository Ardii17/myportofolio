import { useContext, useEffect, useState } from "react";
import About from "../fragments/About";
import Blogs from "../fragments/Blogs";
import Contact from "../fragments/Contact";
import Footer from "../fragments/Footer";
import Home from "../fragments/Home";
import Navbar from "../fragments/Navbar";
import Skills from "../fragments/Skill";
import Notification from "../elements/Notification";
import { ThemeContext } from "../elements/ThemeContext";
import { Poppins } from "next/font/google";
import ToTop from "../elements/ToTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Anda dapat menyesuaikan berat font yang diperlukan
  subsets: ["latin"], // Subset yang dibutuhkan
});

const MainViews = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      theme?.handleNotification(false);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [theme?.notification]);

  return (
    <div
      className={poppins.className}
      style={{ backgroundImage: "url(./../Backgrounds/Background.png)" }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Blogs />
      <Contact />
      <Footer />
      {theme?.notification && (
        <Notification onClick={() => theme?.handleNotification(false)} />
      )}
      <ToTop />
    </div>
  );
};

export default MainViews;
