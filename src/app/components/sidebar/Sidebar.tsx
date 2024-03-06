"use client";

import { data_social_media } from "@/data/socialmedia";
import Link from "next/link";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="divider hidden z-20 lg:flex flex-col justify-center items-center fixed left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 divider-horizontal h-[60%] divider-neutral">
      <span className="-rotate-90 p-4 text-neutral"> Follow Us</span>

      {data_social_media.map((social) => (
        <Link
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.name}
          className="hover:text-primary transform duration-200"
        >
          {social.icon}
        </Link>
      ))}

      <span className="-rotate-90 p-4 text-neutral"> Follow Us</span>
    </div>
  );
};

export default Sidebar;
