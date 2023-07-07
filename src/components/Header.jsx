import React from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex text-white items-center justify-between lg:gap-x-12 lg:p-5 justify-between px-[30px]">
        <div className="flex lg:gap-x-6 gap-x-4">
          <a href="" className="hover:bg-gray-500/70 rounded-full">
            <BsGithub className="w-[20px] h-[20px] " />
          </a>
          <a href="" className="hover:bg-gray-500/70 rounded-full">
            <BsLinkedin className="w-[20px] h-[20px]" />
          </a>
          <a href="" className="hover:bg-gray-500/70 rounded-full">
            <BsWhatsapp className="w-[20px] h-[20px] hover:bg-gray-500/70 rounded-full" />
          </a>
          <a href="" className="hover:bg-gray-500/70 rounded-full">
            <BiLogoGmail className="w-[20px] h-[20px] hover:bg-gray-500/70 rounded-full" />
          </a>
        </div>

        {/* button */}
        <button className="btn-lg uppercase  text-terciary bg-terciary py-2 px-[20px] bg-transparent border-terciary border rounded-[5px]">
          Resumen
        </button>
      </div>
    </div>
  );
};

export default Header;
