import React from 'react';
import { Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const EconomicCalendar = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.nav?.economicCalendar || 'Economic Calendar'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about important economic events and market-moving news
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-8">
            <div className="text-center text-gray-600">
              <Calendar className="w-24 h-24 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Events Calendar</h3>
              <p>Track major economic indicators, central bank decisions, and market-moving events in real-time.</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EconomicCalendar;