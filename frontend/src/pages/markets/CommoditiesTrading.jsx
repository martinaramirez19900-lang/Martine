import React from 'react';
import { TrendingUp, Wheat, Droplet, Flame } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const CommoditiesTrading = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Commodities Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade precious metals, energy, and agricultural commodities with competitive conditions
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Commodity Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: TrendingUp, title: 'Precious Metals', desc: 'Gold, Silver, Platinum, Palladium', color: 'from-yellow-500 to-yellow-600' },
              { icon: Flame, title: 'Energy', desc: 'Crude Oil, Natural Gas, Brent Oil', color: 'from-orange-500 to-orange-600' },
              { icon: Wheat, title: 'Agricultural', desc: 'Wheat, Corn, Soybeans, Coffee', color: 'from-green-500 to-green-600' }
            ].map((category, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.desc}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Commodities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { symbol: 'XAU/USD', name: 'Gold', category: 'Metals', spread: '0.2 pips' },
              { symbol: 'XAG/USD', name: 'Silver', category: 'Metals', spread: '0.03 pips' },
              { symbol: 'WTI', name: 'Crude Oil', category: 'Energy', spread: '3 pips' },
              { symbol: 'BRENT', name: 'Brent Crude', category: 'Energy', spread: '3 pips' },
              { symbol: 'NATGAS', name: 'Natural Gas', category: 'Energy', spread: '5 pips' },
              { symbol: 'COPPER', name: 'Copper', category: 'Metals', spread: '4 pips' }
            ].map((commodity, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{commodity.symbol}</h3>
                    <p className="text-sm text-gray-600">{commodity.name}</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{commodity.category}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">Spread from</span>
                  <span className="text-green-600 font-bold">{commodity.spread}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Trade Commodities?</h2>
          <div className="space-y-6">
            {[
              { title: 'Portfolio Diversification', desc: 'Add commodity exposure to diversify your investment portfolio beyond stocks and forex.' },
              { title: 'Inflation Hedge', desc: 'Commodities often maintain value during inflationary periods, protecting purchasing power.' },
              { title: 'High Volatility', desc: 'Commodities can experience significant price swings, offering trading opportunities.' },
              { title: 'Safe Haven Assets', desc: 'Gold and silver are traditional safe-haven assets during economic uncertainty.' },
              { title: 'Leverage Trading', desc: 'Trade with leverage to maximize your exposure with minimal capital.' }
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
          <h2 className="text-5xl font-bold text-white mb-6">Start Trading Commodities</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Diversify your portfolio with commodity CFD trading
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CommoditiesTrading;