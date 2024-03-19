import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

interface pageProps {}

const IletisimPage = ({}: pageProps) => {
  return (
    <div className="card card-normal bg-neutral-content p-8 shadow-md gap-4 mt-auto">
      <h3 className="text-2xl md:text-3xl text-secondary font-bold ">
        İletisim Bilgileri
      </h3>
      <div className="flex gap-2 items-center">
        <MdMail size={40} className="text-secondary" />
        <div className="flex flex-col">
          <span className="font-semibold ">E-Posta Adresimiz</span>
          <span>info@tuyafed.org</span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <FaPhoneAlt size={32} className="text-secondary" />
        <div className="flex flex-col">
          <span className="font-semibold ">Telefon & Fax</span>
          <span>+90 850 711 0 333</span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <FaLocationDot size={32} className="text-secondary" />
        <div className="flex flex-col">
          <span className="font-semibold ">Adres</span>
          <span>
            Yenibosna Merkez Mah. Atatürk Caddesi AMN İş Merkezi No:13 Kat:3
            Bahçelievler/İSTANBUL
          </span>
        </div>
      </div>
    </div>
  );
};

export default IletisimPage;
