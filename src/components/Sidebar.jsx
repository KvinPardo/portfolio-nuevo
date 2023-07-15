import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiFillSchedule, AiOutlineHome, AiOutlineSchedule } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { IoSchoolSharp } from "react-icons/io5";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Sidebar = () => {
  return (
    <div className="xl:flex hidden flex-col justify-between w-[60px] fixed h-screen bg-primary z-50">
      <div className="flex flex-col items-center gap-y-8 pt-4">
        <span className="bg-capitalice w-[20px] h-[20px] p-4 flex items-center justify-center rounded-full">
          <strong className="text-nav">K</strong>
        </span>
        <motion.div variants={container} initial="hidden" whileInView={"show"}>
          <motion.ul className="flex flex-col w-full h-full gap-y-6">
            <motion.li variants={fadeIn("right")}>
              <Link to="home" smooth={true} duration={1000}>
                <AiOutlineHome className=" cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link to="about" smooth={true} duration={1000}>
                <AiFillSchedule className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link to="education" smooth={true} duration={1000}>
                <IoSchoolSharp className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link to="experience" smooth={true} duration={1000}>
                <MdWorkOutline className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link to="projects" smooth={true} duration={1000}>
                <AiOutlineProject className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link to="contact" smooth={true} duration={1000}>
                <BsPhoneVibrate className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
