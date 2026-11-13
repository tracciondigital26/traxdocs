"use client";

import React from "react";
import { DocTab, QuotationData, DeliveryData, ContractData, PowerOfAttorneyData } from "../types/documents";
import { Printer, Copy, Check } from "lucide-react";
import { useState } from "react";

interface DocumentPreviewProps {
  tab: DocTab;
  quotation: QuotationData;
  delivery: DeliveryData;
  contract: ContractData;
  power: PowerOfAttorneyData;
}

export function DocumentPreview({ tab, quotation, delivery, contract, power }: DocumentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const calculateSubtotal = () => {
    return quotation.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  };

  const subtotal = calculateSubtotal();
  const discountAmount = (subtotal * (quotation.discount || 0)) / 100;
  const taxable = subtotal - discountAmount;
  const taxAmount = (taxable * (quotation.taxRate || 0)) / 100;
  const total = taxable + taxAmount;

  const formatCurrency = (val: number, cur: string = "MXN") => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: cur,
    }).format(val);
  };

  const handleCopyText = () => {
    const el = document.getElementById("printable-doc");
    if (!el) return;
    navigator.clipboard.writeText(el.innerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top action bar */}
      <div className="flex items-center justify-between bg-slate-900 border-b border-slate-800 px-4 py-2.5 rounded-t-xl print:hidden">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="text-xs font-medium text-slate-300">
            Vista Previa de Impresión / PDF
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copiado" : "Copiar Texto"}</span>
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow hover:bg-emerald-400 transition-colors"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Imprimir / Descargar PDF</span>
          </button>
        </div>
      </div>

      {/* Paper Container */}
      <div className="flex-1 overflow-y-auto bg-slate-950/60 p-4 sm:p-6 flex justify-center">
        <div
          id="printable-doc"
          className="w-full max-w-[820px] bg-white text-slate-900 shadow-2xl rounded-sm p-8 sm:p-12 text-[13px] leading-relaxed font-sans border border-slate-200 print:border-none print:shadow-none print:p-0 print:max-w-none"
        >
          {/* TAB 1: COTIZACIÓN */}
          {tab === "cotizacion" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-5">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-950 uppercase">
                    {quotation.issuerName}
                  </h1>
                  <p className="text-xs text-slate-600 mt-1">RFC: {quotation.issuerRfc}</p>
                  <p className="text-xs text-slate-600">{quotation.issuerAddress}</p>
                  <p className="text-xs text-slate-600">
                    Tel: {quotation.issuerPhone} | Email: {quotation.issuerEmail}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-slate-950 text-white font-bold px-3 py-1 text-xs tracking-wider uppercase rounded-sm">
                    COTIZACIÓN
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-2">
                    Folio: {quotation.folio}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">Fecha: {quotation.date}</p>
                  <p className="text-xs text-slate-600">Válida hasta: {quotation.validUntil}</p>
                </div>
              </div>

              {/* Client Info */}
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Datos del Cliente
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-semibold text-slate-900">{quotation.clientName}</p>
                    <p className="text-slate-600">RFC: {quotation.clientRfc || "Sin especificar"}</p>
                    <p className="text-slate-600">{quotation.clientAddress}</p>
                  </div>
                  <div className="text-right sm:text-left">
                    <p className="text-slate-600">Email: {quotation.clientEmail || "—"}</p>
                    <p className="text-slate-600">Teléfono: {quotation.clientPhone || "—"}</p>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-900 text-xs font-bold uppercase tracking-wider text-slate-900">
                      <th className="py-2 px-1 text-center w-12">Cant.</th>
                      <th className="py-2 px-2 w-20">Unidad</th>
                      <th className="py-2 px-2">Descripción del Servicio / Producto</th>
                      <th className="py-2 px-2 text-right w-28">P. Unitario</th>
                      <th className="py-2 px-2 text-right w-28">Importe</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs">
                    {quotation.items.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td className="py-2.5 px-1 text-center font-medium">{item.quantity}</td>
                        <td className="py-2.5 px-2 text-slate-600">{item.unit}</td>
                        <td className="py-2.5 px-2 font-normal text-slate-900">{item.description}</td>
                        <td className="py-2.5 px-2 text-right text-slate-700">
                          {formatCurrency(item.unitPrice, quotation.currency)}
                        </td>
                        <td className="py-2.5 px-2 text-right font-medium text-slate-900">
                          {formatCurrency(item.quantity * item.unitPrice, quotation.currency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end pt-2">
                <div className="w-72 space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200 text-slate-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-slate-900">
                      {formatCurrency(subtotal, quotation.currency)}
                    </span>
                  </div>
                  {quotation.discount > 0 && (
                    <div className="flex justify-between py-1 border-b border-slate-200 text-slate-600">
                      <span>Descuento ({quotation.discount}%):</span>
                      <span className="font-semibold text-rose-600">
                        -{formatCurrency(discountAmount, quotation.currency)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between py-1 border-b border-slate-200 text-slate-600">
                    <span>IVA ({quotation.taxRate}%):</span>
                    <span className="font-semibold text-slate-900">
                      {formatCurrency(taxAmount, quotation.currency)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-t-2 border-slate-900 text-sm font-bold text-slate-950">
                    <span>TOTAL ({quotation.currency}):</span>
                    <span>{formatCurrency(total, quotation.currency)}</span>
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              {(quotation.bankName || quotation.bankClabe) && (
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs">
                  <span className="font-bold text-slate-800 uppercase block mb-1">
                    Información Bancaria para Pago:
                  </span>
                  <div className="flex flex-wrap gap-x-6 text-slate-700">
                    <span><strong>Banco:</strong> {quotation.bankName}</span>
                    <span><strong>CLABE:</strong> {quotation.bankClabe}</span>
                    <span><strong>Beneficiario:</strong> {quotation.bankBeneficiary}</span>
                  </div>
                </div>
              )}

              {/* Clauses */}
              {quotation.clauses.filter((c) => c.isEnabled).length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Términos y Condiciones Comerciales
                  </h4>
                  <div className="space-y-2 text-[11px] text-slate-700 leading-normal">
                    {quotation.clauses
                      .filter((c) => c.isEnabled)
                      .map((c) => (
                        <p key={c.id}>
                          <strong>{c.title}:</strong> {c.content}
                        </p>
                      ))}
                  </div>
                </div>
              )}

              {/* Signatures */}
              <div className="pt-10 grid grid-cols-2 gap-8 text-center text-xs">
                <div>
                  <div className="border-b border-slate-900 mx-8 pb-1"></div>
                  <p className="font-bold text-slate-900 mt-2">{quotation.issuerName}</p>
                  <p className="text-slate-500">Emisor Autorizado</p>
                </div>
                <div>
                  <div className="border-b border-slate-900 mx-8 pb-1"></div>
                  <p className="font-bold text-slate-900 mt-2">{quotation.clientName}</p>
                  <p className="text-slate-500">Aceptación del Cliente (Firma y Sello)</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REMISIÓN */}
          {tab === "remision" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-5">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-950 uppercase">
                    {delivery.issuerName}
                  </h1>
                  <p className="text-xs text-slate-600 mt-1">RFC: {delivery.issuerRfc}</p>
                  <p className="text-xs text-slate-600">Contacto: {delivery.issuerPhone}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-slate-950 text-white font-bold px-3 py-1 text-xs tracking-wider uppercase rounded-sm">
                    NOTA DE REMISIÓN
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-2">
                    Folio: {delivery.folio}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">Fecha: {delivery.date}</p>
                  <p className="text-xs text-slate-600">Ref / O.C.: {delivery.orderNumber}</p>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-200 rounded p-4 text-xs">
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Entregar a:
                  </h4>
                  <p className="font-semibold text-slate-900">{delivery.clientName}</p>
                  <p className="text-slate-600">RFC: {delivery.clientRfc}</p>
                  <p className="text-slate-600">Destino: {delivery.clientAddress}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Recepción y Transporte:
                  </h4>
                  <p className="text-slate-700"><strong>Recibe:</strong> {delivery.receiverName} ({delivery.receiverPhone})</p>
                  <p className="text-slate-700"><strong>Transportista:</strong> {delivery.carrierName}</p>
                  <p className="text-slate-700"><strong>Unidad / Placas:</strong> {delivery.carrierPlates}</p>
                </div>
              </div>

              {/* Items Table */}
              <div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-900 text-xs font-bold uppercase tracking-wider text-slate-900">
                      <th className="py-2 px-1 text-center w-12">Cant.</th>
                      <th className="py-2 px-2 w-20">Unidad</th>
                      <th className="py-2 px-2 w-24">Código / SKU</th>
                      <th className="py-2 px-2">Descripción de Mercancía / Bienes</th>
                      <th className="py-2 px-2 w-32">Estado / Empaque</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs">
                    {delivery.items.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td className="py-2.5 px-1 text-center font-bold">{item.quantity}</td>
                        <td className="py-2.5 px-2 text-slate-600">{item.unit}</td>
                        <td className="py-2.5 px-2 font-mono text-slate-700">{item.code || "—"}</td>
                        <td className="py-2.5 px-2 font-normal text-slate-900">{item.description}</td>
                        <td className="py-2.5 px-2 text-slate-600 text-[11px]">{item.condition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              {delivery.deliveryNotes && (
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs">
                  <strong>Observaciones de Entrega:</strong> {delivery.deliveryNotes}
                </div>
              )}

              {/* Clauses */}
              {delivery.clauses.filter((c) => c.isEnabled).length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Condiciones de Entrega y Recepción
                  </h4>
                  <div className="space-y-1.5 text-[11px] text-slate-700 leading-normal">
                    {delivery.clauses
                      .filter((c) => c.isEnabled)
                      .map((c) => (
                        <p key={c.id}>
                          <strong>{c.title}:</strong> {c.content}
                        </p>
                      ))}
                  </div>
                </div>
              )}

              {/* Signatures */}
              <div className="pt-10 grid grid-cols-2 gap-8 text-center text-xs">
                <div>
                  <div className="border-b border-slate-900 mx-6 pb-1"></div>
                  <p className="font-bold text-slate-900 mt-2">{delivery.carrierName || "Entregado por"}</p>
                  <p className="text-slate-500">Firma de Entrega / Transportista</p>
                </div>
                <div>
                  <div className="border-b border-slate-900 mx-6 pb-1"></div>
                  <p className="font-bold text-slate-900 mt-2">{delivery.receiverName || "Recibido de Conformidad"}</p>
                  <p className="text-slate-500">Nombre, Firma e INE de Quien Recibe</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONTRATO */}
          {tab === "contrato" && (
            <div className="space-y-6 text-justify">
              {/* Contract Title */}
              <div className="text-center border-b-2 border-slate-900 pb-4">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 uppercase">
                  {contract.title}
                </h1>
                <p className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  CELEBRADO ENTRE {contract.partyAName} Y {contract.partyBName}
                </p>
              </div>

              {/* Opening paragraph */}
              <div className="text-xs text-slate-800 leading-relaxed">
                <p>
                  En la {contract.cityAndDate}, celebran el presente instrumento legal, por una parte{" "}
                  <strong>{contract.partyAName}</strong> (en lo sucesivo denominado como{" "}
                  <strong>&quot;{contract.partyARole}&quot;</strong>), representado por{" "}
                  <strong>{contract.partyARepresentative || contract.partyAName}</strong>, con RFC{" "}
                  <strong>{contract.partyARfc}</strong> y domicilio en {contract.partyAAddress}; y por la otra parte{" "}
                  <strong>{contract.partyBName}</strong> (en lo sucesivo denominado como{" "}
                  <strong>&quot;{contract.partyBRole}&quot;</strong>), representado por{" "}
                  <strong>{contract.partyBRepresentative || contract.partyBName}</strong>, con RFC{" "}
                  <strong>{contract.partyBRfc}</strong> y domicilio en {contract.partyBAddress}, al tenor de las siguientes declaraciones y cláusulas:
                </p>
              </div>

              {/* Economic Summary */}
              {contract.amount > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs flex justify-between">
                  <span><strong>Contraprestación convenida:</strong> {formatCurrency(contract.amount, contract.currency)}</span>
                  <span><strong>Forma de liquidación:</strong> {contract.paymentTerms}</span>
                </div>
              )}

              {/* Clauses */}
              <div className="space-y-3 pt-2">
                {contract.clauses
                  .filter((c) => c.isEnabled)
                  .map((clause) => (
                    <div key={clause.id} className="text-xs leading-relaxed text-slate-800">
                      <p>
                        <strong className="text-slate-950">{clause.title}.-</strong> {clause.content}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Closing statement */}
              <div className="text-xs text-slate-700 italic pt-2">
                Leído que fue el presente contrato por las partes y enteradas de su contenido, alcance y fuerza legal, lo firman de común acuerdo por duplicado en el lugar y fecha señalados en el proemio.
              </div>

              {/* Signatures */}
              <div className="pt-8 space-y-8">
                <div className="grid grid-cols-2 gap-8 text-center text-xs">
                  <div>
                    <div className="border-b border-slate-900 mx-6 pb-1"></div>
                    <p className="font-bold text-slate-950 mt-2">{contract.partyAName}</p>
                    <p className="text-slate-600">{contract.partyARole}</p>
                    {contract.partyARepresentative && (
                      <p className="text-[11px] text-slate-500">Por: {contract.partyARepresentative}</p>
                    )}
                  </div>
                  <div>
                    <div className="border-b border-slate-900 mx-6 pb-1"></div>
                    <p className="font-bold text-slate-950 mt-2">{contract.partyBName}</p>
                    <p className="text-slate-600">{contract.partyBRole}</p>
                    {contract.partyBRepresentative && (
                      <p className="text-[11px] text-slate-500">Por: {contract.partyBRepresentative}</p>
                    )}
                  </div>
                </div>

                {(contract.witness1Name || contract.witness2Name) && (
                  <div className="grid grid-cols-2 gap-8 text-center text-xs pt-4">
                    <div>
                      <div className="border-b border-slate-900 mx-8 pb-1"></div>
                      <p className="font-bold text-slate-950 mt-1">TESTIGO 1</p>
                      <p className="text-slate-700">{contract.witness1Name}</p>
                      <p className="text-[11px] text-slate-500">{contract.witness1Address}</p>
                    </div>
                    <div>
                      <div className="border-b border-slate-900 mx-8 pb-1"></div>
                      <p className="font-bold text-slate-950 mt-1">TESTIGO 2</p>
                      <p className="text-slate-700">{contract.witness2Name}</p>
                      <p className="text-[11px] text-slate-500">{contract.witness2Address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: CARTA PODER */}
          {tab === "cartapoder" && (
            <div className="space-y-6 text-justify">
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-3">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-950 uppercase">
                    CARTA PODER
                  </h1>
                  <p className="text-xs text-slate-600">Documento Privado de Mandato y Representación</p>
                </div>
                <div className="text-right text-xs">
                  <p className="font-bold text-slate-900">Lugar y Fecha:</p>
                  <p className="text-slate-700">{power.cityAndDate}</p>
                  <p className="text-slate-500 mt-1">Vigencia hasta: {power.validityUntil}</p>
                </div>
              </div>

              {/* Salutation */}
              <div className="text-xs text-slate-800 font-semibold tracking-wide uppercase">
                A QUIEN CORRESPONDA / AUTORIDADES COMPETENTES:
              </div>

              {/* Proemio */}
              <div className="text-xs text-slate-800 leading-relaxed space-y-3">
                <p>
                  Por la presente, yo <strong>{power.grantorName}</strong>, con RFC/CURP{" "}
                  <strong>{power.grantorCurpOrRfc}</strong>, señalando como domicilio particular el ubicado en{" "}
                  {power.grantorAddress}, por propio derecho, otorgo mandato y confiero{" "}
                  <strong>PODER BASTANTE Y SUFICIENTE</strong> a favor de{" "}
                  <strong>{power.attorneyName}</strong>, con RFC/CURP{" "}
                  <strong>{power.attorneyCurpOrRfc}</strong> y domicilio en {power.attorneyAddress}, para que en mi nombre y representación lleve a cabo las siguientes facultades y gestiones:
                </p>

                {/* Powers box */}
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r text-slate-900 font-normal leading-relaxed text-xs">
                  {power.powersDescription}
                </div>
              </div>

              {/* Clauses */}
              {power.clauses.filter((c) => c.isEnabled).length > 0 && (
                <div className="space-y-2 pt-2">
                  {power.clauses
                    .filter((c) => c.isEnabled)
                    .map((c) => (
                      <p key={c.id} className="text-xs text-slate-800">
                        <strong>{c.title}.-</strong> {c.content}
                      </p>
                    ))}
                </div>
              )}

              {/* Signatures 4-box layout standard in Mexico */}
              <div className="pt-10 space-y-8">
                <div className="grid grid-cols-2 gap-8 text-center text-xs">
                  <div>
                    <div className="border-b border-slate-900 mx-6 pb-1"></div>
                    <p className="font-bold text-slate-950 mt-1">OTORGANTE (PODERDANTE)</p>
                    <p className="text-slate-800">{power.grantorName}</p>
                    <p className="text-[11px] text-slate-500">RFC/CURP: {power.grantorCurpOrRfc}</p>
                  </div>
                  <div>
                    <div className="border-b border-slate-900 mx-6 pb-1"></div>
                    <p className="font-bold text-slate-950 mt-1">ACEPTANTE (APODERADO)</p>
                    <p className="text-slate-800">{power.attorneyName}</p>
                    <p className="text-[11px] text-slate-500">RFC/CURP: {power.attorneyCurpOrRfc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 text-center text-xs pt-4">
                  <div>
                    <div className="border-b border-slate-900 mx-8 pb-1"></div>
                    <p className="font-bold text-slate-950 mt-1">TESTIGO 1</p>
                    <p className="text-slate-800">{power.witness1Name}</p>
                    <p className="text-[11px] text-slate-500">CURP/INE: {power.witness1Curp}</p>
                  </div>
                  <div>
                    <div className="border-b border-slate-900 mx-8 pb-1"></div>
                    <p className="font-bold text-slate-950 mt-1">TESTIGO 2</p>
                    <p className="text-slate-800">{power.witness2Name}</p>
                    <p className="text-[11px] text-slate-500">CURP/INE: {power.witness2Curp}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
