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
  const { firstTag, secondTag, thirdTag, fourthTag } = tag;

  return (
    <motion.ul
      variants={fadeIn("left")}
      className="flex gap-x-4 w-full h-full mt-3"
    >
      <li className="text-nav bg-capitalice p-2 rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary">
        {firstTag}
      </li>
      <li className="text-nav bg-capitalice p-2 rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary">
        {secondTag}
      </li>
      <li className="text-nav bg-capitalice p-2 rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary">
        {thirdTag}
      </li>
      <li className="text-nav bg-capitalice p-2 rounded-[10px] hover:bg-terciary transition-all duration-300 hover:text-primary">
        {fourthTag}
      </li>
    </motion.ul>
  );
};

export default Tags;
