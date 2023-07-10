import { Link } from "react-scroll";
import { heroData } from "../data";
import { BiChevronRight } from "react-icons/bi";
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
              className="flex flex-col"
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
                {title} <strong className="text-terciary ">{subtitle}</strong>
              </motion.p>
              <motion.p
                variants={fadeIn("right")}
                className="text-nav font-thin text-[20px]"
              >
                {description}
              </motion.p>
              <motion.div variants={fadeIn("left")}>
                <Link
                  to="projects"
                  smooth={true}
                  spy={true}
                  className="btn-lg cursor-pointer lg:w-[250px] w-full mt-4 border-terciary border flex items-center justify-center group hover:bg-terciary hover:text-primary transition duration-300"
                >
                  Ver Proyectos{" "}
                  <BiChevronRight className="text-2xl  group-hover:rotate-90 transition duration-300 group-hover:text-primary text-nav" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
