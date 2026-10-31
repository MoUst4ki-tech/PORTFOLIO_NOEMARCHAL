export default function About() {
  return (
    <main className="space-y-14 pb-12">
      {/* Introduction */}
      <section className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D71921] block mb-3">
          01 // PROFIL
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          À propos de moi
        </h1>
        <p className="text-lg text-[#5C5A54] leading-relaxed">
          Étudiant en informatique à <strong className="text-[#181816]">Epitech Lille</strong>, j&apos;aime comprendre le fonctionnement complet des technologies que j&apos;utilise. Du développement d&apos;applications web modernes jusqu&apos;à l&apos;électronique embarquée et l&apos;administration sous Linux, je privilégie toujours des solutions concrètes, maintenables et faciles à prendre en main.
        </p>
      </section>

      {/* Expériences & Engagement */}
      <section>
        <div className="flex items-center justify-between border-b border-dashed border-[#DCD8CE] pb-4 mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight">Expériences &amp; Engagement</h2>
          <span className="font-mono text-xs text-[#5C5A54]">02 // PARCOURS</span>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {/* Trackap */}
          <div className="bg-white p-6 md:p-8 border border-[#DCD8CE] rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
              <h3 className="font-extrabold text-xl">Développeur Full-Stack — Trackap</h3>
              <span className="font-mono text-xs bg-[#F6F4EE] border border-[#DCD8CE] px-3 py-1 rounded-full w-fit">
                2026 — Présent
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#D71921] mb-3">
              Solutions B2B • React, TypeScript, Node.js, MongoDB
            </p>
            <p className="text-sm text-[#5C5A54] leading-relaxed">
              Développement d&apos;interfaces de gestion de flotte, conception d&apos;un catalogue de partage B2B et d&apos;un module de location de véhicules (rent), ainsi que l&apos;intégration de statistiques et de géofencing.
            </p>
          </div>

          {/* SCC France */}
          <div className="bg-white p-6 md:p-8 border border-[#DCD8CE] rounded-2xl">
            <h3 className="font-extrabold text-xl mb-1">Stage IT — SCC France</h3>
            <p className="text-xs font-mono uppercase tracking-wider text-[#5C5A54] mb-3">
              Infrastructure &amp; Support
            </p>
            <p className="text-sm text-[#5C5A54] leading-relaxed">
              Découverte opérationnelle des infrastructures réseaux d&apos;entreprise et réalisation d&apos;interventions de maintenance matérielle et logicielle.
            </p>
          </div>

          {/* Restauration */}
          <div className="bg-white p-6 md:p-8 border border-[#DCD8CE] rounded-2xl">
            <h3 className="font-extrabold text-xl mb-1">Serveur en Restauration</h3>
            <p className="text-xs font-mono uppercase tracking-wider text-[#5C5A54] mb-3">
              Relation client &amp; Travail d&apos;équipe
            </p>
            <p className="text-sm text-[#5C5A54] leading-relaxed">
              Accueil, conseil et service en salle. Une expérience de terrain formatrice qui m&apos;a appris la réactivité, la communication claire et la gestion du rythme lors des services intenses.
            </p>
          </div>

          {/* Engagement Social & Leadership */}
          <div className="bg-white p-6 md:p-8 border border-[#DCD8CE] rounded-2xl">
            <h3 className="font-extrabold text-xl mb-1">Engagement Social &amp; Leadership</h3>
            <p className="text-xs font-mono uppercase tracking-wider text-[#5C5A54] mb-4">
              Bénévolat &amp; Représentation étudiante
            </p>
            <div className="space-y-3 text-sm text-[#5C5A54] leading-relaxed">
              <p>
                <strong className="text-[#181816]">Engagement humain :</strong> Bénévolat à Lourdes pour l&apos;accompagnement de personnes malades et stage en EHPAD, plaçant l&apos;écoute et l&apos;entraide au cœur du quotidien.
              </p>
              <p>
                <strong className="text-[#181816]">Délégué de classe (3 ans) :</strong> Expérience continue en médiation, écoute et prise de parole au Lycée Ozanam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Technique */}
      <section>
        <div className="flex items-center justify-between border-b border-dashed border-[#DCD8CE] pb-4 mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight">Stack Technique &amp; Outils</h2>
          <span className="font-mono text-xs text-[#5C5A54]">03 // OUTILS</span>
        </div>
        
        <div className="p-8 bg-white border border-[#DCD8CE] rounded-2xl flex flex-col items-center gap-6">
          <img 
            src="https://skillicons.dev/icons?i=c,js,py,html,css,linux,git,github,vscode,nix,ubuntu,debian,arduino,raspberrypi" 
            alt="Icônes des technologies : C, JavaScript, Python, HTML, CSS, Linux, Git, GitHub, VS Code, Nix, Ubuntu, Debian, Arduino, Raspberry Pi" 
            className="max-w-full h-auto"
          />
          <p className="font-mono text-xs text-[#5C5A54] text-center">
            Environnement principal : Debian GNU/Linux • TypeScript / React / Node.js • C / C++ / ESP32
          </p>
        </div>
      </section>
    </main>
  );
}