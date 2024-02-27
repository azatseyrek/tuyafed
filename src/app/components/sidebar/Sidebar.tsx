"use client";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="divider hidden z-20 lg:flex fixed left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 divider-horizontal h-[60%] divider-neutral">
      <span className="-rotate-90 p-4 text-neutral"> Follow Us</span>
      {/* TODO: add social media icons */}

      <span className="-rotate-90 p-4 text-neutral"> Follow Us</span>
    </div>
  );
};

export default Sidebar;
