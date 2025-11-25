import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { tradingInstruments } from '../data/mockData';

const Markets = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredInstruments = tradingInstruments.filter(instrument => {
    const matchesSearch = instrument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         instrument.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || instrument.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.markets.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.markets.subtitle}</p>
          
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={t.markets?.searchPlaceholder || 'Search instruments...'}
              className="pl-12 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-12">
              <TabsTrigger value="all">{t.markets?.allMarkets || 'All Markets'}</TabsTrigger>
              <TabsTrigger value="forex">{t.markets.forex}</TabsTrigger>
              <TabsTrigger value="stocks">{t.markets.stocks}</TabsTrigger>
              <TabsTrigger value="crypto">{t.markets.crypto}</TabsTrigger>
              <TabsTrigger value="metals">{t.markets.metals}</TabsTrigger>
              <TabsTrigger value="indices">{t.markets.indices}</TabsTrigger>
              <TabsTrigger value="energy">{t.markets.energy}</TabsTrigger>
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInstruments.map((instrument) => (
                  <Card key={instrument.id} className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                          {instrument.symbol}
                        </h3>
                        <p className="text-sm text-gray-600">{instrument.name}</p>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {instrument.change.startsWith('+') ? (
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{instrument.price}</div>
                        <div className={`text-sm font-medium ${
                          instrument.change.startsWith('+') ? 'text-green-600' : 'text-green-600'
                        }`}>
                          {instrument.change}
                        </div>
                      </div>
                    </div>

                    {/* Mini Chart Placeholder */}
                    <div className="h-24 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-xs text-gray-400">{t.markets?.chartVisualization || 'Chart visualization'}</div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => window.location.href = '/open-account'}
                      >
                        {t.markets?.buy || 'Buy'}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => window.location.href = '/open-account'}
                      >
                        {t.markets?.sell || 'Sell'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredInstruments.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">{t.markets?.noResults || 'No instruments found matching your criteria'}</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Market Categories Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Explore Market Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Forex Trading',
                description: 'Trade major, minor, and exotic currency pairs with tight spreads',
                pairs: '70+ Currency Pairs',
                spread: 'From 0.6 pips',
                image: 'https://images.unsplash.com/photo-1560221328-12fe60f83ab8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0c3xlbnwwfHx8fDE3NjI5MzkzNDF8MA&ixlib=rb-4.1.0&q=85'
              },
              {
                title: 'Stock Trading',
                description: 'Access shares of leading companies from global exchanges',
                pairs: '1000+ Stocks',
                spread: 'Commission from $0',
                image: 'https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0c3xlbnwwfHx8fDE3NjI5MzkzNDF8MA&ixlib=rb-4.1.0&q=85'
              },
              {
                title: 'Cryptocurrency',
                description: 'Trade popular cryptocurrencies with flexible leverage',
                pairs: '50+ Crypto Pairs',
                spread: 'Low spreads 24/7',
                image: 'https://images.pexels.com/photos/7691771/pexels-photo-7691771.jpeg'
              },
              {
                title: 'Metals Trading',
                description: 'Trade precious metals like gold, silver, platinum, and palladium',
                pairs: '10+ Metals',
                spread: 'From 0.2 pips',
                image: 'https://images.pexels.com/photos/7887860/pexels-photo-7887860.jpeg'
              },
              {
                title: 'Indices Trading',
                description: 'Trade major global stock indices with competitive conditions',
                pairs: '20+ Indices',
                spread: 'From 0.4 points',
                image: 'https://images.unsplash.com/photo-1649003515353-c58a239cf662?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0c3xlbnwwfHx8fDE3NjI5MzkzNDF8MA&ixlib=rb-4.1.0&q=85'
              },
              {
                title: 'Energy Trading',
                description: 'Trade oil, natural gas, and other energy commodities',
                pairs: '5+ Energies',
                spread: 'Tight spreads',
                image: 'https://images.unsplash.com/photo-1560221328-12fe60f83ab8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0c3xlbnwwfHx8fDE3NjI5MzkzNDF8MA&ixlib=rb-4.1.0&q=85'
              }
            ].map((category, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <div className="text-gray-500">Instruments</div>
                      <div className="font-bold text-gray-900">{category.pairs}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Spreads</div>
                      <div className="font-bold text-gray-900">{category.spread}</div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = '/open-account'}
                  >
                    Start Trading
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;