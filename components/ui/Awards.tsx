"use client";

import { motion, Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data — ordered chronologically                                     */
/* ------------------------------------------------------------------ */

interface Award {
  rank: string; // small label above the year
  year: string;
  title: string; // the category
  competition: string; // the event
}

const AWARDS: Award[] = [
  {
    rank: "Champion",
    year: "2018",
    title: "Creative Mask Design",
    competition: "Michigan Elite Cup",
  },
  {
    rank: "Champion",
    year: "2020",
    title: "Dream Makeup",
    competition: "Chinese Olympic Cup Beauty & Hair Competition",
  },
  {
    rank: "Champion",
    year: "2020",
    title: "\u201CMy Lightyear Monroe\u201D",
    competition: "Wednesday Makeup Showcase",
  },
  {
    rank: "Champion",
    year: "2021",
    title: "Evening Gala Makeup",
    competition: "International Cup Beauty & Hair Competition · Live Model",
  },
  {
    rank: "Champion",
    year: "2021",
    title: "Creative Nail Art",
    competition: "Michigan Elite Cup",
  },
  {
    rank: "3rd Place",
    year: "2021",
    title: "National Skills Competition",
    competition: "51st Edition · Northern Region, Taiwan",
  },
];

/* ------------------------------------------------------------------ */
/*  Animation — minimal fade + gentle rise (matches IntroCard)         */
/* ------------------------------------------------------------------ */

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const rowVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// Black bars: grow horizontally from the centre while fading in.
const barVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/* ------------------------------------------------------------------ */
/*  Award column                                                       */
/* ------------------------------------------------------------------ */

function Award({ award }: { award: Award }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex w-44 select-none flex-col items-center px-2 text-center"
    >
      <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-medium uppercase tracking-[0.3em] text-black">
        {award.rank}
      </span>

      <span className="mt-2 font-[family-name:var(--font-montserrat)] text-6xl font-extralight leading-none tracking-tight text-gray-900">
        {award.year}
      </span>

      <span className="mt-6 font-[family-name:var(--font-montserrat)] text-[13px] font-bold uppercase leading-relaxed tracking-[0.16em] text-gray-800">
        {award.title}
      </span>

      <span className="mt-2 font-[family-name:var(--font-montserrat)] text-[11px] font-light leading-relaxed text-gray-500">
        {award.competition}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Awards() {
  return (
    <section className="w-full bg-white">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col px-6 py-20 md:py-28"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top bar */}
        <motion.div variants={barVariants} className="h-px w-full origin-center bg-black" />

        {/* Awards row */}
        <motion.div
          variants={rowVariants}
          className="flex flex-wrap items-start justify-center gap-x-6 gap-y-14 py-16"
        >
          {AWARDS.map((a, i) => (
            <Award key={i} award={a} />
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div variants={barVariants} className="h-px w-full origin-center bg-black" />
      </motion.div>
    </section>
  );
}