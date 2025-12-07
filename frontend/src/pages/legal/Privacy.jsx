import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { legalTranslations } from '../../i18n/legalTranslations';

const Privacy = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language] || legalTranslations.en;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.privacy.title}</h1>
          <p className="text-xl text-gray-600">{t.privacy.lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>{t.privacy.section1Title}</h2>
          <p>{t.privacy.section1Content}</p>

          <h2>{t.privacy.section2Title}</h2>
          <p>{t.privacy.section2Content}</p>

          <h2>{t.privacy.section3Title}</h2>
          <p>{t.privacy.section3Content}</p>

          <h2>{t.privacy.section4Title}</h2>
          <p>{t.privacy.section4Content}</p>

          <h2>{t.privacy.section5Title}</h2>
          <p>{t.privacy.section5Content}</p>

          <h2>{t.privacy.section6Title}</h2>
          <p>{t.privacy.section6Content}</p>

          <h2>{t.privacy.section7Title}</h2>
          <p>{t.privacy.section7Content}</p>

          <h2>{t.privacy.section8Title}</h2>
          <p>{t.privacy.section8Content}</p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;