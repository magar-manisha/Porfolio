import React from "react";
import { CoreCs, Framework, Language } from "../constants";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-10">
      <div className="flex flex-row">
        <div className=" w-1/2 text-8xl font-semibold">
          <p>DEVELOPER</p>
          <p>DESIGNER</p>
          <p>CREATOR</p>
        </div>
        <div className="flex w-1/2 justify-around items-start">
          <div>
            <h1 className="text-lg text-black font-bold pb-2">
              Languages <br />& Tools
            </h1>
            {Language.map((item, index) => (
              <div key={index} className="text-text-light">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-lg text-black font-bold pb-2">
              Frameworks <br />& Libraries
            </h1>
            {Framework.map((item, index) => (
              <div key={index} className="text-text-light">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-lg text-black font-bold pb-2">
              Core CS <br />
              Concepts
            </h1>
            {CoreCs.map((item, index) => (
              <div key={index} className="text-text-light">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" pt-20 flex gap-20 ">
         <img
              src="/images/profile.png"
              alt="Profile"
              className="w-80 h-100"
            />
        <p className="text-text-light text-lg">
          I’m a results-driven Software Engineer with a strong passion for
          crafting full-stack web applications that are fast, scalable, and
          user-focused. With expertise in modern frameworks like React.js and
          Tailwind CSS, I transform complex ideas into clean, intuitive digital
          solutions.<br /> I thrive in fast-paced, collaborative environments and
          excel at solving challenging problems with precision and creativity. I
          aim to build products that not only function flawlessly but also
          deliver real value to users.
        </p>
      </div>
    </section>
  );
};

export default About;
