import BoxBlog from "@/components/elements/Boxblog";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useContext } from "react";

const Blogs = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      ref={theme?.blogRef}
      className="w-full lg:parallax lg:h-screen h-auto py-6 max-sm:px-8 sm:px-8 md:px-12 max-md:px-12 lg:px-14 bg-blue-800 lg:block justify-center min-lg:parallax"
    >
      <p className="text-center text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        Projek Saya
      </p>
      <p className="text-white text-sm opacity-70 text-center mb-4">
        Projek projek yang saya kerjakan sejak awal
      </p>
      <div className="flex gap-6 justify-center w-full flex-wrap">
        <BoxBlog
          img="./../IMGProject/Mafwork.png"
          href="https://mafwork.vercel.app/"
          title="Mafwork"
          desc="Mafwork adalah sebuha web yang memungkinkan pembuatan Kelas, pengumpulan Tugas, memainkan Quiz, dan melakukan Ujian secara mudah dan efisien."
        />
        <BoxBlog
          img="./../IMGProject/forum.jpg"
          href="#"
          title="Forum Kampus"
          desc="Forum Kampus adalah platform interaktif di mana mahasiswa dapat berbagi ide, berdiskusi tentang berbagai topik akademis, dan mengembangkan jaringan profesional."
        />
        <BoxBlog
          img="./../IMGProject/mafstore.jpeg"
          href="https://forum-kampus.vercel.app/"
          title="Mafstore"
          desc="Mafstore adalah sebuah website marketplace yang menjual berbagai macam
          kebutuhan kita yang mana web Mafstore sudah dibangun menggunakan API access token dan Google Provider"
        />
      </div>
    </div>
  );
};

export default Blogs;
