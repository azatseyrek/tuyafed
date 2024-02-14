"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AI3 from "./assets/ai3.jpeg";
import BaskaninMesajiImg from "./assets/baskanin-mesaji-img.jpeg";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <main className="grid grid-cols-1 gap-8 lg:gap-16">
      <Slider {...settings} autoplay className="-z-0">
        <div className="max-h-[500px]">
          <Image
            src={AI3}
            alt="asd"
            width={600}
            height={400}
            className="object-cover object-center w-full "
          />
        </div>
        <div className="max-h-[500px]">
          <Image
            src={AI3}
            alt="asd"
            width={600}
            height={400}
            className="object-cover object-center w-full "
          />
        </div>
        <div className="max-h-[500px]">
          <Image
            src={AI3}
            alt="asd"
            width={600}
            height={400}
            className="object-cover object-center w-full"
          />
        </div>
      </Slider>

      <section className="flex gap-8 flex-col lg:flex-row">
        <Image
          src={BaskaninMesajiImg}
          width={400}
          height={600}
          priority
          alt="baskanin-mesaji"
          className="flex-1 aspect-video lg:aspect-square w-full lg:w-auto  object-cover object-top image"
        />
        <aside className="flex-auto flex flex-col gap-4 lg:gap-8 ">
          <h3 className="text-4xl font-semibold text-secondary">
            Başkanın Mesajı
          </h3>
          <h4 className="text-md">
            Yazılım Federasyonunu ekonomik ve sosyolojik politikalar ve
            stratejiler ile birlikte yurt içi ve yurt dışında güçlü ve büyük bir
            yönetim kadrosu ile birlikte hedeflerini oluşturmaktır. <br />
            <br />
            Yurt içi faaliyetlerimiz olarak hedeflerimiz Yazılımda sektör
            birliği sağlayarak odalaşmak, Dijital Dönüşümü hızlandırmak, Akademi
            ve Sanayi Birliği, Türkiye geneli ticaret odalarında yazılım
            meclislerinin kurulması ve firmalar ile entegrasyonu, Endüstri 4.0
            ve 5.0 Entegrasyonu, Gelişmekte olan bölgelerin kalkınması, Eğitim
            çalışmaları, Ar-ge Kuluçka merkezlerini oluşturulması, Yeni buluşlar
            ile birlikte Melek yatırımcıları bir araya getirmek olacaktır. Bu
            kapsamda oluşturulan komitelerin sağlıklı çalışmal...
          </h4>
        </aside>
      </section>
    </main>
  );
}
