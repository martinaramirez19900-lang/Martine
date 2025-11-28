import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const TradingGuides = () => {
  const { t } = useLanguage();

  const guides = [
    {
      id: 1,
      title: 'Beginner\'s Guide to Forex Trading',
      description: 'Learn the basics of forex trading, currency pairs, and market analysis',
      level: 'Beginner',
      duration: '30 min'
    },
    {
      id: 2,
      title: 'Technical Analysis Fundamentals',
      description: 'Master chart patterns, indicators, and technical trading strategies',
      level: 'Intermediate',
      duration: '45 min'
    },
    {
      id: 3,
      title: 'Risk Management Strategies',
      description: 'Learn how to protect your capital and manage trading risks effectively',
      level: 'All Levels',
      duration: '25 min'
    },
    {
      id: 4,
      title: 'Trading Psychology',
      description: 'Develop the mental discipline needed for successful trading',
      level: 'All Levels',
      duration: '40 min'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Trading Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides to help you master trading strategies and market analysis
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Card key={guide.id} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {guide.level}
                      </span>
                      <span className="text-sm text-gray-500">{guide.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-gray-600 mb-6">{guide.description}</p>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = 'https://trd.smh-markets.net/'}
                    >
                      Start Reading
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingGuides;
