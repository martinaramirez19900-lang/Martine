import React from 'react';
import { CreditCard, Building2, Wallet, Zap, Shield, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Funding = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Funding & Withdrawals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, secure, and convenient payment methods to fund your trading account
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: Zap, title: 'Instant Deposits', desc: 'Most deposits are credited instantly to your account' },
              { icon: Clock, title: 'Fast Withdrawals', desc: 'Withdrawals processed within 24 hours' },
              { icon: Shield, title: 'Secure Payments', desc: 'Bank-level encryption and security' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: CreditCard,
                  title: 'Credit/Debit Cards',
                  methods: ['Visa', 'Mastercard', 'Maestro'],
                  depositTime: 'Instant',
                  withdrawalTime: '1-3 business days',
                  fees: 'Free'
                },
                {
                  icon: Building2,
                  title: 'Bank Transfer',
                  methods: ['Wire Transfer', 'SEPA', 'Local Transfer'],
                  depositTime: '1-3 business days',
                  withdrawalTime: '1-3 business days',
                  fees: 'Free (bank fees may apply)'
                },
                {
                  icon: Wallet,
                  title: 'E-Wallets',
                  methods: ['Skrill', 'Neteller', 'PayPal'],
                  depositTime: 'Instant',
                  withdrawalTime: 'Within 24 hours',
                  fees: 'Free'
                },
                {
                  icon: Wallet,
                  title: 'Cryptocurrencies',
                  methods: ['Bitcoin', 'Ethereum', 'USDT'],
                  depositTime: 'Network dependent',
                  withdrawalTime: 'Network dependent',
                  fees: 'Network fees apply'
                }
              ].map((method, idx) => (
                <Card key={idx} className="p-8 hover:shadow-xl transition-all">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mr-4">
                      <method.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Available:</div>
                    <div className="flex flex-wrap gap-2">
                      {method.methods.map((m, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deposit Time:</span>
                      <span className="text-gray-900 font-medium">{method.depositTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Withdrawal Time:</span>
                      <span className="text-gray-900 font-medium">{method.withdrawalTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fees:</span>
                      <span className="text-green-600 font-medium">{method.fees}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Fund Your Account?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Choose from multiple payment methods and start trading today
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Open Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Funding;