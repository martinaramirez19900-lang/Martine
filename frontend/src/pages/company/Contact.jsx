import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team - we're here to help
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} placeholder="Your message..." className="mt-2" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone Support', info: '+44 20 1234 5678', desc: '24/7 Available' },
                  { icon: Mail, title: 'Email Support', info: 'support@smhmarkets.com', desc: 'Response within 24 hours' },
                  { icon: MapPin, title: 'Head Office', info: '123 Financial Street, London EC2V 7QT, UK', desc: 'Visit by appointment' },
                  { icon: Clock, title: 'Business Hours', info: 'Monday - Friday: 9:00 AM - 6:00 PM GMT', desc: 'Trading 24/5' }
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