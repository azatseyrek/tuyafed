import Image from "next/image";
import React from "react";

const MedikalYapayZekaPage = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-8 lg:gap-12">
      <Image
        src="/assets/calistay/medikal-yapay-zeka-calistay-hero.jpeg"
        alt="yonetimkurulu hero image"
        width={1024}
        height={768}
        className="w-full h-[400px] lg:h-[600px] object-cover object-center"
      />
      <article className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl text-secondary font-bold ">
          Medikal Yapay Zeka Semineri Zoom Üzerinden Gerçekleştirildi
        </h3>
        <p>
          TÜYAFED ve Arel Üniversitesi işbirliği ile &quot;Medikal Yapay Zeka
          Semineri&quot; 14 Haziran 2022 15:30&apos;da gerçekleştirildi.
          Moderatörlüğünü Dr.Öğr. Üyesi Orhan Çömlek&apos;in gerçekleştirdiği
          Seminere Tüyafed Genel Başkanı Mustafa Çalış, Prof.Dr. Enver Duran,
          Dr. Mehmet Kocabaş, Dr. Murat Gezer, İsmail Kapurtu, Dr. Hamid Asadi
          Dereshgi, Dr. Pınar Karadayı Ataş ve Dr. Peren Jerfi Canatalay
          konuşmacı olarak katıldı. Zoom üzerinden yapılan seminerde birbirinden
          özel konular işlendi. Yoğun katılımın sağlandığı seminer iki saat
          sürdü.
        </p>
      </article>
    </div>
  );
};

export default MedikalYapayZekaPage;
