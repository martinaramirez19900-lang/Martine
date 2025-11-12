import React from 'react';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const Careers = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with a global leader in online trading
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, title: 'Great Team', desc: 'Work with talented professionals' },
              { icon: TrendingUp, title: 'Career Growth', desc: 'Opportunities to advance' },
              { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working arrangements' },
              { icon: Briefcase, title: 'Competitive Pay', desc: 'Excellent compensation packages' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {[
              { title: 'Senior Trading Platform Developer', location: 'London, UK', type: 'Full-time' },
              { title: 'Customer Support Specialist', location: 'Remote', type: 'Full-time' },
              { title: 'Compliance Officer', location: 'Cyprus', type: 'Full-time' },
              { title: 'Marketing Manager', location: 'Dubai, UAE', type: 'Full-time' },
              { title: 'Business Development Manager', location: 'Singapore', type: 'Full-time' }
            ].map((job, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Apply Now
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

export default Careers;