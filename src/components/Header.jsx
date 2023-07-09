import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-primary" : "bg-none"
      } fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300 h-[60px]`}
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
        <div className=" xl:flex">
          <button className="bg-terciary p-2 px-4">Resumen</button>
        </div>
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden cursor-pointer transition ease-out duration-300"
        >
          <CgMenuGridO
            className={`${
              navMobile ? "text-terciary" : "text-nav"
            } text-[25px]`}
          />
        </div>
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} 
          ${
            isActive ? "top-0" : "top-0"
          } fixed bg-primary w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
