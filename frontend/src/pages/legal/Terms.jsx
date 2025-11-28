import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using SMH Markets' trading platform and services, you agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and have the legal capacity to enter into binding contracts. 
            You must not be a resident of a restricted jurisdiction where our services are not available.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            You agree to provide accurate, current, and complete information during registration. 
            You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h2>4. Trading Risks</h2>
          <p>
            Trading in financial instruments carries a high level of risk and may not be suitable for all investors. 
            You should only trade with money you can afford to lose. Past performance is not indicative of future results.
          </p>

          <h2>5. Prohibited Activities</h2>
          <p>
            You agree not to engage in any fraudulent, abusive, or illegal activities on our platform. 
            This includes market manipulation, unauthorized access, and money laundering.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on our platform remain the property of SMH Markets. 
            You may not reproduce or distribute our content without permission.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            SMH Markets shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. 
            Our total liability shall not exceed the fees paid by you in the last 12 months.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason at our discretion.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United Kingdom.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at legal@smh-markets.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;