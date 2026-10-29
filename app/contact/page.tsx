import { Mail, Phone } from 'lucide-react';
import CopyButton from '@/components/CopyButton';

// SVG avec le style lucide-react
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 tracking-tight">Contact</h1>
      <p className="text-gray-600 text-lg mb-10 leading-relaxed">
        Pour toute demande de projet ou de collaboration
      </p>
      
      <div className="flex flex-col gap-4">
        
        <a href="mailto:noemarchal59@gmail.com" className="group flex items-center justify-between p-5 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <span className="font-bold tracking-wide">Email</span>
          </div>
          <div className="relative flex items-center">
            <span className="text-sm font-mono transition-transform duration-300 group-hover:-translate-x-8">
              noemarchal59@gmail.com
            </span>
            <CopyButton textToCopy="noemarchal59@gmail.com" />
          </div>
        </a>
        
        <a href="tel:0622367724" className="group flex items-center justify-between p-5 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <span className="font-bold tracking-wide">Téléphone</span>
          </div>
          <div className="relative flex items-center">
            <span className="text-sm font-mono transition-transform duration-300 group-hover:-translate-x-8">
              06 22 36 77 24
            </span>
            <CopyButton textToCopy="0622367724" />
          </div>
        </a>
        
        <a href="https://github.com/MoUst4ki-tech" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
          <div className="flex items-center gap-3">
            <GithubIcon size={20} />
            <span className="font-bold tracking-wide">GitHub</span>
          </div>
          <span className="text-sm font-mono">MoUst4ki-tech ↗</span>
        </a>
        
        <a href="https://www.linkedin.com/in/noé-marchal-21221a27b/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
          <div className="flex items-center gap-3">
            <LinkedinIcon size={20} />
            <span className="font-bold tracking-wide">LinkedIn</span>
          </div>
          <span className="text-sm font-mono">Noé Marchal ↗</span>
        </a>
        
      </div>
    </main>
  );
}