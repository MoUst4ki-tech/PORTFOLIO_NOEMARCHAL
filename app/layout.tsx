import Header from '../components/Hearder';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen bg-white text-black p-8">
        <div className="max-w-4xl mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}