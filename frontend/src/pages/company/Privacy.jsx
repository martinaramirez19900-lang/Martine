import React from 'react';
import { Shield, Lock, Cookie, FileText } from 'lucide-react';
import { Card } from '../../components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: 'Data Protection', desc: 'GDPR Compliant' },
              { icon: Lock, title: 'Secure Storage', desc: 'Encrypted Data' },
              { icon: Cookie, title: 'Cookie Policy', desc: 'Transparent Usage' },
              { icon: FileText, title: 'Your Rights', desc: 'Full Control' }
            ].map((item, idx) => (
              <Card key={idx} className="p-4 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create an account or register for our services</li>
                <li>Make a deposit or withdrawal</li>
                <li>Contact our customer support</li>
                <li>Subscribe to our newsletters or marketing materials</li>
                <li>Participate in surveys or promotions</li>
              </ul>
            </Card>

            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </Card>

            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and track information about your use of our services. 
                Cookies are small data files stored on your device.
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Necessary Cookies</h4>
                  <p className="text-sm text-gray-700">Required for the website to function properly</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-700">Help us understand how visitors use our website</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-700">Used to deliver relevant advertisements</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                and regular security assessments.
              </p>
            </Card>

            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under GDPR and other privacy regulations, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </Card>

            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@smhmarkets.com</p>
                <p><strong>Address:</strong> 123 Financial Street, London EC2V 7QT, UK</p>
                <p><strong>Phone:</strong> +44 20 1234 5678</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
