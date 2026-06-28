import React, { useRef } from "react";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Service = () => {
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="service" className="min-h-screen bg-black rounded-t-4xl px-5 md:px-10">
      <div className="pt-20">
        <h1 className="text-4xl md:text-8xl text-white">What I Do ...</h1>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 text-white py-10">
          <p className="md:text-3xl w-full md:w-2/3">
            I work across the full stack, building interfaces people enjoy
            using, backends that hold up under load, and mobile apps that feel
            native on any device.
          </p>
          <p className="w-full md:w-1/3 text-white/70">
            My professional background is in frontend engineering, and my
            personal projects are where I've built and shipped the rest.
            Everything listed here is something I've actually done, not a
            wishlist.
          </p>
        </div>
      </div>
<div className="relative">
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky py-10 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(12vh + ${index * 7}em)`,
                  minHeight: '80vh',
                  marginBottom: `${(servicesData.length - index - 1) * 7}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex justify-between items-start">
            <p className="text-4xl lg:text-5xl text-start hidden md:flex font-medium">{`(0${index+1})`}</p>
            <div className="flex flex-col gap-6 w-full md:w-2/3">
              <h2 className="text-4xl lg:text-6xl font-medium">  <span className="text-4xl font-medium md:hidden">{`(0${index+1})`}</span> {service.title}</h2>
              <p className="text-xl leading-relaxed lg:text-2xl text-white/60 text-pretty w-full md:w-2/3">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Service;
