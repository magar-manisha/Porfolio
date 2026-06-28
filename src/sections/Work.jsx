import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const itemRefs = useRef([]);
  const previewRef = useRef(null);
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(1);
  const numberDisplayRef = useRef(null);
  const prevIndexRef = useRef(1);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.55) {
            setCurrentIndex(index + 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = numberDisplayRef.current;
    if (!el) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      el.textContent = `0${currentIndex}`;
      return;
    }

    const direction = currentIndex > prevIndexRef.current ? 1 : -1;
    prevIndexRef.current = currentIndex;

    gsap.killTweensOf(el);

    const clone = el.cloneNode(true);
    el.parentNode.insertBefore(clone, el);

    el.textContent = `0${currentIndex}`;
    gsap.set(el, { y: `${direction * 100}%` });

    gsap.to(clone, {
      y: `${-direction * 100}%`,
      duration: 0.7,
      ease: "power3.inOut",
      onComplete: () => clone.remove(),
    });
    gsap.to(el, { y: "0%", duration: 0.7, ease: "power3.inOut" });
  }, [currentIndex]);

  // Track on window so position is always accurate regardless of parent transforms.
  // The bubble is portaled to document.body so fixed positioning is never trapped
  // inside the #work section which has a scale() ScrollTrigger applied to it.
  useEffect(() => {
    const bubble = previewRef.current;
    if (!bubble) return;

    const xTo = gsap.quickTo(bubble, "left", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(bubble, "top", { duration: 0.8, ease: "power3.out" });

    const onMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useGSAP(() => {
    gsap.to("#work", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#work",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="min-h-screen bg-black text-white md:px-10 px-5 rounded-b-4xl"
      >
        <div className="pt-20">
          <h1 className="text-3xl md:text-7xl text-white">SELECTED WORKS ...</h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 text-white py-10">
            <p className="md:text-3xl w-full md:w-2/3 pr-5">
              A mix of product experiments, client work, and passion builds,
              each one taught me something. From personal finance tools to
              AI-powered platforms, these represent what I actually ship.
            </p>
            <p className="w-full md:w-1/3 text-white/70">
              Some are full-stack web apps, some are mobile, some are small
              tools that solved a specific problem. Every project here is
              something I built end-to-end and put in front of real users.
            </p>
          </div>
        </div>
        <div className="relative flex justify-between pt-10">
          <div className="w-2/4 sticky top-10 h-screen hidden md:block">
            <div className="overflow-hidden leading-none h-12 lg:h-68 relative">
              <p
                ref={numberDisplayRef}
                className="text-5xl lg:text-[17rem] font-medium text-white/70 leading-none absolute"
              >
                0{currentIndex}
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4 relative flex flex-col font-light">
            {projects.map((item, index) => (
              <a
                key={item.id}
                id="project"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (itemRefs.current[index] = el)}
                className="pb-25 relative cursor-pointer group block"
              >
                <div
                  className="relative flex items-center justify-center w-full h-[80vh] transition-all duration-500"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={item.bgImage}
                    alt={`${item.name}-bg-image`}
                    className="w-full h-full object-cover rounded-md brightness-50"
                  />
                  <img
                    src={item.image}
                    alt={`${item.name}-image`}
                    className="absolute bg-center px-14 rounded-xl"
                  />
                </div>

                <p className="text-4xl lg:text-5xl font-medium py-5 leading-none">
                  {item.name}
                </p>
                <div className="py-5 border-t-2 border-white/30 text-white/70 flex flex-col gap-y-3 md:flex-row justify-between md:items-center">
                  <p className="text-lg">{item.description}</p>
                  <div className="flex text-lg gap-3">
                    <p className="border rounded-2xl px-2">{item.role}</p>
                    <p className="border rounded-2xl px-2">{item.year}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {createPortal(
        <div
          ref={previewRef}
          className="rounded-full fixed w-28 h-28 z-9999 hidden md:flex items-center justify-center pointer-events-none opacity-0 bg-blue-600"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <span className="text-white font-semibold text-sm tracking-widest uppercase">
            View
          </span>
        </div>,
        document.body
      )}
    </>
  );
};

export default Work;
