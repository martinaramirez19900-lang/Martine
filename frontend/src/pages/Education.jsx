import React from 'react';
import { BookOpen, Video, FileText, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { educationContent } from '../data/mockData';

const Education = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Trading Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experts and enhance your trading skills with our comprehensive educational resources
          </p>
        </div>
      </section>

      {/* Education Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: BookOpen, title: 'Trading Guides', count: '50+ Guides', color: 'from-blue-500 to-blue-600' },
              { icon: Video, title: 'Video Tutorials', count: '100+ Videos', color: 'from-purple-500 to-purple-600' },
              { icon: FileText, title: 'E-Books', count: '20+ Books', color: 'from-green-500 to-green-600' },
              { icon: Award, title: 'Webinars', count: 'Weekly Live', color: 'from-green-500 to-green-600' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.count}</p>
              </Card>
            ))}
          </div>

          {/* Course Grid */}
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationContent.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{course.category}</Badge>
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = '/open-account'}
                  >
                    Start Learning
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Your Learning Journey</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                level: 'Beginner',
                title: 'Start Your Trading Journey',
                description: 'Learn the basics of financial markets and trading fundamentals',
                modules: '10 Modules',
                time: '5 hours'
              },
              {
                level: 'Intermediate',
                title: 'Advanced Trading Strategies',
                description: 'Master technical analysis, risk management, and trading psychology',
                modules: '15 Modules',
                time: '10 hours'
              },
              {
                level: 'Advanced',
                title: 'Professional Trading',
                description: 'Develop advanced strategies and algorithmic trading skills',
                modules: '20 Modules',
                time: '15 hours'
              }
            ].map((path, idx) => (
              <Card key={idx} className="p-8 mb-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge className="mb-4">{path.level}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span>{path.modules}</span>
                      <span>•</span>
                      <span>{path.time}</span>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white ml-6">
                    Enroll Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;