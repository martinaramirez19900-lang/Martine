import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: 'How do I open a trading account?',
      answer: 'Click on "Open Account" button, fill out the registration form with your details, verify your identity by uploading required documents, and make your first deposit to start trading.'
    },
    {
      question: 'What is the minimum deposit required?',
      answer: 'The minimum deposit varies by account type. Our Basic account requires $100, Standard requires $500, Professional $5,000, and VIP $25,000.'
    },
    {
      question: 'Which trading platforms do you offer?',
      answer: 'We offer MetaTrader 4, MetaTrader 5, cTrader, and our proprietary SMH Edge platform. All platforms are available on desktop, web, and mobile devices.'
    },
    {
      question: 'How long does withdrawal processing take?',
      answer: 'Withdrawal requests are processed within 24 hours. The time it takes to receive funds depends on your payment method - bank transfers take 3-5 business days, while e-wallets are instant.'
    },
    {
      question: 'Is my money safe with SMH Markets?',
      answer: 'Yes, all client funds are held in segregated accounts at tier-1 banks. We are regulated by leading financial authorities and employ bank-level encryption to protect your data.'
    },
    {
      question: 'Do you offer a demo account?',
      answer: 'Yes, we offer a free demo account with virtual funds so you can practice trading without risking real money. The demo account has access to all features of our live accounts.'
    },
    {
      question: 'What are the trading hours?',
      answer: 'Forex markets are open 24/5 from Sunday 10 PM GMT to Friday 10 PM GMT. Stock markets follow their respective exchange hours.'
    },
    {
      question: 'Do you charge commissions?',
      answer: 'Commission structure depends on your account type. Basic and Standard accounts are commission-free with competitive spreads. Professional and VIP accounts have ultra-tight spreads with a small commission per trade.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about trading with SMH Markets
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 ml-4 flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;