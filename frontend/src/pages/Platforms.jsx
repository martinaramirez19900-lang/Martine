import React from 'react';
import { Download, Monitor, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { platforms } from '../data/mockData';

const Platforms = () => {
  const { t } = useLanguage();
  
  // Debug logging
  console.log('Platforms t.platforms:', t.platforms);
  console.log('Platforms t.platforms.advancedCharting:', t.platforms?.advancedCharting);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.platforms.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.platforms.subtitle}</p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform) => {
              const getDescription = (name) => {
                if (name === 'MetaTrader 4') return t.platforms?.mt4Description || platform.description;
                if (name === 'MetaTrader 5') return t.platforms?.mt5Description || platform.description;
                if (name === 'cTrader') return t.platforms?.ctraderDescription || platform.description;
                if (name === 'SMH Edge') return t.platforms?.edgeDescription || platform.description;
                return platform.description;
              };

              const translateFeature = (feature) => {
                // Check if platforms translations exist
                if (!t.platforms) return feature;
                
                const featureMap = {
                  'Advanced charting': t.platforms.advancedCharting,
                  'Expert Advisors': t.platforms.expertAdvisors,
                  'Mobile trading': t.platforms.mobileTrading,
                  'Custom indicators': t.platforms.customIndicators,
                  'Multiple timeframes': t.platforms.multipleTimeframes,
                  'Economic calendar': t.platforms.economicCalendar,
                  'Depth of Market': t.platforms.depthOfMarket,
                  'Built-in signals': t.platforms.builtInSignals,
                  'Level II pricing': t.platforms.levelIIPricing,
                  'cAlgo automation': t.platforms.cAlgoAutomation,
                  'Fast execution': t.platforms.fastExecution,
                  'Advanced orders': t.platforms.advancedOrders,
                  'Intuitive interface': t.platforms.intuitiveInterface,
                  'One-click trading': t.platforms.oneClickTrading,
                  'Real-time data': t.platforms.realTimeData,
                  'Risk management': t.platforms.riskManagement
                };
                
                return featureMap[feature] || feature;
              };
              
              return (
              <Card key={platform.id} className="p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                    <p className="text-gray-600">{getDescription(platform.name)}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mb-8">
                  <img
                    src={platform.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"}
                    alt={platform.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">{t.platforms?.keyFeatures || 'Key Features:'}</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{translateFeature(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Tabs defaultValue="desktop" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="desktop"><Monitor className="w-4 h-4 mr-2" />{t.platforms?.desktop || 'Desktop'}</TabsTrigger>
                    <TabsTrigger value="web"><Globe className="w-4 h-4 mr-2" />Web</TabsTrigger>
                    <TabsTrigger value="mobile"><Smartphone className="w-4 h-4 mr-2" />{t.platforms?.mobile || 'Mobile'}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="desktop" className="mt-4">
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {t.platforms?.downloadWindows || 'Download for Windows'}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {t.platforms?.downloadMac || 'Download for Mac'}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="web" className="mt-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = 'https://trd.smh-markets.net/'}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {t.platforms?.launchWeb || 'Launch Web Platform'}
                    </Button>
                  </TabsContent>
                  <TabsContent value="mobile" className="mt-4">
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {t.platforms?.downloadIOS || 'Download for iOS'}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {t.platforms?.downloadAndroid || 'Download for Android'}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const platformRoutes = {
                        'MetaTrader 4': '/platforms/mt4',
                        'MetaTrader 5': '/platforms/mt5',
                        'cTrader': '/platforms/ctrader',
                        'SMH Edge': '/open-account'
                      };
                      window.location.href = platformRoutes[platform.name] || '/open-account';
                    }}
                  >
                    {t.platforms?.learnMoreAbout || 'Learn More about'} {platform.name}
                  </Button>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.platforms?.comparisonTitle || 'Platform Comparison'}</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{t.platforms?.feature || 'Feature'}</th>
                  <th className="px-6 py-4 text-center">MT4</th>
                  <th className="px-6 py-4 text-center">MT5</th>
                  <th className="px-6 py-4 text-center">cTrader</th>
                  <th className="px-6 py-4 text-center">SMH Edge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: t.platforms?.expertAdvisorsFeature || 'Expert Advisors', mt4: true, mt5: true, ctrader: true, edge: false },
                  { feature: t.platforms?.advancedChartingFeature || 'Advanced Charting', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: t.platforms?.oneClickTradingFeature || 'One-Click Trading', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: t.platforms?.mobileAppsFeature || 'Mobile Apps', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: t.platforms?.webPlatformFeature || 'Web Platform', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: t.platforms?.copyTradingFeature || 'Copy Trading', mt4: true, mt5: true, ctrader: true, edge: false },
                  { feature: t.platforms?.levelIIPricingFeature || 'Level II Pricing', mt4: false, mt5: false, ctrader: true, edge: false }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.mt4 ? <span className="text-green-600 text-xl">✓</span> : <span className="text-gray-400">–</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.mt5 ? <span className="text-green-600 text-xl">✓</span> : <span className="text-gray-400">–</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.ctrader ? <span className="text-green-600 text-xl">✓</span> : <span className="text-gray-400">–</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.edge ? <span className="text-green-600 text-xl">✓</span> : <span className="text-gray-400">–</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platforms;