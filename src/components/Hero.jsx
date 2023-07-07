import React from "react";

const Hero = () => {
  return (
    <section className="section lg:pt-44" id="home">
      <div className="flex flex-col w-[850px] gap-y-4">
        <h3 className="text-[70px] font-extrabold text-white">Hola, Me LLamo Kevin.</h3>
        <p className="text-white text-[36px]">Soy Programador Analista y <strong className="text-green-500">Desarrollador Web</strong> </p>
        <span className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia quod id nam voluptas eum eos soluta dolores nemo sed maiores perferendis provident cum, ipsam consequatur omnis dolorum, similique est?</span>
      </div>
    </section>
  );
};

export default Hero;
