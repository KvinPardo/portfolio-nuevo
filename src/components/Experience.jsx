import React from "react";
import { experience } from "../data";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="lg:py-[200px] py-32 ">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="flex items-center justify-between "
        id=""
      >
        <div className="h-[1px] bg-capitalice lg:w-[620px] w-[120px]" />
        <motion.h3
          variants={fadeIn("left")}
          className="lg:text-[60px] text-[25px] text-nav uppercase font-extrabold relative pr-8"
        >
          Experience
          <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[60px] top-6 lg:left-[370px] left-[155px]"></span>
        </motion.h3>
      </motion.div>
      <div className="py-8">
        {experience.map((exp, id) => (
          <ExperienceItem key={id} exp={exp} />
        ))}
      </div>
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
          Municipalidad de Ñuñoa
        </motion.h3>
        <motion.p
          variants={fadeIn("left")}
          className="text-nav lg:text-[20px] text-[14px] font-thin"
        >
          2022
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
          Desarrollador FrontEnd
        </motion.h3>
        <motion.p
          variants={fadeIn("left")}
          className="text-nav font-thin lg:text-[18px] text-[16px] leading-6 lg:pt-2"
        >
          Encargado de mantención y creación de nuevas funcionalidades dentro
          del sitio web comunal.
        </motion.p>
      </motion.div>
      <motion.div variants={container} initial="hidden" whileInView={"show"}>
        <motion.ul 
          variants={fadeIn("left")}
          className="flex justify-normal lg:gap-x-[20px] gap-x-[10px] w-full items-center pt-4 flex-wrap gap-y-4">
          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
            HTML
          </li>
          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
            CSS
          </li>
          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
            WordPress
          </li>
          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
            Elementor
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Experience;
