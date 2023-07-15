import { FaGraduationCap } from "react-icons/fa";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { aboutData } from "../data";

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
  return (
    <section
      className="lg:py-[200px] xl:pb-[160px] flex justify-center items-center h-full w-full"
      id="about"
    >
      <div className="container mx-auto h-full w-full p-2">
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
        <div className="flex justify-between items-start flex-col lg:flex-row w-full h-full">
          <motion.div
            className="flex-1 flex-col h-full"
            variants={container}
            initial="hidden"
            whileInView={"show"}
          >
            <motion.p
              variants={fadeIn("right")}
              className="font-light text-[15px] lg:text-[20px] my-4 text-white first-letter:bg-capitalice first-letter:rounded-lg first-letter:text-3xl first-letter:p-2 first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
            >
              Me llamo Kevin Pardo Veas, tengo 27 años, soy una persona
              entusiasta y apasionado por mi trabajo. Soy una persona altamente
              motivada, orientado a resultados y con una mentalidad proactiva.
              Me considero un solucionador de problemas creativo y analítico,
              capaz de abordar desafíos con una perspectiva innovadora.
            </motion.p>
            <motion.p
              variants={fadeIn("right")}
              className="font-light text-[15px] lg:text-[20px] my-4 text-nav"
            >
              Además, poseo excelentes habilidades de comunicación, tanto en
              forma escrita como verbal, lo que me permite colaborar eficazmente
              con equipos multidisciplinarios y transmitir ideas de manera clara
              y concisa.
            </motion.p>
            <motion.p
              variants={fadeIn("right")}
              className="font-light text-[15px] lg:text-[20px] my-4 text-nav"
            >
              Soy flexible y capaz de adaptarme rápidamente a entornos dinámicos
              y en constante cambio. Me encanta aprender y estar al tanto de las
              últimas tendencias y avances en mi campo. Siempre estoy dispuesto
              a adquirir nuevos conocimientos y habilidades para mejorar mi
              desempeño profesional.
            </motion.p>
            <motion.p
              variants={fadeIn("right")}
              className="font-light text-[15px] lg:text-[20px] my-4 text-nav"
            >
              Creo en el desarrollo continuo y estoy dispuesto a asumir nuevos
              desafíos para crecer profesionalmente.
            </motion.p>
          </motion.div>
          <motion.div
            className="lg:w-96 h-full lg:px-4 w-full "
            variants={container}
            initial="hidden"
            whileInView={"show"}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView={"show"}
              className="h-full flex-1 flex-col flex-wrap w-full lg:p-4"
            >
              <motion.h3
                variants={fadeIn("right")}
                className="flex items-center text-nav font-bold lg:text-[20px] gap-x-4"
              >
                <AiFillCode className="text-terciary" />
                Use to work
              </motion.h3>
              <motion.ul
                variants={fadeIn("left")}
                className="flex w-full h-full flex-wrap py-3"
              >
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  HTML
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  CSS
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  JavaScript
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  Boostrap
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  Tailwind CSS
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  React Js
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  WordPress
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  Elementor
                </li>
                <li className="text-[14px] p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  Woocomerce
                </li>
              </motion.ul>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView={"show"}
              className="h-full flex flex-col flex-wrap w-full lg:p-4"
            >
              <motion.h3
                variants={fadeIn("left")}
                className="flex items-center text-nav font-bold lg:text-[20px] gap-x-4"
              >
                <AiFillSmile className="text-terciary" />
                Use to fun
              </motion.h3>
              <motion.ul
                variants={fadeIn("right")}
                className="flex w-full h-full flex-wrap py-3"
              >
                <li className="p-1 bg-capitalice text-nav rounded-[10px] m-1 text-[14px] hover:bg-terciary hover:text-primary transition-all">
                  Youtube
                </li>
                <li className="p-1 bg-capitalice text-nav rounded-[10px] m-1 text-[14px] hover:bg-terciary hover:text-primary transition-all">
                  Udemy
                </li>
                <li className="p-1 bg-capitalice text-nav rounded-[10px] m-1 text-[14px] hover:bg-terciary hover:text-primary transition-all">
                  VS Code
                </li>
                <li className="p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  Context API
                </li>
                <li className="p-1 bg-capitalice text-nav rounded-[10px] m-1 hover:bg-terciary hover:text-primary transition-all">
                  React Router DOM
                </li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
