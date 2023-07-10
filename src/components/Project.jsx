import React from "react";
import { projectsData } from "../data";
import { AiFillGithub } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";
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
        {projectsData.map((project, index) => {
          const { image, title, description, tags } = project;
          return (
            <div key={index} className="">
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
                  <motion.div className="flex">
                    {tags.map((tag, index) => {
                      // console.log(tags);
                      const { firstTag, secondTag, thirdTag, fourthTag } = tag;
                      return (
                        <motion.ul
                          variants={fadeIn("left")}
                          key={index}
                          className="flex lg:justify-between flex-wrap gap-x-2 gap-y-3 w-full lg:py-5 py-3"
                        >
                          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                            {firstTag}
                          </li>
                          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                            {secondTag}
                          </li>
                          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                            {thirdTag}
                          </li>
                          <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                            {fourthTag}
                          </li>
                        </motion.ul>
                      );
                    })}
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
                      className="btn-lg mt-4 border hover:border-terciary hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]"
                    >
                      Leer más
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Project;
