"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from "react";


/* Navbar Component:
   Resizes based on screen size, driving 2 states (desktop + mobile menu).
   Also: hides on scroll-down / shows on scroll-up, closes the mobile menu
   when a link is clicked or when the user clicks outside the navbar. */
export function Navbar() {

  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Whether the navbar is currently visible (controls the scroll hide/show)
  const [showNav, setShowNav] = useState(true);

  // Ref to the <nav> element so we can detect clicks OUTSIDE of it
  const navRef = useRef<HTMLElement>(null);

  // Force menu closed if the window grows to desktop size while open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  /* Scroll direction tracking: compare current scrollY to the last one.
     Scrolling down -> hide nav; scrolling up -> show nav. We keep the
     previous position in a ref-like local via the effect closure. */
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Always show near the very top of the page
      if (currentY < 10) {
        setShowNav(true);
      } else if (currentY > lastY) {
        // scrolling DOWN -> hide
        setShowNav(false);
      } else {
        // scrolling UP -> show
        setShowNav(true);
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Outside-click: if the mobile menu is open and the user clicks anywhere
     that is NOT inside the <nav>, close it. We only attach the listener
     while the menu is open to avoid running it needlessly. */
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        'flex', 'flex-col', 'items-start', 'absolute', 'top-[70px]',
        'bg-white', 'w-full', 'p-4', 'left-0', 'gap-10', 'z-50', 'shadow-lg'
      );
    } else {
      menuClasses.push("hidden");
    }
    return menuClasses.join(' ');
  }

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 bg-white text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-xl whitespace-nowrap flex-shrink-0"
        >
          Iris Beauty
          <h6 className="text-xs md:text-xs">Hsiang-Ning Yu</h6>
        </Link>
        <div className={getMenuClasses()}>
          <Link href="/gallery/portfolio" onClick={() => setIsOpen(false)} className="mx-2 relative group pb-1 hover:text-blue-600 active:text-blue-600">
            Portfolio
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/gallery/shows" onClick={() => setIsOpen(false)} className="mx-2 relative group pb-1 hover:text-blue-600 active:text-blue-600">
            Shows
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="mx-2 relative group pb-1 hover:text-blue-600 active:text-blue-600">
            About
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mx-2 relative group pb-1 hover:text-blue-600 active:text-blue-600">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-600 group-active:scale-x-100 scale-x-0 group-hover:scale-x-95 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>

        {/* Hamburger (mobile only). Ternary swaps X / hamburger icon. */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}