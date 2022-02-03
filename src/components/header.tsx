/* eslint-disable @next/next/no-img-element */
import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HiBookmarkAlt,
  HiMenu,
  HiPhone,
  HiPlay,
  HiRefresh,
  HiShieldCheck,
  HiSupport,
  HiX,
  HiChevronDown,
} from "react-icons/hi";
import { IoMdMoon, IoMdSunny, IoMdWifi } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import { MdOutbond } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import gsap from "gsap";
import DarkMode from "./darkmode";
import { Darkcontext } from "../context/darkCtx";

const Logo = (classname: string) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="508.000000pt"
    height="425.000000pt"
    viewBox="0 0 508.000000 425.000000"
    preserveAspectRatio="xMidYMid meet"
    className={classname}
  >
    <g
      transform="translate(0.000000,425.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path
        d="M1542 4230 c-403 -9 -734 -19 -736 -21 -6 -7 660 -884 671 -884 6 0
188 200 404 445 459 520 426 480 408 479 -8 -1 -344 -9 -747 -19z"
      />
      <path
        d="M2742 4238 c2 -3 201 -202 444 -441 l440 -435 303 420 c166 231 300
422 297 425 -4 5 -404 15 -1344 35 -78 2 -141 0 -140 -4z"
      />
      <path
        d="M2066 3743 l-456 -498 461 -3 c253 -1 665 -1 916 0 l455 3 -452 495
c-249 272 -457 496 -461 498 -4 2 -213 -221 -463 -495z"
      />
      <path
        d="M316 3688 l-308 -433 311 -3 c171 -1 450 -1 620 0 l310 3 -305 430
c-168 237 -309 431 -313 433 -4 1 -146 -192 -315 -430z"
      />
      <path
        d="M4129 3682 l-275 -437 604 -3 c333 -1 607 0 609 2 5 5 -647 876 -656
876 -3 -1 -130 -197 -282 -438z"
      />
      <path
        d="M37 2986 c135 -161 2158 -2524 2160 -2522 1 1 -196 577 -439 1279
l-441 1277 -654 0 -654 0 28 -34z"
      />
      <path
        d="M1614 2998 c3 -13 208 -688 456 -1501 247 -813 450 -1481 450 -1485
0 -4 5 0 10 9 7 13 799 2317 975 2842 l54 157 -976 0 -975 0 6 -22z"
      />
      <path
        d="M4232 3005 c-277 -7 -507 -17 -511 -21 -8 -9 -801 -2502 -801 -2517
0 -8 2126 2513 2143 2541 10 15 -113 14 -831 -3z"
      />
    </g>
  </svg>
);

const menus = [
  {
    name: "Bank Board",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: RiDashboardFill,
  },
  {
    name: "Stake",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: IoLayers,
  },
  {
    name: "Bond",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: HiShieldCheck,
  },
  {
    name: "Buy",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: MdOutbond,
  },
  {
    name: "Diamond Appraisal",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: HiRefresh,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: HiPlay },
  { name: "Contact Sales", href: "#", icon: HiPhone },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: HiSupport,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: HiBookmarkAlt,
  },
  {
    name: "Air Drops",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: IoMdWifi,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: HiShieldCheck,
  },
];
const recentPosts = [
  { id: 1, name: "Where’s the Road Map?", href: "#" },
  {
    id: 2,
    name: "Diamond Bank Dao is building true wealth for the masses.",
    href: "#",
  },
  { id: 3, name: "$1,000,000.00 Giveaway!", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isDark, setIsDark] = useContext(Darkcontext);

  return (
    <div className="fixed w-full z-50">
      <Popover className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="">
                <span className="sr-only">Diamond Bank</span>
              </a>
              {Logo("w-8 h-8 md:w-12 fill-slate-800 dark:fill-slate-200")}
            </div>
            <div className="-mr-2 -my-2 md:hidden ">
              <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                <span className="sr-only">Open menu</span>
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex space-x-10 md:items-center"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        //   open ? "" : "",
                        "group  rounded-md inline-flex items-center text-base font-medium hover: focus:outline-none"
                      )}
                    >
                      <span>Discover</span>
                      <HiChevronDown
                        className={classNames(
                          open ? "text-gray-600" : "",
                          "ml-2 h-5 w-5 group-hover:"
                        )}
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
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg bg-slate-200 dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                            {menus.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 "
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-sky-500 dark:text-sky-400"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium ">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-slate-300 dark:bg-slate-600 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium  hover:bg-slate-200 dark:hover:bg-slate-700"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 "
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a href="#" className="text-base font-medium">
                Diamond Nodes
              </a>
              <a href="#" className="text-base font-medium">
                Docs
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "" : "",
                        "group  rounded-md inline-flex items-center text-base font-medium hover: focus:outline-none "
                      )}
                    >
                      <span>More</span>
                      <HiChevronDown
                        className={classNames(
                          open ? "text-gray-600" : "",
                          "ml-2 h-5 w-5 group-hover:"
                        )}
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
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg bg-slate-200 dark:bg-slate-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-sky-500 dark:text-sky-400"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium ">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-slate-300 dark:bg-slate-600 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium  uppercase">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                  <li
                                    key={post.id}
                                    className="text-base truncate"
                                  >
                                    <a href={post.href} className="font-medium">
                                      {post.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a href="#" className="font-medium">
                                {" "}
                                View all posts{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <DarkMode>
                {({ isDark, setIsDark }) => (
                  <div
                    className="text-xl hover:brightness-75 cursor-pointer mr-4"
                    onClick={async (e) => {
                      if (isDark) {
                        document.documentElement.classList.remove("dark");
                      } else {
                        document.documentElement.classList.add("dark");
                      }

                      new Promise(() =>
                        sessionStorage.setItem(
                          "colorMode",
                          `${isDark ? "light" : "dark"}`
                        )
                      );
                      setIsDark(!isDark);

                      gsap.fromTo(
                        e.currentTarget,
                        { opacity: 0, translateY: 10, rotation: 90 },
                        { opacity: 1, translateY: 0, rotation: 0 }
                      );
                    }}
                  >
                    {isDark ? <IoMdMoon /> : <IoMdSunny />}
                  </div>
                )}
              </DarkMode>
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium  px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-sky-800 hover:bg-sky-600"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute  top-0 backdrop-blur-sm inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg bg-slate-300 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-30 ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                      <span className="sr-only">Close menu</span>
                      <HiX className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <div
                      onClick={async (e) => {
                        gsap.fromTo(
                          e.currentTarget,
                          { opacity: 0, translateX: 10 },
                          { opacity: 1, translateX: 0 }
                        );
                        new Promise(() =>
                          sessionStorage.setItem(
                            "colorMode",
                            `${isDark ? "light" : "dark"}`
                          )
                        );
                        setIsDark(!isDark);
                      }}
                      className="text-lg"
                    >
                      {isDark ? (
                        <span className="flex flex-row items-center">
                          <IoMdMoon className="mr-3" />
                          Dark Mode
                        </span>
                      ) : (
                        <span className="flex flex-row items-center">
                          <IoMdSunny className="mr-3" />
                          Light Mode
                        </span>
                      )}
                    </div>
                    {menus.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-50 dark:hover:bg-slate-600"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-sky-500 dark:text-sky-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium ">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium  hover:">
                    Diamond Nodes
                  </a>

                  <a href="#" className="text-base font-medium  hover:">
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium  hover:"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700"
                  >
                    Connect Wallet
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
