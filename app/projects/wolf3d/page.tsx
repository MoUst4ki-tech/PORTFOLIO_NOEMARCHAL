import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Wolf3D() {
  return (
    <main className="max-w-2xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 mb-10 font-bold hover:underline">
        <ArrowLeft size={20} /> Retour
      </Link>
      
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Wolf3D</h1>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {['C', 'CSFML', 'Mathématiques', 'Moteur 3D'].map(t => (
          <span key={t} className="font-mono text-xs border border-black px-3 py-1 uppercase tracking-wider">{t}</span>
        ))}
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg text-black font-medium">
          Développement d'un moteur 3D basé sur la technique du Raycasting (similaire à Wolfenstein 3D) en utilisant la bibliothèque CSFML.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Architecture & Fonctionnalités</h2>
          <ul className="list-none space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Génération procédurale :</strong> Possibilité de jouer sur une carte codée en dur ou générée via un algorithme de labyrinthe.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Système d'armement :</strong> Arsenal varié (Glock, Fusil, Pompe, Corps à corps) avec gestion des munitions, rechargement et animations.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>IA & Ennemis :</strong> Système de vagues avec différents profils (Soldat, Officier, Rat, Boss "Mouskoli"), intégrant pathfinding et ligne de vue.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Ambiance & HUD :</strong> Éclairage dynamique via une lampe torche (gestion de la batterie), effets de particules, mini-map, et retours visuels (sang).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Système de Sauvegarde :</strong> Parsing de fichiers texte structurés pour sauvegarder les entités, l'inventaire et les paramètres du joueur.</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}