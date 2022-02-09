/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {}

const Loading = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-900 fixed top-0 left-0">
      <img
        className="h-56 animate-pulse"
        src={"./assets/logodark.svg"}
        alt="Loading"
      />
      <span className="text-white uppercase tracking-widest font-bold text-opacity-40">
        Loading
      </span>
    </div>
  );
};

export default Loading;
