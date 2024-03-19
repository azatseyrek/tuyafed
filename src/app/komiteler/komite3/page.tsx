import ProfileCard from "../../../components/profile-card/ProfileCard";
import { yonetimKurulu } from "../../../data/kurullar";
import Image from "next/image";
import React from "react";

const Komite3 = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-12 lg:gap-20">
      <Image
        src="/assets/geometrical-hand.png"
        alt="yonetimkurulu hero image"
        width={1024}
        height={768}
        className="w-full h-[400px] lg:h-[600px] object-cover object-center"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center">
        {yonetimKurulu.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
};

export default Komite3;
