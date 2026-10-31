import ProjectCard from "../../components/ProjectsCard";

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto space-y-16">
      <h1 className="text-4xl font-extrabold tracking-tight mb-10">Mes Projets</h1>

      <section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-black">Projets Professionnels</h2>
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
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-black">Projets Scolaires (Epitech)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="42sh"
            description="Interpréteur de commandes Unix complet gérant les pipes, redirections, jobs en arrière-plan et alias."
            tags={['C', 'Unix', 'Parsing', 'AST']}
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
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-black">Projets Personnels & Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Traceur GPS Embarqué"
            description="Prototypage avec ESP32, module GPS NEO-6M et lecteur de carte SD avec interface serveur web."
            tags={['ESP32', 'C++', 'IoT']}
            href="#"
          />
          <ProjectCard 
            title="Écosystème M5Stack"
            description="Développement d'outils sur M5StickC Plus 2 et intégration Raspberry Pi."
            tags={['Microcontrôleur', 'Linux']}
            href="#"
          />
          <ProjectCard 
            title="BLE Jammer"
            description="Outil portable d'analyse du spectre 2.4GHz avec ESP32, double antenne NRF24L01 et interface OLED autonome."
            tags={['C++', 'ESP32', 'RF 2.4GHz']}
            href="/projects/ble-jammer"
          />
        </div>
      </section>
    </main>
  );
}