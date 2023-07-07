import React from "react";

const Project = () => {
  return (
    <section id="projects" className="h-screen">
      <div className="flex gap-y-4 items-center w-full pr-4">
        <div className="h-[1px] bg-capitalice/95 w-full" />
        <div className="relative w-2/5">
          <h3 className="lg:text-[65px] font-extrabold text-white leading-[1] w-full lg:px-14">
            Proyectos
          </h3>
          <span className="bg-terciary absolute w-[18px] h-[18px] rounded-full top-[50px] right-[-10px]"></span>
        </div>
      </div>
    </section>
  );
};

export default Project;
