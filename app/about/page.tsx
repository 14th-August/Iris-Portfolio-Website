"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface IntroCardProps {
  images?: string[];
}

const DEFAULT_PHOTOS = [
  "/photos/personal/IMG_2561.JPG",
  "/photos/personal/IMG_1269.JPG",
  "/photos/personal/IMG_3857.JPG",
  "/photos/personal/IMG_8302.JPG",
  "/photos/personal/YARS6086.JPG",
  "/photos/personal/RXPT5047.JPG",
];

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

export default function IntroCard({ images = DEFAULT_PHOTOS }: IntroCardProps) {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Auto-advance to the next photo every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(advance, 7500);
    return () => clearInterval(interval);
  }, [images.length, advance]);

  if (!images || images.length === 0) return null;

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

        {/* Left Column: Click-to-Advance Single Image with Crossfade */}
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
          <div
            className="absolute inset-0 overflow-hidden bg-white ring-1 ring-black/5 cursor-pointer focus:outline-none"
            onClick={advance}
            role="button"
            tabIndex={0}
            aria-label="Show next photo"
          >
            <AnimatePresence>
              <motion.div
                key={images[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover select-none"
                  draggable={false}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
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