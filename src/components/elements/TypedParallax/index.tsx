import { useEffect } from "react";
import Typed from "typed.js";
const TypingParallax = () => {
  useEffect(() => {
    const strings = [
      " Web development",
      " Full Stack development",
      " Front End development",
      " Back End development",
    ];

    const options = {
      strings: strings,
      typeSpeed: 100, // Kecepatan pengetikan
      loop: true, // Mengulang teks
      backSpeed: 30, // Kecepatan penghapusan teks
      showCursor: false,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy(); // Hapus instance Typed.js saat komponen unmount
    };
  }, []);

  return (
    <div className="parallax">
      <p className="typing font-semibold text-lg tracking-wide w-full whitespace-normal text-yellow-400"></p>
    </div>
  );
};

export default TypingParallax;
