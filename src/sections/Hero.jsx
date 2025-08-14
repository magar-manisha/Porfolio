import { useRef } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const linksRef = useRef([]);
  return (
    <section id="home" className="flex flex-col min-h-screen py-7 md:px-7">
      {/* header */}
      <div className="flex text-lg justify-between items-center text-text-light w-full px-7 md:px-0">
        <p>@magarmanisha</p>
        <div className="gap-x-5 flex flex-col md:flex-row">
          {["service", "work", "about", "contact"].map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 cursor-pointer capitalize hover:text-white"
                to={`${section}`}
                smooth
                offset={0}
                duration={2000}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* body */}
      <div className="mt-10 md:mt-20 2xl:mt-[20%] flex flex-col justify-between flex-1">
        <div className="w-full text-black font-medium text-[clamp(2rem,12.4vw,19rem)] flex justify-start items-start transform scale-y-120 origin-bottom">
          {[
            "M",
            "A",
            "N",
            "I",
            "S",
            "H",
            "A",
            "\u00A0",
            "\u00A0",
            "\u00A0",
            "M",
            "A",
            "G",
            "A",
            "R",
          ].map((item, index) => (
            <span key={index} className="leading-none tracking-[-0.05em] ">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col-reverse gap-y-5 mt-5 md:flex-row md:items-end  w-full px-7 md:px-0 h-full flex-1">
          <p className="w-full md:w-1/3 hidden md:flex text-text-200 text-2xl md:text-3xl lg:text-5xl  2xl:text-8xl font-semibold transform scale-y-150 origin-bottom">
            WEB DEVELOPER
          </p>
          <div className="w-full md:w-1/3 gap-x-5 flex justify-center md:items-center items-end">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-30  md:w-80 md:h-100 2xl:w-full 2xl:h-full"
            />
           <p className="w-full md:hidden flex text-text-200 text-2xl font-semibold transform scale-y-150 origin-bottom">
            WEB DEVELOPER
          </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-end md:gap-8">
            <p className="lg:w-3/4 w-full md:text-end text-2xl 2xl:text-4xl text-text-light">
              Full-stack developer passionate about turning ideas into seamless
              digital products. Open to remote and international roles.
            </p>
            <button className="bg-text-200 rounded-4xl 2xl:rounded-full text-white text-xl 2xl:text-4xl md:py-5 md:px-7 p-4 2xl:px-20 2xl:py-10 w-fit">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
