import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { legalTranslations } from '../../i18n/legalTranslations';

const Complaints = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language] || legalTranslations.en;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.complaints.title}</h1>
          <p className="text-xl text-gray-600">{t.complaints.lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>{t.complaints.section1Title}</h2>
          <p>{t.complaints.section1Content}</p>

          <h2>{t.complaints.section2Title}</h2>
          <p>{t.complaints.section2Content}</p>

          <h2>{t.complaints.section3Title}</h2>
          <p>{t.complaints.section3Content}</p>

          <h2>{t.complaints.section4Title}</h2>
          <p>{t.complaints.section4Content}</p>

          <h2>{t.complaints.section5Title}</h2>
          <p>{t.complaints.section5Content}</p>

          <h2>{t.complaints.section6Title}</h2>
          <p>{t.complaints.section6Content}</p>

          <h2>{t.complaints.section7Title}</h2>
          <p>{t.complaints.section7Content}</p>

          <h2>{t.complaints.section8Title}</h2>
          <p>{t.complaints.section8Content}</p>
        </div>
      </section>
    </div>
  );
};

export default Complaints;