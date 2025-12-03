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
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Company Image */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYyOTM5MzQ2fDA&ixlib=rb-4.1.0&q=85"
              alt="SMH Markets Team"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{t.about.ourStory}</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.about.storyParagraph1}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.about.storyParagraph2}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.about.storyParagraph3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.about.ourValues}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t.about.trustSecurity,
                description: t.about.trustSecurityDesc
              },
              {
                icon: Target,
                title: t.about.clientFocused,
                description: t.about.clientFocusedDesc
              },
              {
                icon: TrendingUp,
                title: t.about.innovation,
                description: t.about.innovationDesc
              },
              {
                icon: Globe2,
                title: t.about.globalReach,
                description: t.about.globalReachDesc
              },
              {
                icon: Award,
                title: t.about.excellence,
                description: t.about.excellenceDesc
              },
              {
                icon: Users,
                title: t.about.transparency,
                description: t.about.transparencyDesc
              }
            ].map((value, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.about.ourAchievements}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: t.about.activeClients },
              { number: '150+', label: t.about.countries },
              { number: '$5B+', label: t.about.monthlyVolume },
              { number: '15+', label: t.about.industryAwards },
              { number: '2000+', label: t.about.instruments },
              { number: '0.01s', label: t.about.avgExecution },
              { number: '24/7', label: t.about.support },
              { number: '99.9%', label: t.about.uptime }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.about.leadershipTeam}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Michael Anderson',
                role: t.about.ceo,
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&fit=crop&crop=faces'
              },
              {
                name: 'Sarah Mitchell',
                role: t.about.cto,
                image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=600&q=80&fit=crop&crop=faces'
              },
              {
                name: 'David Chen',
                role: t.about.cfo,
                image: 'https://images.unsplash.com/photo-1550584013-0a844d3b13e2?w=600&q=80&fit=crop&crop=faces'
              }
            ].map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover object-center" />
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