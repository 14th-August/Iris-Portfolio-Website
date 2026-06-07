"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const CONTACT = {
  brand: "IRIS DESIGN",
  heading: "Contact",
  subtitle: "HSIANG-NING YU",
  addressLines: ["Vancouver", "British Columbia", "Canada"],
  email: "linda20010801@gmail.com.com",
  instagramUrl: "https://instagram.com/_iris_makeup",
  copyright: "Copyright © 2026 Iris Design",
  editorNote: "Website made by Casey",
};

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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
function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-start gap-3 text-gray-800"
    >
      <span className="mt-px flex-shrink-0 text-black">{icon}</span>
      <span className="font-[family-name:var(--font-montserrat)] text-[13px] font-light leading-relaxed tracking-[0.1em]">
        {children}
      </span>
    </motion.div>
  );
}
function AnimatedLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-block"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-95 group-active:scale-x-100" />
    </a>
  );
}

export default function Contact() {
  return (
    <section className="w-full bg-white">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col px-6 pb-16 pt-12 sm:px-10 md:px-16 md:pb-20 md:pt-16 lg:px-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={rowVariants}
          className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-y-10 py-12 md:grid-cols-[1fr_auto_1fr] md:gap-x-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center md:items-end md:text-right"
          >
            <h2 className="font-[family-name:var(--font-montserrat)] text-5xl font-extralight tracking-tight text-black md:text-6xl">
              {CONTACT.brand}
            </h2>
            <span className="mt-4 font-[family-name:var(--font-montserrat)] text-sm font-light uppercase tracking-[0.3em] text-gray-600 md:-mr-[0.3em]">
              {CONTACT.heading}
            </span>
            <span className="mt-2 font-[family-name:var(--font-montserrat)] text-[10px] font-medium uppercase tracking-[0.42em] text-gray-500 md:-mr-[0.42em]">
              {CONTACT.subtitle}
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto h-px w-24 origin-center bg-black md:mx-0 md:h-40 md:w-px"
          />

          <motion.div
            variants={rowVariants}
            className="flex flex-col items-center gap-7 md:items-start"
          >
            <ContactRow icon={<MapPin size={18} strokeWidth={1.5} />}>
              {CONTACT.addressLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </ContactRow>

            <ContactRow icon={<Mail size={18} strokeWidth={1.5} />}>
              <AnimatedLink href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </AnimatedLink>
            </ContactRow>

            <ContactRow icon={<FaInstagram size={18} />}>
              <AnimatedLink href={CONTACT.instagramUrl} external>
                Follow on Instagram
              </AnimatedLink>
            </ContactRow>
          </motion.div>
        </motion.div>

        <motion.div
          variants={rowVariants}
          className="flex flex-col items-center gap-2 pt-12 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.1em] text-gray-500"
          >
            {CONTACT.copyright}
          </motion.span>

          <motion.span
            variants={itemVariants}
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.1em] text-gray-400"
          >
            {CONTACT.editorNote}
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}