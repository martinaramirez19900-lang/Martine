import React from 'react';
import { Newspaper, TrendingUp, Globe, Clock } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

const MarketNews = () => {
  const news = [
    {
      id: 1,
      title: 'Federal Reserve Maintains Interest Rates at 5.25-5.50%',
      category: 'Central Banks',
      time: '2 hours ago',
      excerpt: 'The Federal Reserve kept its benchmark interest rate unchanged, signaling a cautious approach to monetary policy amid mixed economic signals...'
    },
    {
      id: 2,
      title: 'EUR/USD Breaks Through 1.0900 Resistance',
      category: 'Forex',
      time: '3 hours ago',
      excerpt: 'The Euro surged against the US Dollar, breaking key technical resistance at 1.0900 following positive Eurozone economic data...'
    },
    {
      id: 3,
      title: 'Gold Hits New Highs as Safe-Haven Demand Increases',
      category: 'Commodities',
      time: '5 hours ago',
      excerpt: 'Gold prices reached fresh record highs above $2,650 per ounce as investors seek safety amid geopolitical tensions...'
    },
    {
      id: 4,
      title: 'Tech Stocks Rally on Strong Earnings Reports',
      category: 'Stocks',
      time: '6 hours ago',
      excerpt: 'Major technology stocks surged in trading today after several companies reported better-than-expected quarterly earnings...'
    },
    {
      id: 5,
      title: 'Bitcoin Consolidates Near $67,000 Level',
      category: 'Crypto',
      time: '8 hours ago',
      excerpt: 'Bitcoin continues to trade in a tight range around $67,000 as traders await the next catalyst for directional movement...'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Market News & Analysis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest financial news and expert market analysis
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Newspaper, title: 'Real-Time News', count: '1000+', desc: 'Daily articles' },
              { icon: TrendingUp, title: 'Expert Analysis', count: '50+', desc: 'Analysts' },
              { icon: Globe, title: 'Global Coverage', count: '24/7', desc: 'Coverage' },
              { icon: Clock, title: 'Live Updates', count: 'Instant', desc: 'Notifications' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.count}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-xs text-gray-600">{stat.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex gap-2 flex-wrap">
              {['All', 'Forex', 'Stocks', 'Crypto', 'Commodities', 'Central Banks'].map((category, idx) => (
                <Badge 
                  key={idx} 
                  className={idx === 0 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {news.map((article) => (
              <Card key={article.id} className="p-6 hover:shadow-xl transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                <div className="mt-4">
                  <span className="text-green-600 font-semibold hover:underline">Read more →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">News Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Forex Markets',
              'Stock Markets',
              'Cryptocurrencies',
              'Commodities',
              'Central Bank News',
              'Economic Indicators',
              'Technical Analysis',
              'Market Commentary',
              'Trading Strategies'
            ].map((category, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all cursor-pointer">
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketNews;