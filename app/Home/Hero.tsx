// components/Hero.tsx
import Image from 'next/image';
import { PiSunFill } from "react-icons/pi";

const Hero = () => {
    return (
        <div className="overflow-x-hidden">
            <section className="relative h-screen bg-black">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('/Hero Section.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                <div className="absolute inset-0 z-1 opacity-40">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/Clouds.mp4" type="video/mp4" />
                    </video>
                </div>

                <div
                    className="absolute inset-0 opacity-20 z-2"
                    style={{
                        backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                        backgroundSize: '20px 20px',
                    }}
                ></div>

                <div className="relative z-30 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full">
                    <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
                        <p className="text-white text-2xl opacity-50 font-semibold uppercase tracking-wider text-start max-w-lg px-4 leading-relaxed">
                            CLEAN VISUALS, SMART STRATEGY AND CREATIVE WORK THAT MAKES AN IMPACT.
                        </p>
                    </div>

                    <div className="relative w-full md:w-1/2 flex justify-end">
                        <div className="absolute right-0 top-1/2 -translate-y-[40%] z-10 w-[150%] md:w-[130%] max-w-none translate-x-1/4 md:translate-x-1/12">
                            <Image
                                src="/Home/Frame 557.png"
                                alt="3D Abstract Design"
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute top-26 right-10 md:top-30 md:right-20 z-40">
                    <div className="w-12 h-12 rounded-full bg-[#4C8C74] flex items-center justify-center drop-shadow-[0_0_20px_rgba(76,140,116,0.8)]">
                        <PiSunFill size={26} />
                    </div>
                </div>

                <div className="absolute bottom-[-60px] left-0 right-0 z-40 pointer-events-none">
                    <div className="absolute left-6 md:left-16 top-0 pb-1 pointer-events-auto">
                        <p className="text-white text-3xl font-bold font-medium">Modern</p>
                    </div>
                    <h1 className="text-white font-semibold font-black text-5xl md:text-[80px] lg:text-[120px] xl:text-[160px] leading-tight tracking-[-0.009em] whitespace-nowrap text-center pointer-events-auto">
                        DIGITAL DESIGN
                    </h1>
                </div>
                <p className="text-white text-sm md:text-base opacity-60 font-normal mt-1">
                    that helps your brand grow.
                </p>
            </section>
        </div>
    );
};

export default Hero;