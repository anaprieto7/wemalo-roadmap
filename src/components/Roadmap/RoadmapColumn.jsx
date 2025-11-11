import React from "react";
import RoadmapItem from "./RoadmapItem";

function RoadmapColumn({ column }) {
  return (
    <section
        className="roadmap-column relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
        style={{
            borderTop: `4px solid ${column.color}`,
            borderRadius: "16px",
        }}
        >

        <header className="flex items-center gap-2 px-4 py-3 font-semibold text-sm border-b border-slate-100 text-gray-100">
        {/* Añadimos 'text-gray-800' (o text-slate-900, el que prefieras) */}
        <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: column.color }}
        />
        <span>{column.title}</span>
        </header>

      <div className="flex flex-col gap-2 p-3 overflow-y-auto">
        {column.items && column.items.length > 0 ? (
          column.items.map((item) => (
            <RoadmapItem key={item.id} item={item} />
          ))
        ) : (
          <p className="text-xs text-slate-300 px-2 py-1">
            Noch keine Einträge.
          </p>
        )}
      </div>
    </section>
  );
}

export default RoadmapColumn;
