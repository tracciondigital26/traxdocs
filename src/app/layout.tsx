import type { Metadata } from "next";
import "./globals.css";
import { PoweredBadge } from "../components/PoweredBadge";
import { BannerTraxPDF } from "../components/BannerTraxPDF";

export const metadata: Metadata = {
  title: "TraxDocs — Generador de Contratos, Cotizaciones y Cartas Poder en Línea",
  description:
    "Crea cotizaciones profesionales, notas de remisión, contratos legales y cartas poder en línea en segundos. Personaliza cláusulas, firma y descarga en PDF 100% privado en tu navegador.",
  keywords: [
    "generador de cotizaciones gratis",
    "contrato de arrendamiento mexico",
    "contrato de prestacion de servicios",
    "carta poder para imprimir",
    "nota de remision online",
    "traxdocs",
    "traccion digital",
    "documentos legales gratis"
  ],
  authors: [{ name: "Tracción Digital", url: "https://tracciondigital.com.mx" }],
  creator: "Tracción Digital",
  publisher: "Tracción Digital",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TraxDocs — Documentos Legales y Cotizaciones en Línea",
    description:
      "Generador rápido y gratuito de contratos, cotizaciones, remisiones y cartas poder con cláusulas modulares y exportación directa a PDF.",
    url: "https://traxdocs.tracciondigital.com.mx",
    siteName: "TraxDocs",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-300">
        <BannerTraxPDF />
        <main className="flex-1 flex flex-col">{children}</main>
        <PoweredBadge />
      </body>
    </html>
  );
}
