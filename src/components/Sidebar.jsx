import React, { useState } from "react";
import { navData } from "../data";

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
        <ul className="flex my-12 rotate-90 items-center gap-x-5">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-nav cursor-pointer w-full flex justify-center items-center"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
