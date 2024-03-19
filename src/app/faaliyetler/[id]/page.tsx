/* eslint-disable @next/next/no-img-element */
import React from "react";
import { data_haberler } from "../../../data/haberler";
import { BiErrorAlt } from "react-icons/bi";

const HaberDetay = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const newsDetail = data_haberler.find((news) => String(news.id) === id);
  if (!newsDetail)
    return (
      <div className="flex gap-4 flex-col items-center justify-center lg:flex-row">
        <BiErrorAlt size={32} className="text-secondary" />
        <h1 className="text-2xl font-semibold">Haber Bulunamadı!</h1>
      </div>
    );
  return (
    <div className="flex flex-col gap-4">
      <img
        src={`/assets/haberler/${newsDetail.imagePath}`}
        alt={newsDetail.title}
        className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover object-center"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl lg:text-2xl font-semibold text-secondary">
          {newsDetail.title}
        </h1>
        <span className="text-start opacity-60">{newsDetail.date}</span>
        <p>{newsDetail.content}</p>
      </div>
      {newsDetail.youtubeVideoUrl && (
        <div className="w-full flex items-center justify-center">
          <iframe
            className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover object-center"
            src={newsDetail.youtubeVideoUrl}
            title="Yazılım ve İletişim Teknolojisiyle Değişen Dünya ve Geleceği"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default HaberDetay;
