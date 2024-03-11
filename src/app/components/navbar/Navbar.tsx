/* eslint-disable @next/next/no-img-element */
"use client";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookOpenIcon,
  EnvelopeIcon,
  MegaphoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import {
  FaBrain,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
  FaLaptopMedical,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";

const kurumsal = [
  {
    name: "Hakkımızda",
    description: "",
    href: "/kurumsal/hakkimizda",
    icon: MegaphoneIcon,
  },
  {
    name: "Tüzük",
    description: "",
    href: "/kurumsal/tuzuk",
    icon: BookOpenIcon,
  },
  {
    name: "Başkanın Mesajı",
    description: "",
    href: "/kurumsal/baskaninmesaji",
    icon: UserIcon,
  },
];

const kurullarimiz = [
  {
    name: "Yönetim Kurulu",
    description: "",
    href: "/kurullar/yonetim-kurulu",
    icon: FaChessQueen,
  },
  {
    name: "Denetim Kurulu",
    description: "",
    href: "/kurullar/denetim-kurulu",
    icon: FaChessRook,
  },
  {
    name: "Komiteler",
    description: "",
    href: "/kurullar/komiteler",
    icon: FaChessKnight,
  },
];

const calistay = [
  {
    name: "Yapay Zeka ve Robotlar",
    description: "",
    href: "/yapayzeka",
    icon: FaBrain,
  },
  {
    name: "Güvenlik ve Siber Güvenlik",
    description: "",
    href: "/guvenlik",
    icon: GrSecure,
  },
  {
    name: "Medikal Yapay Zeka",
    description: "",
    href: "/medikal",
    icon: FaLaptopMedical,
  },
  {
    name: "Metaverse ve Konferans",
    description: "",
    href: "/metaverse",
    icon: FaMeta,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 sticky top-0 z-50 ">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-20"
        aria-label="Global"
      >
        <div>
          <Link href="/">
            <span className="sr-only">TUYAFED</span>

            <Image
              src={"/assets/tuyafed-main-logo.svg"}
              width={250}
              height={70}
              className="cursor-pointer active:scale-95 transition-transform w-[150px] lg:w-[250px]"
              alt="tuyafed-logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 w-full mx-4 items-center justify-center">
          <Link href="/" className="text-sm font-semibold leading-6 ">
            Anasayfa
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center outline-none gap-x-1 text-sm font-semibold leading-6 ">
              Kurumsal
              <ChevronDownIcon
                className="h-5 w-5 flex-none "
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 xl:w-screen max-w-md overflow-hidden rounded-3xl bg-base-300 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {kurumsal.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-primary"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base group-hover:bg-base-300">
                        <item.icon
                          className="h-6 w-6 text-orange-500 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold ">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-base opacity-65 cursor-pointer">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 ">
              Kurullarımız
              <ChevronDownIcon
                className="h-5 w-5 flex-none "
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 xl:w-screen max-w-md overflow-hidden rounded-3xl bg-base-300 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {kurullarimiz.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-primary"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base group-hover:bg-base-300">
                        <item.icon
                          className="h-6 w-6 text-orange-500 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold ">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-base opacity-65 cursor-pointer">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative ">
            <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 ">
              Çalıştay
              <ChevronDownIcon
                className="h-5 w-5 flex-none "
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 xl:w-screen max-w-md overflow-hidden rounded-3xl bg-base-300 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {calistay.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-primary"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base group-hover:bg-base-300">
                        <item.icon
                          className="h-6 w-6 text-orange-500 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold ">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-base opacity-65 cursor-pointer">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/faaliyetler" className="text-sm font-semibold leading-6">
            Faaliyetler
          </Link>
        </Popover.Group>
        <Link
          href="/iletişim"
          className="text-sm text-secondary font-semibold hidden leading-6 lg:flex items-center justify-center gap-2"
        >
          <EnvelopeIcon className="h-5 w-5 flex-none " aria-hidden="true" />
          İletşim
        </Link>
        <label className="swap swap-rotate ml-6 hidden lg:grid">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onChange={(e) => {
              const theme = e.target.checked ? "dark" : "light";
              document.documentElement.setAttribute("data-theme", theme);
            }}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-base-100 transition-all px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className=" sm:opacity-0">
              <span className="sr-only">TUYAFED</span>
              <Image
                src={"/assets/tuyafed-main-logo.svg"}
                width={140}
                height={40}
                className="cursor-pointer active:scale-95 transition-transform "
                alt="tuyafed-logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-secondary hover:text-white"
                >
                  Anasayfa
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-secondary hover:text-white">
                        Kurumsal
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...kurumsal].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-secondary hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-secondary hover:text-white">
                        Kurullarımız
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {kurullarimiz.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-secondary hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-secondary hover:text-white">
                        Çalıştay
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...kurumsal].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-secondary hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-neutral font-semibold leading-7 hover:bg-secondary hover:text-white"
                >
                  Faaliyetler
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-secondary hover:text-white"
                >
                  İletşim
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
