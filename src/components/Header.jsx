import React from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex text-white items-center justify-center gap-x-4 p-5">
        <a href="" className="hover:bg-gray-500/70 rounded-full">
          <BsGithub className="w-[20px] h-[20px] " />
        </a>
        <a href="" className="hover:bg-gray-500/70 rounded-full">
          <BsLinkedin className="w-[20px] h-[20px]"/>
        </a>
        <a href="" className="hover:bg-gray-500/70 rounded-full">
          <BsWhatsapp className="w-[20px] h-[20px] hover:bg-gray-500/70 rounded-full" />
        </a>
        <a href="" className="hover:bg-gray-500/70 rounded-full">
          <BiLogoGmail className="w-[20px] h-[20px] hover:bg-gray-500/70 rounded-full" />
        </a>
      </div>

      {/* button */}
      <button className="btn-lg text-white uppercase border-black">
        Resumen
      </button>
    </div>
  );
};

export default Header;
