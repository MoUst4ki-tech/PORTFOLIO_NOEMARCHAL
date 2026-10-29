import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 border-b border-black mb-8">
      <Link href="/" className="text-2xl font-bold tracking-tight">Noé Marchal</Link>
      <nav className="space-x-6">
        <Link href="/about" className="hover:underline">À propos</Link>
        <Link href="/projects" className="hover:underline">Projets</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}