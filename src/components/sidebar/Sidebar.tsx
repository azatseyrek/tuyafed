"use client";

import Link from "next/link";
import { data_social_media } from "../../data/socialmedia";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="divider hidden z-20 lg:flex flex-col justify-center items-center fixed left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 divider-horizontal h-[60%] divider-secondary opacity-50 group hover:opacity-100">
      <span className="-rotate-90 p-4 font-light cursor-default text-secondary">
        Takip Et
      </span>

      {data_social_media.map((social) => (
        <Link
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.name}
          className="hover:scale-110 text-gray-500 transition-all hover:text-secondary transform duration-200"
        >
          {social.icon}
        </Link>
      ))}

      <span className="-rotate-90 p-4 font-light cursor-default text-secondary">
        Takip Et
      </span>
    </div>
  );
};

export default Sidebar;
