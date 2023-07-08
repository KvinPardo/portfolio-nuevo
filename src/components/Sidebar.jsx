import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardData, BsChatSquareText } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center py-[12px]">
        <span className="text-white lg:w-[45px] w-[40px] h-[45px] rounded-full bg-black flex justify-center items-center">
          K
        </span>
      </div>
      <div className="flex flex-col justify-center items-center hover:border-none">
        <Link
          to="home"
          smooth={true}
          spy={true}
          offset={-200}
          className="m-4 lg:text-[20px] w-full h-full flex justify-center items-center p-[14px] rotate-90 text-nav hover:bg-secondary hover:border-t hover:border-t-terciary cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          spy={true}
          offset={-200}
          className="m-4 lg:text-[20px] w-full h-full flex justify-center items-center p-[14px] rotate-90 text-nav hover:bg-secondary hover:border-t hover:border-t-terciary cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          spy={true}
          offset={-200}
          className="lg:text-[20px] w-full h-full flex justify-center items-center p-[14px] rotate-90 text-nav hover:bg-secondary hover:border-t hover:border-t-terciary cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          spy={true}
          offset={-200}
          className="lg:text-[20px] w-full h-full flex justify-center items-center p-[14px] rotate-90 text-nav hover:bg-secondary hover:border-t hover:border-t-terciary cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          offset={-200}
          className="lg:text-[20px] w-full h-full flex justify-center items-center p-[14px] rotate-90 text-nav hover:bg-secondary hover:border-t hover:border-t-terciary cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
