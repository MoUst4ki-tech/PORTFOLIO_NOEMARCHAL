import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-14">
      <nav 
        aria-label="Navigation principale"
        className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-md border border-[#DCD8CE] px-6 py-4 rounded-2xl sm:rounded-full shadow-xs"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D71921] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-extrabold text-lg tracking-tight">Noé Marchal</span>
          <span className="font-mono text-xs text-[#5C5A54] hidden md:inline-block border-l border-dashed border-[#DCD8CE] pl-3">
            DEV // SYS
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6 text-sm font-medium">
          <Link 
            href="/about" 
            className="px-3 py-1.5 rounded-full hover:bg-[#EFECE6] transition-colors"
          >
            À propos
          </Link>
          <Link 
            href="/projects" 
            className="px-3 py-1.5 rounded-full hover:bg-[#EFECE6] transition-colors"
          >
            Projets
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-1.5 rounded-full bg-[#181816] text-[#F6F4EE] hover:bg-[#D71921] transition-colors font-mono text-xs uppercase tracking-wider"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}