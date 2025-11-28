import React from 'react';
import { Newspaper, TrendingUp, Globe, ExternalLink, AlertCircle, BarChart3, Building2, Landmark } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const MarketNews = () => {
  const { t } = useLanguage();
  const mn = t.marketNews || {};
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 animate-pulse">
              <Newspaper className="w-4 h-4 inline mr-2" />
              {mn.breakingNews || 'Breaking News'}
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {mn.title || 'Market News & Analysis'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {mn.subtitle || 'Stay informed with real-time financial news and expert market analysis'}
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://www.reuters.com/markets/', '_blank')}
          >
            {mn.viewLive || 'View Live Market News'}
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Why Market News Matters */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {mn.whatIs || 'Why Market News Matters'}
          </h2>
          <Card className="p-8 mb-8 border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {mn.description1 || 'Market news provides critical insights into global economic events, corporate earnings, geopolitical developments, and policy changes that drive market movements.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {mn.description2 || 'From breaking headlines to in-depth analysis, timely news coverage enables you to react quickly to market-moving events.'}
            </p>
          </Card>
        </div>
      </section>

      {/* Key News Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {mn.keyCategories || 'Key News Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: mn.globalMarkets || 'Global Markets',
                desc: mn.globalMarketsDesc || 'Real-time coverage of major stock indices, currencies, and commodities worldwide',
                color: 'blue'
              },
              {
                icon: Building2,
                title: mn.businessEconomy || 'Business & Economy',
                desc: mn.businessEconomyDesc || 'Corporate earnings, mergers, acquisitions, and economic indicators',
                color: 'green'
              },
              {
                icon: Landmark,
                title: mn.centralBanks || 'Central Banks',
                desc: mn.centralBanksDesc || 'Monetary policy decisions, interest rate announcements, and policy statements',
                color: 'purple'
              },
              {
                icon: BarChart3,
                title: mn.geopolitics || 'Geopolitics',
                desc: mn.geopoliticsDesc || 'Political events, trade relations, and regulatory changes affecting markets',
                color: 'red'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {mn.howToUse || 'How to Use Market News Effectively'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: mn.step1 || 'Stay Updated',
                desc: mn.step1Desc || 'Monitor breaking news throughout the trading day to catch market-moving events',
                icon: Newspaper
              },
              {
                step: '2',
                title: mn.step2 || 'Analyze Impact',
                desc: mn.step2Desc || 'Evaluate how news affects different assets and sectors for trading opportunities',
                icon: BarChart3
              },
              {
                step: '3',
                title: mn.step3 || 'Act Decisively',
                desc: mn.step3Desc || 'Use news insights to adjust positions, manage risk, and execute timely trades',
                icon: TrendingUp
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto text-center">
          <Newspaper className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            {mn.accessRealTime || 'Access Real-Time Market News'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {mn.ctaDescription || 'Get comprehensive coverage of global markets with breaking news, expert analysis, and live updates from Reuters'}
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            onClick={() => window.open('https://www.reuters.com/markets/', '_blank')}
          >
            {mn.viewOnReuters || 'View Live News on Reuters Markets'}
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4 bg-orange-50 border-t border-b border-orange-100">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 max-w-4xl mx-auto">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">{mn.importantNote || 'Important Note'}</h3>
              <p className="text-gray-700">
                {mn.disclaimer || 'Market news can trigger rapid price movements. Always verify information from multiple sources and consider the broader market context before making trading decisions.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketNews;