import React from "react";
import { navData } from "../data";
import { Link } from "react-scroll";
import Social from "./Social";

const NavMobile = () => {
  return (
    <ul className=" top-0 left-0 w-full h-screen bg-secondary flex flex-col justify-center items-center gap-y-2 uppercase fixed -z-10 transition-all duration-300">
      <li className="text-nav py-6 text-xl">Home</li>
      <li className="text-nav py-6 text-xl">Acerca de mí</li>
      <li className="text-nav py-6 text-xl">Experiencia</li>
      <li className="text-nav py-6 text-xl">Proyectos</li>
      <li className="text-nav py-6 text-xl">Contacto</li>
    </ul>
    // <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
    //   <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
    //     <li>
    //       <Link
    //         to="home"
    //         smooth={true}
    //         offset={0}
    //         duration={500}
    //         className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
    //       >
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="about"
    //         smooth={true}
    //         offset={0}
    //         duration={500}
    //         className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
    //       >
    //         Acerca de mí
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="experience"
    //         smooth={true}
    //         offset={50}
    //         duration={500}
    //         className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
    //       >
    //         Experiencia
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="projects"
    //         smooth={true}
    //         offset={50}
    //         duration={500}
    //         className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
    //       >
    //         Proyectos
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="contact"
    //         smooth={true}
    //         offset={50}
    //         duration={500}
    //         className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
    //       >
    //         Contacto
    //       </Link>
    //     </li>
    //   </ul>
    //   <div></div>
    // </nav>
  );
};

export default NavMobile;
