import Link from 'next/link';
import { ArrowRight, Code2, Cpu, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="space-y-12 pb-12">
      {/* Hero Widget */}
      <section className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-12 shadow-xs">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F6F4EE] border border-[#DCD8CE] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D71921] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#181816]">
            Étudiant Epitech & Développeur @ Trackap
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Développeur Full-Stack <br className="hidden sm:block" />
          <span className="text-[#5C5A54]">&amp; Systèmes Embarqués.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#5C5A54] mb-10 max-w-2xl leading-relaxed">
          Je conçois des applications web B2B claires et performantes, tout en développant des projets matériels et logiciels de bas niveau en C et sur microcontrôleurs.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 bg-[#181816] text-[#F6F4EE] px-6 py-3.5 rounded-full font-medium hover:bg-[#D71921] transition-colors"
          >
            Découvrir mes projets <ArrowRight size={18} />
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 bg-[#F6F4EE] border border-[#DCD8CE] text-[#181816] px-6 py-3.5 rounded-full font-medium hover:border-[#181816] transition-colors"
          >
            Mon parcours
          </Link>
        </div>
      </section>

      {/* Grille des 3 piliers (lisibilité immédiate) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#EFECE6]/70 border border-[#DCD8CE] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#5C5A54]">01 // WEB</span>
            <Code2 size={20} className="text-[#D71921]" />
          </div>
          <h2 className="font-bold text-lg mb-2">Full-Stack B2B</h2>
          <p className="text-sm text-[#5C5A54] leading-relaxed">
            Interfaces React/TypeScript et API Node.js/MongoDB pensées pour la gestion de flotte et la fiabilité.
          </p>
        </div>

        <div className="bg-[#EFECE6]/70 border border-[#DCD8CE] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#5C5A54]">02 // SYSTÈME</span>
            <Terminal size={20} className="text-[#D71921]" />
          </div>
          <h2 className="font-bold text-lg mb-2">Bas Niveau &amp; Unix</h2>
          <p className="text-sm text-[#5C5A54] leading-relaxed">
            Développement en C sous Linux (Debian), création d&apos;interpréteurs shell et moteurs graphiques.
          </p>
        </div>

        <div className="bg-[#EFECE6]/70 border border-[#DCD8CE] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#5C5A54]">03 // HARDWARE</span>
            <Cpu size={20} className="text-[#D71921]" />
          </div>
          <h2 className="font-bold text-lg mb-2">IoT &amp; Embarqué</h2>
          <p className="text-sm text-[#5C5A54] leading-relaxed">
            Prototypage sur ESP32, M5Stack et Raspberry Pi avec capteurs GPS, écrans OLED et modules radio.
          </p>
        </div>
      </section>
    </main>
  );
}