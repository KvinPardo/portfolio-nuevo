import React from "react";
import { projectsData } from "../data";
import { AiFillGithub } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";

const Project = () => {
  return (
    <section id="projects" className="px-12 lg:pb-40">
      <div className="flex items-center relative justify-between lg:pb-12">
        <div className="h-[1px] bg-capitalice lg:w-[600px] w-[100px] ml-6" />
        <h3 className="lg:text-[60px] text-[20px] text-nav uppercase font-extrabold mr-20 relative">
          Proyectos
          <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[55px] top-4 lg:left-[360px] left-10"></span>
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:grid-cols-2 w-full h-full gap-x-12 lg:gap-y-20 gap-y-10">
        {projectsData.map((project, index) => {
          const { image, title, description, tags } = project;
          return (
            <div key={index} className="">
              <div className="">
                <div className="relative bg-capitalice rounded-[15px] group overflow-hidden">
                  <img
                    src={`${image}.jpg`}
                    alt=""
                    className="lg:px-20 px-8 lg:pt-20 pt-8 group-hover:scale-105 transition-all duration-500 origin-top-right "
                  />
                </div>
                <div className="flex flex-col w-full h-full p-4">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-nav lg:text-3xl">{title}</h3>
                    <div className="h-[1px] bg-capitalice lg:w-[350px] my-2 mt-5" />
                    <div className="flex gap-x-4 mr-4">
                      <a href="">
                        <AiFillGithub className="text-2xl text-nav hover:text-terciary" />
                      </a>
                      <a href="">
                        <RiLiveLine className="text-2xl text-nav hover:text-terciary" />
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    {tags.map((tag, index) => {
                      console.log(tags);
                      const { firstTag, secondTag, thirdTag, fourthTag } = tag;
                      return (
                        <ul
                          key={index}
                          className="flex justify-between w-full lg:py-5"
                        >
                          <li className="text-nav text-[16px] bg-capitalice p-2 rounded-[10px] py-1 hover:bg-terciary transition-all duration-300 hover:text-primary">
                            #{firstTag}
                          </li>
                          <li className="text-nav text-[16px] bg-capitalice p-2 rounded-[10px] py-1 hover:bg-terciary transition-all duration-300 hover:text-primary">
                            #{secondTag}
                          </li>
                          <li className="text-nav text-[16px] bg-capitalice p-2 rounded-[10px] py-1 hover:bg-terciary transition-all duration-300 hover:text-primary">
                            #{thirdTag}
                          </li>
                          <li className="text-nav text-[16px] bg-capitalice p-2 rounded-[10px] py-1 hover:bg-terciary transition-all duration-300 hover:text-primary">
                            #{fourthTag}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                  <div className="">
                    <p className="lg:text-[18px] text-nav">{description}</p>
                    <button>Leer más</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
