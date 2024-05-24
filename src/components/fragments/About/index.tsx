import Icon from "@/components/elements/Icon";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useContext } from "react";

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      ref={theme?.tentangRef}
      className="w-full lg:h-screen md:px-12 h-auto py-6 max-sm:px-8 sm:px-8 max-md:px-12 lg:px-14 bg-blue-800 lg:block justify-center lg:parallax min-lg:parallax"
    >
      <p className="text-center text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        Tentang Saya
      </p>
      <p className="text-white text-sm opacity-70 text-center mb-4">
        Profil lengkap tentang saya
      </p>
      <div className="max-sm:block max-md:flex flex gap-6 max-sm:mt-5 lg:mt-16 justify-center h-full">
        <div className="lg:w-1/3 max-sm:w-full max-md:w-2/6 md:w-2/6 relative transition-transform ease-in-out translate-y-0">
          <img
            src="./../ProfileIMG/Ardi.png"
            alt="Ardi"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="lg:w-2/3 max-sm:w-full max-md:w-4/6 md:w-4/6 text-white flex gap-2 flex-col">
          <p className="text-yellow-400 font-semibold">
            Hello I'm Muhammad Adiansyah Firdaus 🙌
          </p>
          <p className="text-yellow-400 font-semibold">
            A Web Development based in Indonesia
          </p>
          <p className="text-base max-sm:text-justify max-md:text-justify">
            Muhammad Ardiansyah Firdaus adalah mahasiswa semester 4 Jurusan
            Teknik Informatika di Universitas Muhammadiyah Bandung. Saya
            memiliki minat besar dalam dunia teknologi, khususnya sebagai web
            dan mobile developer. Sebagai web developer asal Indonesia, saya
            memiliki keahlian dalam HTML, CSS (terutama menggunakan Tailwind
            CSS), JavaScript, React JS, dan Next JS. Saya selalu berusaha untuk
            terus belajar dan mengembangkan kemampuan saya di bidang ini.
          </p>
          <span className="bg-yellow-600 px-4 py-2 cursor-pointer rounded hover:bg-yellow-700 w-auto text-center">
            Lihat Selengkapnya
          </span>
          <hr className="border-none h-1 bg-yellow-600 rounded-full" />
          <div className="block gap-2 w-full">
            <p className="font-semibold">Media Sosial Saya</p>
            <div className="flex gap-5 mt-2">
              <Icon name="instagram" link="https://www.instagram.com/ardi4_/" />
              <Icon
                name="facebook"
                link="https://web.facebook.com/profile.php?id=100026299818838"
              />
              <Icon name="tiktok" link="https://www.tiktok.com/@gtu075" />
              <Icon
                name="linkedin"
                link="https://www.linkedin.com/in/muhammad-ardiansyah-firdaus-73473a2a4/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
