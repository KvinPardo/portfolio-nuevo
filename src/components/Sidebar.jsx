import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AiFillSchedule,
  AiOutlineHome,
  AiOutlineSchedule,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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
          <motion.ul
            variants={fadeIn("right")}
            className="flex flex-col w-full h-full gap-y-6"
          >
            <Link
              variants={container}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                duration={1000}
              >
                <AiOutlineHome className=" cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </Link>
            <motion.li variants={fadeIn("right")}>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                duration={1000}
              >
                <AiFillSchedule className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link
                to="experience"
                activeClass="active"
                smooth={true}
                duration={1000}
              >
                <MdWorkOutline className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link
                to="projects"
                activeClass="active"
                smooth={true}
                duration={1000}
              >
                <AiOutlineProject className="cursor-pointer w-[30px] h-[30px] text-nav  hover:text-capitalice hover:scale-110 transition-all duration-300" />
              </Link>
            </motion.li>
            <motion.li variants={fadeIn("right")}>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                duration={1000}
              >
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
