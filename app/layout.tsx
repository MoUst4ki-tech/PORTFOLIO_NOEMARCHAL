import Header from '../components/Hearder';
import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen text-[#181816] font-sans px-4 py-6 md:px-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}