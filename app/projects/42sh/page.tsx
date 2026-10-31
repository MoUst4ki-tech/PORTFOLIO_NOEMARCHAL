import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Shell42() {
  return (
    <main className="max-w-2xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 mb-10 font-bold hover:underline">
        <ArrowLeft size={20} /> Retour
      </Link>
      
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">42sh</h1>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {['C', 'Système Unix', 'Parsing', 'Processus'].map(t => (
          <span key={t} className="font-mono text-xs border border-black px-3 py-1 uppercase tracking-wider">{t}</span>
        ))}
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg text-black font-medium">
          Création d'un interpréteur de commandes Unix (shell) from scratch inspiré de tcsh. Ce projet exige une gestion rigoureuse des appels système, des descripteurs de fichiers et du cycle de vie des processus.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Architecture & Fonctionnalités</h2>
          <ul className="list-none space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Pipelines & Redirections :</strong> Support complet des pipes multiples (<code>|</code>) et des redirections standards (<code>&gt;</code>, <code>&gt;&gt;</code>, <code>&lt;</code>, <code>&lt;&lt; heredoc</code>).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Logique d'exécution :</strong> Traitement des opérateurs conditionnels (<code>&&</code>, <code>||</code>) et séquentiels (<code>;</code>).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Variables & Environnement :</strong> Gestion des variables locales et d'environnement avec expansion à la volée (ex: <code>$USER</code>, <code>$?</code>).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Historique & Alias :</strong> Moteur de substitution d'historique (<code>!ls</code>, <code>!-1</code>) et système d'alias protégeant contre les boucles infinies.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black text-xl leading-none">•</span>
              <span><strong>Job Control & Globbing :</strong> Gestion des tâches en arrière-plan (<code>&</code>, <code>fg</code>, <code>bg</code>, <code>jobs</code>) et auto-complétion des chemins de fichiers (<code>*</code>, <code>?</code>, <code>[]</code>).</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}