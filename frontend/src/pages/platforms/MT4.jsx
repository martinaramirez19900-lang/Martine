import React from 'react';
import { Download, Monitor, Smartphone, Globe, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const MT4 = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">MetaTrader 4</h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.platformDesc?.mt4 || "The world's most popular forex trading platform trusted by millions of traders"}
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://www.metatrader4.com/', '_blank')}
                >
                  <Download className="mr-2 w-5 h-5" />
                  {t.common?.learnMore?.replace('Learn More', 'Download MT4') || 'Download MT4'}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://www.metatrader4.com/', '_blank')}
                >
                  <Globe className="mr-2 w-5 h-5" />
                  Web Platform
                </Button>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=800" alt="MT4" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t.featureCards?.advancedTools?.title || 'Key Features'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Monitor, title: 'Advanced Charting', desc: 'Professional charting tools with 30+ indicators' },
              { icon: Globe, title: 'Expert Advisors', desc: 'Automate your trading strategies with EAs' },
              { icon: Smartphone, title: 'Mobile Trading', desc: 'Trade on the go with iOS and Android apps' },
              { icon: Check, title: 'Custom Indicators', desc: 'Create and use custom technical indicators' },
              { icon: Check, title: 'One-Click Trading', desc: 'Execute trades instantly with one click' },
              { icon: Check, title: 'Market Analysis', desc: 'Comprehensive market analysis tools' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
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

export default MT4;