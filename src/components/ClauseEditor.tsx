"use client";

import { useState } from "react";
import { Clause } from "../types/documents";
import { Plus, Trash2, Eye, EyeOff, CheckCircle2 } from "lucide-react";

interface ClauseEditorProps {
  clauses: Clause[];
  onChange: (clauses: Clause[]) => void;
  titleLabel?: string;
}

export function ClauseEditor({ clauses, onChange, titleLabel = "Cláusulas y Condiciones del Documento" }: ClauseEditorProps) {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleToggle = (id: string) => {
    onChange(
      clauses.map((c) => (c.id === id ? { ...c, isEnabled: !c.isEnabled } : c))
    );
  };

  const handleUpdate = (id: string, field: "title" | "content", value: string) => {
    onChange(
      clauses.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const handleDelete = (id: string) => {
    onChange(clauses.filter((c) => c.id !== id));
  };

  const handleAddClause = () => {
    if (!newTitle.trim() && !newContent.trim()) return;
    const newClause: Clause = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim() || `Cláusula ${clauses.length + 1}`,
      content: newContent.trim(),
      isEnabled: true,
      isCustom: true
    };
    onChange([...clauses, newClause]);
    setNewTitle("");
    setNewContent("");
    setIsAdding(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-200">{titleLabel}</h3>
          <p className="text-xs text-slate-400">
            Activa, desactiva o edita las cláusulas para adaptar el documento a tus necesidades jurídicas.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAdding(!isAdding)}
          className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Agregar Cláusula</span>
        </button>
      </div>

      {isAdding && (
        <div className="rounded-lg border border-emerald-500/30 bg-slate-900/90 p-3.5 space-y-3">
          <h4 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
            <Plus className="h-3.5 w-3.5" /> Nueva Cláusula Personalizada
          </h4>
          <input
            type="text"
            placeholder="Título de la cláusula (ej. NOVENA. PENA CONVENCIONAL)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
          />
          <textarea
            rows={3}
            placeholder="Redacción detallada de la condición o estipulación..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="rounded px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleAddClause}
              className="rounded bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Guardar Cláusula
            </button>
          </div>
        </div>
      )}

      <div className="space-y-2.5">
        {clauses.map((clause, idx) => (
          <div
            key={clause.id}
            className={`rounded-lg border p-3 transition-all ${
              clause.isEnabled
                ? "border-slate-800 bg-slate-900/70"
                : "border-slate-800/40 bg-slate-950/40 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 flex-1">
                <button
                  type="button"
                  onClick={() => handleToggle(clause.id)}
                  title={clause.isEnabled ? "Desactivar cláusula" : "Activar cláusula"}
                  className={`flex h-6 w-6 items-center justify-center rounded transition-colors ${
                    clause.isEnabled
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-slate-800 text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {clause.isEnabled ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </button>

                <input
                  type="text"
                  value={clause.title}
                  onChange={(e) => handleUpdate(clause.id, "title", e.target.value)}
                  className="font-medium text-xs text-slate-200 bg-transparent border-b border-transparent hover:border-slate-700 focus:border-emerald-500 focus:bg-slate-950 px-1 py-0.5 w-full rounded focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleToggle(clause.id)}
                  className="p-1 text-slate-400 hover:text-slate-200"
                  title={clause.isEnabled ? "Ocultar del documento" : "Mostrar en documento"}
                >
                  {clause.isEnabled ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(clause.id)}
                  className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  title="Eliminar cláusula"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {clause.isEnabled && (
              <textarea
                rows={2}
                value={clause.content}
                onChange={(e) => handleUpdate(clause.id, "content", e.target.value)}
                className="w-full rounded border border-slate-800 bg-slate-950/80 px-2.5 py-1.5 text-xs text-slate-300 leading-relaxed focus:border-emerald-500 focus:outline-none"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
