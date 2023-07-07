import React from "react";

const Hero = () => {
  return (
    <section className="h-screen lg:pt-[200px] lg:px-18 lg:py-12 py-[100px] pl-14" id="home">
      <div className="flex flex-col lg:w-[850px] gap-y-4 items-start w-full">
        <h3 className="lg:text-[70px] text-[45px] font-extrabold text-white leading-[1]">
          Hola, me llamo Kevin.
        </h3>
        <p className="text-white lg:text-[32px] text-[20px]">
          Soy Programador Analista y{" "}
          <strong className="text-terciary font-extrabold">Desarrollador Web</strong>{" "}
        </p>
        <span className="text-white font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          mollitia quod id nam voluptas eum eos soluta dolores nemo sed maiores
          perferendis provident cum, ipsam consequatur omnis dolorum, similique
          est?
        </span>
        <button className="border-primary text-primary px-6 py-3 bg-[#0AFF9D] rounded-[8px] mt-3 font-semibold">
          Ver proyectos
        </button>
      </div>
    </section>
  );
};

export default Hero;
