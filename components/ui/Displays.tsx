import Image from 'next/image';

export default function Displays() {
  // Placeholder images using the 4:5 Instagram ratio
  const images = [
    "https://picsum.photos/seed/beauty1/800/1000", 
    "https://picsum.photos/seed/beauty2/800/1000", 
    "https://picsum.photos/seed/beauty3/800/1000",
    "https://picsum.photos/seed/beauty4/800/1000",
    "https://picsum.photos/seed/beauty5/800/1000",
  ];

  return (
    <>
        <div className="p-4.5 text-center font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]">
            <h1 className="relative flex align-center text-white justify-center w-full 
                        text-2xl mb-2 opacity-0 animate-fade-in-up [animation-delay:1.5s]">
                Featured Looks
            </h1>
        </div> 
        
        {/* The Horizontal Scroll Gallery Track 
          gap-6 on mobile gets right side space, 
          px gets left side space, the space between images
          is the gap.
          snap-x snap-mandatory for the scroll snapping,
          no-scrollbar hides the scrollbar while still allowing scrolling,
        */}
        <div className="flex w-full gap-6 px-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar opacity-0 animate-fade-in-up [animation-delay:2s]">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[80vw] md:w-96 aspect-[4/5] snap-center overflow-hidden bg-gray-900"
            >
              <Image
                src={src}
                alt={`Featured Look ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" 
              />
            </div>
          ))}
        </div>
    </>
  );
}