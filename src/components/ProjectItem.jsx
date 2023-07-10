import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../variants";
import { AiFillGithub } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Tags from "./Tags";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const ProjectItem = ({ project }) => {
  const { image, title, description, tags } = project;

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className=""
      >
        <motion.div
          variants={fadeIn("left")}
          className="relative bg-capitalice rounded-[15px] group overflow-hidden"
        >
          <motion.img
            src={`${image}.jpg`}
            alt=""
            className="lg:px-20 px-8 lg:pt-20 pt-8 group-hover:scale-105 transition-all duration-500 origin-top-right "
          />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col w-full h-full p-4"
        >
          <div className="flex items-center justify-between w-full">
            <motion.h3
              variants={fadeIn("left")}
              className="text-nav lg:text-xl w-full"
            >
              {title}
            </motion.h3>
            <motion.div
              variants={fadeIn("left")}
              className="h-[1px] bg-capitalice lg:w-[550px] my-2 mt-5 w-[300px] mr-4"
            />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView={"show"}
              className="flex gap-x-4 mr-4"
            >
              <motion.a variants={fadeIn("left")} href="">
                <AiFillGithub className="text-2xl text-nav hover:text-terciary" />
              </motion.a>
              <motion.a variants={fadeIn("left")} href="">
                <RiLiveLine className="text-2xl text-nav hover:text-terciary" />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView={"show"}
            className=" "
          >
            {tags.map((tag, id) => (
              <Tags key={id} tag={tag} />
            ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView={"show"}
            className=""
          >
            <motion.p
              variants={fadeIn("left")}
              className="lg:text-[18px] text-nav"
            >
              {description}
            </motion.p>

            <motion.button
              variants={fadeIn("left")}
              className="btn-lg mt-4 border hover:border-terciary hover:bg-terciary hover:text-capitalice text-[14px]"
            >
              Leer más
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectItem;
