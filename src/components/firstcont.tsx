/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect } from "react";

interface Props {}

const content = {
  title: "Next Generation CRYPTO",
};

const Firstcont = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#titleLetter",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, delay: (i) => i * 0.05 }
    );
  });
  const eachTitle = content.title.split("");
  return (
    <div className="grid pt-16 grid-cols-6 grid-rows-2">
      <div className="col-span-6 lg:col-span-2 row-span-1 flex flex-col justify-evenly lg:justify-start lg:row-span-2">
        <h1 className="text-3xl lg:text-6xl uppercase">
          {eachTitle.map((el) => (
            <span id="titleLetter" key={el + Math.random()}>
              {el}
            </span>
          ))}
        </h1>
        <h2 className="text-sky-700 font-semibold  dark:text-sky-400 uppercase tracking-widest">
          Shy Ninja
        </h2>
        <p className="text-xs  lg:text-sm">
          Decentralized digital currency with a{" "}
          <span className="tracking-wider text-sky-700 dark:text-sky-400">
            limited
          </span>{" "}
          supply
        </p>
        <ul>
          <li className="border-l-2 px-2 border-slate-800 dark:border-slate-200 my-2">
            Name: SHY NINJA
          </li>{" "}
          <li className="border-l-2 px-2 border-slate-800 dark:border-slate-200 my-2">
            Symbol: SN
          </li>{" "}
          <li className="border-l-2 px-2 border-slate-800 dark:border-slate-200 my-2">
            Chain: SHYNINJA (SN)
          </li>
        </ul>
        <div className="flex flex-row justify-center lg:justify-start">
          <button className="p-3 m-2 bg-slate-800 text-slate-200 dark:bg-slate-200 dark:text-slate-800">
            <a href="#">Explore</a>
          </button>
          <button className="p-3 m-2  border border-slate-800 dark:border-slate-200 text-slate-800 dark: dark:text-slate-200">
            <a href="">Join Discord</a>
          </button>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-6 pb-16 row-span-2 lg:pb-40 dark:brightness-125">
        <img src="./assets/icon.png" className="h-full m-auto " alt="" />
      </div>
    </div>
  );
};

export default Firstcont;
