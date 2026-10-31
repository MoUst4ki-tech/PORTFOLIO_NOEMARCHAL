import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  const isExternalOrEmpty = href === '#';

  return (
    <Link 
      href={href} 
      className="group flex flex-col justify-between p-6 bg-white border border-[#DCD8CE] rounded-2xl hover:border-[#181816] hover:shadow-md transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-dashed border-[#DCD8CE]">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#5C5A54] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71921] opacity-70 group-hover:opacity-100 transition-opacity" />
            MODULE
          </span>
          {!isExternalOrEmpty && (
            <span className="w-7 h-7 rounded-full bg-[#F6F4EE] flex items-center justify-center group-hover:bg-[#D71921] group-hover:text-white transition-colors">
              <ArrowUpRight size={15} />
            </span>
          )}
        </div>

        <h3 className="font-extrabold text-xl mb-2.5 tracking-tight text-[#181816] group-hover:text-[#D71921] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#5C5A54] mb-6 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-mono bg-[#F6F4EE] text-[#181816] border border-[#DCD8CE] px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}