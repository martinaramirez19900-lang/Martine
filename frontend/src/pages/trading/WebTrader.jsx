import React from 'react';
import { Globe, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const WebTrader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.nav?.webTrader || 'WebTrader'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trade directly from your browser - no downloads required
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.location.href = 'https://trd.smh-markets.net/'}
          >
            Launch WebTrader
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Browser-Based', desc: 'No downloads, trade from any device' },
              { icon: Zap, title: t.featureCards?.fastExecution?.title || 'Fast Execution', desc: 'Lightning-fast order execution' },
              { icon: Shield, title: t.featureCards?.secureTrading?.title || 'Secure', desc: 'Bank-level security' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebTrader;