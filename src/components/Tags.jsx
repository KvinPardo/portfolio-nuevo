import { motion } from "framer-motion";
import React from "react";
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

const Tags = ({ tag }) => {
  const { firstTag, secondTag, thirdTag, fourthTag, fivethTag, vite } = tag;

  return (
    <motion.ul
      variants={fadeIn("left")}
      className="flex gap-x-4  h-full mt-3 text-center w-max lg:w-full"
    >
      <li className="text-nav bg-capitalice lg:p-2 py-[5px] px-[3px] rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary text-[14px]">
        {firstTag}
      </li>
      <li className="text-nav bg-capitalice lg:p-2 py-[5px] px-[3px] rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary text-[14px]">
        {secondTag}
      </li>
      <li className="text-nav bg-capitalice lg:p-2 py-[5px] px-[3px] rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary text-[14px]">
        {thirdTag}
      </li>
      <li className="text-nav bg-capitalice lg:p-2 py-[5px] px-[3px] rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary text-[14px]">
        {fourthTag}
      </li>
      <li className="text-nav bg-capitalice lg:p-2 py-[5px] px-[3px] rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary text-[14px]">
        {vite}
      </li>
    </motion.ul>
  );
};

export default Tags;
