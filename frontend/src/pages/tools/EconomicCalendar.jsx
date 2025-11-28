import React from 'react';
import { Calendar, TrendingUp, AlertCircle, ExternalLink, Clock, Globe2, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const EconomicCalendar = () => {
  const { t } = useLanguage();
  const ec = t.economicCalendar || {};
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge className="bg-green-600 text-white px-4 py-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              {ec.liveData || 'Live Economic Data'}
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {ec.title || 'Economic Calendar'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {ec.subtitle || 'Stay ahead of market-moving events with real-time economic data and forecasts'}
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://www.investing.com/economic-calendar/', '_blank')}
          >
            {ec.viewLive || 'View Live Economic Calendar'}
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* What is Economic Calendar */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {ec.whatIs || 'What is an Economic Calendar?'}
          </h2>
          <Card className="p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {ec.description1 || 'An economic calendar is an essential tool for traders and investors that displays scheduled releases of economic data, central bank decisions, and other financial events that can significantly impact financial markets.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {ec.description2 || 'By monitoring the economic calendar, you can anticipate market movements, identify trading opportunities, and manage risk more effectively.'}
            </p>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {ec.keyIndicators || 'Key Economic Indicators to Watch'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: ec.gdpReports || 'GDP Reports',
                desc: ec.gdpDesc || 'Quarterly economic growth data that reflects overall economic health',
                impact: ec.highImpact || 'High Impact'
              },
              {
                icon: BarChart3,
                title: ec.employmentData || 'Employment Data',
                desc: ec.employmentDesc || 'Non-farm payrolls, unemployment rates, and job creation numbers',
                impact: ec.highImpact || 'High Impact'
              },
              {
                icon: AlertCircle,
                title: ec.interestRates || 'Interest Rates',
                desc: ec.interestRatesDesc || 'Central bank monetary policy decisions and rate announcements',
                impact: ec.veryHighImpact || 'Very High Impact'
              },
              {
                icon: Clock,
                title: ec.inflation || 'Inflation (CPI/PPI)',
                desc: ec.inflationDesc || 'Consumer and producer price indices measuring price changes',
                impact: ec.highImpact || 'High Impact'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <Badge className="bg-red-100 text-red-700 mb-3 text-xs">
                  {item.impact}
                </Badge>
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
            How to Use the Economic Calendar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Plan Ahead',
                desc: 'Check the calendar daily to identify upcoming high-impact events that may affect your positions'
              },
              {
                step: '2',
                title: 'Analyze Expectations',
                desc: 'Review forecasts and previous data to understand market expectations and potential outcomes'
              },
              {
                step: '3',
                title: 'Manage Risk',
                desc: 'Adjust position sizes or close trades before major announcements to protect your capital'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <Globe2 className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Access Real-Time Economic Data
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Stay updated with live economic calendar featuring real-time updates, forecasts, 
            and historical data from major economies worldwide
          </p>
          <Button 
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg"
            onClick={() => window.open('https://www.investing.com/economic-calendar/', '_blank')}
          >
            View Live Calendar on Investing.com
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4 bg-blue-50 border-t border-b border-blue-100">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 max-w-4xl mx-auto">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Note</h3>
              <p className="text-gray-700">
                Economic data releases can cause significant market volatility. Always use proper risk management 
                and consider adjusting your positions before major announcements. The economic calendar is provided 
                for informational purposes and should be used as part of a comprehensive trading strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomicCalendar;