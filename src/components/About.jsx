import { FaGraduationCap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { aboutData, education } from "../data";

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

const About = () => {
  // destructure about
  // console.log(aboutData);

  return (
    <section
      className="lg:py-[200px] xl:pb-[160px] flex justify-center items-center h-full w-full"
      id="about"
    >
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          className="flex items-center relative justify-between"
        >
          <motion.h3
            variants={fadeIn("down")}
            className="lg:text-[60px] text-[22px] text-nav uppercase font-extrabold"
          >
            Acerca de mí
            <motion.span
              variants={fadeIn("left")}
              className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[60px] top-5"
            ></motion.span>
          </motion.h3>
          <motion.div
            variants={fadeIn("down")}
            className="h-[1px] bg-capitalice lg:w-[620px] w-[120px]"
          />
        </motion.div>

        <div className="flex justify-center items-center h-full w-full flex-col lg:flex-row">
          {aboutData.map((about, index) => {
            const { text1, text2, text3, text4 } = about;

            return (
              <div key={index} className="flex flex-col lg:flex-row">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex-col justify-center items-center w-full h-full"
                >
                  <motion.p
                    variants={fadeIn("right")}
                    className="font-light text-[15px] lg:text-[20px] my-4 text-white first-letter:bg-capitalice first-letter:rounded-lg first-letter:text-3xl first-letter:p-2 first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
                  >
                    {text1}
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left")}
                    className="font-light text-[15px] lg:text-[20px] my-4 text-nav"
                  >
                    {text2}
                  </motion.p>
                  <motion.p
                    variants={fadeIn("right")}
                    className="font-light text-[15px] lg:text-[20px] my-4 text-nav"
                  >
                    {text3}
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left")}
                    className="font-light text-[15px] lg:text-[20px] my-4 text-nav"
                  >
                    {text4}
                  </motion.p>
                </motion.div>
              </div>
            );
          })}

          <div className=" my-4 lg:px-12 w-full">
            {education.map((edu, index) => {
              const { name, year, title } = edu;
              return (
                <div
                  key={index}
                  className="flex flex-col h-full justify-start px-0 lg:gap-y-4 w-full"
                >
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView={"show"}
                    className="flex justify-between items-center w-full gap-y-12"
                  >
                    <motion.h3
                      variants={fadeIn("right")}
                      className="text-nav flex items-center gap-x-4 text-[14px] lg:text-[18px]"
                    >
                      <FaGraduationCap className="text-terciary" />
                      {name}
                    </motion.h3>
                    <motion.p
                      variants={fadeIn("left")}
                      className="text-nav text-[15px]"
                    >
                      {year}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView={"show"}
                    className="flex justify-between items-center"
                  >
                    <motion.h3
                      variants={fadeIn("right")}
                      className="text-nav text-[14px]"
                    >
                      {title}
                      <span></span>
                    </motion.h3>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right")}
                    className="h-[1px] bg-capitalice w-full my-2 mt-5"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    // <div key={index} className="lg:pb-40">
    //   <div className="flex items-center relative justify-between">

    //     <div className="h-[1px] bg-capitalice lg:w-[600px] w-[100px] text-right ml-6" />
    //   </div>

    //   {/* description */}
    //   <div className="flex flex-col lg:flex-row gap-y-4">
    //     <div className="flex-auto flex-col lg:w-1/2 my-4">
    //       <p className="font-light text-[15px] lg:text-[20px] my-2 text-white first-letter:bg-capitalice first-letter:rounded-lg first-line:uppercase  first-letter:text-3xl first-letter:p-2 first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    //         {text1}
    //       </p>
    //       <p className="font-light text-[15px] lg:text-[20px] my-2 text-white">
    //         {text2}
    //       </p>
    //       <p className="font-light text-[15px] lg:text-[20px] text-white">
    //         {text3}
    //       </p>
    //     </div>

    //     <div className="flex-auto lg:w-1/2 my-4 lg:px-12">
    //       <div className="w-full h-full">
    //         {education.map((edu, index) => {
    //           const { title, name, year } = edu;
    //           return (
    //             <div
    //               key={index}
    //               className="flex flex-col h-auto justify-start px-0 lg:gap-y-4"
    //             >
    //               <div className="flex justify-between items-center w-full gap-y-12">
    //                 <h3 className="text-nav flex items-center gap-x-4 text-[14px]">
    //                   <FaGraduationCap className="text-terciary" />
    //                   {name}
    //                 </h3>
    //                 <p className="text-nav text-[15px]">{year}</p>
    //               </div>
    //               <div className="flex justify-between items-center">
    //                 <h3 className="text-nav text-[14px]">{title}</h3>
    //                 <a href="">
    //                   <BiLinkExternal className="text-terciary" />
    //                 </a>
    //               </div>
    //               <div className="h-[1px] bg-capitalice w-full my-2 mt-5" />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
