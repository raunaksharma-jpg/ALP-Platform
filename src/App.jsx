import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components";
import {
  PlatformModules,
  Dashboard,
  Analytics,
  AIAgent,
  RBACAdmin,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/platform-modules" replace />} />
        <Route path="/platform-modules" element={<PlatformModules />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/ai-agent" element={<AIAgent />} />
        <Route path="/rbac-admin" element={<RBACAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
