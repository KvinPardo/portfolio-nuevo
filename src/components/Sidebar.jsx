import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardData, BsChatSquareText } from "react-icons/bs";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <div className="flex justify-center items-center py-[15px]">
        <span className="text-white lg:w-[45px] w-[40px] h-[45px] rounded-full bg-black flex justify-center items-center">
          K
        </span>
      </div>
      <div className="flex flex-col justify-center items-center relative gap-y-5 lg:gap-y-0">
        <div className="flex w-full h-full rotate-90">
          <Link
            onClick={() => setIsActive(true)}
            to="home"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-center text-white w-full h-full hover:bg-[#111111] transition lg:py-5 px-2 py-[16px] lg:text-[22px] text-[15px]"
          >
            Home
          </Link>
        </div>
        <div className="flex w-full h-full rotate-90 ">
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-center text-white w-full h-full hover:bg-[#111111] transition lg:py-5 px-2 py-[16px] lg:text-[22px] text-[15px]"
          >
            About
          </Link>
        </div>
        <div className="flex w-full h-full rotate-90 ">
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-center text-white w-full h-full hover:bg-[#111111] transition lg:py-5 px-2 py-[16px] lg:text-[22px] text-[15px]"
          >
            Home
          </Link>
        </div>
        <div className="flex w-full h-full rotate-90 ">
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-center text-white w-full h-full hover:bg-[#111111] transition lg:py-5 px-2 py-[16px] lg:text-[22px] text-[15px]"
          >
            Home
          </Link>
        </div>
        <div className="flex w-full h-full rotate-90 ">
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-center text-white w-full h-full hover:bg-[#111111] transition lg:py-5 px-2 py-[16px] lg:text-[22px] text-[15px]"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
