import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you provide when registering for an account, including your name, email address, 
            phone number, date of birth, address, and identification documents required for verification purposes.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your personal information to:
          </p>
          <ul>
            <li>Provide and maintain our trading services</li>
            <li>Verify your identity and comply with KYC/AML regulations</li>
            <li>Process transactions and send notifications</li>
            <li>Improve our services and customer support</li>
            <li>Detect and prevent fraud and unauthorized activities</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information, including encryption, 
            secure servers, and access controls. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information to third parties. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in operating our platform</li>
            <li>Regulatory authorities as required by law</li>
            <li>Payment processors to facilitate transactions</li>
          </ul>

          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. 
            You can control cookie settings through your browser preferences.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and comply with legal obligations, 
            typically for a period of 7 years after account closure.
          </p>

          <h2>8. International Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries outside your residence. 
            We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to exercise your rights, please contact us at privacy@smh-markets.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;