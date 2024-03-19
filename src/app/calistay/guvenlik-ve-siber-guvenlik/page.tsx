import Image from "next/image";
import React from "react";

const GuvenlikVeSiberGuvenlikPage = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-8 lg:gap-12">
      <Image
        src="/assets/calistay/guvenlik-siber-guvenlik-calistay-hero.jpeg"
        alt="yonetimkurulu hero image"
        width={1024}
        height={768}
        className="w-full h-[400px] lg:h-[600px] object-cover object-center"
      />
      <article className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl text-secondary font-bold ">
          Güvenlik ve Siber Güvenlik Teknolojileri Çalıştayı ISAF Exclusive
          Fuarında yapıldı
        </h3>
        <h1>
          TÜYAFED Yazılımcılar Federasyonu ve ISAF Exclusive İşbirliği İle
          Gerçekleştirilen Çalıştay
        </h1>
        <p>
          Ankara Sheraton Hotel’de gerçekleştirilen{" "}
          <strong>Güvenlik ve Siber Güvenlik Teknolojileri Çalıştayı</strong>,
          12 Mart’ta Ankara&apos;da yapıldı.
        </p>
        <p>
          Çalıştay, sektör temsilcilerini bir araya getirdi. Siber güvenlik
          alanındaki konuların ele alındığı çalıştayda dikkat çekici başlıklar
          yer alıyordu.
        </p>
        <ul>
          <li className="list-item list-disc list-inside">
            Siber Güvenlik ve Uzay Teknolojileri
          </li>
          <li className="list-item list-disc list-inside">
            Metaverse Uygulamalarında Siber Güvenlik
          </li>
          <li className="list-item list-disc list-inside">
            Siber Güvenliğin Bileşenleri ve Uygulama Alanları
          </li>
          <li className="list-item list-disc list-inside">
            Sağlık Sektöründe Yeni Tehlike: Siber Riskler ve Dijital Dönüşüm ile
            Gelen Sosyal Medyadaki Güvenlik Riskleri
          </li>
        </ul>
        <p>
          Çalıştayda tüm bu sorulara durum ve öneriler ile ilgili beyin
          fırtınası yapıldı.
        </p>
        <p>
          Çalıştay, katılımcılardan tam not aldı. Katılan kişiler yuvarlak masa
          etrafında bir araya gelerek konuları tartıştılar, grupların kendi
          aralarından seçtikleri grup sözcüsünün kürsüde yapılan çalışmalarla
          ilgili bilgilendirmeler yapmasıyla devam etti.
        </p>
        <p>
          Çalıştay gruplarının doldurduğu formlar ve grup raporlarının yer
          aldığı bilgiler çalıştay başkanlığına derlenmek üzere teslim edildi.
        </p>
        <p>
          Çalıştay başkanlığı tarafından elde edilen bulgular derlenerek
          çalıştay raporu haline getirilip kamuoyu ile paylaşılacağı belirtildi.
        </p>
      </article>
      <div className="w-full flex items-center justify-center">
        <iframe
          src="https://www.youtube.com/embed/ETI7sfAtlis"
          title="TÜYAFED TARAFINDAN SİBER GÜVENLİK ÇALIŞTAYI YAPILDI #SİBERGÜVENLİK #TUYAFED #YAZILIM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default GuvenlikVeSiberGuvenlikPage;
