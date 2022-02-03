/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect } from "react";

interface Props {}

const content = {
  title: "Next Generation Hedge Fund",
};

const Firstcont = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#titleLetter",
      { opacity: 0 },
      { opacity: 1, delay: (i) => i * 0.05 }
    );
  });
  const eachTitle = content.title.split("");
  return (
    <div className="grid grid-cols-6 grid-rows-2">
      <div className="col-span-6 lg:col-span-2 row-span-1 flex flex-col justify-evenly lg:justify-start lg:row-span-2">
        <h1 className="text-3xl lg:text-6xl uppercase">
          {eachTitle.map((el) => (
            <span id="titleLetter" key={el + Math.random()}>
              {el}
            </span>
          ))}
        </h1>
        <h2 className="text-sky-700 font-semibold  dark:text-sky-400 uppercase tracking-widest">
          Innovative Hybrid Knife Protocol
        </h2>
        <p className="text-xs  lg:text-sm">
          Diamond Bank is building{" "}
          <span className="tracking-wider text-sky-700 dark:text-sky-400">
            true wealth
          </span>{" "}
          for the masses.{" "}
        </p>
        <ul>
          <li className="border-l-2 px-2 border-slate-800 dark:border-slate-200 my-2">
            Name: Diamond Bank
          </li>{" "}
          <li className="border-l-2 px-2 border-slate-800 dark:border-slate-200 my-2">
            Symbol: DB
          </li>{" "}
          <li className="border-l-2 px-2 border-slate-800 dark:border-slate-200 my-2">
            Chain: Avalanche (AVAX)
          </li>
        </ul>
        <div className="flex flex-row justify-center lg:justify-start">
          <button className="p-3 m-2 bg-slate-800 text-slate-200 dark:bg-slate-200 dark:text-slate-800">
            <a href="https://db.cash">Explore</a>
          </button>
          <button className="p-3 m-2  border border-slate-800 dark:border-slate-200 text-slate-800 dark: dark:text-slate-200">
            <a href="">Join Discord</a>
          </button>
        </div>
      </div>
      <div className="col-span-6 -z-10 fixed bottom-0 lg:relative opacity-40 dark:opacity-100">
        <img src="./assets/bg.png" alt="" className="filter blur-sm" />
      </div>
    </div>
  );
};

export default Firstcont;
