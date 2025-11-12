import React from 'react';
import { DollarSign, TrendingDown, Award, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/card';

const Pricing = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. Competitive spreads. Industry-leading conditions.
          </p>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: TrendingDown,
                title: 'Spreads from 0.0 pips',
                description: 'Ultra-tight spreads on major currency pairs starting from 0.0 pips on Pro accounts'
              },
              {
                icon: DollarSign,
                title: 'No Hidden Fees',
                description: 'Transparent pricing with no hidden costs. What you see is what you get.'
              },
              {
                icon: Award,
                title: 'Competitive Swaps',
                description: 'Industry-leading swap rates with Islamic account options available'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Spreads & Commissions</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Instrument</th>
                      <th className="px-6 py-4 text-center">Standard Account</th>
                      <th className="px-6 py-4 text-center">Pro Account</th>
                      <th className="px-6 py-4 text-center">VIP Account</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { instrument: 'EUR/USD', standard: '1.2 pips', pro: '0.6 pips', vip: '0.0 pips' },
                      { instrument: 'GBP/USD', standard: '1.5 pips', pro: '0.8 pips', vip: '0.2 pips' },
                      { instrument: 'USD/JPY', standard: '1.0 pips', pro: '0.5 pips', vip: '0.1 pips' },
                      { instrument: 'Gold (XAU/USD)', standard: '0.35 pips', pro: '0.20 pips', vip: '0.10 pips' },
                      { instrument: 'US30 (Dow Jones)', standard: '2.0 points', pro: '1.5 points', vip: '1.0 points' },
                      { instrument: 'BTC/USD', standard: '50 pips', pro: '30 pips', vip: '20 pips' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.instrument}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.standard}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.pro}</td>
                        <td className="px-6 py-4 text-center text-green-600 font-medium">{row.vip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Other Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Charge</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Spreads:</strong> Competitive spreads from 0.0 pips
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Overnight Swaps:</strong> Industry-standard swap rates
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Inactivity Fee:</strong> $10/month after 12 months of inactivity
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Don't Charge</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Deposits:</strong> Free of charge (all methods)
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Withdrawals:</strong> Free (bank transfer fees may apply)
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Account Maintenance:</strong> No monthly fees
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;