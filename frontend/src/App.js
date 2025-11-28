import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import HeaderNew from './components/HeaderNew';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
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
import IndicesTrading from './pages/markets/IndicesTrading';
import CommoditiesTrading from './pages/markets/CommoditiesTrading';
// Platforms
import MT5 from './pages/platforms/MT5';
import MT4 from './pages/platforms/MT4';
import CTrader from './pages/platforms/CTrader';
// Trading
import ProConditions from './pages/trading/ProConditions';
import PAMMAccounts from './pages/trading/PAMMAccounts';
import MobileApp from './pages/trading/MobileApp';
import WebTrader from './pages/trading/WebTrader';
// Tools
import EconomicCalendar from './pages/tools/EconomicCalendar';
import MarketNews from './pages/tools/MarketNews';
// Education
import Webinars from './pages/education/Webinars';
import TradingGuides from './pages/education/TradingGuides';
import LiveWebinars from './pages/education/LiveWebinars';
import VideoTutorials from './pages/education/VideoTutorials';
import TradingGlossary from './pages/education/TradingGlossary';
import FAQ from './pages/education/FAQ';
// Company
import WhyUs from './pages/company/WhyUs';
import Regulation from './pages/company/Regulation';
import Security from './pages/company/Security';
import Careers from './pages/company/Careers';
import Contact from './pages/company/Contact';
import Privacy from './pages/company/Privacy';
// Legal pages
import LegalDocuments from './pages/legal/LegalDocuments';
import Terms from './pages/legal/Terms';
import PrivacyPolicy from './pages/legal/Privacy';
import RiskDisclosure from './pages/legal/RiskDisclosure';
import Complaints from './pages/legal/Complaints';
import Partnerships from './pages/company/Partnerships';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <HeaderNew />
          <CookieConsent />
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
            <Route path="/markets/indices" element={<IndicesTrading />} />
            <Route path="/markets/commodities" element={<CommoditiesTrading />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/pro-conditions" element={<ProConditions />} />
            <Route path="/pamm" element={<PAMMAccounts />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/webtrader" element={<WebTrader />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/calculator" element={<Tools />} />
            <Route path="/tools/economic-calendar" element={<EconomicCalendar />} />
            <Route path="/tools/market-news" element={<MarketNews />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/guides" element={<TradingGuides />} />
            <Route path="/education/webinars" element={<LiveWebinars />} />
            <Route path="/education/videos" element={<VideoTutorials />} />
            <Route path="/education/glossary" element={<TradingGlossary />} />
            <Route path="/education/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/regulation" element={<Regulation />} />
            <Route path="/security" element={<Security />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
