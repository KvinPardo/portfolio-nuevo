import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail, BiWindowClose } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const [navMobile, setNavMobile] = useState(false);
  const [nav, setNav ] = useState(false)
  const handleClick = () => setNav(!nav)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  const menuVariants = {
    hidden: {
      x: "100%",
    },
    show: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  return (
    <header
      className={`${
        isActive ? "bg-primary" : "bg-none"
      } fixed left-0 right-0 z-20 max-w-[1920px] w-full mx-auto transition-all duration-300 h-[60px]`}
    >
      <div className="flex justify-between h-full lg:px-[100px] px-10 items-center w-full relative">
        <div className="xl:flex hidden gap-x-5">
          <a href="/" target="_blank">
            <BsGithub className="hover:text-terciary text-nav" />
          </a>
          <a href="/" target="_blank">
            <BsLinkedin className="hover:text-terciary text-nav" />
          </a>
          <a href="/" target="_blank">
            <BsWhatsapp className="hover:text-terciary text-nav" />
          </a>
        </div>
        <div className="xl:flex">
          <button className="bg-terciary p-2 px-4">Resumen</button>
        </div>

        <div
          onClick={ handleClick }
          className="xl:hidden cursor-pointer p-2 text-2xl text-nav hover:text-terciary"
        >
          {!nav ? <CgMenuGridO /> : <BiWindowClose/>}
        </div>

        <div
          className={!nav ? 'hidden' : 'absolute'}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
