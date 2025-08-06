import React from "react";
import { socials } from "../constants";
import {LocalTime} from "../utils/helperfunction";

const Footer = () => {
  return (
    <div className="px-10 pb-7 pt-10 flex items-center justify-between">
        <div className="flex gap-10">
         <div>
        <p className="text-sm text-text-100 pb-2">VESRSION</p>
        <p className="text-sm">2025 Edition</p>
      </div>
      <div>
        <p className="text-sm text-text-100 pb-2">LOCAL TIME</p>
        <p className="text-sm">{LocalTime()}</p>
      </div>    
        </div>
     
      <div className="">
        <p className="text-sm text-text-100 pb-2">SOCIALS</p>
        <div className="flex flex-wrap gap-x-2">
          {socials.map((social, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={social.href}
              className="flex text-sm  uppercase hover:text-white transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
