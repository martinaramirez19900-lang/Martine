import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { accountTypes } from '../data/mockData';

const Accounts = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.accounts.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.accounts.subtitle}</p>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accountTypes.map((account) => (
              <Card
                key={account.id}
                className={`p-8 hover:shadow-2xl transition-all duration-300 relative ${
                  account.recommended ? 'border-2 border-green-600 shadow-xl scale-105' : ''
                }`}
              >
                {account.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                    Recommended
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{account.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">{account.minDeposit}</div>
                  <p className="text-sm text-gray-600">{t.accounts.minDeposit}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">{t.accounts.leverage}</span>
                    <span className="text-sm font-bold text-gray-900">{account.leverage}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">{t.accounts.spreads}</span>
                    <span className="text-sm font-bold text-gray-900">{account.spreads}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-bold text-gray-900 mb-4">{t.accounts.features}:</div>
                  <ul className="space-y-3">
                    {account.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full ${
                    account.recommended
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {t.accounts.selectAccount}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Detailed Comparison</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    {accountTypes.map((account) => (
                      <th key={account.id} className="px-6 py-4 text-center">
                        {account.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Minimum Deposit', values: accountTypes.map(a => a.minDeposit) },
                    { feature: 'Maximum Leverage', values: accountTypes.map(a => a.leverage) },
                    { feature: 'Spreads From', values: accountTypes.map(a => a.spreads) },
                    { feature: 'Commission', values: ['No', 'No', 'No', 'No'] },
                    { feature: 'Expert Advisors', values: ['Yes', 'Yes', 'Yes', 'No'] },
                    { feature: 'Islamic Account', values: ['No', 'Yes', 'Yes', 'Yes'] },
                    { feature: 'Dedicated Support', values: ['No', 'No', 'Yes', 'Yes'] },
                    { feature: 'Personal Manager', values: ['No', 'No', 'Yes', 'Yes'] },
                    { feature: 'Priority Withdrawals', values: ['No', 'No', 'Yes', 'Yes'] },
                    { feature: 'Premium Analytics', values: ['No', 'No', 'No', 'Yes'] }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      {row.values.map((value, vidx) => (
                        <td key={vidx} className="px-6 py-4 text-center text-gray-700">
                          {value === 'Yes' ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : value === 'No' ? (
                            <span className="text-gray-400">–</span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Open Account */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Open an Account with SMH Markets?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Regulated Broker',
                  description: 'Licensed and regulated by top-tier financial authorities'
                },
                {
                  title: 'Secure Funds',
                  description: 'Client funds held in segregated accounts at tier-1 banks'
                },
                {
                  title: 'Fast Execution',
                  description: 'Advanced technology for lightning-fast order execution'
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Tight spreads and low commissions on all instruments'
                },
                {
                  title: 'Multiple Platforms',
                  description: 'Choose from MT4, MT5, cTrader, and our proprietary platform'
                },
                {
                  title: 'Expert Support',
                  description: '24/7 multilingual customer support for all clients'
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Open your trading account today and join thousands of satisfied traders
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Account Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Accounts;