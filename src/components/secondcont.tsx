/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect } from "react";

interface Props {}

const content = {
  title: "Tokenomics",
};

const Secondcont = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#titleLetter",
      { opacity: 0 },
      { opacity: 1, delay: (i) => i * 0.05 }
    );
  });
  const eachTitle = content.title.split("");
  return (
    <div className="grid grid-cols-6 grid-rows-2 pt-24">
      <div className="col-span-6 lg:col-span-2 row-span-1 flex flex-col justify-evenly lg:justify-start lg:row-span-2">
        <h1 className="text-3xl lg:text-6xl uppercase">
          {eachTitle.map((el) => (
            <span id="titleLetter" key={el + Math.random()}>
              {el}
            </span>
          ))}
        </h1>

        <p className="text-xs  lg:text-sm">
          At launch Diamond Bank will have
          <span className="tracking-wider text-sky-700 dark:text-sky-400">
            10,000 $DB
          </span>{" "}
          tokens.
          <div className="shadow-lg rounded-2xl w-full p-4 my-4 bg-white dark:bg-gray-800">
            <div className="flex items-center">
              <span className="rounded-xl relative p-4 bg-sky-200">
                <svg
                  width="40"
                  fill="currentColor"
                  height="40"
                  className="text-sky-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                </svg>
              </span>
              <h2 className="text-sky-700 font-semibold pl-2  dark:text-sky-400 uppercase tracking-widest">
                Token Supply
              </h2>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                10,000
                <span className="text-sm">$DB</span>
              </p>
              <div className="flex items-center text-sky-800 text-sm">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                </svg>
                <span className="text-gray-400"> tokens at launch</span>
              </div>
            </div>
          </div>
        </p>
        <div className="bg-none">
          <h1 className="text-3xl">Distribution </h1>
          <p className="text-xs text-justify p-2">
            Diamond Bank had no presales, no whitelists, no VC&apos;s, No team
            allocation. Basically no dilution of any kind. 100% of the token
            supply will go to traderjoe to the liquidity pool. No more worries
            of a team or white list members dumping on you again. Diamond Bank
            Started with 2.5 Million Dollars Self Funded Capital. We use our own
            money to launch the first 4 projects and marketing. Diamond bank
            will receive a smallest in the industry 5% managmenet fee on all
            profits. We may need to make a pie chart.
          </p>
        </div>
      </div>
      <div className="col-span-6 -z-10 fixed bottom-0 lg:relative opacity-40 dark:opacity-100">
        <img src="./assets/bg.png" alt="" className="filter blur-sm " />
      </div>
    </div>
  );
};

export default Secondcont;
