import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.company}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link to="/why-us" className="hover:text-red-500 transition-colors">Why SMH Markets</Link></li>
              <li><Link to="/careers" className="hover:text-red-500 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="hover:text-red-500 transition-colors">Partnerships</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.trading}</h3>
            <ul className="space-y-3">
              <li><Link to="/platforms" className="hover:text-red-500 transition-colors">Trading Platforms</Link></li>
              <li><Link to="/markets" className="hover:text-red-500 transition-colors">Markets</Link></li>
              <li><Link to="/accounts" className="hover:text-red-500 transition-colors">Account Types</Link></li>
              <li><Link to="/tools" className="hover:text-red-500 transition-colors">Trading Tools</Link></li>
              <li><Link to="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.legal}</h3>
            <ul className="space-y-3">
              <li><Link to="/legal" className="hover:text-red-500 transition-colors">Legal Documents</Link></li>
              <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/risk" className="hover:text-red-500 transition-colors">Risk Disclosure</Link></li>
              <li><Link to="/complaints" className="hover:text-red-500 transition-colors">Complaints</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.followUs}</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SMH</span>
                <span className="text-xl font-light text-gray-400 ml-1">Markets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="mb-6">
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.footer.riskWarning}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">{t.footer.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <img src="https://via.placeholder.com/60x40/333/fff?text=Visa" alt="Visa" className="h-8 opacity-60" />
              <img src="https://via.placeholder.com/60x40/333/fff?text=MC" alt="Mastercard" className="h-8 opacity-60" />
              <img src="https://via.placeholder.com/60x40/333/fff?text=SSL" alt="SSL" className="h-8 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;