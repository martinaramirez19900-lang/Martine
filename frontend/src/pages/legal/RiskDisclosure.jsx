import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { legalTranslations } from '../../i18n/legalTranslations';

const RiskDisclosure = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language] || legalTranslations.en;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.risk.title}</h1>
          <p className="text-xl text-gray-600">{t.risk.lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>{t.risk.section1Title}</h2>
          <p>{t.risk.section1Content}</p>

          <h2>{t.risk.section2Title}</h2>
          <p>{t.risk.section2Content}</p>

          <h2>{t.risk.section3Title}</h2>
          <p>{t.risk.section3Content}</p>

          <h2>{t.risk.section4Title}</h2>
          <p>{t.risk.section4Content}</p>

          <h2>{t.risk.section5Title}</h2>
          <p>{t.risk.section5Content}</p>

          <h2>{t.risk.section6Title}</h2>
          <p>{t.risk.section6Content}</p>

          <h2>{t.risk.section7Title}</h2>
          <p>{t.risk.section7Content}</p>

          <h2>{t.risk.section8Title}</h2>
          <p>{t.risk.section8Content}</p>
        </div>
      </section>
    </div>
  );
};

export default RiskDisclosure;