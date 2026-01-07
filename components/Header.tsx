// components/Header.tsx
'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Nav (grouped together) */}
        <div className="flex items-center space-x-18">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Group_1.png"
              alt="Aussie Digital Studios"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Nav - now next to logo */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'Portfolio', 'Career', 'Packages', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                  item === 'Home'
                    ? 'text-[#4C8C74] border-b-2 border-[#4C8C74]'
                    : 'text-white opacity-50 hover:text-white hover:opacity-100'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side: Get In Touch button */}
        <button className="hidden md:flex items-center space-x-1 text-sm text-white hover:text-green-400 transition-colors">
          <span>Get In Touch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

        {/* Mobile Menu Button (only visible on mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 pb-4">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Career', 'Packages', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  item === 'Home'
                    ? 'text-[#4C8C74]'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center space-x-1 text-sm text-white hover:text-green-400 transition-colors pt-2">
              <span>Get In Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;