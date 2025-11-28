import React from 'react';
import { Calculator, Calendar, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Tools = () => {
  const { t } = useLanguage();

  const tools = [
    {
      icon: Calculator,
      title: t.tools?.allInOneCalc || 'All-in-One Calculator',
      description: t.tools?.allInOneCalcDesc || 'Calculate pip values, margin requirements, swap rates, and profit/loss',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: t.tools?.economicCalendar || 'Economic Calendar',
      description: t.tools?.economicCalendarDesc || 'Stay informed about upcoming economic events and their market impact',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: t.tools?.marketAnalysis || 'Market Analysis',
      description: t.tools?.marketAnalysisDesc || 'Access daily market analysis, insights, and trading opportunities',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: t.tools?.technicalAnalysis || 'Technical Analysis Tools',
      description: t.tools?.technicalAnalysisDesc || 'Advanced charting tools with 100+ indicators and drawing tools',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: PieChart,
      title: t.tools?.sentimentAnalysis || 'Sentiment Analysis',
      description: t.tools?.sentimentAnalysisDesc || 'See what percentage of traders are buying or selling each instrument',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Activity,
      title: t.tools?.marketScreener || 'Market Screener',
      description: t.tools?.marketScreenerDesc || 'Filter and find trading opportunities based on technical criteria',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.tools?.title || 'Trading Tools'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.tools?.subtitle || 'Professional trading tools to enhance your analysis and decision-making'}
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, idx) => (
              <Card key={idx} className="p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  {t.tools?.launchTool || 'Launch Tool'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Demo */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trading Calculator</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instrument</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option>EUR/USD</option>
                    <option>GBP/USD</option>
                    <option>USD/JPY</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Currency</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position Size (Lots)</label>
                  <input type="number" defaultValue="1.0" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Leverage</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option>1:100</option>
                    <option>1:200</option>
                    <option>1:500</option>
                  </select>
                </div>
              </div>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                Calculate
              </Button>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Pip Value</div>
                    <div className="text-2xl font-bold text-gray-900">$10.00</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Required Margin</div>
                    <div className="text-2xl font-bold text-gray-900">$1,087.60</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;