import React from 'react';
import { Download, Monitor, Smartphone, Globe, Check } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const MT5 = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">MetaTrader 5</h1>
              <p className="text-xl text-gray-600 mb-8">
                Next-generation multi-asset trading platform with advanced features and superior performance
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2 w-5 h-5" />
                  Download MT5
                </Button>
                <Button size="lg" variant="outline">
                  <Globe className="mr-2 w-5 h-5" />
                  Web Platform
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800" alt="MT5 Platform" className="rounded-2xl shadow-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" alt="Charts" className="rounded-xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" alt="Trading" className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Advanced charting with 100+ technical indicators',
              'Automated trading with Expert Advisors (EAs)',
              'Multiple timeframes analysis',
              'Built-in economic calendar',
              'One-click trading execution',
              'Depth of Market (DOM)',
              'Multi-asset trading platform',
              'Advanced order types',
              'Real-time market news',
              'Free trading signals',
              'Copy trading capabilities',
              'Mobile trading on iOS and Android'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <Check className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Download Options</h2>
          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop"><Monitor className="w-4 h-4 mr-2" />Desktop</TabsTrigger>
              <TabsTrigger value="web"><Globe className="w-4 h-4 mr-2" />Web</TabsTrigger>
              <TabsTrigger value="mobile"><Smartphone className="w-4 h-4 mr-2" />Mobile</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Desktop Platform</h3>
                <p className="text-gray-600 mb-6">Full-featured trading platform for Windows and Mac</p>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Windows
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Mac
                  </Button>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="web" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Platform</h3>
                <p className="text-gray-600 mb-6">Trade directly from your browser without downloads</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Globe className="w-5 h-5 mr-2" />
                  Launch Web Platform
                </Button>
              </Card>
            </TabsContent>
            <TabsContent value="mobile" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Trade on the go with our mobile applications</p>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <Download className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default MT5;