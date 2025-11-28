import React from 'react';
import { Smartphone, Download, Bell, Shield, TrendingUp, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { additionalPagesTranslations } from '../../i18n/additionalPages';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const MobileApp = () => {
  const { language, t } = useLanguage();
  const apt = additionalPagesTranslations[language] || additionalPagesTranslations.en;
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">{apt.mobileApp?.title || 'Mobile Trading App'}</h1>
              <p className="text-xl text-gray-600 mb-8">
                {apt.mobileApp?.subtitle || 'Trade anytime, anywhere with our powerful mobile trading application'}
              </p>
              <div className="flex gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2 w-5 h-5" />
                  {apt.mobileApp?.downloadIOS || 'Download for iOS'}
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 w-5 h-5" />
                  {apt.mobileApp?.downloadAndroid || 'Download for Android'}
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.8</div>
                  <div className="text-sm text-gray-600">App Store Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500K+</div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600" alt="Mobile App" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{apt.mobileApp?.keyFeatures || 'Key Features'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: t.mobileApp?.realTimeTrading || 'Real-Time Trading', desc: t.mobileApp?.realTimeTradingDesc || 'Execute trades in real-time with live market data' },
              { icon: Bell, title: t.mobileApp?.pushNotifications || 'Push Notifications', desc: t.mobileApp?.pushNotificationsDesc || 'Get instant alerts for market movements and orders' },
              { icon: Shield, title: t.mobileApp?.secureLogin || 'Secure Login', desc: t.mobileApp?.secureLoginDesc || 'Biometric authentication and PIN protection' },
              { icon: Globe, title: t.mobileApp?.multiPlatformSync || 'Multi-Platform Sync', desc: t.mobileApp?.multiPlatformSyncDesc || 'Seamless sync across all your devices' },
              { icon: Smartphone, title: t.mobileApp?.intuitiveInterface || 'Intuitive Interface', desc: t.mobileApp?.intuitiveInterfaceDesc || 'Easy-to-use design for trading on the go' },
              { icon: Download, title: t.mobileApp?.offlineCharts || 'Offline Charts', desc: t.mobileApp?.offlineChartsDesc || 'View saved charts even without internet' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl mb-4 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.mobileApp?.appCapabilities || 'App Capabilities'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              t.mobileApp?.fullTradingFunctionality || 'Full trading functionality',
              t.mobileApp?.advancedChartingTools || 'Advanced charting tools',
              t.mobileApp?.technicalIndicators || 'Technical indicators (50+)',
              t.mobileApp?.oneClickTrading || 'One-click trading',
              t.mobileApp?.multipleOrderTypes || 'Multiple order types',
              t.mobileApp?.realTimeQuotes || 'Real-time quotes',
              t.mobileApp?.accountManagement || 'Account management',
              t.mobileApp?.depositWithdrawal || 'Deposit and withdrawal',
              t.mobileApp?.tradingHistory || 'Trading history',
              t.mobileApp?.economicCalendar || 'Economic calendar',
              t.mobileApp?.marketNewsFeed || 'Market news feed',
              t.mobileApp?.pushNotifications || 'Push notifications'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Start Trading on Mobile</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Download our app and trade from anywhere in the world
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Download className="mr-2" />
              iOS App
            </Button>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Download className="mr-2" />
              Android App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;