<<<<<<< HEAD
import React from "react";
import { PiSunFill } from "react-icons/pi";

const Hero = () => {
  return (
    <div
      className="w-full h-100 flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/About/Frame_about_hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Clouds Video Overlay with brightness filter */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: "overlay",
          filter: "brightness(2) contrast(1.1)",
        }}
      >
        <source src="/Clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="flex items-end justify-center w-full relative z-10 px-4">
        <div className="relative">
          {/* ABOUT US text */}
          <h2 className="text-8xl md:text-9xl lg:text-[180px] font-medium text-white scale-x-70 scale-y-70">
            ABOUT US
          </h2>

          {/* Green circle positioned above and to the right */}
          <div className="absolute top-2 -right-12 md:top-4 md:-right-16 lg:top-6 lg:-right-20">
            <div className="w-12 h-12 rounded-full bg-[#4C8C74] flex items-center justify-center drop-shadow-[0_0_20px_rgba(76,140,116,0.8)]">
              <PiSunFill size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
=======
import React from "react";
import { PiSunFill } from "react-icons/pi";

const Hero = () => {
  return (
    <div
      className="w-full h-100 flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/About/Frame_about_hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Clouds Video Overlay with brightness filter */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: "overlay",
          filter: "brightness(2) contrast(1.1)",
        }}
      >
        <source src="/Clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="flex items-end justify-center w-full relative z-10 px-4">
        <div className="relative">
          {/* ABOUT US text */}
          <h2 className="text-8xl md:text-9xl lg:text-[180px] font-medium text-white scale-x-70 scale-y-70">
            ABOUT US
          </h2>

          {/* Green circle positioned above and to the right */}
          <div className="absolute top-2 -right-12 md:top-4 md:-right-16 lg:top-6 lg:-right-20">
            <div className="w-12 h-12 rounded-full bg-[#4C8C74] flex items-center justify-center drop-shadow-[0_0_20px_rgba(76,140,116,0.8)]">
              <PiSunFill size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

>>>>>>> 84d8d3d3e99e518566a1bbee99d0b416172d74b1
