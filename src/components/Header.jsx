import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { nav } from "../data";
import { BiCodeAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => setShowNav(!showNav);

  // scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-primary" : "bg-none"
      } fixed left-0 right-0 z-50 transition-all duration-300 py-4`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link
            to="home"
            className="cursor-pointer flex items-center text-nav text-[30px] gap-x-2 font-extrabold z-50 px-8 lg:px-0"
          >
            K<BiCodeAlt className="text-terciary w-6 h-6" />
          </Link>
          {/* NAV */}
          <ul
            className={`${
              showNav ? "left-0" : "-left-full"
            } flex flex-col justify-center items-center fixed top-0 text-white text-xl capitalize w-[280px] h-full bg-primary gap-y-8 duration-200 transition-all`}
          >
            {nav.map((item, index) => {
              return (
                <Link
                  onClick={handleClick}
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={1000}
                  offset={item.offset}
                  className="text-nav hover:text-terciary transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
          {/* nav trigger */}
          <div onClick={() => setShowNav(!showNav)} className="cursor-pointer">
            {showNav ? (
              <MdClose className="w-7 h-7 text-terciary" />
            ) : (
              <CgMenuGridO className="w-7 h-7 text-terciary" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
