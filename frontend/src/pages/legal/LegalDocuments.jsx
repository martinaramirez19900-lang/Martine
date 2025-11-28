import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const LegalDocuments = () => {
  const { t } = useLanguage();

  const documents = [
    {
      title: 'Terms & Conditions',
      description: 'Our complete terms and conditions of service',
      link: '/terms'
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your data',
      link: '/privacy'
    },
    {
      title: 'Risk Disclosure',
      description: 'Important information about trading risks',
      link: '/risk'
    },
    {
      title: 'Companies House Certificate',
      description: 'Official UK company registration document',
      link: '/documents/companies_house_document.pdf',
      external: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Legal Documents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all our legal and regulatory documents
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                {doc.external ? (
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                ) : (
                  <a
                    href={doc.link}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    View Document →
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalDocuments;