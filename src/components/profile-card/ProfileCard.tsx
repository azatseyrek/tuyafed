/* eslint-disable @next/next/no-img-element */
"use client";

import {FaFacebook, FaLinkedinIn} from "react-icons/fa";
import {FaInstagram, FaXTwitter} from "react-icons/fa6";

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
          <img src={imagePath} alt={`${user.name} ${user.surname}`} />
        </div>
      </div>

      <div className="card-body text-black">
        <div className="flex gap-1 justify-start items-center">
          <span className="card-title">{user.name}</span>
          <span className="card-title">{user.surname}</span>
        </div>
        <p>{user.title}</p>
        <div className="flex items-end justify-between">
          <a
            href={`mailto:${user.social.mail}`}
            className="hover:text-primary text-sm opacity-80 hover:scale-110 transform duration-200 text-primary"
          >
            {user.social.mail}
          </a>

          <div className="flex gap-2">
            {user.social.instagram && (
              <a
                href={user.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transform duration-200"
              >
                <FaInstagram size={24} />
              </a>
            )}
            {user.social.linkedin && (
              <a
                href={user.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transform duration-200"
              >
                <FaLinkedinIn size={24} />
              </a>
            )}
            {user.social.facebook && (
              <a
                href={user.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transform duration-200"
              >
                <FaFacebook size={24} />
              </a>
            )}
            {user.social.twitter && (
              <a
                href={user.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transform duration-200"
              >
                <FaXTwitter size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
