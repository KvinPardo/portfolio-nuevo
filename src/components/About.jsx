import { FaGraduationCap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import { aboutData, education } from "../data";

const About = () => {
  return (
    <section id="about" className="pb-20">
      {aboutData.map((about, index) => {
        const { title, text1, text2, text3 } = about;
        return (
          <div key={index} className="lg:pb-40">
            <div className="flex items-center relative justify-between">
              <h3 className="lg:text-[60px] text-[20px] text-nav uppercase font-extrabold">
                {title}{" "}
                <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[60px] top-5 lg:left-[36%] left-[52%]"></span>
              </h3>

              <div className="h-[1px] bg-capitalice lg:w-[600px] w-[100px] text-right ml-6" />
            </div>

            {/* description */}
            <div className="flex flex-col lg:flex-row gap-y-4">
              <div className="flex-auto flex-col lg:w-1/2 my-4">
                <p className="font-light text-[15px] lg:text-[20px] my-2 text-white first-letter:bg-capitalice first-letter:rounded-lg first-line:uppercase  first-letter:text-3xl first-letter:p-2 first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
                  {text1}
                </p>
                <p className="font-light text-[15px] lg:text-[20px] my-2 text-white">
                  {text2}
                </p>
                <p className="font-light text-[15px] lg:text-[20px] text-white">
                  {text3}
                </p>
              </div>

              <div className="flex-auto lg:w-1/2 my-4 lg:px-12">
                <div className="w-full h-full">
                  {education.map((edu, index) => {
                    const { title, name, year } = edu;
                    return (
                      <div
                        key={index}
                        className="flex flex-col h-auto justify-start px-0 gap-y-4"
                      >
                        <div className="flex justify-between items-center w-full gap-y-12">
                          <h3 className="text-nav flex items-center gap-x-4">
                            <FaGraduationCap className="text-terciary" />
                            {name}
                          </h3>
                          <p className="text-nav">{year}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <h3 className="text-nav">{title}</h3>
                          <a href="">
                            <BiLinkExternal className="text-terciary" />
                          </a>
                        </div>
                        <div className="h-[1px] bg-capitalice w-full my-2 mt-5" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default About;
