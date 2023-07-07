import React from "react";
import {
  AiFillCode,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiFillGithub,
} from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const About = () => {
  return (
    <section className="h-screen" id="about">
      <div className="flex gap-y-4 items-center w-full pl-14">
        <div className="relative lg:w-2/5">
          <h3 className="lg:text-[65px] text-[40px] font-extrabold text-white leading-[1] w-full">
            Acerca de mí
          </h3>
          <span className="bg-terciary absolute w-[18px] h-[18px] rounded-full top-[45px] right-[40px]"></span>
        </div>

        <div className="h-[1px] bg-capitalice/95 lg:w-3/5" />
      </div>

      <div className="flex flex-col h-full lg:flex-row w-full justify-between items-start lg:mt-12">
        <div className="lg:w-2/3 flex flex-col gap-y-5 items-start pl-[55px] pt-5">
          <p className="font-light text-[18px] lg:text-[20px] text-white first-letter:bg-capitalice first-letter:rounded-lg first-line:uppercase  first-letter:text-3xl first-letter:p-2 first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job.
          </p>
          <p className="font-light text-[16px] lg:text-[20px] text-white">
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job.
          </p>
          <p className="font-light text-[16px] lg:text-[20px] text-white">
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job.
          </p>
          <p className="font-light text-[16px] lg:text-[20px] text-white">
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job.
          </p>
          <div className="flex items-center w-full gap-x-8 ">
            <button className="p-5 text-terciary flex items-center gap-x-2 text-center hover:bg-terciary group-hover:text-primary font-semibold  group hover:text-primary hover:rounded-[10px] transition-all duration-500">
              Redes Sociales{" "}
              <FiChevronRight className="group-hover:translate-x-2 transition" />
            </button>
            <a href="">
              <AiFillLinkedin className="w-[25px] h-[25px] hover:text-terciary text-white" />
            </a>
            <a href="">
              <AiOutlineWhatsApp className="w-[25px] h-[25px] hover:text-terciary text-white" />
            </a>
            <a href="">
              <AiFillGithub className="w-[25px] h-[25px] hover:text-terciary text-white" />
            </a>
            <a href=""></a>
          </div>
        </div>
        <div className="lg:w-1/3 lg:px-12">
          <div className="flex flex-col justify-end h-full">
            <h3 className="text-white font-bold text-[20px] flex items-center gap-x-4">
              <AiFillCode className="text-terciary w-[25px] h-[25px]" /> Lo que
              he usado
            </h3>
            <div className="flex flex-wrap w-full h-full gap-y-4 lg:pt-8 gap-x-4">
              <span className="bg-capitalice text-white lg:px-5 py-2 rounded-full">
                HTML
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                CSS
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                React Js
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Boostrap
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                WordPress
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Ecommerce
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Elementor
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                MySQL
              </span>
            </div>
          </div>

          <div className="lg:pt-12">
            <h3 className="text-white font-bold text-[20px] flex items-center gap-x-4">
              <AiFillCode className="text-terciary w-[25px] h-[25px]" /> Lo que
              he usado
            </h3>
            <div className="flex flex-wrap w-full h-full gap-y-4 lg:pt-8 gap-x-4">
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                HTML
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                CSS
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                React Js
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Boostrap
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                WordPress
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Ecommerce
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                Elementor
              </span>
              <span className="bg-capitalice text-white px-5 py-2 rounded-full">
                MySQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
