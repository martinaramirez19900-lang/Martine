import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const TradingGlossary = () => {
  const { t } = useLanguage();

  const terms = [
    { term: 'Ask Price', definition: 'The price at which a seller is willing to sell a security' },
    { term: 'Bid Price', definition: 'The price at which a buyer is willing to buy a security' },
    { term: 'Bull Market', definition: 'A market condition where prices are rising or expected to rise' },
    { term: 'Bear Market', definition: 'A market condition where prices are falling or expected to fall' },
    { term: 'Leverage', definition: 'The use of borrowed capital to increase trading potential' },
    { term: 'Margin', definition: 'The amount of money required to open and maintain a leveraged position' },
    { term: 'Pip', definition: 'The smallest price movement in forex trading (0.0001 for most pairs)' },
    { term: 'Spread', definition: 'The difference between the bid and ask price' },
    { term: 'Stop Loss', definition: 'An order to close a position at a specific price to limit losses' },
    { term: 'Take Profit', definition: 'An order to close a position at a specific price to secure profits' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Trading Glossary</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Essential trading terms and definitions every trader should know
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search terms..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {terms.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.term}</h3>
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