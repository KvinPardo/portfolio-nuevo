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

const ExperienceItem = ({ exp }) => {
  const { company, position, year, respons, tags, tagsMuni } = exp;

  return (
    <div className="w-full h-full lg:pt-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="flex justify-between items-center w-full"
      >
        <motion.h3
          variants={fadeIn("right")}
          className="text-[22px] text-white font-extrabold"
        >
          {company}
        </motion.h3>
        <motion.p
          variants={fadeIn("left")}
          className="text-nav lg:text-[20px] text-[14px] font-thin"
        >
          {year}
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="w-full h-full"
      >
        <motion.h3
          variants={fadeIn("left")}
          className="text-terciary lg:pt-2 font-bold text-[20px]"
        >
          {position}
        </motion.h3>
        <motion.p
          variants={fadeIn("left")}
          className="text-nav font-thin lg:text-[18px] text-[16px] leading-6 lg:pt-2"
        >
          {respons}
        </motion.p>
      </motion.div>
      <motion.div variants={container} initial="hidden" whileInView={"show"}>
        {tags.map((tag, id) => {
          const {
            first,
            second,
            third,
            fourth,
            fifth,
            sixth,
            seventh,
            eighth,
          } = tag;
          return (
            <motion.ul
              key={id}
              variants={fadeIn("left")}
              className="flex justify-normal lg:gap-x-[20px] gap-x-[10px] w-full items-center pt-4 flex-wrap gap-y-4"
            >
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {first}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {second}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {third}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {fourth}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {fifth}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {sixth}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {seventh}
              </li>
              <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                {eighth}
              </li>
            </motion.ul>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ExperienceItem;
