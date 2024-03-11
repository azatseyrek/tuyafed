import Image from "next/image";
import React from "react";

interface IUser {
  name: string;
  surname: string;
  title: string;
  imagePath?: string;
  social: {
    instagram: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    mail: string;
  };
}

interface ProfileCardProps {
  user: IUser;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  const imagePath = user.imagePath
    ? `/assets/${user.imagePath}`
    : "/assets/stack-user.png";
  return (
    <div className="card w-full bg-gray-300 group shadow-xlhover:scale-105 transition-all duration-500">
      <div className="avatar pt-8 mx-auto ">
        <div className="w-32 rounded-full ">
          <Image
            width={128}
            height={128}
            src={imagePath}
            alt={`${user.name} ${user.surname}`}
          />
        </div>
      </div>

      <div className="card-body text-black">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end opacity-10 group-hover:opacity-80 duration-500 transition-all">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
