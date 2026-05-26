"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroCard Component
 * * This component renders a split-layout introduction section featuring an interactive, 
 * animated image stack on the left and customizable typography on the right. 
 * * - State & Interaction: The `cards` state tracks an array of image URLs. The `cycleDeck` 
 * function (memoized for performance) shifts the top image to the back of the array 
 * upon user click or keyboard interaction.
 * - Animation: Framer Motion's `AnimatePresence` (using popLayout) manages the DOM elements. 
 * As the array changes, `motion.div` smoothly transitions the new x-axis offsets, scale, 
 * and z-indexes, creating a flat, horizontal shuffling effect.
 * - Image Optimization: The Next.js `<Image />` component handles responsive cropping via 
 * the `fill` prop. The `priority` flag is dynamically applied to the top card to ensure 
 * instant loading and prevent visual delays.
 * - Typography: All text elements are hardwired to the global Montserrat CSS variable 
 * (--font-montserrat) to maintain the site's editorial aesthetic.
 */

interface IntroCardProps {
  images?: string[];
  title?: string;
  description?: string;
}

const DEFAULT_PHOTOS = [
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&h=1125&fit=crop",
];

export default function IntroCard({
  images = DEFAULT_PHOTOS,
  title = "Who I am",
  description = "Award-winning makeup artist and cosmetology specialist, bringing styling expertise and creative vision to clients across Canada.",
}: IntroCardProps) {
  const [cards, setCards] = useState<string[]>(images);

  const cycleDeck = useCallback(() => {
    setCards((prev) => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
  }, []);

  if (!cards || cards.length === 0) return null;

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-10 md:gap-16 p-8 md:p-16 items-center">
        
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
          <div
            className="absolute inset-0 cursor-pointer focus:outline-none"
            onClick={cycleDeck}
            role="button"
            tabIndex={0}
            aria-label="Show next photo"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                cycleDeck();
              }
            }}
          >
            <AnimatePresence mode="popLayout">
              {cards.map((src, index) => {
                const isTop = index === 0;
                const isMiddle = index === 1;

                return (
                  <motion.div
                    key={src} 
                    layout
                    initial={{ x: -200, opacity: 0, scale: 0.8 }} 
                    animate={{
                      x: isTop ? 0 : isMiddle ? 20 : 40,
                      y: 0, 
                      rotate: 0, 
                      scale: isTop ? 1 : isMiddle ? 0.95 : 0.9,
                      opacity: index < 3 ? 1 : 0,
                      zIndex: cards.length - index,
                    }}
                    exit={{ x: -300, opacity: 0, scale: 0.9 }} 
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="absolute inset-0 overflow-hidden bg-gray-200 shadow-xl ring-1 ring-black/5 origin-center select-none"
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover"
                      draggable={false}
                      priority={isTop}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] mb-8 leading-tight">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] font-light">
            {description}
          </p>

          <div className="space-y-4 text-gray-600 font-[family-name:var(--font-montserrat)] font-light text-sm md:text-base">
            <p className="leading-relaxed">
              I was incredibly fortunate to have mentors who encouraged me to step out of my comfort zone and enter national styling competitions during my studies in Taiwan. I dedicated two years to national events, and was so grateful to be awarded three championships and two runner-up titles.
            </p>
            <p className="leading-relaxed">
              Now based in Canada, I am currently open for freelance and contract work, and I am so excited to bring that same dedication to my clients here. Please feel free to explore my portfolio to see some of my recent work!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}