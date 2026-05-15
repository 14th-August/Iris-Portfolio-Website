"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // Added the resize listener to reset mobile state when returning to full screen
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
    let menuClasses = [
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
        'top-[50px]',
        'bg-gray-600',
        'w-full',
        'p-4',
        'left-0',
        'gap-10'
      );
    } else {
      menuClasses.push("hidden");
    }

    return menuClasses.join(' ');
  }

  return (
    <nav className="bg-gray-600 text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-[family-name:var(--font-montserrat)] font-extralight uppercase
          tracking-[0.3em] text-xl md:text-xl text-white">
          Iris
        </Link>
        <div className={getMenuClasses()}>
          <Link href="/about" className="mx-2 hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="mx-2 hover:text-gray-300">
            Contact
          </Link>
        </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => {
              setIsOpen(!isOpen);
            }}>
              {isOpen ? (
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  className="w-6 h-6 text-white" 
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