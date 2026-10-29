export default function About() {
  const stack = ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'C/C++', 'Linux', 'ESP32'];

  return (
    <main className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-4">À propos de moi</h1>
        <p className="leading-relaxed">
          Étudiant en informatique à Epitech, je suis passionné par la compréhension globale des systèmes, 
          du développement web front-end jusqu&apos;à la programmation matérielle sur microcontrôleurs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Expérience & Stack</h2>
        <div className="mb-6 p-6 border border-black">
          <h3 className="font-bold text-lg">Développeur - Trackap</h3>
          <p className="mb-3">Développement Full-Stack B2B</p>
          <p>
            Développement d&apos;interfaces de gestion de flotte, de statistiques de location et de géofencing.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span key={tech} className="border border-black px-4 py-2 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}