'use client'

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion, AnimatePresence } from 'framer-motion';

/* The carouselling photos at the beginning of the site.
   Clicking any image opens a fullscreen lightbox identical to
   EditorialGallery's (portal, fade/scale animation, Escape +
   click-outside to close, body scroll-lock). */

interface RecommendedPhotos {
    images: string[];
}

export default function Displays({ images }: RecommendedPhotos) {
    // Which image is open in the lightbox (null = closed)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [emblaRef] = useEmblaCarousel(
        { loop: true, duration: 20 }, // dragFree removed to avoid auto-scroll freeze
        [
            WheelGesturesPlugin(),
            AutoScroll({
                speed: 0.5,
                startDelay: 0,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            })
        ]
    );

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
                            src={selectedImage}
                            alt="Featured look fullscreen"
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
        <div className="w-full bg-white text-black">
            <div className="p-4.5 text-center font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]">
                <h1 className="relative flex align-center text-black justify-center w-full
                        text-2xl opacity-0 animate-fade-in-up [animation-delay:1.5s]">
                    Featured Looks
                </h1>
            </div>

            <div className="w-full mt-0 overflow-hidden opacity-0 animate-fade-in-up [animation-delay:2s]"
                ref={emblaRef}
            >
                <div className="flex gap-6 px-6 pt-2 pb-8">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative flex-none w-[80vw] md:w-96 aspect-[4/5] group select-none"
                        >
                            {/* Button overlay makes the whole image clickable to open the lightbox */}
                            <button
                                type="button"
                                onClick={() => setSelectedImage(src)}
                                className="absolute inset-0 z-20 cursor-pointer"
                                aria-label={`View featured look ${index + 1} fullscreen`}
                            >
                                <Image
                                    src={src}
                                    alt={`Featured Look ${index + 1}`}
                                    fill
                                    draggable={false}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Render lightbox into document.body so no parent stacking context can trap it */}
            {typeof document !== "undefined" && createPortal(lightbox, document.body)}
        </div>
    );
}