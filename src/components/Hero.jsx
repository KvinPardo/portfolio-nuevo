import { Link } from "react-scroll";
import { heroData } from "../data";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:pt-[300px] pt-[160px] pb-[250px] lg:pb-[400px] flex justify-center items-center w-full"
    >
      {heroData.map((data, index) => {
        const { name, title, subtitle, description } = data;
        return (
          <div key={index}>
            <div className="flex flex-col">
              <h3 className="lg:text-[60px] text-[20px] text-nav uppercase font-extrabold">
                {name}
              </h3>
              <p className="text-nav lg:text-[40px]">
                {title} <strong className="text-terciary">{subtitle}</strong>
              </p>
              <p className="text-nav">{description}</p>
              <Link
                to="projects"
                smooth={true}
                spy={true}
                offset={-200}
                className="btn-lg cursor-pointer lg:w-[250px] w-full mt-4 border-terciary border flex items-center justify-center group hover:bg-terciary hover:text-primary transition duration-300"
              >
                Ver Proyectos{" "}
                <BiChevronRight className="text-2xl  group-hover:rotate-90 transition duration-300 group-hover:text-primary text-nav" />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
