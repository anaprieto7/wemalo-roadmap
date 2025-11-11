
import React from "react";
import { Routes, Route } from "react-router-dom";
import RoadmapBoard from "./components/Roadmap/RoadmapBoard";
import TicketDetailPage from "./components/Roadmap/TicketDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoadmapBoard />} />
      <Route path="/ticket/:id" element={<TicketDetailPage />} />
    </Routes>
  );
}

export default App;
