import Input from "@/components/elements/Input";
import { ThemeContext } from "@/components/elements/ThemeContext";
import { FormEvent, useContext } from "react";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      name: form.nama.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const result = await fetch("/api/users", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.status === 200) {
        theme?.handleNotification(true);
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      ref={theme?.kontakRef}
      className="w-full lg:parallax lg:h-screen h-auto sm:px-8 py-6 max-sm:px-8 lg:px-14 lg:block justify-center min-lg:parallax md:px-48"
      // data-aos="fade-up"
    >
      <p className="text-center text-xl max-sm:mb-4 mb-3 max-md:mb-4 text-white font-semibold">
        Kontak Saya
      </p>
      <p className="text-white text-sm opacity-70 text-center mb-4">
        Hubungi saya bila terdapat sesuatu dibawah
      </p>
      <form
        className="flex flex-col gap-4 max-sm:w-full max-md:w-full lg:w-2/5 mx-auto p-4 border-sm border-white rounded-xl"
        onSubmit={handleSubmit}
      >
        <Input label="Nama Lengkap" type="text" name="nama" />
        <Input label="Email" type="mail" name="email" />
        <Input label="No Telepon" type="number" name="phone" />
        <label className="text-white font-semibold">Keterangan</label>
        <textarea name="message" className="p-2 rounded-sm resize-none" />
        <button
          className="text-white font-semibold bg-yellow-600 rounded-lg py-2 hover:bg-yellow-700"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Contact;
