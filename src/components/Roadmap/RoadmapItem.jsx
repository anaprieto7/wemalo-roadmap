import React from "react";
import RoadmapTag from "./RoadmapTag";
import { Link } from "react-router-dom";

function RoadmapItem({ item }) {
  return (
    <Link to={`/ticket/${item.id}`} className="block">
      <article className="roadmap-item hover:shadow-md hover:bg-slate-100 transition-all duration-150 cursor-pointer rounded-md">
        <div className="flex justify-end mb-1">
          <span className="text-[11px] text-slate-500">▲ {item.votes ?? 0}</span>
        </div>
        <h3 className="text-sm font-medium text-slate-900 mb-1">
          {item.title}
        </h3>
        <div className="mt-1">
          <RoadmapTag tag={item.tag} />
        </div>
      </article>
    </Link>
  );
}

export default RoadmapItem;
