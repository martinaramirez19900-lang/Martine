import React from 'react';
import { Shield, FileText, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const Regulation = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Regulation & Licensing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regulated by leading financial authorities worldwide
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Regulated Broker', desc: 'Licensed and regulated by top-tier authorities' },
              { icon: FileText, title: 'Compliance', desc: 'Full compliance with financial regulations' },
              { icon: Award, title: 'Trusted', desc: 'Trusted by 500,000+ traders worldwide' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
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

export default Regulation;