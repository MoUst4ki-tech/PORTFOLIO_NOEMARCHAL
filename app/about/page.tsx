export default function About() {
  return (
    <main className="max-w-3xl mx-auto pb-12">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">À propos</h1>

      <section className="mb-16">
        <p className="text-xl text-gray-700 leading-relaxed">
          Étudiant en informatique à <span className="text-black font-bold">Epitech Lille</span>, je suis passionné par la compréhension globale des systèmes. 
          Du développement d&apos;interfaces web front-end jusqu&apos;à la programmation matérielle bas niveau sur microcontrôleurs, j&apos;aime concevoir des solutions de bout en bout.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-black pb-2">Expériences & Engagement</h2>
        
        <div className="flex flex-col gap-4">
          
          <div className="group p-6 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
              <div>
                <h3 className="font-extrabold text-xl tracking-tight">Développeur Full-Stack</h3>
                <p className="font-mono text-sm opacity-80 mt-1">Trackap — Solutions B2B</p>
              </div>
              <span className="font-mono text-xs border border-current px-3 py-1 uppercase tracking-wider shrink-0">
                2026 - Présent
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Développement d&apos;applications de gestion de flotte de véhicules, intégration de statistiques de location et mise en place de systèmes de géofencing.
            </p>
          </div>

          <div className="group p-6 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
            <div className="mb-4">
              <h3 className="font-extrabold text-xl tracking-tight">Stagiaire IT</h3>
              <p className="font-mono text-sm opacity-80 mt-1">SCC France</p>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Découverte approfondie des infrastructures réseaux et opérations de maintenance matérielle et logicielle.
            </p>
          </div>

          <div className="group p-6 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
            <div className="mb-4">
              <h3 className="font-extrabold text-xl tracking-tight">Serveur en Restauration</h3>
              <p className="font-mono text-sm opacity-80 mt-1">Restauration traditionnelle</p>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Service en salle et relation client. Développement d&apos;une forte capacité d&apos;adaptation, de travail en équipe et de gestion du stress lors des pics d&apos;affluence.
            </p>
          </div>

          <div className="group p-6 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
            <div className="mb-4">
              <h3 className="font-extrabold text-xl tracking-tight">Engagement Social & Leadership</h3>
              <p className="font-mono text-sm opacity-80 mt-1">Bénévolat & Lycée Ozanam</p>
            </div>
            <div className="text-sm leading-relaxed opacity-90 space-y-2">
              <p><strong>Délégué de classe (3 ans) :</strong> Rôle continu de leadership, de représentation et de médiation au sein du Lycée Ozanam.</p>
              <p><strong>Action sociale :</strong> Bénévolat à Lourdes pour l&apos;accompagnement de personnes malades et stage immersif en EHPAD, renforçant le sens des responsabilités.</p>
            </div>
          </div>

        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-black pb-2">Stack Technique & Outils</h2>
        
        <div className="p-8 border border-black rounded-md flex justify-center items-center bg-gray-50/50">
          <img 
            src="https://skillicons.dev/icons?i=c,js,py,html,css,linux,git,github,vscode,nix,ubuntu,debian,arduino,raspberrypi" 
            alt="Technologies utilisées : C, JS, Python, HTML, CSS, Linux, Git, Nix, Ubuntu, Debian, Arduino, Raspberry Pi" 
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}