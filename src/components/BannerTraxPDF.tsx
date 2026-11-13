"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";

export function BannerTraxPDF() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("traxdocs_hide_traxpdf_banner");
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem("traxdocs_hide_traxpdf_banner", "true");
    } catch {
      // ignore
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Promoción TraxPDF Studio"
      className="relative z-30 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border-b border-emerald-500/20 px-4 py-2.5 text-xs text-slate-300 print:hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="h-3 w-3" />
          </span>
          <p className="font-normal text-slate-300">
            <span className="font-semibold text-emerald-400">¿Tienes un PDF existente para firmar o modificar?</span>{" "}
            Usa <span className="text-white font-medium">TraxPDF Studio</span>: edita texto, rellena formularios y estampa firmas 100% privado en tu navegador.
          </p>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <a
            href="https://traxpdf.tracciondigital.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 shadow-sm hover:bg-emerald-400 transition-colors"
          >
            <span>Abrir TraxPDF Gratis</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={handleDismiss}
            aria-label="Cerrar banner"
            className="rounded p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
