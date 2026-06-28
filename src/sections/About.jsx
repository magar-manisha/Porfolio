import React from "react";
import { CoreCs, Framework, Language } from "../constants";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-5 md:px-10 2xl:px-50">
      <div className="flex flex-col md:flex-row 2xl:mb-20">
        <div className="w-full md:w-1/2 xl:text-8xl text-5xl 2xl:text-9xl font-semibold">
          <p>DEVELOPER</p>
          <p>DESIGNER</p>
          <p>CREATOR</p>
        </div>
        <div className="flex gap-x-3 w-full md:w-1/2 justify-around items-start mt-5 md:mt-0">
          <div>
            <h1 className="text-lg text-black hidden md:flex font-bold pb-2">
              Languages <br />& Tools
            </h1>
            {Language.map((item, index) => (
              <div key={index} className="text-text-light text-sm xl:text-lg">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-lg text-black font-bold hidden md:flex pb-2">
              Frameworks <br />& Libraries
            </h1>
            {Framework.map((item, index) => (
              <div key={index} className="text-text-light text-sm xl:text-lg">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-lg text-black font-bold hidden md:flex pb-2">
              Core CS <br />
              Concepts
            </h1>
            {CoreCs.map((item, index) => (
              <div key={index} className="text-text-light text-sm xl:text-lg">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 xl:px-40 lg:px-0 md:px-20 flex flex-col lg:flex-row  md:gap-20 gap-10 ">
        <img src="/images/profile.png" alt="Profile" className="w-full md:w-200 md:h-150 2xl:w-1/2 2xl:h-1/2" />
        <div className="flex flex-col lg:justify-center md:gap-y-10 gap-y-3">
          <p className="text-4xl md:text-7xl 2xl:text-9xl font-semibold ">So, who am I?</p>
          <p className="text-text-light text-lg 2xl:text-4xl">
            I’m a Software Engineer who builds complete web applications,
            from designing APIs and structuring databases to the interfaces
            users actually interact with. I care about how systems are put
            together, not just how they look.
            <br /><br /> Professionally, I’ve worked as a frontend engineer,
            which gave me a solid understanding of how real products are built,
            reviewed, and maintained in teams. My personal projects are where
            I’ve applied that same discipline across the full stack, owning
            every layer from database schema to deployed UI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
