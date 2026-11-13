"use client";

import { useState, useEffect } from "react";
import {
  DocTab,
  QuotationData,
  DeliveryData,
  ContractData,
  PowerOfAttorneyData,
  ContractType,
  PowerSubtype,
} from "../types/documents";
import {
  defaultQuotation,
  defaultDelivery,
  defaultContracts,
  defaultPowerOfAttorney,
} from "../data/defaultTemplates";
import { ClauseEditor } from "../components/ClauseEditor";
import { DocumentPreview } from "../components/DocumentPreview";
import {
  FileText,
  Truck,
  Scale,
  Scroll,
  Plus,
  Trash2,
  RotateCcw,
  ExternalLink,
  Building2,
  UserCheck,
  CreditCard,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<DocTab>("cotizacion");
  const [mobileView, setMobileView] = useState<"form" | "preview">("form");

  // State for all 4 document types
  const [quotation, setQuotation] = useState<QuotationData>(defaultQuotation);
  const [delivery, setDelivery] = useState<DeliveryData>(defaultDelivery);
  const [contractType, setContractType] = useState<ContractType>("servicios");
  const [contract, setContract] = useState<ContractData>(defaultContracts.servicios);
  const [powerSubtype, setPowerSubtype] = useState<PowerSubtype>("general");
  const [power, setPower] = useState<PowerOfAttorneyData>(defaultPowerOfAttorney.general);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const savedQ = localStorage.getItem("traxdocs_quotation");
      if (savedQ) setQuotation(JSON.parse(savedQ));
      const savedD = localStorage.getItem("traxdocs_delivery");
      if (savedD) setDelivery(JSON.parse(savedD));
      const savedC = localStorage.getItem("traxdocs_contract");
      if (savedC) setContract(JSON.parse(savedC));
      const savedP = localStorage.getItem("traxdocs_power");
      if (savedP) setPower(JSON.parse(savedP));
    } catch {}
  }, []);

  // Save changes
  useEffect(() => {
    try {
      localStorage.setItem("traxdocs_quotation", JSON.stringify(quotation));
    } catch {}
  }, [quotation]);

  useEffect(() => {
    try {
      localStorage.setItem("traxdocs_delivery", JSON.stringify(delivery));
    } catch {}
  }, [delivery]);

  useEffect(() => {
    try {
      localStorage.setItem("traxdocs_contract", JSON.stringify(contract));
    } catch {}
  }, [contract]);

  useEffect(() => {
    try {
      localStorage.setItem("traxdocs_power", JSON.stringify(power));
    } catch {}
  }, [power]);

  // Handle contract type change
  const handleContractTypeChange = (type: ContractType) => {
    setContractType(type);
    setContract(defaultContracts[type]);
  };

  // Handle power subtype change
  const handlePowerSubtypeChange = (subtype: PowerSubtype) => {
    setPowerSubtype(subtype);
    setPower(defaultPowerOfAttorney[subtype]);
  };

  // Add Item to Quotation
  const addQuotationItem = () => {
    const newItem = {
      id: `item-${Date.now()}`,
      quantity: 1,
      unit: "Servicio",
      description: "Concepto o partida adicional",
      unitPrice: 1000,
    };
    setQuotation({ ...quotation, items: [...quotation.items, newItem] });
  };

  const removeQuotationItem = (id: string) => {
    if (quotation.items.length <= 1) return;
    setQuotation({ ...quotation, items: quotation.items.filter((i) => i.id !== id) });
  };

  // Add Item to Delivery
  const addDeliveryItem = () => {
    const newItem = {
      id: `del-${Date.now()}`,
      quantity: 1,
      unit: "Pza",
      code: "SKU-00",
      description: "Descripción de producto, equipo o material",
      condition: "Nuevo / En empaque",
    };
    setDelivery({ ...delivery, items: [...delivery.items, newItem] });
  };

  const removeDeliveryItem = (id: string) => {
    if (delivery.items.length <= 1) return;
    setDelivery({ ...delivery, items: delivery.items.filter((i) => i.id !== id) });
  };

  // Contract Declarations Management
  const addContractDeclaration = () => {
    const title = prompt("Título de la declaración:", "IV. DECLARAN AMBAS PARTES:");
    if (!title) return;
    const content = prompt("Contenido de la declaración:");
    const newDec = {
      id: `dec-${Date.now()}`,
      title,
      content: content || "",
      isEnabled: true,
    };
    setContract({ ...contract, declarations: [...(contract.declarations || []), newDec] });
  };

  const toggleContractDeclaration = (id: string) => {
    setContract({
      ...contract,
      declarations: contract.declarations.map((d) =>
        d.id === id ? { ...d, isEnabled: !d.isEnabled } : d
      ),
    });
  };

  const deleteContractDeclaration = (id: string) => {
    setContract({
      ...contract,
      declarations: contract.declarations.filter((d) => d.id !== id),
    });
  };

  // Reset current document
  const handleReset = () => {
    if (!confirm("¿Deseas restablecer esta plantilla a sus valores originales?")) return;
    if (activeTab === "cotizacion") setQuotation(defaultQuotation);
    if (activeTab === "remision") setDelivery(defaultDelivery);
    if (activeTab === "contrato") setContract(defaultContracts[contractType]);
    if (activeTab === "cartapoder") setPower(defaultPowerOfAttorney[powerSubtype]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-20 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-lg shadow-inner">
                TD
              </span>
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-lg font-black tracking-tight text-white">Trax</span>
                  <span className="text-lg font-black tracking-tight text-emerald-400">Docs</span>
                  <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded ml-1">
                    Gratis
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Documentos legales & comerciales 100% editables
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab("cotizacion")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "cotizacion"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Cotizaciones</span>
            </button>
            <button
              onClick={() => setActiveTab("remision")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "remision"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Truck className="h-3.5 w-3.5" />
              <span>Remisiones</span>
            </button>
            <button
              onClick={() => setActiveTab("contrato")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "contrato"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Scale className="h-3.5 w-3.5" />
              <span>Contratos</span>
            </button>
            <button
              onClick={() => setActiveTab("cartapoder")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "cartapoder"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Scroll className="h-3.5 w-3.5" />
              <span>Cartas Poder</span>
            </button>
          </nav>

          {/* Quick Header actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-900 transition-colors"
              title="Restablecer plantilla"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Restablecer</span>
            </button>
            <a
              href="https://traxpdf.tracciondigital.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>Ir a TraxPDF</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex border-t border-slate-800/80 bg-slate-900/60 p-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab("cotizacion")}
            className={`flex-1 min-w-[90px] py-2 text-center text-xs font-semibold rounded ${
              activeTab === "cotizacion" ? "bg-emerald-500 text-slate-950" : "text-slate-400"
            }`}
          >
            Cotizaciones
          </button>
          <button
            onClick={() => setActiveTab("remision")}
            className={`flex-1 min-w-[90px] py-2 text-center text-xs font-semibold rounded ${
              activeTab === "remision" ? "bg-emerald-500 text-slate-950" : "text-slate-400"
            }`}
          >
            Remisiones
          </button>
          <button
            onClick={() => setActiveTab("contrato")}
            className={`flex-1 min-w-[90px] py-2 text-center text-xs font-semibold rounded ${
              activeTab === "contrato" ? "bg-emerald-500 text-slate-950" : "text-slate-400"
            }`}
          >
            Contratos
          </button>
          <button
            onClick={() => setActiveTab("cartapoder")}
            className={`flex-1 min-w-[90px] py-2 text-center text-xs font-semibold rounded ${
              activeTab === "cartapoder" ? "bg-emerald-500 text-slate-950" : "text-slate-400"
            }`}
          >
            Cartas Poder
          </button>
        </div>

        {/* Mobile View Toggle */}
        <div className="lg:hidden flex bg-slate-900 border-t border-slate-800 p-1 text-xs">
          <button
            onClick={() => setMobileView("form")}
            className={`flex-1 py-1.5 rounded font-semibold text-center ${
              mobileView === "form" ? "bg-slate-800 text-white" : "text-slate-400"
            }`}
          >
            Editar Datos
          </button>
          <button
            onClick={() => setMobileView("preview")}
            className={`flex-1 py-1.5 rounded font-semibold text-center ${
              mobileView === "preview" ? "bg-emerald-500 text-slate-950" : "text-slate-400"
            }`}
          >
            Ver Documento (Imprimir / PDF)
          </button>
        </div>
      </header>

      {/* Main Workspace (Split-Screen on Desktop) */}
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-4rem)]">
        {/* LEFT COLUMN: INTERACTIVE EDITOR */}
        <div
          className={`lg:col-span-5 p-4 sm:p-5 border-r border-slate-800 overflow-y-auto space-y-6 max-h-[calc(100vh-4rem)] ${
            mobileView === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          {/* TAB 1: FORMULARIO DE COTIZACIÓN */}
          {activeTab === "cotizacion" && (
            <div className="space-y-5">
              <div className="border-b border-slate-800 pb-2">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>1. Configurar Cotización Comercial</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Modifica cada dato del emisor, cliente, partidas, impuestos y condiciones comerciales.
                </p>
              </div>

              {/* Folio y Fechas */}
              <div className="grid grid-cols-3 gap-2 bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Folio</label>
                  <input
                    type="text"
                    value={quotation.folio}
                    onChange={(e) => setQuotation({ ...quotation, folio: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Fecha Emisión</label>
                  <input
                    type="date"
                    value={quotation.date}
                    onChange={(e) => setQuotation({ ...quotation, date: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Vigencia Hasta</label>
                  <input
                    type="date"
                    value={quotation.validUntil}
                    onChange={(e) => setQuotation({ ...quotation, validUntil: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                  />
                </div>
              </div>

              {/* Emisor */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" /> Tus Datos (Emisor / Empresa)
                </h3>
                <input
                  type="text"
                  placeholder="Razón Social o Nombre Comercial"
                  value={quotation.issuerName}
                  onChange={(e) => setQuotation({ ...quotation, issuerName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC"
                    value={quotation.issuerRfc}
                    onChange={(e) => setQuotation({ ...quotation, issuerRfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={quotation.issuerPhone}
                    onChange={(e) => setQuotation({ ...quotation, issuerPhone: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  value={quotation.issuerEmail}
                  onChange={(e) => setQuotation({ ...quotation, issuerEmail: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Dirección fiscal o comercial"
                  value={quotation.issuerAddress}
                  onChange={(e) => setQuotation({ ...quotation, issuerAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Cliente */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <UserCheck className="h-3.5 w-3.5" /> Datos del Cliente / Receptor
                </h3>
                <input
                  type="text"
                  placeholder="Nombre o Empresa del Cliente"
                  value={quotation.clientName}
                  onChange={(e) => setQuotation({ ...quotation, clientName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC del Cliente"
                    value={quotation.clientRfc}
                    onChange={(e) => setQuotation({ ...quotation, clientRfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Teléfono del Cliente"
                    value={quotation.clientPhone}
                    onChange={(e) => setQuotation({ ...quotation, clientPhone: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Dirección del Cliente"
                  value={quotation.clientAddress}
                  onChange={(e) => setQuotation({ ...quotation, clientAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Partidas / Conceptos */}
              <div className="space-y-3 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-white">Partidas / Servicios Cotizados</h3>
                  <button
                    type="button"
                    onClick={addQuotationItem}
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Agregar Partida</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {quotation.items.map((item) => (
                    <div key={item.id} className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="1"
                          placeholder="Cant."
                          value={item.quantity}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 1;
                            setQuotation({
                              ...quotation,
                              items: quotation.items.map((it) => (it.id === item.id ? { ...it, quantity: val } : it)),
                            });
                          }}
                          className="w-16 rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white text-center font-bold"
                        />
                        <input
                          type="text"
                          placeholder="Unidad (Pza, Serv)"
                          value={item.unit}
                          onChange={(e) => {
                            const val = e.target.value;
                            setQuotation({
                              ...quotation,
                              items: quotation.items.map((it) => (it.id === item.id ? { ...it, unit: val } : it)),
                            });
                          }}
                          className="w-20 rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                        <input
                          type="number"
                          placeholder="Precio Unitario"
                          value={item.unitPrice}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 0;
                            setQuotation({
                              ...quotation,
                              items: quotation.items.map((it) => (it.id === item.id ? { ...it, unitPrice: val } : it)),
                            });
                          }}
                          className="flex-1 rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white text-right font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => removeQuotationItem(item.id)}
                          className="p-1 text-slate-500 hover:text-rose-400"
                          title="Eliminar partida"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Descripción detallada de la partida o servicio..."
                        value={item.description}
                        onChange={(e) => {
                          const val = e.target.value;
                          setQuotation({
                            ...quotation,
                            items: quotation.items.map((it) => (it.id === item.id ? { ...it, description: val } : it)),
                          });
                        }}
                        className="w-full rounded border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-200"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">IVA (%)</label>
                    <input
                      type="number"
                      value={quotation.taxRate}
                      onChange={(e) => setQuotation({ ...quotation, taxRate: parseFloat(e.target.value) || 0 })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Descuento (%)</label>
                    <input
                      type="number"
                      value={quotation.discount}
                      onChange={(e) => setQuotation({ ...quotation, discount: parseFloat(e.target.value) || 0 })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Moneda</label>
                    <select
                      value={quotation.currency}
                      onChange={(e) => setQuotation({ ...quotation, currency: e.target.value })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                    >
                      <option value="MXN">MXN (Pesos)</option>
                      <option value="USD">USD (Dólares)</option>
                      <option value="EUR">EUR (Euros)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Datos Bancarios */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" /> Datos para Depósito / Transferencia
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Banco (ej. BBVA)"
                    value={quotation.bankName}
                    onChange={(e) => setQuotation({ ...quotation, bankName: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="CLABE Interbancaria (18 dígitos)"
                    value={quotation.bankClabe}
                    onChange={(e) => setQuotation({ ...quotation, bankClabe: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Beneficiario de la cuenta"
                  value={quotation.bankBeneficiary}
                  onChange={(e) => setQuotation({ ...quotation, bankBeneficiary: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Cláusulas Modulares */}
              <ClauseEditor
                clauses={quotation.clauses}
                onChange={(clauses) => setQuotation({ ...quotation, clauses })}
                titleLabel="Condiciones Comerciales y Cláusulas"
              />
            </div>
          )}

          {/* TAB 2: FORMULARIO DE REMISIÓN */}
          {activeTab === "remision" && (
            <div className="space-y-5">
              <div className="border-b border-slate-800 pb-2">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span>2. Configurar Nota de Remisión / Entrega</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Constancia de entrega formal de bienes con datos de fletera, operador y recepción de conformidad.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Folio Remisión</label>
                  <input
                    type="text"
                    value={delivery.folio}
                    onChange={(e) => setDelivery({ ...delivery, folio: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Fecha Entrega</label>
                  <input
                    type="date"
                    value={delivery.date}
                    onChange={(e) => setDelivery({ ...delivery, date: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Orden de Compra / Ref</label>
                  <input
                    type="text"
                    value={delivery.orderNumber}
                    onChange={(e) => setDelivery({ ...delivery, orderNumber: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-white"
                  />
                </div>
              </div>

              {/* Emisor y Destino */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" /> Emisor y Destino de Mercancías
                </h3>
                <input
                  type="text"
                  placeholder="Empresa Remitente"
                  value={delivery.issuerName}
                  onChange={(e) => setDelivery({ ...delivery, issuerName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC Emisor"
                    value={delivery.issuerRfc}
                    onChange={(e) => setDelivery({ ...delivery, issuerRfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Teléfono Emisor"
                    value={delivery.issuerPhone}
                    onChange={(e) => setDelivery({ ...delivery, issuerPhone: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cliente o Empresa Receptora"
                  value={delivery.clientName}
                  onChange={(e) => setDelivery({ ...delivery, clientName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Dirección de Destino / Almacén / Obra"
                  value={delivery.clientAddress}
                  onChange={(e) => setDelivery({ ...delivery, clientAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Contacto en destino (opcional)"
                  value={delivery.clientContact || ""}
                  onChange={(e) => setDelivery({ ...delivery, clientContact: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Logística y Transporte */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5" /> Datos del Transporte y Recepción
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Fletera / Transportista"
                    value={delivery.carrierName}
                    onChange={(e) => setDelivery({ ...delivery, carrierName: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Nombre del Operador / Chofer"
                    value={delivery.driverName}
                    onChange={(e) => setDelivery({ ...delivery, driverName: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Placas / Vehículo"
                    value={delivery.carrierPlates}
                    onChange={(e) => setDelivery({ ...delivery, carrierPlates: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Nombre de quien recibe"
                    value={delivery.receiverName}
                    onChange={(e) => setDelivery({ ...delivery, receiverName: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Teléfono de quien recibe"
                  value={delivery.receiverPhone}
                  onChange={(e) => setDelivery({ ...delivery, receiverPhone: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Observaciones de entrega / precintos..."
                  value={delivery.deliveryNotes}
                  onChange={(e) => setDelivery({ ...delivery, deliveryNotes: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Ítems entregados */}
              <div className="space-y-3 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-white">Mercancía o Equipos Entregados</h3>
                  <button
                    type="button"
                    onClick={addDeliveryItem}
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Agregar Artículo</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {delivery.items.map((item) => (
                    <div key={item.id} className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="1"
                          placeholder="Cant."
                          value={item.quantity}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 1;
                            setDelivery({
                              ...delivery,
                              items: delivery.items.map((it) => (it.id === item.id ? { ...it, quantity: val } : it)),
                            });
                          }}
                          className="w-16 rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white text-center font-bold"
                        />
                        <input
                          type="text"
                          placeholder="Unidad (Pza, Caja)"
                          value={item.unit}
                          onChange={(e) => {
                            const val = e.target.value;
                            setDelivery({
                              ...delivery,
                              items: delivery.items.map((it) => (it.id === item.id ? { ...it, unit: val } : it)),
                            });
                          }}
                          className="w-20 rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Código / SKU"
                          value={item.code}
                          onChange={(e) => {
                            const val = e.target.value;
                            setDelivery({
                              ...delivery,
                              items: delivery.items.map((it) => (it.id === item.id ? { ...it, code: val } : it)),
                            });
                          }}
                          className="w-28 rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                        <button
                          type="button"
                          onClick={() => removeDeliveryItem(item.id)}
                          className="p-1 text-slate-500 hover:text-rose-400 ml-auto"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Descripción del bien o producto..."
                        value={item.description}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDelivery({
                            ...delivery,
                            items: delivery.items.map((it) => (it.id === item.id ? { ...it, description: val } : it)),
                          });
                        }}
                        className="w-full rounded border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white"
                      />
                      <input
                        type="text"
                        placeholder="Estado (ej. Nuevo / En empaque original)"
                        value={item.condition}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDelivery({
                            ...delivery,
                            items: delivery.items.map((it) => (it.id === item.id ? { ...it, condition: val } : it)),
                          });
                        }}
                        className="w-full rounded border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-400"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cláusulas */}
              <ClauseEditor
                clauses={delivery.clauses}
                onChange={(clauses) => setDelivery({ ...delivery, clauses })}
                titleLabel="Cláusulas de Entrega y Reclamación"
              />
            </div>
          )}

          {/* TAB 3: FORMULARIO DE CONTRATO */}
          {activeTab === "contrato" && (
            <div className="space-y-5">
              <div className="border-b border-slate-800 pb-2">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Scale className="h-4 w-4" />
                  <span>3. Configurar Contrato Legal</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Plantillas civiles y mercantiles con declaraciones formales y cláusulas modulares editables.
                </p>
              </div>

              {/* Selector de Tipo de Contrato */}
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 grid grid-cols-2 gap-1.5 text-xs">
                {(
                  [
                    ["servicios", "Prestación de Servicios"],
                    ["arrendamiento", "Arrendamiento Inmueble"],
                    ["nda", "Confidencialidad (NDA)"],
                    ["compraventa", "Compraventa de Muebles"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleContractTypeChange(key)}
                    className={`py-1.5 px-2 rounded text-xs font-semibold transition-colors ${
                      contractType === key
                        ? "bg-emerald-500 text-slate-950 font-bold"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Título y Ciudad/Fecha */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <label className="text-[11px] font-medium text-slate-400 block">Título del Contrato</label>
                <input
                  type="text"
                  value={contract.title}
                  onChange={(e) => setContract({ ...contract, title: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <label className="text-[11px] font-medium text-slate-400 block">Lugar y Fecha de Celebración</label>
                <input
                  type="text"
                  value={contract.cityAndDate}
                  onChange={(e) => setContract({ ...contract, cityAndDate: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Parte A */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-semibold text-emerald-400">Parte A</h3>
                  <input
                    type="text"
                    value={contract.partyARole}
                    onChange={(e) => setContract({ ...contract, partyARole: e.target.value })}
                    className="w-36 text-right bg-transparent text-xs text-emerald-400 font-bold border-b border-slate-700 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Nombre de la Persona o Razón Social"
                  value={contract.partyAName}
                  onChange={(e) => setContract({ ...contract, partyAName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC"
                    value={contract.partyARfc}
                    onChange={(e) => setContract({ ...contract, partyARfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Representante Legal"
                    value={contract.partyARepresentative}
                    onChange={(e) => setContract({ ...contract, partyARepresentative: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Domicilio de la Parte A"
                  value={contract.partyAAddress}
                  onChange={(e) => setContract({ ...contract, partyAAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Parte B */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-semibold text-emerald-400">Parte B</h3>
                  <input
                    type="text"
                    value={contract.partyBRole}
                    onChange={(e) => setContract({ ...contract, partyBRole: e.target.value })}
                    className="w-36 text-right bg-transparent text-xs text-emerald-400 font-bold border-b border-slate-700 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Nombre de la Persona o Razón Social"
                  value={contract.partyBName}
                  onChange={(e) => setContract({ ...contract, partyBName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC"
                    value={contract.partyBRfc}
                    onChange={(e) => setContract({ ...contract, partyBRfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Representante Legal"
                    value={contract.partyBRepresentative}
                    onChange={(e) => setContract({ ...contract, partyBRepresentative: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Domicilio de la Parte B"
                  value={contract.partyBAddress}
                  onChange={(e) => setContract({ ...contract, partyBAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Declaraciones Legales */}
              <div className="space-y-3 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-white">Declaraciones Previas</h3>
                  <button
                    type="button"
                    onClick={addContractDeclaration}
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Agregar Declaración</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {contract.declarations?.map((dec) => (
                    <div key={dec.id} className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={dec.title}
                          onChange={(e) =>
                            setContract({
                              ...contract,
                              declarations: contract.declarations.map((d) =>
                                d.id === dec.id ? { ...d, title: e.target.value } : d
                              ),
                            })
                          }
                          className="font-bold text-slate-200 bg-transparent border-b border-transparent focus:border-emerald-500 w-full"
                        />
                        <button
                          type="button"
                          onClick={() => deleteContractDeclaration(dec.id)}
                          className="text-slate-500 hover:text-rose-400 ml-2"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        value={dec.content}
                        onChange={(e) =>
                          setContract({
                            ...contract,
                            declarations: contract.declarations.map((d) =>
                              d.id === dec.id ? { ...d, content: e.target.value } : d
                            ),
                          })
                        }
                        className="w-full rounded border border-slate-800 bg-slate-900 p-2 text-slate-300 leading-relaxed"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Montos y Plazos */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-white">Contraprestación y Vigencia</h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Monto"
                    value={contract.amount}
                    onChange={(e) => setContract({ ...contract, amount: parseFloat(e.target.value) || 0 })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Moneda"
                    value={contract.currency}
                    onChange={(e) => setContract({ ...contract, currency: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Condiciones de pago..."
                  value={contract.paymentTerms}
                  onChange={(e) => setContract({ ...contract, paymentTerms: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Plazo de vigencia..."
                  value={contract.duration}
                  onChange={(e) => setContract({ ...contract, duration: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Cláusulas Modulares */}
              <ClauseEditor
                clauses={contract.clauses}
                onChange={(clauses) => setContract({ ...contract, clauses })}
                titleLabel="Cláusulas Contractuales Modulares"
              />

              {/* Testigos */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-slate-300">Testigos del Instrumento</h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Nombre Testigo 1"
                    value={contract.witness1Name}
                    onChange={(e) => setContract({ ...contract, witness1Name: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="INE / Identificación Testigo 1"
                    value={contract.witness1Id}
                    onChange={(e) => setContract({ ...contract, witness1Id: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Nombre Testigo 2"
                    value={contract.witness2Name}
                    onChange={(e) => setContract({ ...contract, witness2Name: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="INE / Identificación Testigo 2"
                    value={contract.witness2Id}
                    onChange={(e) => setContract({ ...contract, witness2Id: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FORMULARIO DE CARTA PODER */}
          {activeTab === "cartapoder" && (
            <div className="space-y-5">
              <div className="border-b border-slate-800 pb-2">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Scroll className="h-4 w-4" />
                  <span>4. Configurar Carta Poder Privada</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Mandato legal para trámites vehiculares, gestiones públicas o cobros con formato legal de 4 firmas.
                </p>
              </div>

              {/* Selector de Subtipo */}
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 grid grid-cols-2 gap-1.5 text-xs">
                {(
                  [
                    ["general", "Trámites Generales"],
                    ["vehicular", "Trámite Vehicular (SEMOVI)"],
                    ["tramites", "Servicios (CFE / SACMEX)"],
                    ["cobro", "Cobro de Cheques / Finiquito"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handlePowerSubtypeChange(key)}
                    className={`py-1.5 px-2 rounded text-xs font-semibold transition-colors ${
                      powerSubtype === key
                        ? "bg-emerald-500 text-slate-950 font-bold"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Fechas y Autoridad */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">Lugar y Fecha</label>
                    <input
                      type="text"
                      value={power.cityAndDate}
                      onChange={(e) => setPower({ ...power, cityAndDate: e.target.value })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">Vigencia del Poder</label>
                    <input
                      type="text"
                      value={power.validityUntil}
                      onChange={(e) => setPower({ ...power, validityUntil: e.target.value })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
                <label className="text-[11px] font-medium text-slate-400 block">Destinatario / Autoridad</label>
                <input
                  type="text"
                  value={power.authorityTarget}
                  onChange={(e) => setPower({ ...power, authorityTarget: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <label className="text-[11px] font-medium text-slate-400 block">Fundamento Legal</label>
                <input
                  type="text"
                  value={power.legalBasis}
                  onChange={(e) => setPower({ ...power, legalBasis: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Otorgante */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400">
                  Otorgante (Poderdante - Quien da el poder)
                </h3>
                <input
                  type="text"
                  placeholder="Nombre completo del otorgante"
                  value={power.grantorName}
                  onChange={(e) => setPower({ ...power, grantorName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC o CURP"
                    value={power.grantorCurpOrRfc}
                    onChange={(e) => setPower({ ...power, grantorCurpOrRfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="INE / Identificación oficial"
                    value={power.grantorId}
                    onChange={(e) => setPower({ ...power, grantorId: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Domicilio del otorgante"
                  value={power.grantorAddress}
                  onChange={(e) => setPower({ ...power, grantorAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Apoderado */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-emerald-400">
                  Aceptante (Apoderado - Quien recibe el poder)
                </h3>
                <input
                  type="text"
                  placeholder="Nombre completo del apoderado"
                  value={power.attorneyName}
                  onChange={(e) => setPower({ ...power, attorneyName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="RFC o CURP"
                    value={power.attorneyCurpOrRfc}
                    onChange={(e) => setPower({ ...power, attorneyCurpOrRfc: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="INE / Identificación oficial"
                    value={power.attorneyId}
                    onChange={(e) => setPower({ ...power, attorneyId: e.target.value })}
                    className="rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Domicilio del apoderado"
                  value={power.attorneyAddress}
                  onChange={(e) => setPower({ ...power, attorneyAddress: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              {/* Descripción de Facultades */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-white">Facultades Conferidas (Redacción Legal Amplia)</h3>
                <textarea
                  rows={5}
                  placeholder="Detalla con precisión qué trámites o facultades se otorgan..."
                  value={power.powersDescription}
                  onChange={(e) => setPower({ ...power, powersDescription: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white leading-relaxed"
                />
              </div>

              {/* Cláusulas */}
              <ClauseEditor
                clauses={power.clauses}
                onChange={(clauses) => setPower({ ...power, clauses })}
                titleLabel="Límites y Condiciones del Poder"
              />

              {/* Testigos */}
              <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                <h3 className="text-xs font-semibold text-slate-300">Testigos de la Carta Poder</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre Testigo 1"
                      value={power.witness1Name}
                      onChange={(e) => setPower({ ...power, witness1Name: e.target.value })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white mb-1"
                    />
                    <input
                      type="text"
                      placeholder="CURP / INE Testigo 1"
                      value={power.witness1Id}
                      onChange={(e) => setPower({ ...power, witness1Id: e.target.value })}
                      className="w-full rounded border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre Testigo 2"
                      value={power.witness2Name}
                      onChange={(e) => setPower({ ...power, witness2Name: e.target.value })}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white mb-1"
                    />
                    <input
                      type="text"
                      placeholder="CURP / INE Testigo 2"
                      value={power.witness2Id}
                      onChange={(e) => setPower({ ...power, witness2Id: e.target.value })}
                      className="w-full rounded border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: LIVE SHEET PREVIEW (WYSIWYG) */}
        <div
          className={`lg:col-span-7 bg-slate-950 flex flex-col ${
            mobileView === "form" ? "hidden lg:flex" : "flex"
          }`}
        >
          <DocumentPreview
            tab={activeTab}
            quotation={quotation}
            delivery={delivery}
            contract={contract}
            power={power}
          />
        </div>
      </div>
    </div>
  );
}
