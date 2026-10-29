export default function Projects() {
  return (
    <main className="space-y-12">
      <h1 className="text-3xl font-bold">Mes Projets</h1>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-black pb-2">Projets Scolaires (Epitech)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-black">
            <h3 className="font-bold text-lg mb-2">my_world / my_calculator</h3>
            <p>Projets d&apos;algorithmique et de rendu graphique bas niveau.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-black pb-2">Projets Personnels & Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-black">
            <h3 className="font-bold text-lg mb-2">Traceur GPS Embarqué</h3>
            <p>
              Prototypage avec ESP32, module GPS NEO-6M et lecteur de carte SD avec interface serveur web.
            </p>
          </div>
          <div className="p-6 border border-black">
            <h3 className="font-bold text-lg mb-2">Écosystème M5Stack</h3>
            <p>
              Développement d&apos;outils sur M5StickC Plus 2 et intégration Raspberry Pi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}