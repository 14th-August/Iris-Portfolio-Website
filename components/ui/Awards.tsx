"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data — top honours                                                 */
/* ------------------------------------------------------------------ */

interface Award {
  title: string; // the championship / category
  competition: string; // the event
  year: string;
  rank: string; // label above the year (Champion / 3rd Place ...)
}

const AWARDS: Award[] = [
  {
    title: "Dream Makeup Champion",
    competition: "Chinese Olympic Cup Beauty & Hair Competition",
    year: "2020",
    rank: "Champion",
  },
  {
    title: "Evening Gala Makeup Champion",
    competition: "International Cup Beauty & Hair Competition · Live Model",
    year: "2021",
    rank: "Champion",
  },
  {
    title: "Creative Mask Design Champion",
    competition: "Michigan Elite Cup",
    year: "2018",
    rank: "Champion",
  },
  {
    title: "\u201CMy Lightyear Monroe\u201D Champion",
    competition: "Wednesday Makeup Showcase",
    year: "2020",
    rank: "Champion",
  },
  {
    title: "Creative Nail Art Champion",
    competition: "Michigan Elite Cup",
    year: "2021",
    rank: "Champion",
  },
  {
    title: "National Skills Competition · 3rd Place",
    competition: "51st National Skills Competition · Northern Region, Taiwan",
    year: "2021",
    rank: "3rd Place",
  },
];

/* ------------------------------------------------------------------ */
/*  Silver laurel — two open branches, generated once then mirrored    */
/* ------------------------------------------------------------------ */

const LEAF_PATH = "M0 0 C6 -4 6 -16 0 -25 C-6 -16 -6 -4 0 0 Z";

const CX = 130;
const CY = 122;
const RADIUS = 100;
const LEAF_COUNT = 10;
const START_DEG = 95; // near the bottom
const END_DEG = 238; // stops short of the top -> open wreath

interface Leaf {
  x: number;
  y: number;
  rot: number;
  s: number;
}

function buildBranch(): Leaf[] {
  const leaves: Leaf[] = [];
  for (let i = 0; i < LEAF_COUNT; i++) {
    const t = i / (LEAF_COUNT - 1);
    const ang = START_DEG + t * (END_DEG - START_DEG);
    const rad = (ang * Math.PI) / 180;
    const x = CX + RADIUS * Math.cos(rad);
    const y = CY + RADIUS * Math.sin(rad);
    const rot = ang + 180; // tip follows the tangent
    const s = 0.55 + 0.6 * Math.sin(t * Math.PI);
    leaves.push({ x, y, rot, s });
  }
  return leaves;
}

const BRANCH = buildBranch();

const startRad = (START_DEG * Math.PI) / 180;
const endRad = (END_DEG * Math.PI) / 180;
const STEM_R = RADIUS - 4;
const STEM_PATH = `M ${CX + STEM_R * Math.cos(startRad)} ${CY + STEM_R * Math.sin(startRad)} A ${STEM_R} ${STEM_R} 0 0 1 ${CX + STEM_R * Math.cos(endRad)} ${CY + STEM_R * Math.sin(endRad)}`;

function Branch() {
  return (
    <g>
      <path
        d={STEM_PATH}
        fill="none"
        stroke="#9aa1ab"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.7}
      />
      {BRANCH.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.rot}) scale(${l.s})`}>
          <path d={LEAF_PATH} fill="url(#leafSilver)" />
          <path d="M0 -2 L0 -22" stroke="#6b7280" strokeWidth={0.7} opacity={0.45} />
        </g>
      ))}
    </g>
  );
}

function Laurel() {
  return (
    <svg viewBox="0 0 260 240" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="leafSilver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EAED" />
          <stop offset="55%" stopColor="#A8AEB8" />
          <stop offset="100%" stopColor="#7B828D" />
        </linearGradient>
      </defs>
      <Branch />
      <g transform="translate(260 0) scale(-1 1)">
        <Branch />
      </g>
    </svg>
  );
}

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
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

function Badge({ award }: { award: Award }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex w-40 select-none flex-col items-center sm:w-44"
    >
      {/* Silver laurel framing the year text */}
      <div className="relative aspect-[13/12] w-40 sm:w-44">
        <Laurel />
        <div className="absolute left-1/2 top-[52%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
            {award.rank}
          </span>
          <span className="font-[family-name:var(--font-montserrat)] text-3xl font-light tracking-wide text-gray-800">
            {award.year}
          </span>
        </div>
      </div>

      {/* Caption below — bold title, light sub-line */}
      <div className="mt-2 px-1 text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.16em] text-gray-900">
          {award.title}
        </p>
        <p className="mt-2 font-[family-name:var(--font-montserrat)] text-xs font-light leading-relaxed text-gray-500">
          {award.competition}
        </p>
      </div>
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

        {/* All awards in a single row */}
        <motion.div
          variants={rowVariants}
          className="flex flex-wrap items-start justify-center gap-x-4 gap-y-12 py-14"
        >
          {AWARDS.map((a, i) => (
            <Badge key={i} award={a} />
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div variants={barVariants} className="h-px w-full origin-center bg-black" />
      </motion.div>
    </section>
  );
}