"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const linkStyle = (path: string) =>
    `px-4 py-1.5 rounded-full border transition-all duration-200 ${
      isActive(path)
        ? 'bg-[#181816] border-[#181816] text-[#F6F4EE] font-semibold shadow-2xs'
        : 'bg-transparent border-transparent text-[#181816] hover:bg-[#EFECE6] hover:border-[#DCD8CE]'
    }`;

  return (
    <header className="mb-14">
      <nav 
        aria-label="Navigation principale"
        className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-md border border-[#DCD8CE] px-6 py-4 rounded-2xl sm:rounded-full shadow-xs"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D71921] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-extrabold text-lg tracking-tight text-[#181816]">Noé Marchal</span>
          <span className="font-mono text-xs text-[#5C5A54] hidden md:inline-block border-l border-dashed border-[#DCD8CE] pl-3">
            DEV // SYS
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          <Link href="/about" className={linkStyle('/about')}>
            À propos
          </Link>
          
          <Link href="/projects" className={linkStyle('/projects')}>
            Projets
          </Link>
          
          <Link href="/contact" className={linkStyle('/contact')}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}