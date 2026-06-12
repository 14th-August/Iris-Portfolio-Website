import Link from "next/link";

/* Video component that gets rendered at the start of
the site loading, switches video dimensions for mobile
the video needs to be an .mp4 in public. On top of that is a see through white
title and a link to contact info. */
export default function VideoHero() {
  return (
      <div className="relative flex items-center justify-center w-full h-[77.5vh] md:h-[80vh] overflow-hidden font-sans">  
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        muted
        loop
        playsInline
        poster="/photos/personal/IMG_0177.JPG"
        src="/photos/IrisVideoV3.mp4"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/45 -z-10 select-none" />
      <div className="z-10 p-16 text-center text-white font-[family-name:var(--font-montserrat)] uppercase tracking-[0.3em]">
        <h1 className="cursor-default mb-4 text-2xl tracking-[0.2em] opacity-30 uppercase md:text-7xl">
            Iris Beauty
        </h1>
        <p className="cursor-default mb-12 font-light tracking-[0.2em] opacity-30 md:text-xl">
            Make Up Artist  
        </p>
        
        <Link href="/contact" className="relative group inline-block z-10 p-2 text-center opacity-30 text-white font-[family-name:var(--font-montserrat)] uppercase tracking-[0.3em] 
            hover:opacity-80 transition-opacity duration-200 active:opacity-80 transition-opacity duration-200">
                Contact Now!
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-active:scale-x-100 group-hover:scale-x-98 transition-transform duration-300 origin-left"></span>        
        </Link>
      </div>

    </div>
  );
}