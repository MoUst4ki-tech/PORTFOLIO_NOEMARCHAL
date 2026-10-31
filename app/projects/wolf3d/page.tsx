import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Wolf3D() {
  return (
    <main className="max-w-3xl mx-auto pb-12">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-[#DCD8CE] text-sm font-medium hover:border-[#181816] transition-colors"
      >
        <ArrowLeft size={16} /> Retour aux projets
      </Link>
      
      <article className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-12 space-y-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#D71921] block mb-2">
            PROJET EPITECH // MOTEUR GRAPHIQUE
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Wolf3D</h1>
          <div className="flex flex-wrap gap-2">
            {['C', 'CSFML', 'Mathématiques', 'Moteur 3D'].map(t => (
              <span key={t} className="font-mono text-xs bg-[#F6F4EE] border border-[#DCD8CE] px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg text-[#5C5A54] leading-relaxed border-t border-dashed border-[#DCD8CE] pt-6">
          Développement d&apos;un jeu et moteur 3D temps réel basé sur la technique du Raycasting (inspiré de Wolfenstein 3D) avec la bibliothèque CSFML.
        </p>

        <section>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-dashed border-[#DCD8CE]">
            Architecture &amp; Fonctionnalités
          </h2>
          <ul className="space-y-4 mt-4 text-[#5C5A54] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">01.</span>
              <span><strong className="text-[#181816]">Génération procédurale :</strong> Mode histoire sur carte dédiée ou mode survie infini avec génération aléatoire de labyrinthes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">02.</span>
              <span><strong className="text-[#181816]">Système d&apos;armement :</strong> Plusieurs armes jouables avec gestion des munitions, du rechargement et des animations par sprites.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">03.</span>
              <span><strong className="text-[#181816]">IA &amp; Vagues d&apos;ennemis :</strong> Différents archétypes d&apos;ennemis dotés de détection de ligne de vue et de déplacement autonome.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">04.</span>
              <span><strong className="text-[#181816]">Immersion &amp; HUD :</strong> Lampe torche avec batterie dynamique, système de particules, mini-carte avec cône de vision et support manette/clavier personnalisable.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">05.</span>
              <span><strong className="text-[#181816]">Sauvegarde complète :</strong> Sérialisation de l&apos;état du joueur, des ennemis, de l&apos;inventaire et des raccourcis dans des fichiers de sauvegarde.</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}