import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="lg:py-[100px] xl:pb-[300px] ">
      <div className="flex flex-col justify-center items-center py-20">
        <h3 className="lg:text-[70px] text-[40px] font-extrabold text-nav uppercase relative">
          Contact{" "}
          <span className="bg-terciary absolute lg:w-[15px] lg:h-[15px] w-[8px] h-[8px] rounded-full lg:top-[70px] top-10 lg:left-[335px] left-[200px]"></span>
        </h3>
        <p className="text-nav text-[16px] lg:text-[20px] font-thin text-center lg:px-36">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          ducimus laborum ab, labore placeat eius minus mollitia consectetur
          esse tenetur provident eveniet dolore ex est sunt natus voluptate,
          fugiat aspernatur.
        </p>
        <div className="flex gap-x-4 flex-wrap items-center justify-center mt-4">
          <a
            href=""
            className="flex-1 text-nav hover:text-terciary flex gap-x-4 items-center justify-center"
          >
            <AiOutlineWhatsApp className="text-[20px]" />
            Whatsapp
          </a>
          <a
            href="mailto:kevin.pardov26@gmail.com"
            className="flex-1 text-nav hover:text-terciary flex gap-x-4 items-center justify-center"
          >
            <AiOutlineMail className="text-[20px]" />
            kevin.pardov26@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
