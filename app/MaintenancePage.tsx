import Image from "next/image";
import { LuArrowRight, LuWrench, LuMail, LuClock } from "react-icons/lu";

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#080d0d] text-white">
      
      {/* Background Video */}
      <video
        autoPlay
        aria-hidden="true"
        muted
        loop
        preload="metadata"
        playsInline
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover z-0"
        // poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
      >
        {/* Tech clip shown when the visitor has network access. */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4"
          type="video/mp4"
        />
        {/* Local fallback keeps the background animated if the remote clip fails. */}
        <source src="/Clouds.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay (Reduced opacity so video is visible) */}
      <div className="absolute inset-0 z-10 bg-[#080d0d]/60 backdrop-blur-[2px]" />

      {/* Subtle brand gradient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#4c8c74]/20 blur-[128px] pointer-events-none"
      />

      {/* Main Container */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-8">
        
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-6 sm:px-8 sm:py-8 max-w-7xl mx-auto w-full">
          <Image
            src="/Group_1.webp"
            alt="Aussie Digital Studios"
            width={240}
            height={60}
            priority
            className="h-auto w-40 sm:w-48 drop-shadow-lg"
          />
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-[#8da9a1]/80 sm:block">
            DIGITAL EXPERIENCES, REIMAGINED
          </span>
        </header>

        {/* Main Content - Centered */}
        <div className="w-full max-w-3xl text-center">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4c8c74]/30 bg-[#080d0d]/60 px-4 py-2 text-sm font-medium text-[#a8d4c4] backdrop-blur-md shadow-lg shadow-[#4c8c74]/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#76b69d] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#76b69d]" />
            </span>
            System Maintenance in Progress
          </div>

          {/* Icon */}
          <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[#76b69d] backdrop-blur-md shadow-xl">
            <LuWrench aria-hidden="true" size={40} strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-sm">
            We&apos;ll be back{" "}
            <span className="bg-gradient-to-r from-[#76b69d] to-[#8db7d9] bg-clip-text text-transparent">
              shortly.
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-xl mx-auto text-base leading-relaxed text-[#cfd8d5] sm:text-lg">
            We&apos;re currently making a few improvements behind the scenes to bring
            you a sharper, faster, and more refined digital experience.
            <br className="hidden sm:block" />
            <span className="mt-2 block text-[#8da9a1]">Expected completion: Very soon.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@aussiedigitalstudios.com.au"
              className="group inline-flex items-center gap-2 rounded-full bg-[#76b69d] px-8 py-3.5 text-sm font-semibold text-[#07100d] transition-all duration-300 hover:bg-[#a8d4c4] hover:shadow-lg hover:shadow-[#76b69d]/30 active:scale-95"
            >
              <LuMail size={18} />
              Contact us
              <LuArrowRight 
                size={16} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </a>
            
            <button
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-[#aebbb7] transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-95 backdrop-blur-md"
            >
              <LuClock size={16} />
              Check status
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-[#080d0d]/50 px-6 py-6 sm:px-8 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71817c]">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#4c8c74]" />
              <span>© {new Date().getFullYear()} Aussie Digital Studios. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="transition-colors hover:text-[#a8d4c4]">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-[#a8d4c4]">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
