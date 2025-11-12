import React from 'react';
import { Download, Monitor, Smartphone, Globe, Check } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const MT4 = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">MetaTrader 4</h1>
              <p className="text-xl text-gray-600 mb-8">
                The world's most popular forex trading platform trusted by millions of traders
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2 w-5 h-5" />
                  Download MT4
                </Button>
                <Button size="lg" variant="outline">
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
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose MT4?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'User-Friendly Interface', desc: 'Intuitive design perfect for beginners and professionals' },
              { title: 'Expert Advisors', desc: 'Automate your trading with custom algorithms' },
              { title: 'Advanced Charting', desc: '50+ built-in indicators and drawing tools' },
              { title: 'Fast Execution', desc: 'Lightning-fast order execution and processing' },
              { title: 'Mobile Trading', desc: 'Trade from anywhere with iOS and Android apps' },
              { title: 'Secure Platform', desc: 'Bank-level encryption and data protection' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">MT4 Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Real-time quotes',
              '9 timeframes',
              '50+ indicators',
              'Custom indicators',
              'Expert Advisors',
              'One-click trading',
              'Trailing stops',
              'Email alerts',
              'Push notifications',
              'News feed',
              'Internal mail',
              'Trading history'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MT4;