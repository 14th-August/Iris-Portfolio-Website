"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  function getMenuClasses() {
    const menuClasses = [
      'md:flex',
      'md:flex-row',
      'md:static',         
      'md:w-auto',         
      'md:bg-transparent', 
      'md:p-0',            
      'md:gap-10',
      'md:items-center'
    ];

    if (isOpen) {
      menuClasses.push(
        'flex',
        'flex-col',
        'items-start',
        'absolute',
        'top-[70px]',
        'bg-white',
        'w-full',
        'p-4',
        'left-0',
        'gap-10',
        'z-50',
        'shadow-lg'
      );
    } else {
      menuClasses.push("hidden");
    }

    return menuClasses.join(' ');
  }

  return (
    <nav className="bg-white text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em]">
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <Link href="/" className="text-xl md:text-xl whitespace-nowrap flex-shrink-0">
          Iris Design
            <h6 className="text-xs md:text-xs">
            Hsiang-Ning Yu
            </h6>
        </Link>
        <div className={getMenuClasses()}>
          <Link href="/gallery/portfolio" className="mx-2 relative group pb-1 
            mx-2 hover:text-blue-600 active:text-blue-600">
            Portfolio
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/gallery/shows" className="mx-2 relative group pb-1 
            mx-2 hover:text-blue-600 active:text-blue-600">
            Shows
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/about" className="mx-2 relative group pb-1 
            mx-2 hover:text-blue-600 active:text-blue-600">
            About
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/contact" className="mx-2 relative group pb-1 
            mx-2 hover:text-blue-600 active:text-blue-600">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => {
              setIsOpen(!isOpen);
            }}>
              {isOpen ? (
                <svg 
                  className="w-6 h-6 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  className="w-6 h-6 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
      </div>
    </nav>
  );
}