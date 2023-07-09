import React, { useState } from "react";
import { navData } from "../data";
import { Link } from "react-scroll";

const Sidebar = () => {
  const { items } = navData;

  return (
    <div className="xl:flex hidden flex-col w-[60px] ">
      <div className="flex justify-center items-center py-[8px]">
        <span className="text-white lg:w-[45px] w-[40px] h-[45px] rounded-full bg-black flex justify-center items-center">
          K
        </span>
      </div>

      <nav className="h-full">
        <ul className="flex rotate-90 items-center">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.to}
                  name={item.name}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="text-nav cursor-pointer w-full px-4 flex justify-center items-center hover:text-terciary transition duration-300 py-[18px] h-full hover:bg-capitalice hover:border-t-2 hover:border-terciary"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
