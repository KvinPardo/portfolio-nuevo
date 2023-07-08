import { Link } from "react-scroll";
import { heroData } from "../data";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center h-screen w-full"
      id="home"
    >
      <div className="flex flex-col lg:w-[850px] gap-y-4 items-start w-full">
        {heroData.map((hero, index) => {
          const { title, subtitle, subtitle2, description } = hero;
          return (
            <div key={index}>
              <h3 className="lg:text-[70px] text-[45px] font-extrabold text-white leading-[1]">
                {title}
              </h3>
              <p className="text-white lg:text-[32px] text-[20px]">
                {subtitle}
                <strong className="text-terciary"> {subtitle2}</strong>
              </p>
              <span className="text-white font-light text-[18px]">
                {description}
              </span>

              <Link
                to="projects"
                smooth={true}
                spy={true}
                offset={-200}
                className="btn-lg w-[200px] flex justify-center items-center border-terciary border mt-5 group hover:bg-terciary hover:text-capitalice duration-300 transition cursor-pointer"
              >
                Ver Proyectos
                <BiChevronRight className="text-2xl flex items-center justify-center transition-all duration-300 group-hover:rotate-90 text-nav group-hover:text-primary" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

{
  /* <h3 className="lg:text-[70px] text-[45px] font-extrabold text-white leading-[1]">
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
        </button> */
}
