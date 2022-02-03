import React from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="fixed w-full bottom-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="flex flex-row justify-center py-6 ">
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaTwitter />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaTelegram />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaDiscord />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaMedium />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaInstagram />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaYoutube />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaGithub />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaFacebookF />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaTiktok />
          </li>
          <li className="px-2 hover:scale-110 cursor-pointer transition ease-in-out text-lg md:text-xl">
            <FaReddit />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
