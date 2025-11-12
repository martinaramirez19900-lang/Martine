import React from 'react';
import { TrendingDown, Zap, Award, Shield } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const ProConditions = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Pro Trading Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience institutional-grade trading conditions with ultra-tight spreads and premium execution
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: TrendingDown, title: 'Spreads from 0.0', desc: 'Raw ECN spreads on all instruments' },
              { icon: Zap, title: 'Ultra-Fast Execution', desc: 'Average execution speed under 50ms' },
              { icon: Award, title: 'No Requotes', desc: 'Direct market access with no intervention' },
              { icon: Shield, title: 'Deep Liquidity', desc: 'Access to tier-1 liquidity providers' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ECN Trading</h2>
              <ul className="space-y-4">
                {[
                  'Direct market access to global liquidity pools',
                  'No dealing desk intervention',
                  'Transparent order execution',
                  'Level II pricing available',
                  'Aggregated liquidity from multiple providers',
                  'Competitive spreads at all times'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Execution Quality</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Orders filled at requested price</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">&lt;50ms</div>
                  <div className="text-gray-600">Average execution speed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
                  <div className="text-gray-600">Requotes or rejections</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pro Account Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Spreads from 0.0 pips',
                'Commission from $3.50 per lot',
                'Leverage up to 1:500',
                'Negative balance protection',
                'Dedicated account manager',
                'Priority customer support',
                'Advanced trading tools',
                'VPS hosting available',
                'Premium market analysis'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready for Pro Trading?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Upgrade to Pro account and experience institutional-grade trading conditions
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Pro Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProConditions;