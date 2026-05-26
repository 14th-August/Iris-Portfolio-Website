"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface IntroCardProps {
  /** Array of image URLs to display in the stack */
  images?: string[];
  /** Primary headline */
  title?: string;
  /** Subheading or description text */
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
  title = "Lorem Ipsum",
  description = "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}: IntroCardProps) {
  const [cards, setCards] = useState<string[]>(images);

  // Memoized to prevent unnecessary re-creations on render
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
        
        {/* ── Photo stack — left ─────────────────────────────── */}
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
                    // Initial entry point completely flat
                    initial={{ x: -200, opacity: 0, scale: 0.8 }} 
                    animate={{
                      // Adjusted to shift right slightly for depth, keeping Y perfectly level (0)
                      x: isTop ? 0 : isMiddle ? 20 : 40,
                      y: 0, 
                      rotate: 0, // Removed angle completely
                      scale: isTop ? 1 : isMiddle ? 0.95 : 0.9,
                      opacity: index < 3 ? 1 : 0,
                      zIndex: cards.length - index,
                    }}
                    // Clean, flat exit animation
                    exit={{ x: -300, opacity: 0, scale: 0.9 }} 
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="absolute inset-0 overflow-hidden bg-gray-200 shadow-xl ring-1 ring-black/5 origin-center select-none rounded-xl"
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover"
                      draggable={false}
                      priority={isTop} // Ensures the top image is preloaded instantly
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Text — right ───────────────────────────────────── */}
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed font-medium">
            {description}
          </p>

          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p className="leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}