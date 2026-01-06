import React from "react";
import {
  CodeBracketIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Web Design & Development",
    desc: "Fast, clean and designed to convert. Modern websites built around your brand and goals.",
    icon: CodeBracketIcon,
  },
  {
    title: "Branding & Identity",
    desc: "Professional, memorable visuals that define your brand and make a strong first impression.",
    icon: PencilSquareIcon,
  },
  {
    title: "SEO & Digital Strategy",
    desc: "Smart optimisation that drives steady growth and keeps your brand visible.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Marketing & Content",
    desc: "Clear, engaging content that builds trust and keeps your audience interested.",
    icon: MegaphoneIcon,
  },
];

const Services = () => {
  return (
    <section 
      className="relative w-full overflow-hidden py-28"
      style={{
        backgroundImage: "url('/Home/Service.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay for content readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* subtle grid floor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-emerald-400 mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            What We Do
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition hover:bg-white/10"
            >
              {/* icon */}
              <service.icon className="h-6 w-6 text-emerald-400 mb-4" />

              {/* arrow */}
              <ArrowUpRightIcon className="absolute top-6 right-6 h-5 w-5 text-white/50 transition group-hover:text-white" />

              <h3 className="text-sm font-semibold text-yellow-400 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
