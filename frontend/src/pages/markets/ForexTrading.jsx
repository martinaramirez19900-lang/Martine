import React from 'react';
import { TrendingUp, Globe2, DollarSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const ForexTrading = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.marketPages?.forexTitle || 'Forex Trading'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.marketPages?.forexSubtitle || 'Trade 70+ currency pairs with tight spreads and fast execution'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Globe2, title: t.marketPages?.forex70Pairs || '70+ Pairs', desc: t.marketPages?.forex70PairsDesc || 'Major, minor and exotic currency pairs' },
              { icon: TrendingUp, title: t.marketPages?.forexTightSpreads || 'Tight Spreads', desc: t.marketPages?.forexTightSpreadsDesc || 'From 0.0 pips on major pairs' },
              { icon: DollarSign, title: t.marketPages?.forexHighLeverage || 'High Leverage', desc: t.marketPages?.forexHighLeverageDesc || 'Up to 1:500 leverage available' }
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
              {t.marketPages?.openLiveAccount || t.common?.openAccount || 'Open Live Account'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForexTrading;