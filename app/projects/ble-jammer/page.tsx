import Link from 'next/link';
import { ArrowLeft, Cpu, Radio, AlertTriangle, Monitor } from 'lucide-react';

export default function BleJammer() {
  return (
    <main className="max-w-2xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 mb-10 font-bold hover:underline">
        <ArrowLeft size={20} /> Retour
      </Link>
      
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">BLE Jammer (ESP32)</h1>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {['C++', 'ESP32', 'IoT', 'Cybersécurité', 'Hardware'].map(t => (
          <span key={t} className="font-mono text-xs border border-black px-3 py-1 uppercase tracking-wider">{t}</span>
        ))}
      </div>

      <div className="space-y-8 leading-relaxed">
        <p className="text-lg font-medium">
          Outil matériel portable basé sur un ESP32 visant à analyser et interagir avec le spectre radio 2.4GHz. 
          Conçu avec une interface autonome via écran OLED et boutons de navigation tactiles.
        </p>

        <div className="flex items-start gap-4 p-5 border border-black rounded-md bg-gray-50">
          <AlertTriangle size={24} className="shrink-0 mt-1" />
          <p className="text-sm font-mono">
            <strong>DISCLAIMER :</strong> Ce projet a été développé à des fins strictement éducatives et de test matériel (Proof of Concept). Le brouillage de réseaux sans fil est illégal.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">Architecture Matérielle</h2>
          <ul className="list-none space-y-4">
            <li className="flex gap-4">
              <Cpu size={24} className="shrink-0" />
              <span><strong>Microcontrôleur :</strong> ESP32 (WROOM-32) agissant comme cerveau principal et gérant l'interface I2C/SPI[cite: 5].</span>
            </li>
            <li className="flex gap-4">
              <Radio size={24} className="shrink-0" />
              <span><strong>RF & Réseau :</strong> Double module NRF24L01 (2.4GHz) partageant le même bus SPI (MISO/MOSI/SCK) avec des broches CSN/CE indépendantes, couplé au contrôleur Bluetooth natif de l'ESP32[cite: 5].</span>
            </li>
            <li className="flex gap-4">
              <Monitor size={24} className="shrink-0" />
              <span><strong>Interface (UI) :</strong> Écran OLED 0.96" (I2C SSD1306) et interface à 3 boutons (Up, Down, OK) pour la navigation dans les menus[cite: 5].</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">Fonctionnalités Logicielles</h2>
          <ul className="list-none space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-xl leading-none">•</span>
              <span><strong>Scanner Hybride :</strong> Recherche simultanée des périphériques Bluetooth Low Energy (BLE) et Bluetooth Classique via le contrôleur ESP32, avec affichage filtré des adresses MAC et noms d'appareils[cite: 5].</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-xl leading-none">•</span>
              <span><strong>Système de Menu Modulaire :</strong> Machine à états développée en C++ (Splashscreen, Menu principal, Scanner, Infos, Test) séparée dynamiquement pour optimiser la mémoire[cite: 5].</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-xl leading-none">•</span>
              <span><strong>Suite de Test Hardware :</strong> Programme de diagnostic embarqué vérifiant indépendamment l'état du bus SPI des deux antennes NRF24 et les entrées GPIO des boutons[cite: 5].</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}