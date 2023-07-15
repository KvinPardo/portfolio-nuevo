import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { education } from "../data";
import { FaExternalLinkAlt } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Education = () => {
  return (
    <section className="lg:py-[200px] py-32" id="education">
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
          Educación
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
        className="flex flex-col items-start w-full h-full py-1"
      >
        {education.map((edu, id) => {
          const { name, year, title, url } = edu;
          return (
            <motion.div
              variants={fadeIn("right")}
              className="w-full h-full mt-2 lg:mt-12 border-b-[1px] border-capitalice pb-5"
              key={id}
            >
              <div className="flex flex-row justify-between lg:items-center">
                <motion.h3
                  variants={fadeIn("right")}
                  className="lg:text-[16px] text-[16px] text-terciary font-bold"
                >
                  {name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("left")}
                  className="text-nav lg:text-[20px] text-[14px] font-thin"
                >
                  {year}
                </motion.p>
              </div>
              <div className="flex items-center gap-x-2 w-full h-full py-1">
                <motion.p variants={fadeIn("down")} className="text-nav">
                  {title}
                </motion.p>
                <motion.a
                  variants={fadeIn("left")}
                  href={url}
                  target="_blank"
                  className="group"
                >
                  <FaExternalLinkAlt className="text-nav w-[15px] group-hover:text-terciary transition-all group-hover:scale-125" />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="w-full h-full mt-2 lg:mt-12 "
      >
        <motion.div
          variants={fadeIn("right")}
          className="flex flex-row justify-between lg:items-center"
        >
          <motion.h3
            variants={fadeIn("right")}
            className="lg:text-[16px] text-[16px] text-terciary font-bold"
          >
            Instituto Profesional AIEP
          </motion.h3>
          <motion.p
            variants={fadeIn("left")}
            className="text-nav lg:text-[20px] text-[14px] font-thin"
          >
            2019 - 2022
          </motion.p>
        </motion.div>
        <div className="flex-1 w-full h-full py-1">
          <motion.p variants={fadeIn("left")} className="text-nav">
            Técnico en Programación y Análisis de Sistemas
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
