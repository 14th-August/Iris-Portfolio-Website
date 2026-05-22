"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   IntroCard (Framer Motion Edition)
   - Left: Declarative stacked image gallery using AnimatePresence
   - Right: Typography and content layouts
   ───────────────────────────────────────────────────────────── */

const PHOTOS = [
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&h=1125&fit=crop",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&h=1125&fit=crop",
];

export default function IntroCard() {
  // We track the raw photo URLs array directly. The photo at cards[0] is always on top.
  const [cards, setCards] = useState<string[]>(PHOTOS);

  const cycleDeck = () => {
    // Shifts the top card (index 0) to the very end of the array.
    // Framer Motion automatically watches this array change and animates the slots!
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

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
            {/* popLayout mode keeps elements in their visual space during exit animations */}
            <AnimatePresence mode="popLayout">
              {cards.map((src, index) => {
                const isTop = index === 0;
                const isMiddle = index === 1;

                return (
                  <motion.div
                    key={src} // Stable unique key is crucial for tracking entry/exit states
                    layout    // Smoothly slides cards forward when the list changes
                    initial={{ x: -500, opacity: 0, rotate: -20 }} // Animation when a new card arrives at back
                    animate={{
                      x: isTop ? 0 : isMiddle ? 14 : 28,
                      y: isTop ? 0 : isMiddle ? 16 : 32,
                      rotate: isTop ? 0 : isMiddle ? 2.5 : 5,
                      scale: isTop ? 1 : isMiddle ? 0.96 : 0.92,
                      opacity: index < 3 ? 1 : 0,
                      zIndex: cards.length - index,
                    }}
                    exit={{ x: -520, opacity: 0, rotate: -28 }} // The fly-away exit animation
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="absolute inset-0 overflow-hidden bg-gray-200 shadow-xl ring-1 ring-black/5 origin-center select-none"
                  >
                    <img
                      src={src}
                      alt="Gallery image"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <p className="absolute -bottom-7 left-0 right-0 text-center text-xs tracking-widest uppercase text-gray-400 pointer-events-none">
            Click photo to advance
          </p>
        </div>

        {/* ── Text — right ───────────────────────────────────── */}
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">
            Lorem Ipsum Dolor.
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed font-medium">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <p className="leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>

            <p className="leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-8">
            <span className="block h-px w-12 bg-gray-400" />
            <span className="text-xs tracking-widest uppercase text-gray-500 font-medium">
              Introcard · TSX
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}