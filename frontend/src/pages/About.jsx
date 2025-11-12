import React from 'react';
import { Award, Users, Globe2, Shield, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/card';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">About SMH Markets</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted partner in global trading since 2015, serving over 500,000 clients worldwide
          </p>
        </div>
      </section>

      {/* Company Image */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYyOTM5MzQ2fDA&ixlib=rb-4.1.0&q=85"
              alt="SMH Markets Team"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 2015, SMH Markets has grown to become one of the leading online brokers in the financial industry. 
                Our mission has always been to provide traders with the best possible trading conditions, cutting-edge technology, 
                and exceptional customer service.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With over 500,000 active clients across 150 countries, we've built a reputation for transparency, reliability, 
                and innovation. Our team of industry experts works tirelessly to ensure that every client has access to the tools 
                and resources they need to succeed in the financial markets.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                As a regulated broker, we adhere to the highest standards of security and compliance. Your funds are held in 
                segregated accounts at tier-1 banks, and we employ bank-level encryption to protect your personal and financial information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'Regulated by top-tier authorities with client funds protected in segregated accounts'
              },
              {
                icon: Target,
                title: 'Client-Focused',
                description: 'Every decision we make is centered around providing the best experience for our clients'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Continuously improving our technology and services to stay ahead of the market'
              },
              {
                icon: Globe2,
                title: 'Global Reach',
                description: 'Serving clients in over 150 countries with multilingual support 24/7'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Award-winning broker recognized for outstanding service and trading conditions'
              },
              {
                icon: Users,
                title: 'Transparency',
                description: 'Clear pricing, no hidden fees, and honest communication in everything we do'
              }
            ].map((value, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: 'Active Clients' },
              { number: '150+', label: 'Countries' },
              { number: '$5B+', label: 'Monthly Volume' },
              { number: '15+', label: 'Industry Awards' },
              { number: '2000+', label: 'Instruments' },
              { number: '0.01s', label: 'Avg. Execution' },
              { number: '24/7', label: 'Support' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Michael Anderson',
                role: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1758518729371-5ee28c4ddf60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYyOTM5MzQ2fDA&ixlib=rb-4.1.0&q=85'
              },
              {
                name: 'Sarah Mitchell',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYyOTM5MzQ2fDA&ixlib=rb-4.1.0&q=85'
              },
              {
                name: 'David Chen',
                role: 'Chief Financial Officer',
                image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYyOTM5MzQ2fDA&ixlib=rb-4.1.0&q=85'
              }
            ].map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;