import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardData, BsChatSquareText } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center py-[13px]">
        <span className="text-white w-[45px] h-[45px] rounded-full bg-black flex justify-center items-center">
          K
        </span>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <div className="flex w-full h-full rotate-90">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-[20px] py-5 text-white w-full text-center h-full hover:bg-[#111111] hover:border-t-[1px] transition"
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
            className="cursor-pointer text-[20px] py-5 text-white w-full text-center h-full hover:bg-[#111111] hover:border-t-[1px] transition"
          >
            About
          </Link>
        </div>
        <div className="flex w-full h-full rotate-90 ">
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer text-[20px] py-5 text-white w-full text-center h-full hover:bg-[#111111] hover:border-t-[1px] transition"
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
            className="cursor-pointer text-[20px] py-5 text-white w-full text-center h-full hover:bg-[#111111] hover:border-t-[1px] transition"
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
            className="cursor-pointer text-[20px] py-5 text-white w-full text-center h-full hover:bg-[#111111] hover:border-t-[1px] transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
