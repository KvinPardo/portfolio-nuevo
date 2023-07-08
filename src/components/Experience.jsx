import React from "react";

const Experience = () => {
  return (
    <section className="flex justify-center items-center h-full w-full flex-col" id="experience">
      <div className="flex gap-y-4 items-center w-full pr-4">
        <div className="relative w-2/5">
          <h3 className="lg:text-[65px] text-[40px] font-extrabold text-white leading-[1] w-full lg:pr-12">
            Experience
          </h3>
          <span className="bg-terciary absolute w-[18px] h-[18px] rounded-full top-[50px] right-[30px]"></span>
        </div>
        <div className="h-[1px] bg-capitalice/95 w-full" />
      </div>

      <div className="container mx-auto mt-20 flex flex-col gap-y-2">
        <div>
          <div className="flex justify-between">
            <h3 className="text-[20px] font-extrabold text-nav">
              Fusión Agency
            </h3>
            <p className="text-terciary text-[14px] lg:text-base">2023 </p>
          </div>
          <div className="flex justify-between">
            <h3 className="lg:text-[20px] text-[16px] font-semibold text-terciary ">
              Desarrollador FrontEnd
            </h3>
            <p className="text-nav">Chile, Perú</p>
          </div>
          <div className="">
            <p className="lg:text-[20px] text-[15px]  font-thin text-nav">
              Encargado del desarrollo y mantención de sitios web, ecommerce y
              landing pages de clientes, tanto en Chile y en Perú, como
              regionales.
            </p>
          </div>
          <div className="flex gap-x-7 gap-y-4 lg:mt-3 mt-4 flex-wrap">
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              HTML
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              CSS
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              Boostrap
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              JavaScript
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              WordPress
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              Elementor
            </span>
          </div>
          <div className="h-[1px] bg-capitalice/95 w-full mt-8" />
        </div>

        <div className="lg:mt-8">
          <div className="flex justify-between">
            <h3 className="text-[20px] font-extrabold text-nav">
              Municipalidad de Ñuñoa
            </h3>
            <p className="text-terciary">2022</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[20px] font-semibold text-terciary">
              Desarrollador FrontEnd
            </h3>
            <p className="text-nav">Chile</p>
          </div>
          <div className="">
            <p className="text-[20px] font-thin text-nav">
              Encargado de mantención y creación de nuevas funcionalidades
              dentro del sitio web comunal
            </p>
          </div>
          <div className="flex gap-x-7 lg:mt-3 flex-wrap">
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              HTML
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              CSS
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              JavaScript
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              WordPress
            </span>
            <span className="bg-capitalice text-nav px-2 rounded-[10px] py-1">
              Elementor
            </span>
          </div>
          <div className="h-[1px] bg-capitalice/95 w-full mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
