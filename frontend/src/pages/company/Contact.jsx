import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.contactPage.sendMessage}</h2>
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t.contactPage.fullName}</Label>
                    <Input id="name" placeholder={t.contactPage.fullNamePlaceholder} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.contactPage.email}</Label>
                    <Input id="email" type="email" placeholder={t.contactPage.emailPlaceholder} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="subject">{t.contactPage.subject}</Label>
                    <Input id="subject" placeholder={t.contactPage.subjectPlaceholder} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.contactPage.message}</Label>
                    <Textarea id="message" rows={5} placeholder={t.contactPage.messagePlaceholder} className="mt-2" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6">
                    {t.contactPage.sendButton}
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.contactPage.contactInfo}</h2>
              <div className="space-y-6">
                {[
                  { 
                    icon: MapPin, 
                    title: t.contactPage.smhMarkets, 
                    info: t.contactPage.address, 
                    desc: t.contactPage.visitByAppointment 
                  },
                  { 
                    icon: Phone, 
                    title: t.contactPage.phoneSupport, 
                    info: t.contactPage.phoneNumber, 
                    desc: t.contactPage.available247 
                  },
                  { 
                    icon: Mail, 
                    title: t.contactPage.emailSupport, 
                    info: t.contactPage.supportEmail, 
                    desc: t.contactPage.responseTime 
                  },
                  { 
                    icon: Clock, 
                    title: t.contactPage.businessHours, 
                    info: t.contactPage.businessHoursInfo, 
                    desc: t.contactPage.trading247 
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-900 mb-1">{item.info}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;