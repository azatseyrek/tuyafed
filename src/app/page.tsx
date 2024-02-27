"use client";

import Image from "next/image";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import NewsCard from "./components/news-card/NewsCard";
import { data_haberler } from "./data/haberler";

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
    <main className="grid grid-cols-1 gap-12 lg:gap-20">
      <Slider {...settings} autoplay className="-z-0">
        <div className="max-h-[500px]">
          <Image
            src={"/assets/ai2.jpeg"}
            alt="asd"
            width={600}
            height={400}
            className="object-cover object-center w-full "
            priority
          />
        </div>
        <div className="max-h-[500px]">
          <Image
            src={"/assets/ai1.jpeg"}
            alt="asd"
            width={600}
            height={400}
            className="object-cover object-center w-full "
            priority
          />
        </div>
        <div className="max-h-[500px]">
          <Image
            src={"/assets/ai3.jpeg"}
            alt="asd"
            width={600}
            height={400}
            className="object-cover object-center w-full"
            priority
          />
        </div>
      </Slider>

      <section className="flex gap-8 flex-col xl:flex-row">
        <Image
          src={"/assets/baskanin-mesaji-img.jpeg"}
          width={400}
          height={600}
          priority
          alt="baskanin-mesaji"
          className="flex-1 aspect-video xl:aspect-square w-full xl:w-auto object-cover object-left-top xl:object-left-top image"
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
          <button className="self-end btn btn-secondary">Devamı</button>
        </aside>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h3 className="text-4xl font-semibold text-secondary">Haberler</h3>
          <button className="btn btn-outline btn-secondary">TÜMÜ</button>
        </div>

        <div className="grid-container">
          {data_haberler.slice(0, 6).map((haber) => (
            <NewsCard key={haber.id} data={haber} />
          ))}
        </div>
      </section>

      <section className="md:h-[500px] bg-primary bg-doted-world-map flex flex-col lg:flex-row items-center justify-evenly gap-8 p-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <CountUp start={0} end={35} duration={5} enableScrollSpy>
            {({ countUpRef }) => (
              <span
                className="text-5xl text-secondary font-bold"
                ref={countUpRef}
              />
            )}
          </CountUp>

          <span className="font-bold text-2xl text-neutral text-center">
            Anlaşma Yapılan Ülkeler
          </span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <CountUp start={0} end={22} duration={5} enableScrollSpy>
            {({ countUpRef }) => (
              <span
                className="text-5xl text-secondary font-bold"
                ref={countUpRef}
              />
            )}
          </CountUp>
          <span className="font-bold text-2xl text-neutral text-center">
            Yurtdışı Temsilcilikler
          </span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <CountUp start={30000} end={34000} duration={5} enableScrollSpy>
            {({ countUpRef }) => (
              <span
                className="text-5xl text-secondary font-bold"
                ref={countUpRef}
              />
            )}
          </CountUp>
          <span className="font-bold text-2xl text-neutral text-center">
            İhracat Potansiyeli Olan Üyeler
          </span>
        </div>
      </section>

      <section className="flex">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 md:mr-6">
              <span className="text-3xl">Problem çözme becerileri</span>
              <div className="text-lg ">
                Uzun bir süredir mevcut bulunan ve başka kimsenin nasıl
                çözeceğini bilmediği bir sorunu çözmekten daha tatmin edici bir
                şey yoktur. Yeni bir çözüme başlamadan önce becerikli olun ve
                mevcut araçları değerlendirin; birkaç adımı kolayca
                atlayabileceğinizi görebilirsiniz.
              </div>
            </div>
            <hr className="bg-secondary" />
          </li>
          <li>
            <hr className="bg-secondary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 md:ml-6">
              <span className="text-3xl">Kodlamada yaratıcılık</span>
              <div className="text-lg ">
                Yenilikçi yeni sistemler ve işlevsellikler yaratabilir ve bu
                sistemler etrafında yeni teknolojiler ile entegrasyonlar
                sağlayabilirsiniz. Mevcut donanım kaynaklarından azami
                faydalanabilmek için, çok iyi düşünülmüş karmaşık bir çözüm
                tasarlamaya çalışırken yaratıcılık çok önemlidir.
              </div>
            </div>
            <hr className="bg-secondary" />
          </li>
          <li>
            <hr className="bg-secondary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 md:mr-6">
              <span className="text-3xl">Proje bazlı çalışma yapısı</span>
              <div className="text-lg ">
                Yazılım Geliştirici olmak için bir diğer neden de proje bazlı
                çok çeşitli çalışma yapısıdır. Genel olarak, hem büyük hem de
                küçük çok çeşitli projeler üzerinde çalışıyor olacaksınız ve bu
                çalışma tarzının pek çok avantajı var. Üzerinde çalıştığınız her
                yeni proje, yepyeni bir dizi zorluk getirir ve size yeni
                teknolojiler, farklı sistemler hakkında bilgi edinme ve işin
                çeşitli bölümlerini keşfetme fırsatı verir.
              </div>
            </div>
            <hr className="bg-secondary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 md:ml-6">
              <span className="text-3xl">Sürekli öğrenme fırsatları</span>
              <div className="text-lg ">
                Teknoloji son derece hızlı hareket ediyor, bu nedenle Yazılım
                Mühendislerinin yeni programlama dilleri ve teknolojileri
                öğrenebilmeleri ve sürekli değişen ortama uyum sağlayabilmeleri
                gerekiyor.
              </div>
            </div>
            <hr className="bg-secondary" />
          </li>
          <li>
            <hr className="bg-secondary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 md:mr-6">
              <span className="text-3xl">Takımlar arası işbirliği </span>
              <div className="text-lg ">
                Bir odada tek başına oturup bütün gün kod yazan bir programcı
                klişesi aslında gerçeklikten çok uzaktır ve çok az geliştirici
                tek başına çalışır. Teknik becerilere ek olarak, harika bir
                iletişimci ve takım oyuncusu olmanız gerekir.
              </div>
            </div>
          </li>
        </ul>
        {/* <iframe
          width="1008"
          height="554"
          src="https://www.youtube.com/embed/XEVxFvvtSYA"
          title="Yazılım ve İletişim Teknolojisiyle Değişen Dünya ve Geleceği"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
      </section>
    </main>
  );
}
