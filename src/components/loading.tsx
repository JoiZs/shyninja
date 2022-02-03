/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {}

const Loading = (props: Props) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-900 fixed top-0 left-0">
      <img
        className="w-40 animate-pulse"
        src={"./assets/logodark.svg"}
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
