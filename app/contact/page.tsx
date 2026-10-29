export default function Contact() {
  return (
    <main className="max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-8">
        Tu souhaites échanger sur un projet de développement web, d&apos;IoT ou d&apos;embarqué ? N&apos;hésite pas à me contacter.
      </p>
      
      <div className="space-y-4">
        <a href="mailto:noe1.marchal@epitech.eu" className="flex items-center gap-4 p-4 border border-black hover:bg-gray-100">
          <span className="font-bold">Email</span>
          <span>noe1.marchal@epitech.eu</span>
        </a>
        <a href="https://github.com/MoUst4ki-tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-black hover:bg-gray-100">
          <span className="font-bold">GitHub</span>
          <span>MoUst4ki-tech</span>
        </a>
      </div>
    </main>
  );
}