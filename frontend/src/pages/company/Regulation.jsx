import React from 'react';
import { Shield, CheckCircle2, FileText, Award } from 'lucide-react';
import { Card } from '../../components/ui/card';

const Regulation = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Regulation & Licensing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our priority. We are regulated by multiple top-tier financial authorities
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Shield, title: 'FCA Regulated', desc: 'Licensed by the UK Financial Conduct Authority' },
              { icon: CheckCircle2, title: 'CySEC Licensed', desc: 'Authorized by Cyprus Securities and Exchange Commission' },
              { icon: FileText, title: 'ASIC Approved', desc: 'Regulated by Australian Securities & Investments Commission' },
              { icon: Award, title: 'FSCA Compliant', desc: 'Licensed by South African Financial Sector Conduct Authority' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-green-50 border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Regulation Means for You</h2>
            <div className="space-y-4">
              {[
                'Segregated client funds in tier-1 banks',
                'Negative balance protection',
                'Compensation scheme participation',
                'Regular audits and compliance checks',
                'Transparent business practices',
                'Client money protection insurance'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Regulation;