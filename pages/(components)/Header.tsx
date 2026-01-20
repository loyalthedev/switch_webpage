import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='w-full py-3 md:py-4 px-4 sm:px-6 md:px-12 flex items-center justify-between relative'>
      {/* Left: Logo */}
      <div className='flex items-center gap-2 flex-shrink-0'>
        <Image
          src='/assets/svgs/logo.svg'
          alt='Switch Logo'
          width={28}
          height={28}
          className='w-7 h-7 md:w-8 md:h-8'
        />
        <span className='text-foreground font-normal tracking-wide font-train text-xl md:text-2xl'>
          SWITCH
        </span>
      </div>

      {/* Center: Desktop Navigation */}
      <nav className='hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 transform -translate-x-1/2'>
        <a
          href='#'
          className='text-white font-bold transition-colors duration-300 hover:text-primary text-sm lg:text-base'
        >
          Home
        </a>
        <a
          href='#'
          className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white text-sm lg:text-base'
        >
          SuperApp
        </a>
        <button className='flex items-center gap-1 text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white text-sm lg:text-base'>
          Business
          <ChevronDown className='w-4 h-4' />
        </button>
        <a
          href='#'
          className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white text-sm lg:text-base'
        >
          About Us
        </a>
        <a
          href='#'
          className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white text-sm lg:text-base'
        >
          Careers
        </a>
        <a
          href='#'
          className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white text-sm lg:text-base'
        >
          Contact
        </a>
      </nav>

      {/* Right: Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className='md:hidden text-foreground p-2 z-[10000] relative'
        aria-label='Toggle menu'
      >
        {isMobileMenuOpen ? (
          <X className='w-6 h-6' />
        ) : (
          <Menu className='w-6 h-6' />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] md:hidden'
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className='fixed top-0 left-0 right-0 bg-[#0a0a0a] border-b border-border md:hidden z-[9999] shadow-2xl pt-16'
            >
              <div className='flex flex-col px-6 py-6 gap-1'>
                <a
                  href='#'
                  className='text-white font-bold transition-colors duration-300 hover:text-primary py-3 px-2 rounded-lg hover:bg-white/5'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SuperApp
                </a>
                <button className='flex items-center justify-between text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5 text-left w-full'>
                  Business
                  <ChevronDown className='w-4 h-4' />
                </button>
                <a
                  href='#'
                  className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href='#'
                  className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </a>
                <a
                  href='#'
                  className='text-[#5A5A5A] font-bold transition-colors duration-300 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
