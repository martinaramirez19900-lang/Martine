import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { extendedTranslations } from '../i18n/extendedTranslations';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import smhLogo from '../assets/images/smh-logo.png';

const HeaderNew = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  
  const t = extendedTranslations[language] || extendedTranslations.en;

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'cz', name: 'Čeština', flag: '🇨🇿' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={smhLogo} 
              alt="SMH Markets Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Trading Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-green-600">
                  {t.nav.trading}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Accounts & Platforms</h4>
                      <NavigationMenuLink asChild>
                        <Link to="/open-account" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.openAccount}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/accounts" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.accountTypes}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/platforms/mt5" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.mt5}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/platforms/mt4" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.mt4}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/platforms/ctrader" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.ctrader}</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Trading Services</h4>
                      <NavigationMenuLink asChild>
                        <Link to="/pricing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.pricingModel}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/funding" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.fundingWithdrawals}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/mobile-app" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.mobileApp}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/pro-conditions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.proConditions}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/pamm" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.pammAccounts}</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Markets & Tools Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-green-600">
                  {t.nav.marketsTools}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Markets</h4>
                      <NavigationMenuLink asChild>
                        <Link to="/markets/forex" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.forex}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/markets/stocks" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.stocks}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/markets/indices" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.indices}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/markets/crypto" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.crypto}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/markets/commodities" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.commodities}</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Trading Tools</h4>
                      <NavigationMenuLink asChild>
                        <Link to="/tools/calculator" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.calculator}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/tools/economic-calendar" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.economicCalendar}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/tools/market-news" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.marketNews}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/tools/technical-analysis" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.technicalAnalysis}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/tools/screener" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                          <div className="text-sm font-medium">{t.nav.screener}</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Knowledge Hub Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-green-600">
                  {t.nav.knowledgeHub}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link to="/education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.education}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/education/guides" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.tradingGuides}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/education/webinars" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.webinars}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/education/videos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.videoTutorials}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/education/glossary" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.glossary}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/education/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.faq}</div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-green-600">
                  {t.nav.company}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.aboutUs}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/why-us" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.whyUs}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/regulation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.regulation}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/security" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.security}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.careers}</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700">
                        <div className="text-sm font-medium">{t.nav.contact}</div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage?.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="outline" 
              className="border-gray-300"
              onClick={() => window.location.href = '/open-account'}
            >
              Login
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = '/open-account'}
            >
              Open Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link to="/open-account" className="text-gray-700 hover:text-green-600 font-medium">{t.nav.openAccount}</Link>
              <Link to="/platforms" className="text-gray-700 hover:text-green-600 font-medium">Platforms</Link>
              <Link to="/markets" className="text-gray-700 hover:text-green-600 font-medium">Markets</Link>
              <Link to="/education" className="text-gray-700 hover:text-green-600 font-medium">Education</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
              <div className="pt-4 space-y-3">
                <select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <Button variant="outline" className="w-full border-gray-300">
                  Login
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Open Account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderNew;