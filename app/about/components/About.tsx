import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="">
      <div className="flex flex-col">
        <div className="max-w-7xl mx-auto px-10 py-24 flex items-center justify-between">
          {/* Left Column */}
          <div className="w-1/2">
            <p className="text-[#4C8C74] text-lg font-medium mb-4">About Us</p>
            <h2 className="text-white text-5xl font-bold">Our Story</h2>
          </div>

          {/* Right Column */}
          <div className="w-1/2">
            <p className="text-[#AAAAAA] text-lg leading-relaxed">
              Aussie Digital Studios was born from a passion for design and a
              love for helping businesses grow online. Based in Australia, we
              blend modern design, digital strategy, and creative thinking to
              build unique experiences that help brands stand out. We understand
              that each business is different, which is why we take a tailored
              approach to every project. Our goal is simple: deliver results
              that make a real difference.
            </p>
          </div>
        </div>
        <div className="mx-10 flex flex-row items-start relative">
          <div className="relative">
            <Image
              src="/About/Rectangle_42.png"
              alt="About Us Image"
              width={800}
              height={400}
              className="rounded-lg shadow-lg h-[400px] object-cover"
            />

            {/* Geometric shape half-overlapping bottom-right */}
            <img
              src="/Geometric_Shape_Silver.png"
              alt="Decorative shape"
              className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-20 md:w-30 lg:w-40 pointer-events-none"
            />
          </div>
          <div
            className="ml-6 w-[420px] h-[400px] rounded-lg bg-cover bg-[#212423] bg-center shadow-lg"
            style={{
              backgroundImage: "url('/About/About_Section_img_02.png')",
            }}
          >
            <div className="flex flex-col">
              <div className="mx-[23] mt-3">
                <h1 className="text-[40px] font-medium text-yellow-500">
                  569+
                </h1>
              </div>
              <div className="mx-[23] mt-0">
                <p className="text-white text-lg font-extralight">
                  Happy Customers
                </p>
              </div>
              <br />
              <hr className="mx-[23] w-[260px]" />
              <div className="mx-[23] mt-1">
                <h1 className="text-[40px] font-medium text-yellow-500">
                  1,890+
                </h1>
              </div>
              <div className="mx-[23] mt-0">
                <p className="text-white text-lg font-extralight">
                  Issues Solved
                </p>
              </div>
              <br />
              <hr className="mx-[23] w-[230px]" />
              <div className="mx-[23] mt-1">
                <h1 className="text-[40px] font-medium text-yellow-500">
                  250+
                </h1>
              </div>
              <div className="mx-[23] mt-0">
                <p className="text-white text-lg font-extralight">Finished Projects</p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
