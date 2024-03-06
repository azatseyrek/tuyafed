import Image from "next/image";
import { data_social_media } from "@/data/socialmedia";
import Link from "next/link";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="footer p-10 bg-secondary text-white mt-40 z-30 ">
      <aside className="">
        <Image
          src={"/assets/tuyafed-footer.png"}
          width={160}
          height={160}
          className="w-auto h-auto cursor-pointer active:scale-95 transition-transform grayscale"
          alt="tuyafed-logo"
        />
        <p className="opacity-50">
          Yazılım ve Bilişim sektöründe faaliyet gösteren dernekler tarafından
          bir araya gelerek kurulan bir çatı kuruluştur.
        </p>
      </aside>
      <nav className="flex flex-col w-full items-end">
        <h6 className="footer-title">Takip Et</h6>
        <div className="grid grid-flow-col gap-4 ">
          {" "}
          {data_social_media.map((social) => (
            <Link
              href={social.url}
              target="_blank"
              rel="noreferrer"
              key={social.name}
              className="hover:text-primary hover:scale-110 transform duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
