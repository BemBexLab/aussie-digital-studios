import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="justify-center items-center">
      <div className="flex flex-row bg-[#151515] h-[400px] gap-2 text-white py-6 mt-12">
        <div className="mx-[70px] mt-5">
          <Image src="/Group_1.png" alt="Logo" width={280} height={170} />
        </div>

        <div className="flex flex-row mx-20 mt-5 gap-[35px]">
          {/* First Column */}
          <div className="flex flex-col mt-5 gap-2">
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Career
            </a>
          </div>

          {/* Second Column */}
          <div className="flex flex-col mt-5 gap-2">
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
