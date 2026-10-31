import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Shell42() {
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
            PROJET EPITECH // SYSTÈME UNIX
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">42sh</h1>
          <div className="flex flex-wrap gap-2">
            {['C', 'Système Unix', 'Parsing', 'Processus'].map(t => (
              <span key={t} className="font-mono text-xs bg-[#F6F4EE] border border-[#DCD8CE] px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg text-[#5C5A54] leading-relaxed border-t border-dashed border-[#DCD8CE] pt-6">
          Création d&apos;un interpréteur de commandes Unix (shell) complet en C inspiré de tcsh, mettant l&apos;accent sur la gestion des appels système, des descripteurs de fichiers et des processus.
        </p>

        <section>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-dashed border-[#DCD8CE]">
            Architecture &amp; Fonctionnalités
          </h2>
          <ul className="space-y-4 mt-4 text-[#5C5A54] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">01.</span>
              <span><strong className="text-[#181816]">Pipelines &amp; Redirections :</strong> Support complet des pipes multiples (<code>|</code>) et des redirections (<code>&gt;</code>, <code>&gt;&gt;</code>, <code>&lt;</code>, <code>&lt;&lt; heredoc</code>).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">02.</span>
              <span><strong className="text-[#181816]">Logique d&apos;exécution :</strong> Traitement des opérateurs conditionnels (<code>&amp;&amp;</code>, <code>||</code>) et séquentiels (<code>;</code>).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">03.</span>
              <span><strong className="text-[#181816]">Variables &amp; Environnement :</strong> Gestion des variables locales et d&apos;environnement avec expansion dynamique (<code>$USER</code>, <code>$status</code>).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">04.</span>
              <span><strong className="text-[#181816]">Historique &amp; Alias :</strong> Substitution d&apos;historique (<code>!ls</code>, <code>!!</code>) et système d&apos;alias avec détection des boucles infinies.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">05.</span>
              <span><strong className="text-[#181816]">Job Control &amp; Globbing :</strong> Gestion des tâches en arrière-plan (<code>&amp;</code>, <code>fg</code>, <code>bg</code>, <code>jobs</code>) et expansion des jokers (<code>*</code>, <code>?</code>, <code>[]</code>).</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}