import Image from "next/image";
import React from "react";

const Hakkimizda = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-12 lg:gap-20">
      <Image
        src="/assets/geometrical-hand.png"
        alt="hakkimizda hero image"
        width={1024}
        height={768}
        className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[600px] object-cover object-top"
      />

      <section className="flex flex-col gap-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-secondary ">
          Hakkımızda
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            TÜYAFED, Yazılım ve Bilişim sektöründe faaliyet gösteren dernekler
            tarafından bir araya gelinerek kurulan bir çatı kuruluştur.{" "}
          </p>

          <p>Federasyon olarak üç temel amacımız bulunmaktadır;</p>
          <p>
            Ekonomik, Sosyolojik politikalar ve stratejiler ile yurtiçi ve
            yurtdışında güçlü, büyük bir yönetim kadrosu ile hedeflerini
            oluşturmaktadır.
          </p>
          <p>
            Yurt içi faaliyetlerimiz olarak hedeflerimiz Yazılımda sektör
            birliği sağlayarak odalaşmak, Dijital Dönüşümü hızlandırmak, Akademi
            ve Sanayi Birliği, Türkiye geneli ticaret odalarında yazılım
            meclislerinin kurulması ve firmalar ile entegrasyonu, Endüstri 4.0
            ve 5.0 Entegrasyonu, Gelişmekte olan bölgelerin kalkınması, Eğitim
            çalışmaları, Ar-ge Kuluçka merkezlerini oluşturulması, Yeni buluşlar
            ile birlikte Melek yatırımcıları bir araya getirmek olacaktır. Bu
            kapsamda oluşturulan komitelerin sağlıklı çalışmaları ile birlikte
            ülkemizin ekonomik refaha kavuşmasında TÜYAFED gerekli katkıları
            sağlayacaktır.
          </p>
          <p>
            Yurtdışı hedeflerimiz olarak Asya ve Avrupa’yı birleştirecek büyük
            proje ile birlikte Türkiye Cumhuriyeti, Balkan Ülkeleri, Türk
            Cumhuriyetleri, Kafkas ülkelerini ve Komşu ülkeleri tek bir çatı
            altında toplayarak yerli-yabancı yazılımları bir araya getirerek
            başta Avrupa olmak üzere gelişmiş ülkelere yazılım ve donanım
            ihracatlarının önünü açmak ve ülkemize döviz girdisi sağlamaktır.
          </p>
          <p>
            Teknoloji transferleri sağlayarak ve katma değerli hale gelen
            ihracatların yolunu açmak ve Yurt dışına açılmak isteyen mikro, kobi
            veya büyük ölçekte olan bütün üreticilerimize kurmuş olduğumuz yurt
            dışı temsilcilikleri ile birlikte kılavuz olmak. Ülkemizde yer alan
            şirketlerin Global ölçekli birer şirket olması için gerekli alt
            yapıyı oluşturmak temel hedefimizdir.
          </p>
          <p>
            Çalıştay hedeflerimiz olarak ta bütün sektörün duayenlerini ve
            deneyimli firmalarını bir araya getirerek katma değerli çalışmalar
            ile sektörel bazlı çalıştaylar yaparak dış pazarlarda üyelerimize ve
            üyelerine rekabet edebilir koşullar oluşturmak temel hedefimizdir.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;
