import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { extendedTranslations } from '../i18n/extendedTranslations';
import { pageTranslations } from '../i18n/pageTranslations';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const OpenAccount = () => {
  const { language, t } = useLanguage();
  const ext = extendedTranslations[language] || extendedTranslations.en;
  const pt = pageTranslations[language] || pageTranslations.en;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage(result.message);
        setFormData({ fullName: '', email: '', phone: '', country: '' });
      } else {
        setSubmitMessage(result.message || 'Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error submitting form. Please contact us directly at support@smh-markets.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{pt.openAccount?.title || 'Open Your Trading Account'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {pt.openAccount?.subtitle || 'Start trading in 3 simple steps'}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: CheckCircle2,
                  step: '1',
                  title: pt.openAccount?.step1Title || 'Complete Registration',
                  description: pt.openAccount?.step1Desc || 'Fill out a simple online form with your personal details'
                },
                {
                  icon: Shield,
                  step: '2',
                  title: pt.openAccount?.step2Title || 'Verify Your Identity',
                  description: pt.openAccount?.step2Desc || 'Upload required documents for account verification'
                },
                {
                  icon: DollarSign,
                  step: '3',
                  title: pt.openAccount?.step3Title || 'Fund & Start Trading',
                  description: pt.openAccount?.step3Desc || 'Make your first deposit and begin trading'
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-8 text-center relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">{item.step}</span>
                  </div>
                  <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>

            {/* Registration Form */}
            <Card className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{pt.openAccount?.formTitle || 'Create Your Account'}</h2>
                <p className="text-gray-600">{pt.openAccount?.formSubtitle || 'Takes less than 2 minutes'}</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">{pt.openAccount?.fullName || 'Full Name'}</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{pt.openAccount?.email || 'Email Address'}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">{pt.openAccount?.phone || 'Phone Number'}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">{pt.openAccount?.country || 'Country of Residence'}</Label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">{pt.openAccount?.selectCountry || 'Select Country'}</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="PL">Poland</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="TR">Turkey</option>
                      <option value="SK">Slovakia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="IT">Italy</option>
                      <option value="NL">Netherlands</option>
                      <option value="BE">Belgium</option>
                      <option value="AT">Austria</option>
                      <option value="CH">Switzerland</option>
                      <option value="SE">Sweden</option>
                      <option value="NO">Norway</option>
                      <option value="DK">Denmark</option>
                      <option value="FI">Finland</option>
                      <option value="PT">Portugal</option>
                      <option value="GR">Greece</option>
                      <option value="IE">Ireland</option>
                      <option value="HU">Hungary</option>
                      <option value="RO">Romania</option>
                      <option value="BG">Bulgaria</option>
                      <option value="HR">Croatia</option>
                      <option value="SI">Slovenia</option>
                      <option value="LT">Lithuania</option>
                      <option value="LV">Latvia</option>
                      <option value="EE">Estonia</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="ZA">South Africa</option>
                      <option value="SG">Singapore</option>
                      <option value="HK">Hong Kong</option>
                      <option value="JP">Japan</option>
                      <option value="KR">South Korea</option>
                      <option value="IN">India</option>
                      <option value="CN">China</option>
                      <option value="TH">Thailand</option>
                      <option value="MY">Malaysia</option>
                      <option value="ID">Indonesia</option>
                      <option value="PH">Philippines</option>
                      <option value="VN">Vietnam</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="IL">Israel</option>
                      <option value="EG">Egypt</option>
                      <option value="NG">Nigeria</option>
                      <option value="KE">Kenya</option>
                      <option value="BR">Brazil</option>
                      <option value="MX">Mexico</option>
                      <option value="AR">Argentina</option>
                      <option value="CL">Chile</option>
                      <option value="CO">Colombia</option>
                      <option value="PE">Peru</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="terms" className="mt-1 mr-3" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    {pt.openAccount?.terms || 'I agree to the Terms of Service and Privacy Policy. I confirm that I am 18 years or older.'}
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (pt.openAccount?.submitting || 'Submitting...') : (pt.openAccount?.createAccount || 'Create Account')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories with Images */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.joinTraders?.title || 'Join Successful Traders'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600" alt="Team Success" className="w-full h-64 object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600" alt="Professional Trader" className="w-full h-64 object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" alt="Trading Floor" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.joinTraders?.whyTradeTitle || 'Why Trade with SMH Markets?'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: t.joinTraders?.regulatedBroker || 'Regulated Broker', desc: t.joinTraders?.regulatedBrokerDesc || 'Licensed and regulated by top-tier authorities' },
              { icon: Clock, title: t.joinTraders?.fastOpening || 'Fast Account Opening', desc: t.joinTraders?.fastOpeningDesc || 'Get trading in less than 24 hours' },
              { icon: DollarSign, title: t.joinTraders?.lowDeposit || 'Low Minimum Deposit', desc: t.joinTraders?.lowDepositDesc || 'Start trading with as little as $100' }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenAccount;