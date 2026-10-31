import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import CopyButton from '@/components/CopyButton';

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
    <main className="max-w-2xl mx-auto pb-12">
      <div className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-10 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D71921] block mb-3">
          CONNEXION // DIRECTE
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Contact</h1>
        <p className="text-[#5C5A54] text-base md:text-lg leading-relaxed">
          Une opportunité, un projet ou simplement envie d&apos;échanger ? Vous pouvez m&apos;écrire directement ou copier mes coordonnées en un clic.
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white border border-[#DCD8CE] rounded-2xl hover:border-[#181816] transition-colors">
          <a href="mailto:noemarchal59@gmail.com" className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#F6F4EE] flex items-center justify-center text-[#D71921]">
              <Mail size={18} />
            </span>
            <div>
              <span className="font-bold block text-sm">Email</span>
              <span className="text-sm font-mono text-[#5C5A54]">noemarchal59@gmail.com</span>
            </div>
          </a>
          <CopyButton textToCopy="noemarchal59@gmail.com" />
        </div>
        
        {/* Téléphone */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white border border-[#DCD8CE] rounded-2xl hover:border-[#181816] transition-colors">
          <a href="tel:0622367724" className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#F6F4EE] flex items-center justify-center text-[#D71921]">
              <Phone size={18} />
            </span>
            <div>
              <span className="font-bold block text-sm">Téléphone</span>
              <span className="text-sm font-mono text-[#5C5A54]">06 22 36 77 24</span>
            </div>
          </a>
          <CopyButton textToCopy="0622367724" />
        </div>
        
        {/* GitHub */}
        <a 
          href="https://github.com/MoUst4ki-tech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center justify-between p-5 bg-white border border-[#DCD8CE] rounded-2xl hover:border-[#181816] transition-colors"
        >
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#F6F4EE] flex items-center justify-center group-hover:bg-[#181816] group-hover:text-white transition-colors">
              <GithubIcon size={18} />
            </span>
            <div>
              <span className="font-bold block text-sm">GitHub</span>
              <span className="text-sm font-mono text-[#5C5A54]">MoUst4ki-tech</span>
            </div>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#F6F4EE] flex items-center justify-center group-hover:bg-[#D71921] group-hover:text-white transition-colors">
            <ArrowUpRight size={16} />
          </span>
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/no%C3%A9-marchal-21221a27b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center justify-between p-5 bg-white border border-[#DCD8CE] rounded-2xl hover:border-[#181816] transition-colors"
        >
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#F6F4EE] flex items-center justify-center group-hover:bg-[#181816] group-hover:text-white transition-colors">
              <LinkedinIcon size={18} />
            </span>
            <div>
              <span className="font-bold block text-sm">LinkedIn</span>
              <span className="text-sm font-mono text-[#5C5A54]">Noé Marchal</span>
            </div>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#F6F4EE] flex items-center justify-center group-hover:bg-[#D71921] group-hover:text-white transition-colors">
            <ArrowUpRight size={16} />
          </span>
        </a>
      </div>
    </main>
  );
}