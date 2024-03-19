"use client";

import React from "react";
import { data_haberler } from "../../data/haberler";
import NewsCard from "../../components/news-card/NewsCard";
import Image from "next/image";

const FaaliyetlerPage = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-8 lg:gap-12">
      <Image
        src="/assets/geometrical-hand.png"
        alt="hakkimizda hero image"
        width={1024}
        height={768}
        className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[600px] object-cover object-top"
      />

      <h1 className="text-2xl lg:text-4xl font-bold text-secondary ">
        Haberler
      </h1>

      <div className="grid-container">
        {data_haberler.map((haber) => (
          <NewsCard key={haber.id} data={haber} />
        ))}
      </div>
    </div>
  );
};

export default FaaliyetlerPage;
