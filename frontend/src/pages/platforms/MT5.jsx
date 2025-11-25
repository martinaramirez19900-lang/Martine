import React from 'react';
import { Download, Globe, Smartphone, TrendingUp, BarChart, Activity } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { pageTranslations } from '../../i18n/pageTranslations';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const MT5 = () => {
  const { t, language } = useLanguage();
  const pt = pageTranslations[language] || pageTranslations.en;
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">MetaTrader 5</h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.platformDesc?.mt5 || "Next generation multi-asset trading platform"}
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                >
                  <Download className="mr-2 w-5 h-5" />
                  {pt.platforms?.downloadWindows || 'Download MT5'}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                >
                  <Globe className="mr-2 w-5 h-5" />
                  {pt.platforms?.launchWeb || 'Web Platform'}
                </Button>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" alt="MT5" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="desktop" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop">{pt.platforms?.desktop || 'Desktop'}</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">{pt.platforms?.mobile || 'Mobile'}</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Desktop Platform</h3>
                <p className="text-gray-600 mb-6">Professional trading platform for Windows and Mac</p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                    onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download for Windows
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                  >
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
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                >
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
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                    onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://www.metatrader5.com/en', '_blank')}
                  >
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