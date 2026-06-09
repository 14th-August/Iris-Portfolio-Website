"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ImageItem, getModelName } from '@/utils/data';

interface GalleryProps {
  images: ImageItem[];
  actionType?: 'route' | 'lightbox';
  showLabels?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 40, 
      damping: 15, 
      mass: 1, 
      duration: 1.2 
    }
  }
};

export default function EditorialGallery({ images, actionType = 'route', showLabels = true }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Lock body scroll + Escape-to-close while lightbox is open
  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedImage]);

  if (!images || images.length === 0) return <p>No images found.</p>;  
  const CardContent = ({ img, eager }: { img: ImageItem; eager: boolean }) => (
    <>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        loading={eager ? 'eager' : 'lazy'}
        priority={eager}
      />
      { showLabels && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
          <h3 className="text-white font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em]">
            @{getModelName(img.modelId)}
          </h3>
        </div>
      )}
    </>
  );

  const lightbox = (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
          className="bg-white flex items-center justify-center cursor-zoom-out"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100dvh',
            zIndex: 9999,
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="p-3 bg-neutral-100 hover:bg-neutral-200 text-black rounded-full cursor-pointer shadow-md transition-colors"
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10000,
            }}
            aria-label="Close fullscreen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative cursor-default"
            style={{ width: '90vw', maxWidth: '800px', height: '80dvh' }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="group relative w-full aspect-[4/5] overflow-hidden bg-neutral-100"
            >
              {actionType === 'route' ? (
                <Link href={`/collections/${img.modelId}`} className="absolute inset-0 z-20 cursor-pointer">
                  <CardContent img={img} eager={index === 0} />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-label={`View ${img.modelId} fullscreen`}
                >
                  <CardContent img={img} eager={index === 0} />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Render lightbox into document.body so no parent stacking context can trap it */}
      {typeof document !== "undefined" && createPortal(lightbox, document.body)}
    </>
  );
}