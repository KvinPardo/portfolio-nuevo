import React from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex text-white items-center justify-between lg:gap-x-12 lg:p-2 lg:px-[30px] pr-4">
        <div className="flex lg:gap-x-6 gap-x-4">
          <a href="" className="">
            <BsGithub className="w-[20px] h-[20px] hover:text-terciary" />
          </a>
          <a href="" className="">
            <BsLinkedin className="w-[20px] h-[20px]" />
          </a>
          <a href="" className="">
            <BsWhatsapp className="w-[20px] h-[20px] hover:text-terciary rounded-full" />
          </a>
          <a href="" className="">
            <BiLogoGmail className="w-[20px] h-[20px] hover:text-terciary rounded-full" />
          </a>
        </div>

        {/* button */}
        <button className="lg:btn-lg uppercase px-4  text-terciary bg-terciary py-2 lg:px-[20px] bg-transparent border-terciary border rounded-[5px]">
          Resumen
        </button>
      </div>
    </div>
  );
};

export default Header;
