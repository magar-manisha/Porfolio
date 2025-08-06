import { useRef } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const linksRef = useRef([]);
  return (
    <section id="home" className="flex flex-col h-screen p-7 ">
      {/* header */}
      <div className="flex text-lg justify-between items-center text-text-light w-full ">
        <p>@magarmanisha</p>
        <div className="flex gap-x-5 ">
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
      <div className=" mt-20 flex flex-col justify-between">
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

        <div className="flex items-end w-full">
          <p className="w-1/3 text-text-200 text-5xl font-semibold transform scale-y-150 origin-bottom">
            WEB DEVELOPER
          </p>
          <div className="w-1/3 flex justify-center items-center">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-80 h-100"
            />
          </div>
          <div className=" w-1/3 flex flex-col items-end gap-8">
            <p className="w-3/4 text-end text-2xl text-text-light">
              Full-stack developer passionate about turning ideas into seamless
              digital products. Open to remote and international roles.
            </p>
            <button className="bg-text-200 rounded-4xl text-white text-xl py-5 px-7 w-fit">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
