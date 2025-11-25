import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.company}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/why-us" className="hover:text-green-500 transition-colors">Why SMH Markets</Link></li>
              <li><Link to="/careers" className="hover:text-green-500 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="hover:text-green-500 transition-colors">Partnerships</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.trading}</h3>
            <ul className="space-y-3">
              <li><Link to="/platforms" className="hover:text-green-500 transition-colors">Trading Platforms</Link></li>
              <li><Link to="/markets" className="hover:text-green-500 transition-colors">Markets</Link></li>
              <li><Link to="/accounts" className="hover:text-green-500 transition-colors">Account Types</Link></li>
              <li><Link to="/tools" className="hover:text-green-500 transition-colors">Trading Tools</Link></li>
              <li><Link to="/pricing" className="hover:text-green-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.footer.legal}</h3>
            <ul className="space-y-3">
              <li><Link to="/legal" className="hover:text-green-500 transition-colors">Legal Documents</Link></li>
              <li><Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/risk" className="hover:text-green-500 transition-colors">Risk Disclosure</Link></li>
              <li><Link to="/complaints" className="hover:text-green-500 transition-colors">Complaints</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  5 Westbrook Court<br/>
                  Sharrow Vale Road<br/>
                  Sheffield, South Yorkshire<br/>
                  S11 8YZ, United Kingdom
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-sm">+1 787 945 2353</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-sm">+1 787 945 2350</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <a href="mailto:support@smh-markets.com" className="text-sm hover:text-green-500 transition-colors">
                  support@smh-markets.com
                </a>
              </li>
            </ul>
          </div>

          {/* Licenses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Regulatory Documents</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/documents/SMH_CAPITAL_ADVISORS_LLC.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-green-500 transition-colors text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>SMH Capital Advisors LLC</span>
                </a>
              </li>
              <li>
                <a 
                  href="/documents/SMH_Finance_LLP.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-green-500 transition-colors text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>SMH Finance LLP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Risk Warning - Expanded */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="mb-6 bg-gray-800 p-6 rounded-lg">
            <h4 className="text-white font-bold text-lg mb-4">Risk Warning</h4>
            <div className="text-xs text-gray-400 leading-relaxed space-y-3">
              <p>
                <strong className="text-gray-300">Trading Forex, CFDs, and other leveraged products involves significant risk of loss and may not be suitable for all investors.</strong> You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions.
              </p>
              <p>
                The high degree of leverage available in Forex and CFD trading can work against you as well as for you. Before deciding to trade foreign exchange or any other financial instrument, you should carefully consider your investment objectives, level of experience, and risk appetite. You should be aware of all the risks associated with trading on margin and seek advice from an independent financial advisor if you have any doubts.
              </p>
              <p>
                Past performance is not indicative of future results. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if necessary.
              </p>
              <p>
                <strong className="text-gray-300">Regulatory Information:</strong> SMH Markets is a trading name of SMH Capital Advisors LLC and SMH Finance LLP. SMH Capital Advisors LLC is authorized and regulated by relevant financial authorities. All client funds are held in segregated accounts at tier-1 banks for maximum security.
              </p>
              <p>
                The information on this website is not directed at residents of certain jurisdictions where such distribution or use would be contrary to local law or regulation. Please refer to our legal documents for complete terms and conditions.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>© 2025 SMH Markets. All rights reserved.</p>
              <p className="mt-1">SMH Capital Advisors LLC | SMH Finance LLP</p>
            </div>
            <div className="flex space-x-6 items-center">
              <div className="h-8 px-3 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">VISA</span>
              </div>
              <div className="h-8 px-3 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">MC</span>
              </div>
              <div className="h-8 px-3 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-green-500 font-bold text-xs">🔒 SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;