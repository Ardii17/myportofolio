import List from "@/components/elements/List";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(true);
  const [menu, setMenu] = useState(false);
  const [positionNavbar, setPositionNavbar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const thisPosition = window.scrollY;
      if (thisPosition > positionNavbar) {
        setNavbar(false);
      } else if (thisPosition < positionNavbar) {
        setNavbar(true);
      } else if (thisPosition < 0) {
        setNavbar(true);
      }
      setPositionNavbar(thisPosition);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [positionNavbar]);

  return (
    <div
      className={` ${
        navbar ? "top-0" : "-top-20"
      } fixed left-0 right-0 lg:parallax text-white z-50 transition-transform duration-1000 w-full flex items-center`}
    >
      <div className="px-20 w-full py-4 max-sm:hidden max-md:hidden flex items-center justify-between backdrop-blur-sm">
        <p className="font-bold text-yellow-400 tracking-wide text-xl drop-shadow-xl">
          Ardiansyah
        </p>
        <ul className="flex gap-4 items-center">
          <List onClick={theme?.scrollToBeranda}>Beranda</List>
          <List onClick={theme?.scrollToTentang}>Tentang</List>
          <List onClick={theme?.scrollToSkills}>Skill</List>
          <List onClick={theme?.scrollToBeranda}>Blog</List>
          <List onClick={theme?.scrollToKontak}>Kontak</List>
        </ul>
      </div>
      <div className="flex gap-4 lg:hidden bg-yellow-600 shadow p-5 w-full fixed top-0 left-0 right-0 z-10">
        <img
          src="./../Icons/Icons White/menu.svg"
          alt="Menu"
          className="cursor-pointer"
          onClick={() => setMenu(!menu)}
        />
        <p className="font-semibold text-xl">Ardiansyah</p>
        <div
          className={`${
            menu ? "top-4" : "-top-80"
          } z-0 pt-10 absolute left-0 right-0 transition-all bg-yellow-600`}
        >
          <ul className="left-0 p-5 flex-col flex gap-4">
            <List onClick={theme?.scrollToBeranda}>Beranda</List>
            <List onClick={theme?.scrollToTentang}>Tentang</List>
            <List onClick={theme?.scrollToSkills}>Skill</List>
            <List onClick={theme?.scrollToBeranda}>Blog</List>
            <List onClick={theme?.scrollToKontak}>Kontak</List>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
