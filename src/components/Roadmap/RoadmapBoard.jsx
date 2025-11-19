import React from "react";
import { roadmapColumns } from "./roadmapData";
import RoadmapColumn from "./RoadmapColumn";
import "./roadmap.css"; 

function RoadmapBoard() {
  return (
    // 1. FONDO: Cambiado bg-slate-100 a bg-gray-900 y añadido 'roadmap-container'
    <div className="flex flex-col min-h-screen roadmap-container">
      
      {/* 2. HEADER: Cambiado bg-orange-500 a bg-transparent */}
      <header className="flex items-center justify-between px-6 py-10 bg-slate-900 text-slate-100 ">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white text-slate-900 flex items-center justify-center font-bold text-lg">
            W
          </div>
          <span className="font-semibold text-slate-900 text-lg">WEMALO Roadmap</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="text-slate-100 hover:underline whitespace-nowrap">
            Zurück zu WEMALO
          </a>
          <button className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center">
            ＋
          </button>
          <button className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center">
            👤
          </button>
        </div>
      </header>

   
    <div className="bg-slate-900 h-48"></div> 

      <main className="flex-1 overflow-x-auto relative -mt-48 z-10 px-6 py-6">
        <div className="flex gap-4 min-h-[calc(100vh-160px)]"> {/* Ajuste de altura */}
          {roadmapColumns.map((col) => (
            <RoadmapColumn key={col.id} column={col} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default RoadmapBoard;