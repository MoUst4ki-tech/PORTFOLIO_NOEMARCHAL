import Header from '../components/Hearder';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-black font-sans p-8">
        <div className="max-w-4xl mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}