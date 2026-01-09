import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative w-full mt-20 py-16 px-8 overflow-x-hidden">
      {/* Background with geometric shape */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      <div className="relative flex flex-row gap-12 items-stretch max-w-6xl mx-auto min-h-96">
        {/* Left Side - Image */}
        <div className="flex-1 relative">
          <Image
            src="/Contact/Rectangle_1.png"
            alt="Get in Touch Illustration"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Overlay shape positioned middle-left of the rectangle */}
          <div className="absolute -left-15 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src="/Contact/shape.png"
              alt="decorative shape"
              width={196}
              height={196}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side - Form Card */}
        <div
          className="relative flex-1 h-full bg-gray-900 bg-opacity-80 backdrop-blur rounded-2xl p-8 border border-gray-700 bg-cover bg-center"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255, 255, 255, 0.2) 0%, transparent 30%), url('/Home/Frame_161.svg')",
          }}
        >
          {/* Decorative geometric shape (top-right) */}
          <div className="absolute -top-24 -right-24 pointer-events-none">
                <Image
                  src="/Geometric_Shape_Silver.png"
                  alt="decorative geometric shape"
                  width={160}
                  height={160}
                  className="opacity-90"
                />
          </div>
          {/* Title */}
          <h1 className="text-5xl font-bold text-white mb-12">Get In Touch</h1>

          {/* Form */}
          <form className="space-y-6">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
            </div>

            {/* Select Services */}
            <select className="w-full bg-transparent border-b border-gray-500 text-gray-500 placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400 appearance-none cursor-pointer">
              <option value="">Select services</option>
              <option value="web">Web Development</option>
              <option value="design">Design</option>
              <option value="consulting">Consulting</option>
            </select>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
            />

            {/* Details */}
            <textarea
              placeholder="Details"
              rows={5}
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400 resize-none"
            ></textarea>

            {/* Submit Button */}
            <div className="pt-4">
              <button className="px-4 py-2 text-sm bg-teal-500 hover:bg-blue-400 text-white rounded-full transition-all inline-flex items-center group">
                <span>Submit</span>
                <span className="ml-2 relative w-6 h-6 flex items-center justify-center">
                  <span
                    className="absolute inset-0 bg-black rounded-full"
                    aria-hidden="true"
                  ></span>
                  <svg
                    className="relative w-3 h-3 z-10 transition-transform duration-300 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M7 17 L17 7"
                      stroke="#fff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M11 7 H17 V13"
                      stroke="#fff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center max-w-6xl mx-auto my-16">
        {/* Cards */}

        {/* Card 01 */}
        <div className="w-1/4 h-50 bg-[#1F1F1F] m-4 rounded-xl shadow-lg flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M20.9113 11.0754L22.2634 13.4982C23.4836 15.6846 22.9938 18.5528 21.072 20.4746C21.072 20.4746 18.7409 22.8058 22.9674 27.0323C27.1939 31.2588 29.5251 28.9277 29.5251 28.9277C31.4469 27.0059 34.3151 26.5161 36.5015 27.7363L38.9243 29.0884C42.2258 30.9309 42.6158 35.561 39.7138 38.4629C37.97 40.2067 35.8338 41.5635 33.4724 41.6531C29.4971 41.8038 22.7461 40.7977 15.9741 34.0257C9.20202 27.2536 8.19595 20.5026 8.34666 16.5273C8.43618 14.1659 9.79301 12.0297 11.5368 10.2859C14.4387 7.38396 19.0688 7.77387 20.9113 11.0754Z"
                stroke="#FFDD1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-md font-light">Your Phone Number</p>
          </div>
        </div>

        {/* Card 02 */}
        <div className="w-1/4 h-50 bg-[#1F1F1F] m-4 rounded-xl shadow-lg flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M4.16602 25.0002C4.16602 17.1434 4.16602 13.215 6.60679 10.7743C9.04757 8.3335 12.9759 8.3335 20.8327 8.3335H29.166C37.0228 8.3335 40.9511 8.3335 43.3919 10.7743C45.8327 13.215 45.8327 17.1434 45.8327 25.0002C45.8327 32.8569 45.8327 36.7853 43.3919 39.2261C40.9511 41.6668 37.0228 41.6668 29.166 41.6668H20.8327C12.9759 41.6668 9.04757 41.6668 6.60679 39.2261C4.16602 36.7853 4.16602 32.8569 4.16602 25.0002Z"
                stroke="#FFDD1A"
                strokeWidth="2"
              />
              <path
                d="M12.501 16.6666L16.9987 20.4147C20.825 23.6033 22.7382 25.1976 25.001 25.1976C27.2638 25.1976 29.177 23.6033 33.0033 20.4147L37.501 16.6666"
                stroke="#FFDD1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-md font-light">Your Phone Number</p>
          </div>
        </div>
        <div className="w-1/4 h-50 bg-[#1F1F1F] m-4 rounded-xl shadow-lg flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M8.33301 21.1316C8.33301 11.762 15.7949 4.16638 24.9997 4.16638C34.2044 4.16638 41.6663 11.762 41.6663 21.1316C41.6663 30.4278 36.3469 41.2756 28.0474 45.1548C26.1127 46.0591 23.8866 46.0591 21.9519 45.1548C13.6524 41.2756 8.33301 30.4278 8.33301 21.1316Z"
                stroke="#FFDD1A"
                strokeWidth="2"
              />
              <circle
                cx="25"
                cy="20.833"
                r="6.25"
                stroke="#FFDD1A"
                strokeWidth="2"
              />
            </svg>
            <p className="text-md font-light">Your Phone Number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
