import React, { useState } from "react";
import { navData } from "../data";
import { Link } from "react-scroll";
import { AiFillSchedule, AiOutlineHome, AiOutlineSchedule } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const { to, name } = navData;

  return (
    <div className="xl:flex hidden flex-col justify-between w-[60px] fixed h-screen bg-primary z-50">
      <div className="flex flex-col items-center gap-y-8 pt-4">
        <span className="bg-capitalice w-[20px] h-[20px] p-4 flex items-center justify-center rounded-full">
          <strong className="text-nav">K</strong>
        </span>
        <div>
          <ul className="flex flex-col w-full h-full gap-y-6">
            <li>
              <Link to="home" smooth={true} offset={0} duration={500} spy={true}>
                <AiOutlineHome className="cursor-pointer w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={0} duration={500} spy={true}>
                <AiFillSchedule className="cursor-pointer w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} offset={0} duration={500} spy={true}>
                <MdWorkOutline className="cursor-pointer w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={0} duration={500} spy={true}>
                <AiOutlineProject className="cursor-pointer w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={0} duration={500} spy={true}>
                <BsPhoneVibrate className="cursor-pointer w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
