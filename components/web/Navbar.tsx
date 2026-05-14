export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
      
      {/* Logo Section */}
      <div className="flex flex-col items-center leading-none">
        {/* Latin Name */}
        <span className="font-[family-name:var(--font-playfair)] text-2xl tracking-widest uppercase">
          Casey Adams
        </span>
        
        {/* Mandarin Subtitle / Logo Secondary */}
        <span className="font-[family-name:var(--font-zcool)] text-lg text-gray-600 mt-1">
          专业化妆师
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 font-sans uppercase text-sm tracking-tight">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      
    </nav>
  );
}