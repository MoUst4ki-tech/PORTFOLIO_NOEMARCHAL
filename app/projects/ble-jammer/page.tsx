import Link from 'next/link';
import { ArrowLeft, Cpu, Radio, AlertTriangle, Monitor } from 'lucide-react';

export default function BleJammer() {
  return (
    <main className="max-w-3xl mx-auto pb-12">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-[#DCD8CE] text-sm font-medium hover:border-[#181816] transition-colors"
      >
        <ArrowLeft size={16} /> Retour aux projets
      </Link>
      
      <article className="bg-white border border-[#DCD8CE] rounded-3xl p-8 md:p-12 space-y-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#D71921] block mb-2">
            PROJET HARDWARE // EMBARQUÉ
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            BLE Jammer (ESP32)
          </h1>
          <div className="flex flex-wrap gap-2">
            {['C++', 'ESP32', 'IoT', 'Radio 2.4GHz', 'Hardware'].map(t => (
              <span key={t} className="font-mono text-xs bg-[#F6F4EE] border border-[#DCD8CE] px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg text-[#5C5A54] leading-relaxed border-t border-dashed border-[#DCD8CE] pt-6">
          Outil matériel portable basé sur un microcontrôleur ESP32 conçu pour analyser le spectre radio 2.4GHz, doté d&apos;une interface autonome sur écran OLED et de boutons de navigation physiques.
        </p>

        <div className="flex items-start gap-4 p-5 border border-[#D71921]/30 rounded-2xl bg-[#D71921]/5">
          <AlertTriangle size={22} className="shrink-0 mt-0.5 text-[#D71921]" />
          <p className="text-xs font-mono leading-relaxed text-[#181816]">
            <strong>NOTE ÉDUCATIVE :</strong> Projet réalisé uniquement à des fins d&apos;apprentissage matériel (bus SPI/I2C) et de diagnostic radio en environnement contrôlé.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-dashed border-[#DCD8CE]">
            Architecture Matérielle
          </h2>
          <ul className="space-y-4 mt-4 text-[#5C5A54]">
            <li className="flex gap-4 items-start">
              <Cpu size={20} className="shrink-0 mt-1 text-[#D71921]" />
              <span><strong className="text-[#181816]">Microcontrôleur :</strong> Carte ESP32 (WROOM-32) orchestrant les bus de communication I2C et SPI.</span>
            </li>
            <li className="flex gap-4 items-start">
              <Radio size={20} className="shrink-0 mt-1 text-[#D71921]" />
              <span><strong className="text-[#181816]">Double module radio :</strong> Deux transceivers NRF24L01 (2.4GHz) partageant le bus SPI (MOSI, MISO, SCK) avec broches CE/CSN dédiées.</span>
            </li>
            <li className="flex gap-4 items-start">
              <Monitor size={20} className="shrink-0 mt-1 text-[#D71921]" />
              <span><strong className="text-[#181816]">Interface embarquée :</strong> Écran OLED 0.96&quot; SSD1306 (128x64) en I2C et 3 boutons poussoirs (Haut, Bas, Validation).</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-dashed border-[#DCD8CE]">
            Fonctionnalités Logicielles
          </h2>
          <ul className="space-y-4 mt-4 text-[#5C5A54]">
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">01.</span>
              <span><strong className="text-[#181816]">Scanner Hybride :</strong> Détection conjointe des appareils Bluetooth Low Energy (BLE) et Bluetooth Classique avec affichage paginé sur l&apos;écran OLED.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">02.</span>
              <span><strong className="text-[#181816]">Menu Modulaire :</strong> Machine à états en C++ (écran d&apos;accueil, menu, scanner, informations système, diagnostic matériel).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D71921] font-mono font-bold">03.</span>
              <span><strong className="text-[#181816]">Diagnostic Hardware :</strong> Outil de test intégré vérifiant en direct la réponse des deux antennes NRF24 et l&apos;état de chaque bouton.</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}