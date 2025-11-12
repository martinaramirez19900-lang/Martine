import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Globe2, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { tradingInstruments, platforms, features } from '../data/mockData';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[600px]">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-a-laptop-in-an-office-52534-large.mp4" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-trading-charts-on-a-monitor-6301/1080p.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/75 to-green-900/60"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 bg-green-500/20 text-green-100 px-6 py-2 rounded-full border border-green-400/30 backdrop-blur-sm">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Award-Winning Broker 2025</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4 font-light">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg">
                {t.hero.cta2}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500K+</div>
                <div className="text-sm text-gray-600">Active Traders</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">2000+</div>
                <div className="text-sm text-gray-600">Instruments</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">0.0</div>
                <div className="text-sm text-gray-600">Spreads from</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Prices Ticker */}
      <section className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-8 scrollbar-hide">
            {tradingInstruments.slice(0, 6).map((instrument) => (
              <div key={instrument.id} className="flex items-center space-x-3 min-w-max">
                <span className="text-gray-400 text-sm">{instrument.symbol}</span>
                <span className="text-white font-medium">{instrument.price}</span>
                <span className={`text-sm ${
                  instrument.change.startsWith('+') ? 'text-green-400' : 'text-green-400'
                }`}>
                  {instrument.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <p className="text-xl text-gray-600">{t.features.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Fast Execution', desc: 'Lightning-fast order execution with minimal latency' },
              { icon: Shield, title: 'Secure Trading', desc: 'Bank-level security and fund protection' },
              { icon: TrendingUp, title: 'Advanced Tools', desc: 'Professional trading tools and indicators' },
              { icon: Globe2, title: 'Global Markets', desc: 'Access to markets worldwide 24/5' },
              { icon: Award, title: 'Award Winning', desc: 'Recognized excellence in the industry' },
              { icon: Users, title: '24/7 Support', desc: 'Round-the-clock multilingual support' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 group cursor-pointer">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Platforms */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.platforms.title}</h2>
            <p className="text-xl text-gray-600">{t.platforms.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.id} className="p-6 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{platform.description}</p>
                <ul className="space-y-2 mb-6">
                  {platform.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-gray-300 hover:border-green-600 hover:text-green-600">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.markets.title}</h2>
            <p className="text-xl text-gray-600">{t.markets.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: t.markets.forex, count: '70+', color: 'from-blue-500 to-blue-600' },
              { name: t.markets.stocks, count: '1000+', color: 'from-purple-500 to-purple-600' },
              { name: t.markets.crypto, count: '50+', color: 'from-orange-500 to-orange-600' },
              { name: t.markets.metals, count: '10+', color: 'from-yellow-500 to-yellow-600' },
              { name: t.markets.indices, count: '20+', color: 'from-green-500 to-green-600' },
              { name: t.markets.energy, count: '5+', color: 'from-green-500 to-green-600' }
            ].map((market, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`w-16 h-16 bg-gradient-to-br ${market.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{market.count}</div>
                <div className="text-sm text-gray-600 font-medium">{market.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join thousands of traders who trust SMH Markets for their trading needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Open Live Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Try Demo Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;