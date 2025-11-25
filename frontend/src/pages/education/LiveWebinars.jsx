import React from 'react';
import { Video, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const LiveWebinars = () => {
  const { t } = useLanguage();

  const webinars = [
    {
      id: 1,
      title: 'Market Analysis & Trading Strategies',
      instructor: 'John Smith',
      date: 'Every Monday, 10:00 AM GMT',
      description: 'Live market analysis and discussion of current trading opportunities'
    },
    {
      id: 2,
      title: 'Technical Analysis Masterclass',
      instructor: 'Sarah Johnson',
      date: 'Every Wednesday, 2:00 PM GMT',
      description: 'Deep dive into advanced technical analysis techniques'
    },
    {
      id: 3,
      title: 'Forex Trading for Beginners',
      instructor: 'Mike Chen',
      date: 'Every Friday, 11:00 AM GMT',
      description: 'Introduction to forex trading basics and fundamentals'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Live Webinars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert traders for live webinars and interactive trading sessions
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {webinar.date}
                </div>
                <p className="text-sm text-gray-600 mb-6">Instructor: {webinar.instructor}</p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = '/open-account'}
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveWebinars;