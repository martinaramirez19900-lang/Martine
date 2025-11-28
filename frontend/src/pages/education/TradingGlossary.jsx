import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';

const TradingGlossary = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    { term: t.educationPages?.glossaryTerm1 || 'Ask Price', definition: t.educationPages?.glossaryDef1 || 'The price at which a trader can buy a currency pair' },
    { term: t.educationPages?.glossaryTerm2 || 'Bid Price', definition: t.educationPages?.glossaryDef2 || 'The price at which a trader can sell a currency pair' },
    { term: t.educationPages?.glossaryTerm3 || 'Spread', definition: t.educationPages?.glossaryDef3 || 'The difference between the bid and ask price' },
    { term: t.educationPages?.glossaryTerm4 || 'Leverage', definition: t.educationPages?.glossaryDef4 || 'Borrowed capital used to increase potential returns' },
    { term: t.educationPages?.glossaryTerm5 || 'Margin', definition: t.educationPages?.glossaryDef5 || 'The amount of money required to open and maintain a leveraged position' },
    { term: t.educationPages?.glossaryTerm6 || 'Pip', definition: t.educationPages?.glossaryDef6 || 'The smallest price move that a currency pair can make' },
    { term: t.educationPages?.glossaryTerm7 || 'Lot', definition: t.educationPages?.glossaryDef7 || 'A standardized quantity of a financial instrument' },
    { term: t.educationPages?.glossaryTerm8 || 'Stop Loss', definition: t.educationPages?.glossaryDef8 || 'An order to close a trade at a specific price to limit losses' },
    { term: t.educationPages?.glossaryTerm9 || 'Take Profit', definition: t.educationPages?.glossaryDef9 || 'An order to close a trade at a specific price to secure profits' },
    { term: t.educationPages?.glossaryTerm10 || 'Volatility', definition: t.educationPages?.glossaryDef10 || 'A statistical measure of price fluctuations over time' }
  ];

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.educationPages?.glossaryTitle || 'Trading Glossary'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.educationPages?.glossarySubtitle || 'Comprehensive dictionary of trading terms and definitions'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t.educationPages?.searchTerms || 'Search terms...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredTerms.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.term}</h3>
                <p className="text-gray-600">{item.definition}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingGlossary;