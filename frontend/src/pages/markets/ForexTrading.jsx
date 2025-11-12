import React from 'react';
import { TrendingUp, Globe2, Clock, DollarSign } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const ForexTrading = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Forex Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade 70+ currency pairs with ultra-tight spreads and lightning-fast execution
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: TrendingUp, title: 'Tight Spreads', desc: 'From 0.0 pips on major pairs' },
              { icon: Clock, title: '24/5 Trading', desc: 'Trade forex markets around the clock' },
              { icon: DollarSign, title: 'High Liquidity', desc: 'Access the world\'s most liquid market' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Currency Pairs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { pair: 'EUR/USD', name: 'Euro vs US Dollar', spread: '0.6 pips' },
                { pair: 'GBP/USD', name: 'British Pound vs US Dollar', spread: '0.8 pips' },
                { pair: 'USD/JPY', name: 'US Dollar vs Japanese Yen', spread: '0.5 pips' },
                { pair: 'AUD/USD', name: 'Australian Dollar vs US Dollar', spread: '0.7 pips' },
                { pair: 'USD/CAD', name: 'US Dollar vs Canadian Dollar', spread: '0.8 pips' },
                { pair: 'NZD/USD', name: 'New Zealand Dollar vs US Dollar', spread: '0.9 pips' }
              ].map((currency, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{currency.pair}</h3>
                  <p className="text-sm text-gray-600 mb-4">{currency.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Spread from</span>
                    <span className="text-green-600 font-bold">{currency.spread}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Trade Forex with SMH Markets?</h2>
          <div className="space-y-6">
            {[
              { title: 'Ultra-Tight Spreads', desc: 'Benefit from spreads starting at 0.0 pips on major currency pairs with our Pro and VIP accounts.' },
              { title: 'Fast Execution', desc: 'Our advanced trading infrastructure ensures lightning-fast order execution with minimal slippage.' },
              { title: 'High Leverage', desc: 'Trade with leverage up to 1:500, allowing you to maximize your trading potential.' },
              { title: 'No Dealing Desk', desc: 'Direct market access with no dealing desk intervention for transparent pricing.' },
              { title: 'Expert Analysis', desc: 'Access daily market analysis, trading signals, and expert insights from our professional analysts.' }
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
          <h2 className="text-5xl font-bold text-white mb-6">Start Trading Forex Today</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Open your account and access the world's largest financial market
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForexTrading;