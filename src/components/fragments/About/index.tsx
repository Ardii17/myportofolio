import Icon from "@/components/elements/Icon";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { useContext, useState } from "react";

const About = () => {
  const theme = useContext(ThemeContext);
  const [onMyBiodata, setOnMyBiodata] = useState(false);
  const message = "Hallo, I Would like to contact you";

  return (
    <div
      ref={theme?.tentangRef}
      className="w-full lg:h-screen md:px-12 h-auto py-6 max-sm:px-6 sm:px-6 max-md:px-12 lg:px-14 bg-blue-800 lg:block justify-center lg:parallax min-lg:parallax"
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
          <button
            onClick={() => setOnMyBiodata(true)}
            className="bg-yellow-600 px-4 py-2 cursor-pointer rounded hover:bg-yellow-700 w-auto text-center"
          >
            Lihat Selengkapnya
          </button>
          <hr className="border-none h-1 bg-yellow-600 rounded-full" />
          <div className="block gap-2 w-full">
            <p className="font-semibold">Media Sosial Saya</p>
            <div className="flex gap-5 mt-2">
              <Icon name="instagram" link="https://www.instagram.com/ardi4_/" />
              <Icon
                name="facebook"
                link="https://web.facebook.com/profile.php?id=100026299818838"
              />
              <Icon
                name="tiktok"
                link="https://www.tiktok.com/@gtu075"
                className="bg-white"
              />
              <Icon
                name="linkedin"
                link="https://www.linkedin.com/in/muhammad-ardiansyah-firdaus-73473a2a4/"
              />
              <Icon
                name="whatsapp"
                link={`https://wa.me/6282113325302?text=${message}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed ${
          onMyBiodata ? "top-1/2 bottom-0" : "-bottom-[100rem] top-[100rem]"
        }  left-1/2 -translate-x-1/2 transition-all -translate-y-1/2 w-screen h-screen flex justify-center items-center z-50`}
      >
        <div
          className="w-[27rem] h-[34rem] overflow-auto bg-white rounded-2xl px-4 py-2 relative sm:mx-4 max-sm:mx-4"
          id="biodata"
        >
          <div className="flex justify-between items-center">
            <p className="text-lg text-blue-700">Biodata</p>
            <button
              onClick={() => setOnMyBiodata(false)}
              className="text-3xl cursor-default"
            >
              &times;
            </button>
          </div>
          <p>Nama Lengkap : Muhammad Ardiansyah Firdaus</p>
          <hr />
          <p>Umur : 20</p>
          <hr />
          <p>Jenis Kelamin : Laki - Laki</p>
          <hr />
          <p>Agama : Islam</p>
          <hr />
          <p>Status : Mahasiswa</p>
          <hr />
          <p>Tempat, Tanggal Lahir : Sumedang, 03 Januari 2004</p>
          <hr />
          <p>
            Alamat : Dusun Sindangkasih, Desa Sindangpakuon, RT 001 RW 008,
            Kecamatan Cimanggung, Kabupaten Sumedang, Jawa Barat
          </p>
          <hr />
          <p>Pendidikan : </p>
          <ul className="ps-4">
            <li className="list-disc">
              Universitas: Universitas Muhammadiyah Bandung
            </li>
            <li className="list-disc">Jurusan: Teknik Informatika</li>
            <li className="list-disc">Semester: 4</li>
            <li className="list-disc">
              Sekolah Menengah Atas: SMAN Cimanggung, Jurusan MIPA
            </li>
          </ul>
          <hr />
          <p>Minat : </p>
          <ul className="ps-4">
            <li className="list-disc">Teknologi</li>
            <li className="list-disc">Web Development</li>
            <li className="list-disc">Mobile Development</li>
          </ul>
          <hr />
          <p>Keahlian : </p>
          <ul className="ps-4">
            <li className="list-disc">HTML</li>
            <li className="list-disc">CSS (Tailwind CSS & Bootstrap)</li>
            <li className="list-disc">JavaScript</li>
            <li className="list-disc">React JS</li>
            <li className="list-disc">Next JS</li>
          </ul>
          <hr />
          <p>Proyek dan Pengalaman : </p>
          <ul className="ps-4">
            <li className="list-disc">
              Portofolio Website : Mengembangkan dan memelihara portofolio
              website pribadi.
            </li>
            <li className="list-disc">
              Website Restoran : Membuat website untuk restoran dengan fitur
              blog atau berita di homepage.
            </li>
            <li className="list-disc">
              Website Forum Kampus : Saya bertindak sebagai Frontend Developer
              untuk proyek website Forum Kampus, sebuah platform yang dirancang
              seperti media sosial namun dikhususkan untuk mahasiswa. Website
              ini memiliki fitur utama seperti halaman beranda untuk posting dan
              forum tanya jawab (Q&A).
            </li>
            <li className="list-disc">
              Admin Panel Project : Mengembangkan admin panel dengan navigasi
              pengaturan profil.
            </li>
            <li className="list-disc">
              Proposal Project : Menulis proposal untuk proyek pembuatan web
              dengan fitur CRUD berbasis PHP dan MySQL.
            </li>
            <li className="list-disc">
              Empowering Disadvantaged Families Project : Mengembangkan proyek
              untuk membantu keluarga kurang mampu dengan teknologi seperti
              WhatsApp Business untuk penjualan dan bantuan makanan serta uang
              tunai
            </li>
          </ul>
          <hr />
          <p>Keterampilan Tambahan :</p>
          <ul className="ps-4">
            <li className="list-disc">React Router</li>
            <li className="list-disc">Full Stack Development Next JS</li>
            <li className="list-disc">TypeScript</li>
            <li className="list-disc">Google OAuth Implementation</li>
            <li className="list-disc">
              Database Management Firebase dan MySql
            </li>
          </ul>
          <hr />
          <p>Hobi dan Minat Pribadi : </p>
          <ul className="ps-4">
            <li className="list-disc">Bermain game</li>
            <li className="list-disc">Travelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
