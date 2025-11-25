import React from 'react';
import { Newspaper, TrendingUp, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const MarketNews = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.nav?.marketNews || 'Market News'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest financial news and market analysis from around the world
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-8">
            <div className="text-center text-gray-600">
              <Newspaper className="w-24 h-24 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market News & Analysis</h3>
              <p>Get the latest market news, expert analysis, and trading insights to make informed decisions.</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MarketNews;