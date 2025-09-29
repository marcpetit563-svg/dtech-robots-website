import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RestaurationPage from './pages/RestaurationPage';
import SantePage from './pages/SantePage';
import HotelleriePage from './pages/HotelleriePage';
import BeautePage from './pages/BeautePage';
import AgriculturePage from './pages/AgriculturePage';
import HusqvarnaCeoraPage from './pages/HusqvarnaCeoraPage';
import HusqvarnaAutomower520Page from './pages/HusqvarnaAutomower520Page';
import BelroboticsBigmowPage from './pages/BelroboticsBigmowPage';
import AutoManucurePage from './pages/AutoManucurePage';
import NovaSkin4DPage from './pages/NovaSkin4DPage';
import KleenbotC30Page from './pages/KleenbotC30Page';
import SparkozTN10Page from './pages/SparkozTN10Page';
import PuduCC1Page from './pages/PuduCC1Page';
import SparkozTN70Page from './pages/SparkozTN70Page';
import ServiceEntretienPage from './pages/ServiceEntretienPage';

function App() {
  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        // This would typically close any open dropdowns
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restauration" element={<RestaurationPage />} />
          <Route path="/hotellerie" element={<HotelleriePage />} />
          <Route path="/beaute" element={<BeautePage />} />
          <Route path="/agriculture" element={<AgriculturePage />} />
          <Route path="/agriculture/tondeuses-autonomes" element={<HusqvarnaCeoraPage />} />
          <Route path="/agriculture/husqvarna-automower-520" element={<HusqvarnaAutomower520Page />} />
          <Route path="/agriculture/husqvarna-ceora-546-epos" element={<HusqvarnaCeoraPage />} />
          <Route path="/agriculture/belrobotics-bigmow" element={<BelroboticsBigmowPage />} />
          <Route path="/beaute/robot-massage-therapeutique" element={<AutoManucurePage />} />
          <Route path="/beaute/novaskin-4d" element={<NovaSkin4DPage />} />
          <Route path="/service-entretien/robot-nettoyage-restaurant" element={<KleenbotC30Page />} />
          <Route path="/service-entretien/sparkoz-tn10" element={<SparkozTN10Page />} />
          <Route path="/service-entretien/pudu-cc1" element={<PuduCC1Page />} />
          <Route path="/service-entretien/sparkoz-tn70" element={<SparkozTN70Page />} />
          <Route path="/service-entretien" element={<ServiceEntretienPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;