"use client";

interface SidebarProps {}
import {
  MagnifyingGlassIcon,
  PlayCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="divider hidden z-20 lg:flex fixed left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 divider-horizontal h-[60%] divider-neutral">
      <span className="-rotate-90 p-4 text-neutral"> Follow Us</span>
      <CircleMenu
        startAngle={-90}
        rotationAngle={180}
        itemSize={1.6}
        radius={9}
        menuToggleElement={
          <button className="btn btn-square btn-ghost circle-menu-toggle">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              ></path>
            </svg>
          </button>
        }
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        // rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip="Email"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <MagnifyingGlassIcon />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">
          <UserCircleIcon />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Location">
          <CreditCardIcon />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Info">
          <PlayCircleIcon />
        </CircleMenuItem>
      </CircleMenu>
      <span className="-rotate-90 p-4 text-neutral"> Follow Us</span>
    </div>
  );
};

export default Sidebar;
