import React from 'react';
import { Bitcoin, TrendingUp, Shield, Zap } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const CryptoTrading = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Cryptocurrency Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade Bitcoin, Ethereum, and 50+ cryptocurrencies with leverage 24/7
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Bitcoin, title: '50+ Cryptos', desc: 'Major cryptocurrencies available' },
              { icon: Zap, title: '24/7 Trading', desc: 'Trade anytime, anywhere' },
              { icon: TrendingUp, title: 'High Volatility', desc: 'Capitalize on price movements' },
              { icon: Shield, title: 'Secure Platform', desc: 'Bank-level security' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Cryptocurrencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { symbol: 'BTC/USD', name: 'Bitcoin', spread: '20 pips' },
                { symbol: 'ETH/USD', name: 'Ethereum', spread: '15 pips' },
                { symbol: 'XRP/USD', name: 'Ripple', spread: '10 pips' },
                { symbol: 'LTC/USD', name: 'Litecoin', spread: '12 pips' },
                { symbol: 'ADA/USD', name: 'Cardano', spread: '8 pips' },
                { symbol: 'SOL/USD', name: 'Solana', spread: '18 pips' }
              ].map((crypto, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{crypto.symbol}</h3>
                  <p className="text-sm text-gray-600 mb-4">{crypto.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Spread from</span>
                    <span className="text-green-600 font-bold">{crypto.spread}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Trade Crypto with Us?</h2>
          <div className="space-y-6">
            {[
              { title: '24/7 Market Access', desc: 'Unlike traditional markets, cryptocurrency markets never sleep. Trade anytime, day or night.' },
              { title: 'High Leverage Trading', desc: 'Trade crypto with leverage up to 1:100, maximizing your exposure with minimal capital.' },
              { title: 'Low Trading Costs', desc: 'Competitive spreads and no hidden fees on all cryptocurrency pairs.' },
              { title: 'Secure Cold Storage', desc: 'Your crypto assets are protected with industry-leading security measures.' },
              { title: 'Instant Execution', desc: 'Lightning-fast order execution ensures you never miss a trading opportunity.' }
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
          <h2 className="text-5xl font-bold text-white mb-6">Start Trading Crypto Now</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join thousands of traders in the crypto revolution
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CryptoTrading;