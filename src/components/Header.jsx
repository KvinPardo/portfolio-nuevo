import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  const header = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  return (
    <header
      className={`${
        isActive ? "bg-primary" : "bg-none"
      } fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300 h-[60px]`}
    >
      <div className="flex justify-between h-full lg:px-[100px] px-10 items-center w-full relative">
        <motion.div
          variants={header}
          initial="hidden"
          whileInView={"show"}
          className="xl:flex hidden gap-x-5"
        >
          <motion.a
            variants={fadeIn("down")}
            href="https://github.com/KvinPardo"
            target="_blank"
          >
            <BsGithub className="hover:text-terciary text-nav" />
          </motion.a>
          <motion.a
            variants={fadeIn("down")}
            href="https://www.linkedin.com/in/kevinpardoveas/"
            target="_blank"
          >
            <BsLinkedin className="hover:text-terciary text-nav" />
          </motion.a>
          <motion.a
            variants={fadeIn("down")}
            href="https://api.whatsapp.com/send?phone=56990914436"
            target="_blank"
          >
            <BsWhatsapp className="hover:text-terciary text-nav" />
          </motion.a>
        </motion.div>
        <motion.div
          variants={header}
          initial="hidden"
          whileInView={"show"}
          className="lg:flex"
        >
          <motion.button
            variants={fadeIn("left")}
            href="kevin-cv.pdf"
            download
            target="_blank"
            className="bg-nav p-2 px-4 hover:bg-terciary  hover:text-primary cursor-pointer"
          >
            Resumen
          </motion.button>
        </motion.div>

        <div className="lg:hidden ">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
