import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import HeaderNew from './components/HeaderNew';
import Footer from './components/Footer';
import Home from './pages/Home';
import Platforms from './pages/Platforms';
import Markets from './pages/Markets';
import Accounts from './pages/Accounts';
import Tools from './pages/Tools';
import Education from './pages/Education';
import About from './pages/About';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
