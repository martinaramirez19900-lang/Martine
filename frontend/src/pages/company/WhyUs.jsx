import React from 'react';
import { Award, Shield, TrendingUp, Users, Globe2, Zap } from 'lucide-react';
import { Card } from '../../components/ui/card';

const WhyUs = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Why Choose SMH Markets</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with an award-winning broker trusted by over 500,000 traders worldwide
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Award-Winning Broker', desc: 'Recognized excellence with 15+ industry awards' },
              { icon: Shield, title: 'Regulated & Secure', desc: 'Licensed by top-tier financial authorities' },
              { icon: TrendingUp, title: 'Competitive Spreads', desc: 'From 0.0 pips on major instruments' },
              { icon: Users, title: '24/7 Support', desc: 'Multilingual customer support around the clock' },
              { icon: Globe2, title: 'Global Presence', desc: 'Serving traders in 150+ countries' },
              { icon: Zap, title: 'Fast Execution', desc: 'Lightning-fast order processing' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Advantages</h2>
          <div className="space-y-8">
            {[
              { title: 'Transparent Pricing', desc: 'No hidden fees or commissions. What you see is what you get with our transparent pricing structure.' },
              { title: 'Advanced Technology', desc: 'State-of-the-art trading infrastructure ensuring optimal performance and minimal downtime.' },
              { title: 'Negative Balance Protection', desc: 'Trade with confidence knowing you can never lose more than your account balance.' },
              { title: 'Segregated Accounts', desc: 'Client funds held separately in tier-1 banks for maximum security and protection.' },
              { title: 'Educational Resources', desc: 'Comprehensive learning materials, webinars, and analysis to improve your trading skills.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;