import React from 'react';
import { Video, Calendar, Users, Clock } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const Webinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Advanced Forex Trading Strategies',
      instructor: 'John Mitchell',
      date: 'Jan 15, 2025',
      time: '14:00 GMT',
      duration: '60 min',
      level: 'Advanced',
      attendees: 234
    },
    {
      id: 2,
      title: 'Introduction to Technical Analysis',
      instructor: 'Sarah Chen',
      date: 'Jan 18, 2025',
      time: '16:00 GMT',
      duration: '45 min',
      level: 'Beginner',
      attendees: 456
    },
    {
      id: 3,
      title: 'Risk Management Essentials',
      instructor: 'Michael Brown',
      date: 'Jan 22, 2025',
      time: '15:00 GMT',
      duration: '50 min',
      level: 'Intermediate',
      attendees: 321
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Live Webinars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from expert traders in our free interactive webinar sessions
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Video, title: 'Weekly Sessions', desc: '3-4 webinars per week' },
              { icon: Users, title: 'Expert Instructors', desc: '10+ professional traders' },
              { icon: Calendar, title: 'Free Access', desc: 'All webinars included' },
              { icon: Clock, title: 'Recordings', desc: 'Watch anytime later' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Webinars</h2>
          <div className="space-y-6">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="p-8 hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${
                        webinar.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        webinar.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {webinar.level}
                      </Badge>
                      <span className="text-sm text-gray-600">{webinar.attendees} registered</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.instructor}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      Register Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Webinar Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Forex Trading Basics',
              'Technical Analysis',
              'Fundamental Analysis',
              'Risk Management',
              'Trading Psychology',
              'Advanced Strategies',
              'Market Analysis',
              'Platform Training'
            ].map((topic, idx) => (
              <Card key={idx} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-900 font-medium">{topic}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;