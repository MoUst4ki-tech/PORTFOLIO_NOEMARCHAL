"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      type="button"
      aria-label={`Copier ${textToCopy}`}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-[#DCD8CE] bg-[#F6F4EE] text-[#181816] hover:bg-[#181816] hover:text-white transition-colors cursor-pointer"
      title="Copier dans le presse-papiers"
    >
      {copied ? (
        <>
          <Check size={14} className="text-[#D71921]" />
          <span>Copié</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span className="hidden sm:inline">Copier</span>
        </>
      )}
    </button>
  );
}