import React, { useState } from "react";
import { ContactQsn, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });


    useGSAP(() => {
    gsap.to("#contact", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
        end:"top 30%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
     }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // You can send `formData` to an API here
  };
  return (
    <section id="contact" className="py-20 px-5 md:px-10 bg-black rounded-2xl mt-5">
      <h1 className="text-4xl md:text-8xl text-white pb-10">Let's work together</h1>

      <div className="flex w-full md:px-20 pb-20">
        <form onSubmit={handleSubmit} className="md:w-2/3 w-full relative md:mr-25">
          {ContactQsn.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 border-b-2 border-white/30 pt-7 pb-4 items-start" 
            >
              <p className="text-white/70">0{index + 1}</p>
              <div className="w-full">
                <p className="text-lg text-white">{item.qsn}</p>
                {item.type === "textarea" ? (
                  <textarea
                    name={item.name}
                    placeholder={item.placeholder}
                    value={formData[item.name]}
                    onChange={handleChange}
                    className="w-full text-white/70 border-0 outline-none focus:outline-none py-3 bg-transparent resize-none min-h-[150px]"
                  />
                ) : (
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={formData[item.name]}
                    onChange={handleChange}
                    className="w-full text-white/70 border-0 outline-none focus:outline-none py-3 bg-transparent"
                  />
                )}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-600 text-white md:p-15 p-7 w-fit h-fit rounded-full hover:bg-blue-700 absolute z-100 md:-bottom-15 -bottom-10 right-30 flex items-center justify-center"
          >
            Submit
          </button>
        </form>

        <div className="w-1/3 pt-10 hidden md:block">
          <div className="pb-7 text-white">
            <h1 className="text-sm text-text-100">Contact Details</h1>
            <a
              href="mailto:magarmanisha248@gmail.com"
              className="lowercase mb-2 hover:underline cursor-pointer block"
            >
              magarmanisha248@gmail.com
            </a>
            <a href="tel:9805311859" className="hover:underline cursor-pointer">
              +977 9805311859
            </a>
          </div>
          <div>
            <h1 className="text-sm text-text-100">Socials</h1>
            <div className="flex flex-col gap-x-2 text-white">
              {socials.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="flex leading-loose uppercase hover:text-text-100 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
