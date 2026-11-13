# TraxDocs — Generador de Documentos Legales, Contratos, Cotizaciones y Cartas Poder

> **Una herramienta web desarrollada por [Tracción Digital](https://tracciondigital.com.mx) y parte del ecosistema de [TraxPDF Studio](https://traxpdf.tracciondigital.com.mx).**

TraxDocs es una plataforma web orientada a la productividad comercial y legal en México y Latinoamérica. Permite generar, personalizar cláusulas jurídicas y comerciales en tiempo real, e imprimir o descargar en PDF documentos listos para su formalización legal o mercantil.

---

## 🌟 Características Principales

1. **Cuatro Módulos en Pestañas Separadas:**
   - 📑 **Cotizaciones Comerciales:** Desglose de partidas, cálculo automático de subtotal, IVA configurable (0%, 8%, 16%), descuentos, datos bancarios (CLABE, banco, titular) y condiciones comerciales editables.
   - 📦 **Notas de Remisión / Entrega:** Amparo de entrega de mercancías, bienes o equipos, transportista, placas, número de orden de compra, estado físico de los bienes y firmas de entrega y recepción.
   - ⚖️ **Contratos Civiles y Mercantiles:** Plantillas jurídicas modulares para:
     - *Prestación de Servicios Profesionales* (ideal para agencias, consultores y desarrolladores con cláusulas de propiedad intelectual y no relación laboral).
     - *Arrendamiento Inmobiliario* (casa habitación o local con cláusulas de fianza, depósito y mora).
     - *Acuerdo de Confidencialidad (NDA)* (protección de secretos industriales y sanciones).
     - *Contrato de Compraventa de Bienes Muebles* (vehículos, equipo o maquinaria con saneamiento para el caso de evicción).
   - 📜 **Cartas Poder Privadas:** Formato legal mexicano con 4 firmas (otorgante, aceptante y 2 testigos con CURP/INE) para trámites vehiculares (SEMOVI), trámites ante dependencias públicas (CFE, SACMEX) o cobro de cheques.

2. **Cláusulas 100% Modulares y Editables:**
   - Cada cláusula se puede activar o desactivar con un solo clic.
   - Edición en vivo de títulos y redacciones legales.
   - Botón para agregar nuevas cláusulas personalizadas según las necesidades del usuario.

3. **Privacidad Total (Costo de Servidor \$0):**
   - El procesamiento, cálculo y generación ocurre 100% en el navegador del usuario.
   - Almacenamiento local persistente (`localStorage`) para que el usuario no pierda su información al recargar la página.

4. **Integración con el Ecosistema Tracción Digital:**
   - **Botón flotante "Powered by Tracción Digital":** Anclado en la esquina inferior izquierda con efecto ping esmeralda y enlace directo a la agencia.
   - **Banner superior descartable:** Promociona [TraxPDF](https://traxpdf.tracciondigital.com.mx) para usuarios que necesiten modificar, rellenar o estampar firmas digitales en PDFs existentes.

---

## 🚀 Despliegue en Cloudflare (Workers / Pages)

El proyecto está configurado con `@opennextjs/cloudflare` y `wrangler.jsonc` para despliegue automatizado en Cloudflare con dominio personalizado `traxdocs.tracciondigital.com.mx`.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo local
npm run dev

# Compilar para Cloudflare
npm run cf:build

# Desplegar a Cloudflare
npm run cf:deploy
```

---

## 📄 Licencia

Desarrollado con ❤️ por [Tracción Digital](https://tracciondigital.com.mx).
