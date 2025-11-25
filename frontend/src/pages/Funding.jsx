import React from 'react';
import { CreditCard, Building, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Funding = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.nav?.fundingWithdrawals || 'Funding & Withdrawals'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, secure, and convenient deposit and withdrawal methods
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CreditCard, title: 'Credit/Debit Cards', desc: 'Instant deposits, Visa, Mastercard' },
              { icon: Building, title: 'Bank Transfer', desc: '1-3 business days' },
              { icon: Smartphone, title: 'E-Wallets', desc: 'Instant deposits and withdrawals' },
              { icon: Zap, title: 'Crypto', desc: 'Bitcoin, USDT deposits' }
            ].map((method, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <method.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = '/open-account'}
            >
              {t.common?.openAccount || 'Open Account'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funding;