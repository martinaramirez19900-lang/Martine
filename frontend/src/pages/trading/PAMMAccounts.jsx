import React from 'react';
import { Users, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const PAMMAccounts = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">PAMM Accounts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Percentage Allocation Management Module - Professional money management
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, title: 'For Investors', desc: 'Let professional traders manage your funds' },
              { icon: TrendingUp, title: 'For Traders', desc: 'Manage client funds and earn performance fees' },
              { icon: Shield, title: 'Secure', desc: 'Transparent and secure fund management' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = '/open-account'}
            >
              {t.common?.openAccount || 'Open PAMM Account'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PAMMAccounts;