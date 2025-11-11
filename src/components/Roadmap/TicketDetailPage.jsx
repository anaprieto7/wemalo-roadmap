import React from "react";
import { useParams, Link } from "react-router-dom";
import { roadmapColumns } from "./roadmapData";

function findItemById(id) {
  // Aplano todas las columnas para encontrar el item por id
  for (const column of roadmapColumns) {
    const found = column.items.find((item) => item.id === id);
    if (found) {
      return { ...found, status: column.title, statusColor: column.color };
    }
  }
  return null;
}

function TicketDetailPage() {
  const { id } = useParams();
  const item = findItemById(id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
        <p className="text-slate-700 mb-4">Ticket nicht gefunden.</p>
        <Link
          to="/"
          className="text-emerald-600 hover:underline text-sm font-medium"
        >
          Zurück zur Roadmap
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header simple */}
      <header className="flex items-center justify-between px-6 py-3 bg-blue-900 text-white">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-sm hover:underline">
            ← Zurück zur Roadmap
          </Link>
        </div>
        <span className="text-sm font-medium">Ticket-Details</span>
        <div className="w-10" /> {/* spacer */}
      </header>

      {/* Contenido */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-xs p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Ticket ID
              </p>
              <p className="text-sm font-mono text-slate-700">{item.id}</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Votes
              </p>
              <p className="text-sm text-slate-700">▲ {item.votes ?? 0}</p>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold text-slate-900 mb-1">
              {item.title}
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <span
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: item.statusColor }}
              >
                {item.status}
              </span>
              {item.tag && (
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: item.tag.color }}
                >
                  {item.tag.name}
                </span>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-800 mb-1">
              Beschreibung
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.description || "Keine Beschreibung hinterlegt."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Verantwortlich
              </p>
              <p className="text-sm text-slate-800">
                {item.owner || "Noch nicht zugewiesen"}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Status
              </p>
              <p className="text-sm text-slate-800">{item.status}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicketDetailPage;
