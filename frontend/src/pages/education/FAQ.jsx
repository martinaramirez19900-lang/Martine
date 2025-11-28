import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is forex trading?',
      answer: 'Forex trading involves buying and selling currencies in the foreign exchange market. It is the largest financial market in the world with daily trading volumes exceeding $6 trillion.'
    },
    {
      question: 'How do I start trading?',
      answer: 'To start trading, you need to: 1) Open a trading account, 2) Verify your identity, 3) Deposit funds, 4) Download a trading platform, 5) Start with a demo account to practice.'
    },
    {
      question: 'What is leverage?',
      answer: 'Leverage allows you to control a larger position with a smaller amount of capital. For example, with 1:100 leverage, you can control $10,000 with just $100 of your own money.'
    },
    {
      question: 'What are the trading hours?',
      answer: 'The forex market is open 24 hours a day, 5 days a week, from Monday morning in Sydney to Friday evening in New York. This allows you to trade at any time that suits you.'
    },
    {
      question: 'How much money do I need to start?',
      answer: 'You can start trading with as little as $100 on a Standard account. However, we recommend starting with at least $500-1000 to have better risk management opportunities.'
    },
    {
      question: 'What is a spread?',
      answer: 'The spread is the difference between the buy (ask) and sell (bid) price of a currency pair. It represents the cost of trading and is measured in pips.'
    },
    {
      question: 'Are my funds safe?',
      answer: 'Yes, client funds are kept in segregated accounts at tier-1 banks, separate from company operational funds. We are also regulated by top-tier financial authorities.'
    },
    {
      question: 'Can I trade on mobile?',
      answer: 'Yes, we offer mobile trading apps for both iOS and Android devices. You can trade, monitor your positions, and manage your account from anywhere.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.educationPages?.faqTitle || 'Frequently Asked Questions'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.educationPages?.faqSubtitle || 'Find answers to common questions about trading and our platform'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;