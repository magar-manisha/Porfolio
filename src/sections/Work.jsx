import { useEffect, useRef, useState } from "react";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const itemRefs = useRef([]);
  const previewRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [pointerCurrentIndex, setpointerCurrentIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.2) {
            setCurrentIndex(index + 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
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

 const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setpointerCurrentIndex(index);
   
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    setpointerCurrentIndex(null);

   
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX +24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section
      id="work"
      className="min-h-screen bg-black text-white px-10 rounded-b-4xl"
    >
      <div className="pt-20">
        <h1 className="text-7xl text-white">SELECTED WORKS ...</h1>
        <div className="w-full flex justify-between items-center gap-10 text-white py-10">
          <p className="text-3xl w-2/3 pr-5">
            Each project is a shared process — from concept to polished
            experience. Every build pushes boundaries, solves real problems, and
            creates intentional impact.
          </p>
          <p className="w-1/3 text-white/70">
            These selected works reflect my approach — thoughtful, practical,
            and refined. From frontend polish to backend stability, every detail
            matters — not just how it looks, but how it works, performs, and
            connects with people.
          </p>
        </div>
      </div>
      <div className="relative flex justify-between pt-10">
        <div className="w-2/4 sticky top-10 h-screen">
          <p className="text-5xl lg:text-[17rem] font-medium text-white/70">
            0{currentIndex}
          </p>
        </div>
        <div
          className="w-3/4 relative flex flex-col font-light"
          onMouseMove={handleMouseMove}
        >
          {projects.map((item, index) => (
            <div
              key={item.id}
              id="project"
              ref={(el) => (itemRefs.current[index] = el)}
              className="pb-25 relative cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >

              <div className="relative flex items-center justify-center w-full h-[80vh] transition-all duration-500 ">
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
              <div className="py-5 border-t-2 border-white/30 text-white/70 flex justify-between items-center">
                <p className="text-lg ">{item.description}</p>
                <div className="flex text-lg  gap-3">
                  <p className="border-[1px] rounded-2xl px-2">{item.role}</p>
                  <p className="border-[1px] rounded-2xl px-2">{item.year}</p>
                </div>
              </div>
            </div>
          ))}
          {/* desktop Flaoting preview image */}
          <div
            ref={previewRef}
            className="bg-blue-600 rounded-full fixed top-0 left-0 w-28 h-28 z-50 hidden md:block pointer-events-none opacity-0 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              // Initial position off-screen
              left: '-100px',
              top: '-100px'
            }}
          >
            {pointerCurrentIndex !== null && (
              <a
                href={projects[pointerCurrentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full h-full flex items-center justify-center"
              >
                <span className="text-black px-4 py-2 font-semibold text-sm text-center">
                  View
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
