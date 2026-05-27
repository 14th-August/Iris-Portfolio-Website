import React from 'react';
import { motion } from 'framer-motion';

const wins = [
  "Taiwan The 19th Olympics Hair & Makeup Competition (2020) - Dream Makeup Group Champion",
  "Taiwan The 9th International Cup Beauty Competition (2021) - Evening Makeup Group Champion",
  "Michigan Elite Cup (2018) - Creative Mask Design Champion",
  "Wednesday Makeup Competition (2020) - 'My Lightyear Monroe' Champion",
  "Michigan International Elite Cup (2021) - Nail Art Creative Group Champion"
];

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Slow, elegant reel-in duration
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.4, // Delays each child's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ChampionshipReel() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="bg-neutral-900 text-white rounded-2xl p-10 shadow-2xl">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300"
          variants={itemVariants}
        >
          Championship Highlights
        </motion.h2>
        
        <ul className="space-y-6">
          {wins.map((win, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start text-lg md:text-xl border-l-4 border-pink-500 pl-4 py-1 bg-neutral-800 rounded-r-lg"
            >
              <span className="mr-3 text-amber-300">🏆</span>
              <p className="leading-snug">{win}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}