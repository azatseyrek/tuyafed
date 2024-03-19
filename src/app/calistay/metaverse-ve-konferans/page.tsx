import Image from "next/image";
import React from "react";

const MetaverseKonferansPage = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-8 lg:gap-12">
      <Image
        src="/assets/calistay/metaverse-calistay-hero.jpeg"
        alt="yonetimkurulu hero image"
        width={1024}
        height={768}
        className="w-full h-[400px] lg:h-[600px] object-cover object-center"
      />
      <article className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl text-secondary font-bold ">
          Metaverse Çalıştay &amp; Konferans&apos;ı 19 Ekim 2022&apos;de
          Yapılacak
        </h3>

        <p>
          <strong>Metaverse Çalıştay &amp; Konferans</strong> 19 Ekim
          2022&apos;de TÜYAFED Yazılımcılar Federasyonu ve İstanbul Arel
          Üniversitesi işbirliği ile yapılacak. İstanbul Arel Üniversitesi
          Sefaköy kampüsünde yapılacak olan çalıştay 12:00 ile 17:00 saatleri
          arasında gerçekleştirilecek. Tüm teknoloji severler &quot;
          <strong>Metaverse Çalıştay ve Konferans&quot;</strong> a davetlidir.
        </p>

        <span className="flex gap-2 font-semibold text-sm">
          KAYIT İÇİN:
          <a
            className="underline text-primary"
            href="http://metaverse.tuyafed.org"
          >
            http://metaverse.tuyafed.org
          </a>
        </span>
      </article>
    </div>
  );
};

export default MetaverseKonferansPage;
