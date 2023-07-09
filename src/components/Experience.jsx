import React from "react";
import { experienceFusion, experienceMuni } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="lg:my-32">
      <div className="flex items-center justify-between " id="">
        <h3 className="lg:text-[60px] text-[25px] text-nav uppercase font-extrabold relative">
          Experience
          <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[60px] top-6 lg:left-[370px] left-[155px]"></span>
        </h3>
        <div className="h-[1px] bg-capitalice lg:w-[600px] w-[120px]" />
      </div>
      <div className="py-8">
        {experienceFusion.map((exp) => {
          const { id, company, year, position, respons, tags } = exp;
          return (
            <div key={id}>
              {/* description */}
              <div className="w-full h-full lg:pt-12">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-[22px] text-white font-extrabold">
                    {company}
                  </h3>
                  <p className="text-nav lg:text-[20px] text-[14px] font-thin">
                    {year}
                  </p>
                </div>
                <div className="w-full h-full">
                  <h3 className="text-terciary lg:pt-2 font-bold text-[20px]">
                    {position}
                  </h3>
                  <p className="text-nav font-thin lg:text-[18px] text-[16px] leading-6 lg:pt-2">
                    {respons}
                  </p>
                </div>
                <div>
                  {tags.map((tag, id) => {
                    const {
                      first,
                      second,
                      third,
                      fourth,
                      fifth,
                      sixth,
                      seventh,
                      eighth,
                    } = tag;
                    return (
                      <ul
                        key={id}
                        className="flex justify-normal lg:gap-x-[20px] gap-x-[10px] w-full items-center pt-4 flex-wrap gap-y-4"
                      >
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {first}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {second}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {third}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {fourth}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {fifth}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {sixth}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {seventh}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300">
                          {eighth}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {experienceMuni.map((expMuni) => {
          const { id, company, year, position, respons, tagsMuni } = expMuni;
          return (
            <div key={id}>
              {/* description */}
              <div className="w-full h-full lg:pt-12">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-[22px] text-white font-extrabold">
                    {company}
                  </h3>
                  <p className="text-nav text-[20px] font-thin">{year}</p>
                </div>
                <div className="w-full h-full">
                  <h3 className="text-terciary lg:pt-2 font-bold text-[20px]">
                    {position}
                  </h3>
                  <p className="text-nav font-thin text-[18px] leading-6 lg:pt-2">
                    {respons}
                  </p>
                </div>
                <div>
                  {tagsMuni.map((tag, id) => {
                    const { firstMuni, secondMuni, thirdMuni, fourthMuni } =
                      tag;
                    return (
                      <ul
                        key={id}
                        className="flex justify-normal lg:gap-x-[20px] gap-x-[10px] w-full items-center pt-4 flex-wrap gap-y-4"
                      >
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {firstMuni}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {secondMuni}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {thirdMuni}
                        </li>
                        <li className="bg-capitalice text-nav px-3 py-2 hover:rounded-[10px] hover:bg-terciary hover:text-capitalice transition-all duration-300 text-[14px]">
                          {fourthMuni}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;