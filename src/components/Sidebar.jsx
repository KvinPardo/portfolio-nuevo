import React, { useState } from "react";
import { navData } from "../data";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineSchedule } from "react-icons/ai";
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineProject } from 'react-icons/ai'
import { BsPhoneVibrate } from 'react-icons/bs'

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="xl:flex hidden flex-col justify-between w-[60px] fixed h-screen bg-primary z-50">
      <div className="flex flex-col items-center gap-y-8 pt-4">
        <span className="bg-capitalice w-[20px] h-[20px] p-4 flex items-center justify-center rounded-full">
          K
        </span>
        <div>
          <ul className="flex flex-col w-full h-full gap-y-6">
            <li>
              <Link to="home">
                <AiOutlineHome className="w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="about">
                <AiOutlineSchedule className="w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="experience">
                <MdWorkOutline className="w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="projects">
                <AiOutlineProject className="w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
            <li>
              <Link to="contact">
                <BsPhoneVibrate className="w-[30px] h-[30px] text-capitalice  hover:text-nav hover:scale-110 transition-all duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
