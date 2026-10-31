import ProjectCard from "../../components/ProjectsCard";

export default function Projects() {
  return (
    <main className="space-y-14 pb-12">
      <div className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D71921] block mb-3">
          INDEX // RÉALISATIONS
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Mes Projets
        </h1>
        <p className="text-[#5C5A54] text-base md:text-lg max-w-2xl">
          Une sélection de mes travaux en entreprise, à Epitech et sur mon temps libre autour du web et des systèmes embarqués.
        </p>
      </div>

      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed border-[#DCD8CE]">
          <h2 className="text-xl font-bold">Projets Professionnels</h2>
          <span className="font-mono text-xs text-[#5C5A54]">01 // B2B</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Trackap — Plateforme B2B"
            description="Développement full-stack d'un catalogue de partage et d'un système de gestion de location de véhicules (rent). Conception des interfaces front-end, de l'API back-end et de la base de données."
            tags={['React', 'TypeScript', 'Node.js', 'MongoDB']}
            href="/projects/trackap"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed border-[#DCD8CE]">
          <h2 className="text-xl font-bold">Projets Scolaires (Epitech)</h2>
          <span className="font-mono text-xs text-[#5C5A54]">02 // SYSTÈME &amp; 3D</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="42sh"
            description="Interpréteur de commandes Unix complet gérant les pipes, redirections, jobs en arrière-plan et alias."
            tags={['C', 'Unix', 'Parsing', 'Processus']}
            href="/projects/42sh"
          />
          <ProjectCard 
            title="Wolf3D"
            description="Moteur 3D en Raycasting avec génération procédurale, IA ennemie, armes et système d'éclairage dynamique."
            tags={['C', 'CSFML', 'Maths', 'Raycasting']}
            href="/projects/wolf3d"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed border-[#DCD8CE]">
          <h2 className="text-xl font-bold">Projets Personnels &amp; Hardware</h2>
          <span className="font-mono text-xs text-[#5C5A54]">03 // EMBARQUÉ</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="BLE Jammer (ESP32)"
            description="Outil portable d'analyse du spectre 2.4GHz avec ESP32, double antenne NRF24L01 et interface OLED autonome."
            tags={['C++', 'ESP32', 'RF 2.4GHz']}
            href="/projects/ble-jammer"
          />
          <ProjectCard 
            title="Traceur GPS Embarqué"
            description="Prototypage avec ESP32, module GPS et lecteur de carte SD avec interface serveur web."
            tags={['ESP32', 'C++', 'IoT']}
            href="#"
          />
          <ProjectCard 
            title="Écosystème M5Stack"
            description="Développement d'outils sur M5StickC Plus 2 et intégration Raspberry Pi."
            tags={['Microcontrôleur', 'Linux']}
            href="#"
          />
        </div>
      </section>
    </main>
  );
}