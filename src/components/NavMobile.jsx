import React from "react";
import { navData } from "../data";

const NavMobile = () => {
  const { items } = navData;

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.href}
                className="text-2xl font-thin uppercase text-nav hover:text-terciary transition duration-300"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div></div>
    </nav>
  );
};

export default NavMobile;
