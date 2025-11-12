import React from 'react';
import { Globe, Zap, Shield, Monitor } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const WebTrader = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">WebTrader Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trade directly from your browser - no downloads required
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
            <Globe className="mr-2 w-5 h-5" />
            Launch WebTrader
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Globe, title: 'Browser-Based', desc: 'Access from any device with internet' },
              { icon: Zap, title: 'Instant Access', desc: 'No downloads or installations needed' },
              { icon: Shield, title: 'Secure Connection', desc: 'SSL encrypted trading sessions' },
              { icon: Monitor, title: 'Cross-Platform', desc: 'Works on Windows, Mac, Linux' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200" alt="WebTrader Interface" className="rounded-2xl shadow-2xl w-full" />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">WebTrader Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trading Tools</h3>
              <ul className="space-y-3">
                {[
                  'Real-time market quotes',
                  'Advanced charting package',
                  'Technical indicators (30+)',
                  'Multiple chart types',
                  'Drawing tools',
                  'One-click trading'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Management</h3>
              <ul className="space-y-3">
                {[
                  'Full account overview',
                  'Trading history',
                  'Open positions monitoring',
                  'Pending orders management',
                  'Real-time P&L',
                  'Account statements'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose WebTrader?</h2>
          <div className="space-y-6">
            {[
              { title: 'Universal Compatibility', desc: 'Works seamlessly on all operating systems and devices with a modern web browser.' },
              { title: 'Always Up-to-Date', desc: 'Automatically updated with the latest features without manual installations.' },
              { title: 'Trade Anywhere', desc: 'Access your account from any computer - at home, work, or while traveling.' },
              { title: 'Same Experience Everywhere', desc: 'Consistent trading experience across all your devices.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebTrader;