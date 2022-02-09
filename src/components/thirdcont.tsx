/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect } from "react";
import Featurecard from "./featurecard";

interface Props {}

const Thirdcont = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#titleLetter",
      { opacity: 0 },
      { opacity: 1, delay: (i) => i * 0.05 }
    );
  });
  return (
    <div className="w-full">
      <Featurecard />
    </div>
  );
};

export default Thirdcont;
