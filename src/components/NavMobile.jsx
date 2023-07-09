import React, { useState } from "react";
import { navData } from "../data";
import { Link } from "react-scroll";
import Social from "./Social";
import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from 'react-icons/md'
import { BiLogoGmail, BiWindowClose } from "react-icons/bi";

const NavMobile = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="">
      <div
        onClick={handleClick}
        className="xl:hidden cursor-pointer p-2 text-2xl text-nav hover:text-terciary"
      >
        {!nav ? <CgMenuGridO /> : <MdClose />}
      </div>

      <div
        className={
          !nav
            ? "hidden transition-all duration-300 "
            : "absolute transition-all duration-300"
        }
      >
        <ul className="top-0 left-0 w-full h-screen bg-secondary flex flex-col justify-center items-center gap-y-2 uppercase fixed -z-10 transition-all duration-300">
          <li className=" text-nav py-6 text-xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-terciary transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="text-nav py-6 text-xl">
            <Link
              onClick={handleClick}
              offset={-100}
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-terciary transition duration-300"
            >
              Acerca de mí
            </Link>
          </li>
          <li className="text-nav py-6 text-xl">
            <Link
              onClick={handleClick}
              offset={0}
              to="experience"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-terciary transition duration-300"
            >
              Experiencia
            </Link>
          </li>
          <li className="text-nav py-6 text-xl">
            <Link
              onClick={handleClick}
              offset={-100}
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-terciary transition duration-300"
            >
              Proyectos
            </Link>
          </li>
          <li className="text-nav py-6 text-xl">
            <Link
              onClick={handleClick}
              offset={0}
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-terciary transition duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default NavMobile;
