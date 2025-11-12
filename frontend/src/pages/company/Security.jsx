import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';
import { Card } from '../../components/ui/card';

const Security = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Online Security</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bank-level security measures to protect your data and funds
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Lock, title: 'SSL Encryption', desc: '256-bit SSL encryption for all data transmission' },
              { icon: Shield, title: 'Two-Factor Authentication', desc: 'Additional layer of security for your account' },
              { icon: Eye, title: 'Fraud Detection', desc: 'Advanced systems to prevent unauthorized access' },
              { icon: Server, title: 'Secure Servers', desc: 'Data stored on secure, redundant servers' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your personal and financial data is protected using industry-standard encryption protocols. 
                We implement multi-layered security measures including firewalls, intrusion detection systems, 
                and regular security audits to ensure your information remains safe.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fund Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Client funds are held in segregated accounts at top-tier banks, completely separate from 
                company operational funds. This ensures your money is protected even in the unlikely event 
                of company insolvency.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to protecting your privacy. Your personal information is never shared 
                with third parties without your explicit consent. We comply with all data protection 
                regulations including GDPR.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;