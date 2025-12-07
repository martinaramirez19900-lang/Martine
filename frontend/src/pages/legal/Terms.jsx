import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { legalTranslations } from '../../i18n/legalTranslations';

const Terms = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language] || legalTranslations.en;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.terms.title}</h1>
          <p className="text-xl text-gray-600">{t.terms.lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>{t.terms.section1Title}</h2>
          <p>{t.terms.section1Content}</p>

          <h2>{t.terms.section2Title}</h2>
          <p>{t.terms.section2Content}</p>

          <h2>{t.terms.section3Title}</h2>
          <p>{t.terms.section3Content}</p>

          <h2>{t.terms.section4Title}</h2>
          <p>{t.terms.section4Content}</p>

          <h2>{t.terms.section5Title}</h2>
          <p>{t.terms.section5Content}</p>

          <h2>{t.terms.section6Title}</h2>
          <p>{t.terms.section6Content}</p>

          <h2>{t.terms.section7Title}</h2>
          <p>{t.terms.section7Content}</p>

          <h2>{t.terms.section8Title}</h2>
          <p>{t.terms.section8Content}</p>

          <h2>{t.terms.section9Title}</h2>
          <p>{t.terms.section9Content}</p>

          <h2>{t.terms.section10Title}</h2>
          <p>{t.terms.section10Content}</p>
        </div>
      </section>
    </div>
  );
};

export default Terms;