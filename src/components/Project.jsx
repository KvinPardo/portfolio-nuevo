import React from "react";
import Project1 from "/project1.jpg";
import { BsGithub } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <section
      id="projects"
      className="flex justify-center items-center h-auto w-full flex-col"
      name="projects"
    >
      <div className="flex gap-y-4 items-center w-full pl-14">
        <div className="h-[1px] bg-capitalice/95 w-full" />
        <div className="relative w-2/5">
          <h3 className="lg:text-[65px] font-extrabold text-white leading-[1] w-full lg:px-14">
            Proyectos
          </h3>
          <span className="bg-terciary absolute w-[18px] h-[18px] rounded-full lg:top-[50px] lg:right-[40px]"></span>
        </div>
      </div>

      <div className="container mx-auto py-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full lg:gap-x-12">
          <div className="relative">
            <div className="p-10 rounded-[20px] bg-capitalice relative h-[300px] overflow-hidden">
              <div className="relative ">
                <img src={Project1} alt="" className="w-full absolute top-20" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full lg:py-4">
              <div>
                <h3 className="lg:text-3xl text-nav">Paint.app</h3>
              </div>
              <div className="w-full bg-nav/20 mx-4">
                <div className="h-[1px] w-full" />
              </div>
              <div className="flex gap-x-5">
                <a href="">
                  <BsGithub className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
                <a href="">
                  <FiExternalLink className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
              </div>
            </div>

            <div className="">
              <p className="text-nav">
                A real-time coaching app for students learning to paint. This
                app is my baby, designed and built on my own.
                <a
                  href=""
                  className="border border-terciary flex items-center justify-center px-4 py-3 mt-3 w-[150px] text-terciary group hover:bg-terciary hover:text-capitalice transition-all hover:rounded-[10px]"
                >
                  Leer más{" "}
                  <BiChevronRight className="group-hover:translate-x-2 transition-all " />
                </a>
              </p>
            </div>

            <div className="flex justify-start items-center w-full lg:py-4 lg:gap-x-6">
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
            </div>
          </div>

          <div>
            <div className="p-10 lg:pb-0 rounded-[20px] bg-capitalice relative">
              <div className="">
                <img src={Project1} alt="" className="w-full p-12" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full lg:py-4">
              <div>
                <h3 className="lg:text-3xl text-nav">Paint.app</h3>
              </div>
              <div className="w-full bg-nav/20 mx-4">
                <div className="h-[1px] w-full" />
              </div>
              <div className="flex gap-x-5">
                <a href="">
                  <BsGithub className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
                <a href="">
                  <FiExternalLink className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
              </div>
            </div>

            <div className="">
              <p className="text-nav">
                A real-time coaching app for students learning to paint. This
                app is my baby, designed and built on my own.
                <a
                  href=""
                  className=" flex items-center justify-center px-4 py-3 mt-3 w-[150px] text-terciary group hover:bg-terciary hover:text-capitalice transition-all hover:rounded-[10px]"
                >
                  Leer más{" "}
                  <BiChevronRight className="group-hover:translate-x-2 transition-all" />
                </a>
              </p>
            </div>

            <div className="flex justify-start items-center w-full lg:py-4 lg:gap-x-6">
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
            </div>
          </div>

          <div className="lg:pt-12">
            <div className="p-10 lg:pb-0 rounded-[20px] bg-capitalice relative">
              <div className="">
                <img src={Project1} alt="" className="w-full p-12" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full lg:py-4">
              <div>
                <h3 className="lg:text-3xl text-nav">Paint.app</h3>
              </div>
              <div className="w-full bg-nav/20 mx-4">
                <div className="h-[1px] w-full" />
              </div>
              <div className="flex gap-x-5">
                <a href="">
                  <BsGithub className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
                <a href="">
                  <FiExternalLink className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
              </div>
            </div>

            <div className="">
              <p className="text-nav">
                A real-time coaching app for students learning to paint. This
                app is my baby, designed and built on my own.
                <a
                  href=""
                  className=" flex items-center justify-center px-4 py-3 mt-3 w-[150px] text-terciary group hover:bg-terciary hover:text-capitalice transition-all hover:rounded-[10px]"
                >
                  Leer más{" "}
                  <BiChevronRight className="group-hover:translate-x-2 transition-all" />
                </a>
              </p>
            </div>

            <div className="flex justify-start items-center w-full lg:py-4 lg:gap-x-6">
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
            </div>
          </div>

          <div className="lg:pt-12">
            <div className="p-10 lg:pb-0 rounded-[20px] bg-capitalice relative">
              <div className="">
                <img src={Project1} alt="" className="w-full p-12" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full lg:py-4">
              <div>
                <h3 className="lg:text-3xl text-nav">Paint.app</h3>
              </div>
              <div className="w-full bg-nav/20 mx-4">
                <div className="h-[1px] w-full" />
              </div>
              <div className="flex gap-x-5">
                <a href="">
                  <BsGithub className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
                <a href="">
                  <FiExternalLink className="w-[30px] h-[30px] text-capitalice hover:text-terciary transition" />
                </a>
              </div>
            </div>

            <div className="">
              <p className="text-nav">
                A real-time coaching app for students learning to paint. This
                app is my baby, designed and built on my own.
                <a
                  href=""
                  className=" flex items-center justify-center px-4 py-3 mt-3 w-[150px] text-terciary group hover:bg-terciary hover:text-capitalice transition-all hover:rounded-[10px]"
                >
                  Leer más{" "}
                  <BiChevronRight className="group-hover:translate-x-2 transition-all" />
                </a>
              </p>
            </div>

            <div className="flex justify-start items-center w-full lg:py-4 lg:gap-x-6">
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
              <div className="bg-terciary rounded-full p-1">
                <span className="  text-capitalice text-[14px]">#Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
