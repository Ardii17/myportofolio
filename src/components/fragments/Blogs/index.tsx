import BoxBlog from "@/components/elements/Boxblog";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useContext } from "react";

const Blogs = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      ref={theme?.blogRef}
      className="w-full lg:parallax lg:h-screen h-auto py-6 max-sm:px-8 max-md:px-12 lg:px-14 bg-blue-800 lg:block justify-center min-lg:parallax"
      // data-aos="fade-up"
    >
      <p className="text-center text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        Projek Saya
      </p>
      <p className="text-white text-sm opacity-70 text-center mb-4">
        Projek projek yang saya kerjakan sejak awal
      </p>
      <div className="flex gap-6 justify-center w-full flex-wrap">
        <BoxBlog img="./../IMGProject/mafstore.jpeg" />
        <BoxBlog img="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" />
        <BoxBlog img="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" />
      </div>
    </div>
  );
};

export default Blogs;
