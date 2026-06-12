"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { IntroPhotos } from "@/utils/intro";

/**
 * IntroCard Component
 * * This component renders a split-layout introduction section featuring an interactive,
 * animated image stack on the left and customizable typography on the right.
 * * - State & Interaction: The `cards` state tracks an array of image URLs. The `cycleDeck`
 * function (memoized for performance) shifts the top image to the back of the array
 * upon user click or keyboard interaction. A "tap to cycle" arrow below the stack
 * signals the interaction and also advances the deck.
 * - Animation: Framer Motion's `AnimatePresence` manages the image stack. A staggered
 * scroll-reveal animation is applied to the typography using `whileInView` and `variants`.
 * - Image Optimization: The Next.js `<Image />` component handles responsive cropping via
 * the `fill` prop. The `priority` flag is dynamically applied to the top card.
 * - Typography: All text elements use the global Montserrat CSS variable (--font-montserrat).
 */

interface IntroCardProps {
  images?: string[];
  title?: string;
  description?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function IntroCard({
  images = IntroPhotos,
  title = "Who I am",
  description = "Award-winning makeup artist and cosmetology specialist, bringing styling expertise and creative vision to clients across Canada.",
}: IntroCardProps) {

  /* UseCallback for card stacking, this logic makes sense
  given a quick read. */
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
      {/* Changed to flex-col on mobile, and grid on desktop */}
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[5fr_6fr] gap-10 md:gap-16 p-8 md:p-16 items-center">

        {/* Mobile-Only Title: Renders above the image stack on small screens */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="block md:hidden text-4xl whitespace-nowrap text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] text-center w-full"
        >
          {title}
        </motion.h2>

        {/* Left Column: Interactive Image Stack + cycle hint */}
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
          <div className="relative aspect-[4/5] w-full">
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
                      transition={{ type: "spring", stiffness: 100, damping: 25 }}
                      className="group absolute inset-0 overflow-hidden bg-gray-200 shadow-xl ring-1 ring-black/5 origin-center select-none"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        className="object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                        draggable={false}
                        priority={isTop}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Cycle hint: OUTSIDE the aspect box, so it sits below the photos */}
          <button
            type="button"
            onClick={cycleDeck}
            aria-label="Show next photo"
            className="mt-6 flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors duration-300 font-[family-name:var(--font-montserrat)] text-[11px] font-light uppercase tracking-[0.3em] cursor-pointer"
          >
            <span>Tap to cycle</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.span>
          </button>
        </div>

        {/* Right Column: Scroll-Revealed Typography */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop-Only Title: Hidden on mobile since it renders above */}
          <motion.h2
            variants={itemVariants}
            className="hidden md:block text-4xl whitespace-nowrap md:text-5xl text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] mb-8 leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] font-light"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-gray-600 font-[family-name:var(--font-montserrat)] font-light text-sm md:text-base"
          >
            <p className="leading-relaxed">
              I was incredibly fortunate to have mentors who encouraged me to step out of my comfort zone and enter national styling competitions during my studies in Taiwan. I dedicated two years to national events, and was so grateful to be awarded three championships and two runner-up titles.
            </p>
            <p className="leading-relaxed">
              Now based in Canada, I am currently open for freelance and contract work, and I am so excited to bring that same dedication to my clients here. Please feel free to explore my portfolio to see some of my recent work!
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}