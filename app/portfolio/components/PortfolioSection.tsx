import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="relative py-28">
      {/* Heading */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-lg text-emerald-400 mb-2 font-semibold">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Proven results, stunning Websites
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-400 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            Logo
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            E-Commerce
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            Website Design
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            SMM
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            Video Animation
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            SEO
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            Maintenance
          </div>
          <div className="text-gray-400 px-4 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            Branding
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-[55px]">
        {/* Top Row (2 Cards) */}
        <div className="flex flex-row gap-14 mb-6 items-stretch">
          {/* Card 01*/}
          <div className="rounded-3xl w-[460px] flex flex-col flex-none self-start">
            {/* Image wrapper */}
            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src="/Home/Rectangle_32.png"
                alt="Project"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">
                Project Name
              </h3>

              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* Label */}
              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>

          {/* Card 2 (same structure) */}
          <div className="rounded-3xl w-[670px] p-8 mt-[55px] flex flex-col flex-none relative">
            <div className="relative mb-6">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/Home/Rectangle_33.png"
                  alt="Project"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <Image
                src="/Geometric_Shape_Silver.png"
                alt="Geometric Shape"
                width={140}
                height={140}
                className="absolute -top-24 -right-24 w-40 h-40 z-20 pointer-events-none"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">
                Project Name
              </h3>

              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 03 */}
        <div className="rounded-3xl p-8 max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src="/Home/Rectangle_34.png"
              alt="Project"
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-[#3A6EA5] font-semibold mb-2">Project Name</h3>

          <p className="text-sm text-gray-400 mb-4 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="flex gap-2 flex-wrap">
            <Tag label="Web design" />
            <Tag label="Web development" />
            <Tag label="Support" />
          </div>
        </div>

        <div className="flex flex-row gap-14 mt-30 items-stretch">
          <div className="flex flex-row gap-14 mb-6 items-stretch">
            {/* Card 04*/}
            <div className="rounded-3xl mt-[150px] w-[670px] flex flex-col flex-none self-start">
              {/* Image wrapper */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="/Home/Rectangle_32.png"
                  alt="Project"
                  className="w-full h-[460px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[#3A6EA5] font-semibold mb-2">
                  Project Name
                </h3>

                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                {/* Label */}
                <div className="flex gap-2 flex-wrap">
                  <Tag label="Web design" />
                  <Tag label="Web development" />
                  <Tag label="Support" />
                </div>
              </div>
            </div>

            {/* Card 05 (same structure) */}
            <div className="rounded-3xl w-[460px] p-8 flex flex-col flex-none self-start">
              <div className="rounded-2xl overflow-hidden mb-2">
                <img
                  src="/Home/Rectangle_33.png"
                  alt="Project"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-[#3A6EA5] font-semibold mt-3 mb-2">
                  Project Name
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="flex gap-2 flex-wrap">
                  <Tag label="Web design" />
                  <Tag label="Web development" />
                  <Tag label="Support" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 text-lg bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group">
            <span>Load More</span>
            <span className="ml-3 relative w-10 h-10 flex items-center justify-center">
              <span
                className="absolute inset-0 bg-black rounded-full"
                aria-hidden="true"
              ></span>
              <svg
                className="relative w-4 h-4 z-10 transition-transform duration-300 group-hover:rotate-45"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M7 17 L17 7"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M11 7 H17 V13"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

type TagProps = {
  label: string;
};

function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300">
      {label}
    </span>
  );
}