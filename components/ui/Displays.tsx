'use client'

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import AutoScroll from 'embla-carousel-auto-scroll';

//defines the props to use.
interface ImageDisplayProps {
    images: string[]; // Array of image URLs to display
}
export default function Displays({ images }: ImageDisplayProps) {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true, duration: 20 }, // Embla options
        [
            WheelGesturesPlugin(),
            AutoScroll({ 
                speed: 0.5, 
                startDelay: 0,
                stopOnInteraction: false, 
                stopOnMouseEnter: true
            })
        ]
    );

    return (
        <>
            <div className="p-4.5 text-center font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]">
                <h1 className="relative flex align-center text-white justify-center w-full 
                        text-2xl opacity-0 animate-fade-in-up [animation-delay:1.5s]">
                    Featured Looks
                </h1>
            </div>

            {/* The Horizontal Scroll Gallery Track 
            gap-6 on mobile gets right side space, 
            px gets left side space, the space between images
            is the gap. mt is margin top.
            we will now use a library called Embla Carousel to make the horizontal scroll 
            work with snapping and looping. Carousel effect.
            */}

            <div className="w-full mt-0 overflow-hidden opacity-0 animate-fade-in-up [animation-delay:2s]"
                ref={emblaRef}
            >
                <div className="flex gap-6 px-6 pt-2 pb-8">
                    {images.map((src, index) => ( // src => actual image value, index => which image

                        <div
                            key={index} // needed so react knows what images to update
                            className="relative flex-none w-[80vw] md:w-96 aspect-[4/5] group select-none"
                            // keeps the same aspect ratio as instagram. relative flex-none keeps images side by side
                            // and prevents shrinking. overflow-hidden ensures images don't spill out of their container. 
                            // bg-gray-900 is a placeholder background color while images load.
                        >

                            {/* Next.js Image component optimizes images for performance. 
                            src is the image, alt just tells us what image is, fill
                            will make the image fit whole container
                            object cover ensures the image covers the container without distortion,
                            sizes tells the browser how much space the image will take up, allowing it to choose the right size to load for performance.
                            */}
                            
                                <Image
                                    src={src}
                                    alt={`Featured Look ${index + 1}`}
                                    fill
                                    draggable={false}
                                    className="object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}