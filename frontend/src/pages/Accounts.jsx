import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { pageTranslations } from '../i18n/pageTranslations';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { accountTypes } from '../data/mockData';

const Accounts = () => {
  const { t, language } = useLanguage();
  const pt = pageTranslations[language] || pageTranslations.en;

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
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accountTypes.map((account) => {
              // Translate account name
              const accountName = account.id === 1 
                ? pt.accounts?.standard || 'Standard Account'
                : pt.accounts?.pro || 'Pro Account';
              
              // Translate features
              const getTranslatedFeature = (feature) => {
                const featureMap = {
                  'Instant execution': t.accountFeatures?.instantExecution || feature,
                  'No commission': t.accountFeatures?.noCommission || feature,
                  'Swap-free option': t.accountFeatures?.swapFree || feature,
                  '24/7 support': t.accountFeatures?.support247 || feature,
                  'Mobile trading': t.accountFeatures?.mobileTrading || feature,
                  'Demo account': t.accountFeatures?.demoAccount || feature,
                  'Low spreads': t.accountFeatures?.lowSpreads || feature,
                  'Priority support': t.accountFeatures?.prioritySupport || feature,
                  'Advanced tools': t.accountFeatures?.advancedTools || feature,
                  'Dedicated manager': t.accountFeatures?.dedicatedManager || feature,
                  'Premium analytics': t.accountFeatures?.premiumAnalytics || feature,
                  'Personal advisor': t.accountFeatures?.personalAdvisor || feature
                };
                return featureMap[feature] || feature;
              };

              // Translate leverage and spreads
              const leverage = account.id === 1
                ? t.accountFeatures?.leverageUpTo200 || account.leverage
                : t.accountFeatures?.leverageUpTo500 || account.leverage;
              
              const spreads = account.id === 1
                ? t.accountFeatures?.spreadsFrom15 || account.spreads
                : t.accountFeatures?.spreadsFrom06 || account.spreads;

              return (
                <Card
                  key={account.id}
                  className={`p-8 hover:shadow-2xl transition-all duration-300 relative ${
                    account.recommended ? 'border-2 border-green-600 shadow-xl scale-105' : ''
                  }`}
                >
                  {account.recommended && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                      {pt.accounts?.recommended || 'Recommended'}
                    </Badge>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{accountName}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-4">{account.minDeposit}</div>
                    <p className="text-sm text-gray-600">{t.accounts.minDeposit}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">{t.accounts.leverage}</span>
                      <span className="text-sm font-bold text-gray-900">{leverage}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">{t.accounts.spreads}</span>
                      <span className="text-sm font-bold text-gray-900">{spreads}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-bold text-gray-900 mb-4">{t.accounts.features}:</div>
                    <ul className="space-y-3">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{getTranslatedFeature(feature)}</span>
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
                    onClick={() => window.location.href = 'https://trd.smh-markets.net/'}
                  >
                    {t.accounts.selectAccount}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.whyChooseUs.detailedComparison}</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">{t.comparisonTable.feature}</th>
                    {accountTypes.map((account) => (
                      <th key={account.id} className="px-6 py-4 text-center">
                        {account.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: t.comparisonTable.minDeposit, values: accountTypes.map(a => a.minDeposit) },
                    { feature: t.comparisonTable.maxLeverage, values: accountTypes.map(a => a.leverage) },
                    { feature: t.comparisonTable.spreadsFrom, values: accountTypes.map(a => a.spreads) },
                    { feature: t.comparisonTable.commission, values: ['No', 'No'] },
                    { feature: t.comparisonTable.expertAdvisors, values: ['Yes', 'Yes'] },
                    { feature: t.comparisonTable.islamicAccount, values: ['Yes', 'Yes'] },
                    { feature: t.comparisonTable.dedicatedSupport, values: ['No', 'Yes'] },
                    { feature: t.comparisonTable.personalManager, values: ['No', 'Yes'] },
                    { feature: t.comparisonTable.priorityWithdrawals, values: ['No', 'Yes'] },
                    { feature: t.comparisonTable.premiumAnalytics, values: ['No', 'Yes'] }
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
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.whyChooseUs.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: t.whyChooseUs.regulatedBroker,
                  description: t.whyChooseUs.regulatedBrokerDesc
                },
                {
                  title: t.whyChooseUs.secureFunds,
                  description: t.whyChooseUs.secureFundsDesc
                },
                {
                  title: t.whyChooseUs.fastExecution,
                  description: t.whyChooseUs.fastExecutionDesc
                },
                {
                  title: t.whyChooseUs.competitivePricing,
                  description: t.whyChooseUs.competitivePricingDesc
                },
                {
                  title: t.whyChooseUs.multiplePlatforms,
                  description: t.whyChooseUs.multiplePlatformsDesc
                },
                {
                  title: t.whyChooseUs.expertSupport,
                  description: t.whyChooseUs.expertSupportDesc
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
          <h2 className="text-5xl font-bold text-white mb-6">{t.whyChooseUs.readyToGetStarted}</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            {t.whyChooseUs.openAccountToday}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg"
            onClick={() => window.location.href = 'https://trd.smh-markets.net/'}
          >
            {t.whyChooseUs.openAccountNow}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Accounts;