export default function About() {
  return (
    <main className="space-y-12 pb-12">
      <section className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-10 shadow-xs">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D71921] block mb-3">
          01 // PROFIL
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-[#181816]">
          À propos
        </h1>
        <p className="text-lg md:text-xl text-[#5C5A54] leading-relaxed">
          Étudiant en informatique à <span className="text-[#181816] font-bold">Epitech Lille</span>, je suis passionné par la compréhension globale des systèmes. 
          Du développement d&apos;interfaces web front-end jusqu&apos;à la programmation matérielle bas niveau sur microcontrôleurs, j&apos;aime concevoir des solutions de bout en bout.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed border-[#DCD8CE]">
          <h2 className="text-2xl font-bold text-[#181816]">Expériences &amp; Engagement</h2>
          <span className="font-mono text-xs text-[#5C5A54]">02 // PARCOURS</span>
        </div>
        
        <div className="flex flex-col gap-4">
          
          <div className="bg-white p-6 border border-[#DCD8CE] rounded-2xl hover:border-[#181816] hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-[#181816]">
                  Développeur Full-Stack
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#D71921] mt-1">
                  Trackap — Solutions B2B
                </p>
              </div>
              <span className="font-mono text-xs bg-[#F6F4EE] border border-[#DCD8CE] text-[#181816] px-3 py-1 rounded-full uppercase tracking-wider shrink-0 w-fit">
                2026 - Présent
              </span>
            </div>
            <p className="text-sm text-[#5C5A54] leading-relaxed">
              Développement d&apos;applications de gestion de flotte de véhicules, intégration de statistiques de location et mise en place de systèmes de géofencing.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#DCD8CE] rounded-2xl hover:border-[#181816] hover:shadow-md transition-all duration-300">
            <div className="mb-4">
              <h3 className="font-extrabold text-xl tracking-tight text-[#181816]">
                Stagiaire IT
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-[#5C5A54] mt-1">
                SCC France
              </p>
            </div>
            <p className="text-sm text-[#5C5A54] leading-relaxed">
              Découverte approfondie des infrastructures réseaux et opérations de maintenance matérielle et logicielle.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#DCD8CE] rounded-2xl hover:border-[#181816] hover:shadow-md transition-all duration-300">
            <div className="mb-4">
              <h3 className="font-extrabold text-xl tracking-tight text-[#181816]">
                Serveur en Restauration
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-[#5C5A54] mt-1">
                Restauration traditionnelle
              </p>
            </div>
            <p className="text-sm text-[#5C5A54] leading-relaxed">
              Service en salle et relation client. Développement d&apos;une forte capacité d&apos;adaptation, de travail en équipe et de gestion du stress lors des pics d&apos;affluence.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#DCD8CE] rounded-2xl hover:border-[#181816] hover:shadow-md transition-all duration-300">
            <div className="mb-4">
              <h3 className="font-extrabold text-xl tracking-tight text-[#181816]">
                Engagement Social &amp; Leadership
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-[#5C5A54] mt-1">
                Bénévolat &amp; Lycée Ozanam
              </p>
            </div>
            <div className="text-sm text-[#5C5A54] leading-relaxed space-y-2">
              <p>
                <strong className="text-[#181816]">Délégué de classe (3 ans) :</strong> Rôle continu de leadership, de représentation et de médiation au sein du Lycée Ozanam.
              </p>
              <p>
                <strong className="text-[#181816]">Action sociale :</strong> Bénévolat à Lourdes pour l&apos;accompagnement de personnes malades et stage immersif en EHPAD, renforçant le sens des responsabilités.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed border-[#DCD8CE]">
          <h2 className="text-2xl font-bold text-[#181816]">Stack Technique &amp; Outils</h2>
          <span className="font-mono text-xs text-[#5C5A54]">03 // STACK</span>
        </div>
        
        <div className="bg-white p-8 border border-[#DCD8CE] rounded-2xl flex justify-center items-center shadow-xs">
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