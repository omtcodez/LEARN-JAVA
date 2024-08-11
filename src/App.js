import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Introduction from './Introduction';
import Setup from './Setup';
import Syntax from './Syntax';
import OOP from './OOP';
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/Introduction.css';
import './styles/Setup.css';
import './styles/Syntax.css';
import './styles/OOP.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/syntax" element={<Syntax />} />
        <Route path="/oop" element={<OOP />} />
      </Routes>
    </Router>
  );
}

export default App;
