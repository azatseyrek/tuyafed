"use client";

import Image from "next/image";
import { YapayZekaVeRobotGaleriData } from "../../../data/galeri";

const YapayZekaVeRobotlarPage = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-8 lg:gap-12">
      <Image
        src="/assets/calistay/yapay-zeka-robot-calistay-hero.jpeg"
        alt="yonetimkurulu hero image"
        width={1024}
        height={768}
        className="w-full h-[400px] lg:h-[600px] object-cover object-center"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl text-secondary font-bold ">
          Yapay Zeka ve Robot Çalıştayı Akademi ve Sanayi Buluşması yapıldı.
        </h3>
        <p>
          TÜYAFED Yazılımcılar Federasyonu ve İstanbul Üniversitesi işbirliği
          ile &quot;1. Yapay Zeka ve Robot Çalıştayı Akademi ve Sanayi
          Buluşması&quot; yapıldı.
        </p>

        <p>
          Gerçekleşen program ile yazılım sektörünün geliştirilmesi ve
          eksikliklerinin giderilmesi hedefleniyor. TÜYAFED Yazılımcılar
          Federasyonu ve İstanbul Üniversitesi işbirliği ile 1. Yapay Zeka ve
          Robot Çalıştayı Akademi ve Sanayi Buluşması’ İstanbul’da gerçekleşti.
          Program ile yazılımcıların yanı sıra kamu, STK, sanayi ve akademi
          dünyasından temsilciler bir araya geldi. Programda yazılım sektörünün
          geliştirilmesi için yapılması gerekenler, Türkiye’de yazılım
          sektörünün mevcut durumu gibi konular ele alındı.
        </p>

        <p>
          ‘’Yazılımda sektör birliği sağlayarak odalaşmayı amaçlıyoruz’’
          Programda konuşan TÜYAFED Başkanı Mustafa Çalış yazılım sektörü ile
          ilgili açıklamalarda bulundu. Yazılım sektörünü bir çatı altında
          buluşturmayı hedeflediklerini söyleyen Çalış, ‘’Federasyon olarak
          Türkiye’de yazılım alanında bir odalaşmanın olmadığını gördük.
          Yazılımda sektör birliği sağlayarak odalaşmayı amaçlıyoruz. Yapay zeka
          ve robotik etkinliğimiz ilk çalışmamız oldu. Buradaki amacımız;
          akademi, sanayi, kamu, eğitim ve STK’ları bir araya getirmek.
          Yapacağımız çalıştaylar ile birlikte sektörün sıkıntılarını tartışarak
          eksiklikleri tespit edeceğiz. Bu alanlarda yeterli olan firmalarımızı
          yapacağımız puanlama sistemiyle destekleyeceğiz. İhracat anlamında
          firmalarımızın önünü açacağız. Amacımız sektörün birliğini sağlamak.
          Bu birliği sağlamak için hem Türkiye’de hem de yurtdışında altyapıyı
          kurmak gerekiyor. Yazılım alanında bir odalaşmayı kanun haline
          getirmeye çalışacak çalışmalarımız bulunuyor’’ ifadelerini kullandı.
        </p>

        <p>
          #TÜYAFED ev sahipliğinde düzenlenen çalıştaya; TÜYAFED Yazılımcılar
          Federasyonu Başkanı Mustafa Çalış, Çalıştay Başkanı Doç. Dr. Leyla
          Türker Şener, Teknoloji Grup Başkanı Aykut Seyrek, #TUBİDER Yönetim
          Kurulu Başkanı Pınar Kabil, Avrupa Futbol Federasyonu Başkanı Ayhan
          Yıldız, #TUBİTAK Başkan Yardımcısı Prof. Dr. Ahmet Yozgatlıgil,
          İstanbul Üniversitesi Rektör Yardımcısı Prof. Dr. Mustafa Öncül,
          #MÜSİAD Dijital Dönüşüm Sektör Başkanı Fahrettin Oylum, #TOBB Yazılım
          Meclisi Başkanı Ertan Barut, #YASAD Yönetim Kurulu Başkanı Gönül
          Kamalı ve çok sayıda sektör temsilcisi katıldı.
        </p>
      </div>
      <h4 className="text-3xl -mb-4 font-semibold text-secondary text">
        Fotoğraflar
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {YapayZekaVeRobotGaleriData.map((image) => (
          <Image
            key={image.id}
            src={image.imagePath}
            alt="Yapay Zeka ve Robotlar Galeri"
            width={1024}
            height={768}
            className="object-cover object-center w-full h-50 xl:h-60 max-w-full rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default YapayZekaVeRobotlarPage;
