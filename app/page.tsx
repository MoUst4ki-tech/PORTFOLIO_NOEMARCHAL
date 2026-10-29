import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="py-24 text-center bg-white">
        <h2 className="text-5xl font-extrabold mb-6">
          Développeur Full-Stack & Systèmes
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Je conçois des interfaces web robustes et développe des solutions embarquées de bas niveau.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800">
            Voir mes projets
          </Link>
          <Link href="/contact" className="bg-white border border-black text-black px-6 py-3 font-medium hover:bg-gray-100">
            Me contacter
          </Link>
        </div>
      </section>
    </main>
  );
}