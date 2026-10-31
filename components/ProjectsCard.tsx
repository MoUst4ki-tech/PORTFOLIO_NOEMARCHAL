import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col justify-between p-6 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300"
    >
      <div>
        <h3 className="font-extrabold text-2xl mb-3 tracking-tight">{title}</h3>
        <p className="text-sm mb-6 opacity-80 leading-relaxed">{description}</p>
      </div>
      
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono border border-current px-2 py-1 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm font-bold tracking-wide">
          Voir le projet <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}