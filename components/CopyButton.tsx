"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); 
    // Nettoie les espaces pour que le numéro de téléphone se copie d'un bloc
    navigator.clipboard.writeText(textToCopy.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="absolute right-0 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400 hover:text-white"
      title="Copier"
    >
      {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
    </button>
  );
}