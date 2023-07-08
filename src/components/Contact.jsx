import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="flex justify-center items-center w-full flex-col"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center w-full pr-4 gap-y-3">
        <div className="relative">
          <h3 className="lg:text-[110px] text-[60px] font-extrabold text-nav text-center leading-[1] w-full lg:pr-12">
            Contact
          </h3>
          <span className="bg-terciary absolute w-[18px] h-[18px] rounded-full top-[85px] right-[25px]"></span>
        </div>
        <div className="max-w-[800px] flex flex-col w-full">
          <p className="text-nav text-center font-thin text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            adipisci excepturi nostrum voluptas temporibus sapiente aperiam
            soluta cupiditate. Eaque adipisci necessitatibus illum ipsam. Quasi
            aspernatur reiciendis repellat illo, nulla iure?
          </p>

          <div className="flex items-center justify-center gap-x-6 lg:mt-4">
            <div className="">
              <a
                href=""
                className="lg:text-[20px] text-center flex items-center text-terciary gap-x-4"
              >
                <BsWhatsapp />
                Whatsapp
              </a>
              <a
                href=""
                className="lg:text-[20px] flex items-center text-nav gap-x-4"
              >
                <AiOutlineMail />
                kevin.pardov26@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
