import React from 'react';
import { Handshake, TrendingUp, Users, Award, DollarSign, Headphones } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const Partnerships = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <Handshake className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Partnership Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our partnership program and grow your business with SMH Markets
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Competitive Commission',
                desc: 'Earn up to 50% revenue share with our competitive commission structure'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                desc: 'Get access to a dedicated partnership manager and priority support'
              },
              {
                icon: TrendingUp,
                title: 'Marketing Tools',
                desc: 'Access professional marketing materials, banners, and landing pages'
              },
              {
                icon: Award,
                title: 'Industry Leader',
                desc: 'Partner with a regulated and trusted broker with 500,000+ active clients'
              },
              {
                icon: Headphones,
                title: 'Real-Time Reporting',
                desc: 'Track your referrals and commissions in real-time through our partner portal'
              },
              {
                icon: Handshake,
                title: 'Flexible Terms',
                desc: 'Customizable partnership agreements tailored to your business needs'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Partnership Types</h2>
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Introducing Broker (IB)</h3>
              <p className="text-gray-600 mb-4">
                Refer clients to SMH Markets and earn commission on every trade they make. Perfect for individuals and businesses 
                with an established network of traders.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Earn ongoing commission from client trading activity</li>
                <li>Access to sub-IB structure</li>
                <li>Dedicated partner dashboard</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">White Label Partnership</h3>
              <p className="text-gray-600 mb-4">
                Launch your own branded trading platform powered by SMH Markets' technology and liquidity. 
                Ideal for established financial businesses looking to offer trading services.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fully customizable branding</li>
                <li>Complete technology infrastructure</li>
                <li>Regulatory support and licensing assistance</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Program</h3>
              <p className="text-gray-600 mb-4">
                Promote SMH Markets through your website, blog, or social media and earn CPA (Cost Per Acquisition) 
                or revenue share on referred clients.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Easy integration with tracking links</li>
                <li>Choice of CPA or revenue share models</li>
                <li>Professional marketing materials provided</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our partnership team to discuss opportunities and start growing your business today
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Partnership Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;