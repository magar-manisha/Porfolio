import React, { useState } from "react";
import { ContactQsn, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useGSAP(() => {
    gsap.to("#contact", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
        end: "top 30%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New project inquiry from ${formData.name || "website"}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };
  return (
    <section
      id="contact"
      className="py-20 px-5 md:px-10 bg-black rounded-2xl mt-5"
    >
      <h1 className="text-4xl md:text-8xl text-white pb-10">
        Got a project in mind?
      </h1>

      <div className="flex w-full md:px-20 pb-20">
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 w-full relative md:mr-25"
        >
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

          <div className="flex-1 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-blue-600 cursor-pointer text-white w-28 h-28 md:w-40 md:h-40 rounded-full hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed absolute z-100 md:-bottom-15 -bottom-10 right-30 flex items-center justify-center"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="text-green-400 absolute -bottom-24 md:-bottom-15 left-0">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 absolute -bottom-24 md:-bottom-15 left-0">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
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
