import React from 'react';
import { TrendingUp, Building2, Award, BarChart3 } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const StockTrading = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Stock Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade shares of leading companies from global stock exchanges with competitive commissions
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Building2, title: '1000+ Stocks', desc: 'Trade stocks from major exchanges' },
              { icon: TrendingUp, title: 'Low Commission', desc: 'From $0 per trade' },
              { icon: Award, title: 'Blue-Chip Stocks', desc: 'Access to leading companies' },
              { icon: BarChart3, title: 'Real-Time Data', desc: 'Live prices and charts' }
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

          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Stocks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { symbol: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ' },
                { symbol: 'MSFT', name: 'Microsoft Corp.', exchange: 'NASDAQ' },
                { symbol: 'GOOGL', name: 'Alphabet Inc.', exchange: 'NASDAQ' },
                { symbol: 'AMZN', name: 'Amazon.com Inc.', exchange: 'NASDAQ' },
                { symbol: 'TSLA', name: 'Tesla Inc.', exchange: 'NASDAQ' },
                { symbol: 'META', name: 'Meta Platforms', exchange: 'NASDAQ' },
                { symbol: 'NVDA', name: 'NVIDIA Corp.', exchange: 'NASDAQ' },
                { symbol: 'JPM', name: 'JPMorgan Chase', exchange: 'NYSE' }
              ].map((stock, idx) => (
                <Card key={idx} className="p-4 hover:shadow-xl transition-all cursor-pointer group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{stock.symbol}</div>
                  <div className="text-sm text-gray-600 mt-1">{stock.name}</div>
                  <div className="text-xs text-gray-500 mt-2">{stock.exchange}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Stock Markets We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { market: 'US Markets', stocks: ['NYSE', 'NASDAQ', 'AMEX'], count: '500+ stocks' },
              { market: 'European Markets', stocks: ['LSE', 'Euronext', 'DAX'], count: '300+ stocks' },
              { market: 'Asian Markets', stocks: ['HKEX', 'TSE', 'SSE'], count: '200+ stocks' }
            ].map((region, idx) => (
              <Card key={idx} className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{region.market}</h3>
                <div className="space-y-2 mb-4">
                  {region.stocks.map((stock, i) => (
                    <div key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      <span className="text-gray-700">{stock}</span>
                    </div>
                  ))}
                </div>
                <div className="text-green-600 font-bold">{region.count}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StockTrading;