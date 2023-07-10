import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
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

const Contact = () => {
  return (
    <section
      id="contact"
      className="lg:py-[100px] py-[100px] pb-[100px] xl:pb-[300px] "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col justify-center items-center py-20"
      >
        <motion.h3
          variants={fadeIn("left")}
          className="lg:text-[70px] text-[40px] font-extrabold text-nav uppercase relative"
        >
          Contact{" "}
          <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[70px] top-10 lg:left-[335px] left-[200px]"></span>
        </motion.h3>
        <motion.p
          variants={fadeIn("right")}
          className="text-nav text-[16px] lg:text-[20px] font-thin text-center lg:px-36"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          ducimus laborum ab, labore placeat eius minus mollitia consectetur
          esse tenetur provident eveniet dolore ex est sunt natus voluptate,
          fugiat aspernatur.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          className="flex gap-x-4 flex-wrap items-center justify-center mt-4"
        >
          <motion.a 
            variants={fadeIn("up")}
            href="https://api.whatsapp.com/send?phone=56990914436"
            className="flex-1 text-nav hover:text-terciary flex gap-x-4 items-center justify-center"
          >
            <AiOutlineWhatsApp className="text-[20px]" />
            Whatsapp
          </motion.a>
          <motion.a 
            variants={fadeIn("up")}
            href="mailto:kevin.pardov26@gmail.com"
            className="flex-1 text-nav hover:text-terciary flex gap-x-4 items-center justify-center"
          >
            <AiOutlineMail className="text-[20px]" />
            kevin.pardov26@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
