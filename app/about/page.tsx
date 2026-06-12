"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { aboutPhotos } from "@/utils/about";

interface IntroCardProps {
  images?: string[];
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

export default function IntroCard({ images = aboutPhotos }: IntroCardProps) {
  // Stacked deck of image URLs; cycleDeck moves the top card to the back
  const [cards, setCards] = useState<string[]>(images);

  const cycleDeck = useCallback(() => {
    setCards((prev) => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
  }, []);

  // Auto-advance every 7.5s. `cards` in deps resets the timer on a manual
  // tap so a tap isn't interrupted by the auto-timer firing right after.
  useEffect(() => {
    if (cards.length <= 1) return;
    const interval = setInterval(cycleDeck, 7500);
    return () => clearInterval(interval);
  }, [cards, cycleDeck]);

  if (!cards || cards.length === 0) return null;

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[5fr_6fr] gap-10 md:gap-16 p-8 md:p-16 items-center">

        {/* Mobile-Only Title: Renders above the image stack on small screens */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="block md:hidden text-4xl whitespace-nowrap text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] text-center w-full"
        >
          Iris Beauty
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
          className="space-y-4 mb-20 text-gray-600 font-[family-name:var(--font-montserrat)] font-light text-sm md:text-base"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="hidden md:block text-left text-4xl mt-20 mb-8 whitespace-nowrap md:text-5xl text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] leading-tight"
          >
            Iris Beauty
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-2xl text-center md:text-left text-gray-600 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] font-light"
          >
            Hsiang-Ning Yu
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-gray-600 font-[family-name:var(--font-montserrat)] font-light text-sm md:text-base"
          >
            <p className="leading-relaxed">
              I have worked with various models from various parts of Asia all the way to Canadas west coast,
              I have experience from make up to special effects, all the way to bridal work.
              Being a professional makeup artist has allowed me to express my creativity in unique ways,
              I am dedicated to providing exceptional service to my clients.
            </p>
            <p className="leading-relaxed">
              When I am not working, I spend time with my loved ones and going for long walks! Now based in Canada,
              I am currently open for freelance and contract work, and I am so excited to bring that same dedication to my clients here.
              Please feel free to explore my portfolio to see some of my work!
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}