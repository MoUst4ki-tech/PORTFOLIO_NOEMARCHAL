import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TrackapProject() {
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
            PROJET PROFESSIONNEL // B2B
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Trackap — Plateforme B2B
          </h1>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map(t => (
              <span key={t} className="font-mono text-xs bg-[#F6F4EE] border border-[#DCD8CE] px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg text-[#5C5A54] leading-relaxed border-t border-dashed border-[#DCD8CE] pt-6">
          Dans le cadre de mon rôle de développeur Full-Stack chez Trackap, j&apos;ai conçu et implémenté des modules clés pour la gestion de flotte B2B, de la base de données jusqu&apos;à l&apos;interface utilisateur.
        </p>

        <section>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-dashed border-[#DCD8CE]">
            Missions &amp; Réalisations
          </h2>
          <ul className="space-y-4 mt-4 text-[#5C5A54] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">01.</span>
              <span><strong className="text-[#181816]">Système de Location (Rent) :</strong> Développement d&apos;un module complet permettant le suivi des contrats, la vérification des disponibilités des véhicules et la gestion des statuts de flotte en temps réel.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">02.</span>
              <span><strong className="text-[#181816]">Catalogue de Partage (Sharing) :</strong> Conception d&apos;une interface catalogue B2B centralisée facilitant la consultation, l&apos;attribution et la mutualisation des véhicules.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">03.</span>
              <span><strong className="text-[#181816]">Front-End (React &amp; TypeScript) :</strong> Création d&apos;interfaces d&apos;administration claires et réactives avec un typage strict pour fiabiliser les flux de données.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">04.</span>
              <span><strong className="text-[#181816]">Back-End &amp; API (Node.js, Express, MongoDB) :</strong> Architecture de l&apos;API REST et optimisation des requêtes MongoDB sur d&apos;importants volumes de données télématiques.</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}