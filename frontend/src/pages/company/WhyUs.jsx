import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const WhyUs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.nav?.whyUs || 'Why SMH Markets'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features?.subtitle || 'Everything you need for successful trading'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: t.featureCards?.secureTrading?.title || 'Secure Trading', desc: t.featureCards?.secureTrading?.desc || 'Bank-level security' },
              { icon: Award, title: t.featureCards?.awardWinning?.title || 'Award Winning', desc: t.featureCards?.awardWinning?.desc || 'Industry excellence' },
              { icon: Users, title: t.featureCards?.support247?.title || '24/7 Support', desc: t.featureCards?.support247?.desc || 'Round-the-clock support' },
              { icon: TrendingUp, title: t.featureCards?.advancedTools?.title || 'Advanced Tools', desc: t.featureCards?.advancedTools?.desc || 'Professional tools' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all">
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;