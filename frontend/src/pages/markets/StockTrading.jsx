import React from 'react';
import { TrendingUp, BarChart3, DollarSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { additionalPagesTranslations } from '../../i18n/additionalPages';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const StockTrading = () => {
  const { t, language } = useLanguage();
  const apt = additionalPagesTranslations[language] || additionalPagesTranslations.en;
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{apt.stockTrading?.title || 'Stocks Trading'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {apt.stockTrading?.subtitle || 'Trade 1000+ stocks from global markets with zero commission'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: BarChart3, title: apt.stockTrading?.thousandStocks || '1000+ Stocks', desc: apt.stockTrading?.thousandStocksDesc || 'Access to major global stock markets' },
              { icon: TrendingUp, title: apt.stockTrading?.zeroCommission || 'Zero Commission', desc: apt.stockTrading?.zeroCommissionDesc || 'Trade stocks with no commission fees' },
              { icon: DollarSign, title: apt.stockTrading?.fractionalShares || 'Fractional Shares', desc: apt.stockTrading?.fractionalSharesDesc || 'Start trading from $1' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <feature.icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = 'https://trd.smh-markets.net/'}
            >
              {t.common?.openAccount || 'Open Account'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StockTrading;