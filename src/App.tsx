import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ServicesLanding from './pages/ServicesLanding';
import InfrastructureLanding from './pages/InfrastructureLanding';
import ProjectDetail from './pages/projects/ProjectDetail';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import StructuralAnalysis from './pages/services/StructuralAnalysis';
import TowerDesign from './pages/services/TowerDesign';
import Retrofitting from './pages/services/Retrofitting';
import DroneInspections from './pages/services/DroneInspections';
import DigitalTwins from './pages/services/DigitalTwins';
import SelfSupporting from './pages/infrastructure/SelfSupporting';
import Monopoles from './pages/infrastructure/Monopoles';
import GuyedTowers from './pages/infrastructure/GuyedTowers';
import Rooftops from './pages/infrastructure/Rooftops';
import Normativa from './pages/Normativa';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import JobDetail from './pages/JobDetail';
import EmblematicProjects from './pages/EmblematicProjects';
import Chatbot from './components/Chatbot';
import { Privacy, Cookies, LegalNotice, Terms, PRL } from './pages/legal/LegalPages';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/trabaja-con-nosotros" element={<Careers />} />
            <Route path="/trabaja-con-nosotros/:id" element={<JobDetail />} />
            <Route path="/contacto" element={<Contact />} />
            
            {/* Services Routes */}
            <Route path="/servicios" element={<ServicesLanding />} />
            <Route path="/servicios/analisis" element={<StructuralAnalysis />} />
            <Route path="/servicios/diseno" element={<TowerDesign />} />
            <Route path="/servicios/refuerzos" element={<Retrofitting />} />
            <Route path="/servicios/drones" element={<DroneInspections />} />
            <Route path="/servicios/digital-twins" element={<DigitalTwins />} />
            
            {/* Infrastructure Routes */}
            <Route path="/infraestructura" element={<InfrastructureLanding />} />
            <Route path="/infraestructura/autosoportadas" element={<SelfSupporting />} />
            <Route path="/infraestructura/monopolos" element={<Monopoles />} />
            <Route path="/infraestructura/arriostradas" element={<GuyedTowers />} />
            <Route path="/infraestructura/rooftops" element={<Rooftops />} />
            
            {/* Other Routes */}
            <Route path="/normativa" element={<Normativa />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            
            {/* Legal Routes */}
            <Route path="/legal/privacidad" element={<Privacy />} />
            <Route path="/legal/cookies" element={<Cookies />} />
            <Route path="/legal/aviso-legal" element={<LegalNotice />} />
            <Route path="/legal/terminos" element={<Terms />} />
            <Route path="/legal/prl" element={<PRL />} />
            
            {/* Project Routes */}
            <Route path="/proyectos" element={<Portfolio />} />
            <Route path="/proyectos/emblematicos" element={<EmblematicProjects />} />
            <Route path="/proyectos/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
