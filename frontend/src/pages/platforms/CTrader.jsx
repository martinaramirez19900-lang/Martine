import React from 'react';
import { Download, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const CTrader = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">cTrader Platform</h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional-grade trading platform with advanced features for serious traders
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Download className="mr-2 w-5 h-5" />
                Download cTrader
              </Button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1579226905180-636b76d96082?w=800" alt="cTrader" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">cTrader Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Level II Pricing', desc: 'Full market depth and liquidity information' },
              { icon: Zap, title: 'Ultra-Fast Execution', desc: 'Millisecond order execution speed' },
              { icon: BarChart3, title: 'Advanced Charting', desc: 'Professional charting tools and analysis' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="space-y-6">
            {[
              { title: 'Detachable Charts', desc: 'Work with multiple charts across multiple monitors for enhanced productivity.' },
              { title: 'cAlgo Automation', desc: 'Create custom trading robots and indicators with the powerful cAlgo platform.' },
              { title: 'Copy Trading', desc: 'Follow and copy successful traders automatically with built-in copy trading.' },
              { title: 'Advanced Orders', desc: 'Access to multiple order types including stop-limit and trailing stop orders.' },
              { title: 'Market Depth', desc: 'View full market depth and liquidity for better trading decisions.' },
              { title: 'Fast Execution', desc: 'Institutional-grade execution speeds with no requotes.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTrader;