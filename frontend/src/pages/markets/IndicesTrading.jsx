import React from 'react';
import { TrendingUp, Globe2, DollarSign, BarChart3 } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const IndicesTrading = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Indices Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade global stock indices with competitive spreads and leverage
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Globe2, title: '20+ Indices', desc: 'Major global stock indices' },
              { icon: DollarSign, title: 'Low Spreads', desc: 'From 0.4 points' },
              { icon: TrendingUp, title: 'High Leverage', desc: 'Up to 1:200' },
              { icon: BarChart3, title: '24/5 Trading', desc: 'Extended trading hours' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Indices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { symbol: 'US30', name: 'Dow Jones Industrial Average', spread: '1.5 points' },
                { symbol: 'US500', name: 'S&P 500', spread: '0.4 points' },
                { symbol: 'NAS100', name: 'NASDAQ 100', spread: '1.0 points' },
                { symbol: 'UK100', name: 'FTSE 100', spread: '1.0 points' },
                { symbol: 'GER40', name: 'DAX 40', spread: '1.2 points' },
                { symbol: 'JPN225', name: 'Nikkei 225', spread: '6.0 points' }
              ].map((index, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{index.symbol}</h3>
                  <p className="text-sm text-gray-600 mb-4">{index.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Spread from</span>
                    <span className="text-green-600 font-bold">{index.spread}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Trade Indices?</h2>
          <div className="space-y-6">
            {[
              { title: 'Market Diversification', desc: 'Trade a basket of stocks with a single position, reducing individual stock risk.' },
              { title: 'High Liquidity', desc: 'Major indices offer exceptional liquidity and tight spreads throughout trading hours.' },
              { title: 'Extended Hours', desc: 'Trade indices almost 24 hours a day with our extended trading sessions.' },
              { title: 'No Stamp Duty', desc: 'CFD trading on indices means no stamp duty or ownership costs.' },
              { title: 'Leverage Trading', desc: 'Access larger positions with flexible leverage options up to 1:200.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Start Trading Indices</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Access global stock markets through index CFD trading
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IndicesTrading;