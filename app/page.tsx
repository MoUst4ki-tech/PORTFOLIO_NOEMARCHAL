export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8 selection:bg-blue-200">
      <div className="max-w-4xl mx-auto">
        
        <header className="flex justify-between items-center py-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold tracking-tight">Noé Marchal</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600 transition">À propos</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projets</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
        </header>

        <section className="py-24 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-balance">
            Développeur Full-Stack & Systèmes
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Étudiant à Epitech. Je conçois des interfaces web robustes et je développe des solutions embarquées de bas niveau.
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Me contacter
          </a>
        </section>

        <section id="about" className="py-12">
          <h3 className="text-2xl font-bold mb-6">Stack Technique</h3>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'React', 'Node.js', 'C/C++', 'Linux', 'ESP32'].map((tech) => (
              <span 
                key={tech} 
                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}