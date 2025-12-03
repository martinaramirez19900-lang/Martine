import React from 'react';
import { Download, Zap, TrendingUp, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { pageTranslations } from '../../i18n/pageTranslations';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const CTrader = () => {
  const { t, language } = useLanguage();
  const pt = pageTranslations[language] || pageTranslations.en;
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">{pt.platforms?.ctraderTitle || 'cTrader'}</h1>
              <p className="text-xl text-gray-600 mb-8">
                {pt.platforms?.ctraderSubtitle || "Professional trading platform"}
              </p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://ctrader.com/', '_blank')}
              >
                <Download className="mr-2 w-5 h-5" />
                {pt.platforms?.downloadCTrader || 'Download cTrader'}
              </Button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" alt="cTrader" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{pt.platforms?.advancedTools || 'Advanced Tools'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: t.advancedTools?.fastExecution || 'Fast Execution', desc: t.advancedTools?.fastExecutionDesc || 'Lightning-fast order execution' },
              { icon: TrendingUp, title: t.advancedTools?.advancedCharts || 'Advanced Charts', desc: t.advancedTools?.advancedChartsDesc || 'Professional charting tools' },
              { icon: BarChart3, title: t.advancedTools?.cAlgoSupport || 'cAlgo Support', desc: t.advancedTools?.cAlgoSupportDesc || 'Algorithmic trading automation' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all">
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTrader;