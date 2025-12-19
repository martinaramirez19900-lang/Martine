import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const Privacy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.privacy?.title || 'Privacy Policy'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.featureCards?.secureTrading?.desc || 'Your privacy and data security are our priorities'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section1Title || 'Data Protection'}</h2>
                <p>{t.privacy?.section1Content || 'We are committed to protecting your personal information and your right to privacy. We collect and process your data in accordance with GDPR and other applicable regulations.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section2Title || 'Information We Collect'}</h2>
                <p>{t.privacy?.section2Content || 'We collect information necessary to provide our services, including personal identification, financial information, and trading data.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section3Title || 'How We Use Your Data'}</h2>
                <p>{t.privacy?.section3Content || 'Your data is used to provide trading services, comply with regulatory requirements, and improve our platform.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section4Title || 'Third Party Disclosure'}</h2>
                <p>{t.privacy?.section4Content || 'We do not sell or share your personal information with third parties except as required by law or necessary to provide our services.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section5Title || 'Cookies'}</h2>
                <p>{t.privacy?.section5Content || 'We use cookies to enhance your experience and analyze our website usage. You can manage your cookie settings in your browser.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section6Title || 'Your Rights'}</h2>
                <p>{t.privacy?.section6Content || 'You have the right to access, correct, or delete your personal information. Contact us at: privacy@smh-markets.com.'}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;