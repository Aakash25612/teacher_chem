import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NeetRepeater from './pages/neet/NeetRepeater';
import Neet11th from './pages/neet/Neet11th';
import Neet12th from './pages/neet/Neet12th';
import { NeetCrashCourse } from './pages/neet/NeetCrashCourse';
import JeeRepeater from './pages/jee/JeeRepeater';
import Jee11th from './pages/jee/Jee11th';
import Jee12th from './pages/jee/Jee12th';
import PhysicalChemistry from './pages/chemistry/PhysicalChemistry';
import OrganicChemistry from './pages/chemistry/OrganicChemistry';
import InorganicChemistry from './pages/chemistry/InorganicChemistry';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* NEET Routes */}
          <Route path="/neet/repeater" element={<NeetRepeater />} />
          <Route path="/neet/11th" element={<Neet11th />} />
          <Route path="/neet/12th" element={<Neet12th />} />
          <Route path="/neet/crash-course" element={<NeetCrashCourse />} />
          
          {/* JEE Routes */}
          <Route path="/jee/repeater" element={<JeeRepeater />} />
          <Route path="/jee/11th" element={<Jee11th />} />
          <Route path="/jee/12th" element={<Jee12th />} />
          
          {/* Chemistry Routes */}
          <Route path="/chemistry/physical" element={<PhysicalChemistry />} />
          <Route path="/chemistry/organic" element={<OrganicChemistry />} />
          <Route path="/chemistry/inorganic" element={<InorganicChemistry />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;