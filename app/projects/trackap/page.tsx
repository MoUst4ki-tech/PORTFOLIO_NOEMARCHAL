import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TrackapProject() {
  return (
    <main className="max-w-2xl mx-auto pb-12">
      <Link href="/projects" className="inline-flex items-center gap-2 mb-10 font-bold hover:underline">
        <ArrowLeft size={20} /> Retour
      </Link>
      
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Trackap — Plateforme B2B</h1>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map(t => (
          <span key={t} className="font-mono text-xs border border-black px-3 py-1 uppercase tracking-wider">{t}</span>
        ))}
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg text-black font-medium">
          Dans le cadre de mon rôle de développeur Full-Stack chez Trackap, j&apos;ai conçu et implémenté des modules critiques pour la gestion de flotte B2B, couvrant l&apos;ensemble de la stack technique, de la base de données jusqu&apos;à l&apos;interface utilisateur.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 border-b border-black pb-2">Missions & Réalisations</h2>
          <ul className="list-none space-y-4 mt-6">
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Système de Location (Rent) :</strong> Développement d&apos;un module complet de gestion des locations permettant le suivi des contrats, la vérification des disponibilités des véhicules et la gestion des statuts de flotte en temps réel.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Catalogue de Partage (Sharing) :</strong> Conception d&apos;une interface catalogue B2B centralisée facilitant la consultation, l&apos;attribution et la mutualisation des véhicules entre les différents acteurs.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Front-End (React & TypeScript) :</strong> Création d&apos;interfaces d&apos;administration responsives et robustes. L&apos;utilisation stricte de TypeScript a permis de sécuriser les flux de données complexes liés à la gestion de flotte.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Back-End & API (Node.js, Express, MongoDB) :</strong> Architecture de l&apos;API REST pour supporter les nouvelles fonctionnalités, avec modélisation et optimisation des requêtes MongoDB pour garantir des temps de réponse rapides sur de larges volumes de données télématiques.</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}