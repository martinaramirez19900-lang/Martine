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
import OpenAccount from './pages/OpenAccount';
import Pricing from './pages/Pricing';
import Funding from './pages/Funding';
// Markets
import ForexTrading from './pages/markets/ForexTrading';
import StockTrading from './pages/markets/StockTrading';
import CryptoTrading from './pages/markets/CryptoTrading';
// Platforms
import MT5 from './pages/platforms/MT5';
import MT4 from './pages/platforms/MT4';
import CTrader from './pages/platforms/CTrader';
// Company
import WhyUs from './pages/company/WhyUs';
import Regulation from './pages/company/Regulation';
import Security from './pages/company/Security';
import Careers from './pages/company/Careers';
import Contact from './pages/company/Contact';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <HeaderNew />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/open-account" element={<OpenAccount />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/platforms/mt5" element={<MT5 />} />
            <Route path="/platforms/mt4" element={<MT4 />} />
            <Route path="/platforms/ctrader" element={<CTrader />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/markets/forex" element={<ForexTrading />} />
            <Route path="/markets/stocks" element={<StockTrading />} />
            <Route path="/markets/crypto" element={<CryptoTrading />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/calculator" element={<Tools />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/guides" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/regulation" element={<Regulation />} />
            <Route path="/security" element={<Security />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
