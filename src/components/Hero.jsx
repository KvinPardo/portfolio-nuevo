import { Link } from "react-scroll";
import { heroData } from "../data";
import { BiChevronRight, BiSolidFilePdf } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CV from "/img/kevin-cv.pdf";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="container lg:pt-[300px] pt-[160px] pb-[250px] lg:pb-[400px] flex justify-center items-center w-full"
    >
      {heroData.map((data, index) => {
        const { name, title, subtitle, description } = data;
        return (
          <div key={index}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col w-full h-full"
            >
              <motion.h3
                variants={fadeIn("down")}
                className="lg:text-[60px] text-[30px] text-nav uppercase font-extrabold leading-10"
              >
                {name}
              </motion.h3>
              <motion.p
                variants={fadeIn("left")}
                className="text-nav lg:text-[40px] font-thin text-[22px]"
              >
                {title}{" "}
                <strong className="text-terciary uppercase font-bold">
                  {subtitle}
                </strong>
              </motion.p>
              <motion.p
                variants={fadeIn("right")}
                className="text-nav font-thin text-[20px]"
              >
                {description}
              </motion.p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView={"show"}
                className="flex flex-col lg:flex-row items-center gap-x-4 text-nav lg:w-[400px]"
              >
                <motion.div variants={fadeIn("left")} className="group">
                  <Link
                    to="projects"
                    smooth={true}
                    spy={true}
                    className="p-3 cursor-pointer lg:w-[180px] w-full mt-4 border-terciary bg-terciary border flex items-center justify-center group transition duration-300 text-primary"
                  >
                    Ver Proyectos{" "}
                    <BiChevronRight className="text-2xl group-hover:rotate-90 transition duration-300  text-primary" />
                  </Link>
                </motion.div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <motion.a
                    variants={fadeIn("left")}
                    href={CV}
                    download=""
                    className="hover:bg-terciary hover:text-primary p-3 cursor-pointer lg:w-[180px] w-full mt-4 border-terciary border flex items-center justify-center gap-x-2  group-hover:bg-terciary group-hover:text-primary "
                  >
                    Resumen CV <BiSolidFilePdf />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
