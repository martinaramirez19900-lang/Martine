import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Globe2, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { additionalPagesTranslations } from '../i18n/additionalPages';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { tradingInstruments, platforms, features } from '../data/mockData';

const Home = () => {
  const { t, language } = useLanguage();
  const apt = additionalPagesTranslations[language] || additionalPagesTranslations.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Success Image Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[700px]">
        {/* Background Image with Successful People, Skyscrapers, Bull */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`
            }}
          ></div>
          {/* Overlay with bull market theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-green-900/75"></div>
            {/* Bull silhouette overlay */}
            <div 
              className="absolute bottom-0 right-0 w-96 h-96 opacity-10"
              style={{
                backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNTYgMzM2YzAtMTYuNiA0LjctMTAuNCAxMi42LTE0LjRMMTI4IDE4NEMyMjQgOTYgMjU2IDY0IDM1MiAxNjBjNDguIDQ4IDkyIDEwNCAxMjYgMTY2IDkgMTYuNiAxMCAzNyAxMCA1NyAwIDE2LTMwIDI1LjItNDggMjUuMi0yNSAwLTQzLTE5LjItNDgtMzQuOC0xMC03Mi0yMy0xMzYtNDktMTk2LTI2LTYwLTYzLTExMi0xMTgtMTQ5LTU1LTM3LTExOC01OC0xODUtNTgtNjcgMC0xMzAgMjEtMTg1IDU4LTU1IDM3LTkyIDg5LTExOCAxNDktMjYgNjAtMzkgMTI0LTQ5IDE5Ni01IDE1LjYtMjMgMzQuOC00OCAzNC44LTE4IDAtNDgtOS4yLTQ4LTI1LjJ6Ii8+PC9zdmc+')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right'
              }}
            ></div>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="inline-block mb-6">
                <div className="flex items-center space-x-2 bg-green-500/20 text-green-100 px-6 py-2 rounded-full border border-green-400/30 backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Award-Winning Broker 2025</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-4 font-light">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-gray-200 mb-10">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                  onClick={() => window.location.href = '/open-account'}
                >
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={() => window.location.href = '/open-account'}
                >
                  {t.hero.cta2}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">500K+</div>
                  <div className="text-sm text-gray-200">{t.stats.activeTraders}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">2000+</div>
                  <div className="text-sm text-gray-200">{t.stats.instruments}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-green-400 mb-1">0.0</div>
                  <div className="text-sm text-gray-200">{t.stats.spreadsFrom}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-200">{t.stats.support}</div>
                </div>
              </div>
            </div>

            {/* Right side - Success imagery */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main success image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" 
                    alt="Successful Team" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-green-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">+235%</div>
                      <div className="text-xs text-gray-600">Avg. Returns</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-green-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500K+</div>
                      <div className="text-xs text-gray-600">{t.stats.happyClients}</div>
                    </div>
                  </div>
                </div>
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
              { icon: Zap, title: t.featureCards.fastExecution.title, desc: t.featureCards.fastExecution.desc },
              { icon: Shield, title: t.featureCards.secureTrading.title, desc: t.featureCards.secureTrading.desc },
              { icon: TrendingUp, title: t.featureCards.advancedTools.title, desc: t.featureCards.advancedTools.desc },
              { icon: Globe2, title: t.featureCards.globalMarkets.title, desc: t.featureCards.globalMarkets.desc },
              { icon: Award, title: t.featureCards.awardWinning.title, desc: t.featureCards.awardWinning.desc },
              { icon: Users, title: t.featureCards.support247.title, desc: t.featureCards.support247.desc }
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
      <section className="py-24 px-4 bg-white">
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
                <p className="text-gray-600 text-sm mb-6">
                  {platform.id === 1 ? t.platformDesc.mt4 : 
                   platform.id === 2 ? t.platformDesc.mt5 :
                   platform.id === 3 ? t.platformDesc.ctrader :
                   t.platformDesc.smhEdge}
                </p>
                <ul className="space-y-2 mb-6">
                  {platform.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:border-green-600 hover:text-green-600"
                  onClick={() => window.location.href = '/platforms'}
                >
                  {t.common.learnMore}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24 px-4 bg-green-50">
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

      {/* Trading Experience Section with Images */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Professional Trading Experience</h2>
            <p className="text-xl text-gray-600">Advanced tools and technology for modern traders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800" 
                alt="Trading Charts" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-gray-200">Real-time market data and technical analysis</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                alt="Trading Platform" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Multiple Platforms</h3>
                  <p className="text-gray-200">Trade on MT4, MT5, cTrader, and WebTrader</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                alt="Market Analysis" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600" 
                alt="Professional Trader" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600" 
                alt="Trading Success" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className="py-24 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Trusted by Traders Worldwide</h2>
            <p className="text-xl text-gray-600">See what our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                name: 'Michael Anderson',
                role: 'Professional Trader',
                text: 'SMH Markets has transformed my trading experience. The execution speed is incredible!'
              },
              {
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
                name: 'Sarah Johnson',
                role: 'Day Trader',
                text: 'Best spreads in the industry. I have been trading here for 3 years and never disappointed.'
              },
              {
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
                name: 'David Martinez',
                role: 'Forex Trader',
                text: 'Excellent customer support and reliable platform. Highly recommended for serious traders.'
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex mt-4 text-yellow-500">
                  {'★★★★★'}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ambassador - Rafael Nadal */}
      <section className="py-24 px-4 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(16,163,74,0.85) 100%), url('https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-green-600 text-white mb-6 text-sm px-4 py-2">
                {apt.ambassador?.title || 'Official Brand Ambassador'}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {apt.ambassador?.subtitle || 'Rafael Nadal'}
              </h2>
              <p className="text-2xl text-green-400 font-semibold mb-6">
                {apt.ambassador?.description || 'Tennis Legend & SMH Markets Ambassador'}
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                "{apt.ambassador?.quote || 'Excellence, precision, and dedication - values that define both champions and successful traders. I\'m proud to represent SMH Markets, a broker that shares my commitment to achieving greatness.'}"
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-1">22</div>
                  <div className="text-sm text-gray-300">{apt.ambassador?.grandSlam || 'Grand Slam Titles'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-1">92</div>
                  <div className="text-sm text-gray-300">{apt.ambassador?.atpTitles || 'ATP Titles'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-1">#1</div>
                  <div className="text-sm text-gray-300">{apt.ambassador?.atpRanking || 'ATP Ranking'}</div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                onClick={() => window.location.href = '/open-account'}
              >
                {apt.ambassador?.cta || 'Trade Like a Champion'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                {/* Main Tennis Player Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_finance-clone-17/artifacts/z8r8dif0_image.png" 
                    alt="Rafael Nadal - Professional Tennis Player" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Official Brand Ambassador</div>
                          <div className="text-3xl font-bold text-gray-900">Rafael Nadal</div>
                          <div className="text-sm text-green-600 font-semibold">Tennis Legend & Champion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorships - FC Barcelona */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.sponsor?.title || 'Official Sponsors'}</h2>
            <p className="text-xl text-gray-600">{t.sponsor?.subtitle || 'Proud partners of world-class organizations'}</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
                <div>
                  <Badge className="bg-blue-600 text-white mb-4">{t.sponsor?.fcbTitle || 'Official Trading Partner'}</Badge>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">{t.sponsor?.fcbName || 'FC Barcelona'}</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {t.sponsor?.fcbDesc || 'SMH Markets is the Official Trading Partner of FC Barcelona, one of the world\'s most successful football clubs. This partnership represents our commitment to excellence and global reach.'}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-blue-600 mb-1">26</div>
                      <div className="text-sm text-gray-700">{t.sponsor?.laLiga || 'La Liga Titles'}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
                      <div className="text-sm text-gray-700">{t.sponsor?.championsLeague || 'Champions League'}</div>
                    </div>
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Learn More About Partnership
                  </Button>
                </div>
                <div className="space-y-4">
                  {/* Main Barcelona Image */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-blue-600">
                    <img 
                      src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80" 
                      alt="FC Barcelona - Football Team" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-xl flex items-end p-8">
                      <div className="text-white">
                        <Badge className="bg-yellow-400 text-blue-900 mb-3 text-xs font-bold">
                          OFFICIAL PARTNER
                        </Badge>
                        <div className="text-4xl font-bold mb-2">FC Barcelona</div>
                        <div className="text-lg text-blue-200">Més que un club - More than a club</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">{t.common.readyToStart}</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            {t.common.joinTraders}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg"
              onClick={() => window.location.href = '/open-account'}
            >
              {t.common.openAccount}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => window.location.href = '/open-account'}
            >
              {t.common.tryDemo}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;