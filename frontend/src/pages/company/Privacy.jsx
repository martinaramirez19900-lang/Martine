import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { legalTranslations } from '../../i18n/legalTranslations';

const Privacy = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language] || legalTranslations.en;
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.privacy?.title || 'Privacy Policy'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.privacy?.lastUpdated || 'Last Updated: January 2025'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section1Title || '1. Information We Collect'}</h2>
                <p>{t.privacy?.section1Content || 'We collect personal information that you provide when registering, including name, email, address, and identification documents required for regulatory compliance.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section2Title || '2. How We Use Your Information'}</h2>
                <p>{t.privacy?.section2Content || 'We use your information to provide our services, comply with legal obligations, prevent fraud, and improve our platform.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section3Title || '3. Data Security'}</h2>
                <p>{t.privacy?.section3Content || 'We implement industry-standard security measures to protect your personal information, including encryption and secure data storage.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section4Title || '4. Sharing Your Information'}</h2>
                <p>{t.privacy?.section4Content || 'We do not sell your personal information. We may share data with service providers, regulators, and as required by law.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section5Title || '5. Your Rights'}</h2>
                <p>{t.privacy?.section5Content || 'You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section6Title || '6. Cookies'}</h2>
                <p>{t.privacy?.section6Content || 'We use cookies to improve user experience and analyze platform usage. You can control cookie settings in your browser.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section7Title || '7. Changes to Privacy Policy'}</h2>
                <p>{t.privacy?.section7Content || 'We may update this privacy policy periodically. We will notify you of significant changes.'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy?.section8Title || '8. Contact'}</h2>
                <p>{t.privacy?.section8Content || 'For privacy concerns, contact privacy@smh-markets.com'}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;