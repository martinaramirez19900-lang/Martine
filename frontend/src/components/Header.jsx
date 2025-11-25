import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import smhLogo from '../assets/images/smh-logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'cz', name: 'Čeština', flag: '🇨🇿' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' }
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
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/platforms" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {t.nav.platforms}
            </Link>
            <Link to="/markets" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {t.nav.markets}
            </Link>
            <Link to="/accounts" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {t.nav.accounts}
            </Link>
            <Link to="/tools" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {t.nav.tools}
            </Link>
            <Link to="/education" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {t.nav.education}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {t.nav.about}
            </Link>
          </nav>

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

            <Button variant="outline" className="border-gray-300">
              {t.nav.login}
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              {t.nav.signup}
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
              <Link to="/platforms" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {t.nav.platforms}
              </Link>
              <Link to="/markets" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {t.nav.markets}
              </Link>
              <Link to="/accounts" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {t.nav.accounts}
              </Link>
              <Link to="/tools" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {t.nav.tools}
              </Link>
              <Link to="/education" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {t.nav.education}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {t.nav.about}
              </Link>
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
                  {t.nav.login}
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  {t.nav.signup}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;