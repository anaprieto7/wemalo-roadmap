import React from "react";

function RoadmapTag({ tag }) {
  if (!tag) return null;

  return (
    <span
      className="roadmap-tag"
      style={{ backgroundColor: tag.color || "#e5e7eb" }}
    >
      {tag.name}
    </span>
  );
}

export default RoadmapTag;
