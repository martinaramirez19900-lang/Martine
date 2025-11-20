import React from 'react';
import { Download, Monitor, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { platforms } from '../data/mockData';

const Platforms = () => {
  const { t } = useLanguage();

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
            {platforms.map((platform) => (
              <Card key={platform.id} className="p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                    <p className="text-gray-600">{platform.description}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1649003515353-c58a239cf662?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0c3xlbnwwfHx8fDE3NjI5MzkzNDF8MA&ixlib=rb-4.1.0&q=85"
                    alt={platform.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Tabs defaultValue="desktop" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="desktop"><Monitor className="w-4 h-4 mr-2" />Desktop</TabsTrigger>
                    <TabsTrigger value="web"><Globe className="w-4 h-4 mr-2" />Web</TabsTrigger>
                    <TabsTrigger value="mobile"><Smartphone className="w-4 h-4 mr-2" />Mobile</TabsTrigger>
                  </TabsList>
                  <TabsContent value="desktop" className="mt-4">
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download for Windows
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download for Mac
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="web" className="mt-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = '/open-account'}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Launch Web Platform
                    </Button>
                  </TabsContent>
                  <TabsContent value="mobile" className="mt-4">
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download for iOS
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => alert('Download will start after account registration. Please click Open Account.')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download for Android
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">MT4</th>
                  <th className="px-6 py-4 text-center">MT5</th>
                  <th className="px-6 py-4 text-center">cTrader</th>
                  <th className="px-6 py-4 text-center">SMH Edge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Expert Advisors', mt4: true, mt5: true, ctrader: true, edge: false },
                  { feature: 'Advanced Charting', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: 'One-Click Trading', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: 'Mobile Apps', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: 'Web Platform', mt4: true, mt5: true, ctrader: true, edge: true },
                  { feature: 'Copy Trading', mt4: true, mt5: true, ctrader: true, edge: false },
                  { feature: 'Level II Pricing', mt4: false, mt5: false, ctrader: true, edge: false }
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