import React from "react";
import { navData } from "../data";
import { Link } from "react-scroll";

const NavMobile = () => {

  


  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        <li>
          <Link
            to="home"
            smooth={true}
            offset={0}
            duration={500}
            className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={0}
            duration={500}
            className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
          >
            Acerca de mí
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            offset={50}
            duration={500}
            className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
          >
            Experiencia
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            offset={50}
            duration={500}
            className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
          >
            Contacto
          </Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default NavMobile;
