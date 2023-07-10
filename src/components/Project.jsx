import React from "react";
import { projectsData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectItem from "./ProjectItem";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Project = () => {
  return (
    <section id="projects" className="lg:py-[100px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="flex items-center relative justify-between mt-20"
      >
        <motion.h3
          variants={fadeIn("right")}
          className="lg:text-[60px] text-[25px] text-nav uppercase font-extrabold lg:mr-20 mr-5 relative"
        >
          Proyectos
          <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[55px] top-6 lg:left-[360px] left-[150px]"></span>
        </motion.h3>
        <motion.div
          variants={fadeIn("left")}
          className="h-[1px] bg-capitalice lg:w-[600px] w-[200px] ml-6"
        />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="grid lg:grid-cols-2 grid-cols-1 sm:grid-cols-2 w-full h-full gap-x-12 lg:gap-y-8 pt-4 gap-y-10"
      >
        {projectsData.map((project, id) => (
          <ProjectItem key={id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
