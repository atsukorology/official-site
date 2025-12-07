import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AtsukorologyPage from './pages/AtsukorologyPage';
import ThreeDPrintPage from './pages/ThreeDPrintPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/atsukorology" replace />} />
        <Route path="/portal" element={<HomePage />} />
        <Route path="/atsukorology" element={<AtsukorologyPage />} />
        <Route path="/3d-print" element={<ThreeDPrintPage />} />
      </Routes>
    </Router>
  );
}

export default App;