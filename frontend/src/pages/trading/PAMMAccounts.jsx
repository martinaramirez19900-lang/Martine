import React from 'react';
import { Users, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const PAMMAccounts = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">PAMM Accounts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Percent Allocation Management Module - Professional money management solutions
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <div className="w-16 h-16 bg-green-50 rounded-2xl mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">For Investors</h2>
              <p className="text-gray-600 mb-6">
                Invest in professional traders and earn passive income without active trading
              </p>
              <ul className="space-y-3">
                {[
                  'Choose from verified money managers',
                  'Full transparency of trading history',
                  'Withdraw funds at any time',
                  'Performance-based allocation',
                  'Risk management tools',
                  'Detailed performance reports'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                Become an Investor
              </Button>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-green-50 rounded-2xl mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">For Money Managers</h2>
              <p className="text-gray-600 mb-6">
                Manage investor funds and earn performance fees for successful trading
              </p>
              <ul className="space-y-3">
                {[
                  'Build your track record',
                  'Earn performance fees up to 30%',
                  'No capital requirements',
                  'Advanced risk management',
                  'Full control over strategies',
                  'Marketing and promotion support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                Become a Manager
              </Button>
            </Card>
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How PAMM Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Choose Manager', desc: 'Browse and select verified traders' },
                { step: '2', title: 'Allocate Funds', desc: 'Decide how much to invest' },
                { step: '3', title: 'Manager Trades', desc: 'Professional executes strategy' },
                { step: '4', title: 'Earn Profits', desc: 'Share in trading success' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Secure', desc: 'Segregated accounts and regulation' },
              { icon: DollarSign, title: 'Transparent', desc: 'All fees disclosed upfront' },
              { icon: TrendingUp, title: 'Performance', desc: 'Detailed analytics and reports' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PAMMAccounts;