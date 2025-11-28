import React from 'react';
import { MessageSquare, Mail, Phone, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';

const Complaints = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Complaints Procedure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take your concerns seriously and are committed to resolving any issues promptly and fairly
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Submit a Complaint</h2>
            <p className="text-gray-600 mb-6">
              If you have a complaint about our services, please follow these steps:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact Our Support Team</h3>
                  <p className="text-gray-600">
                    First, please try to resolve the issue by contacting our customer support team. 
                    Many issues can be resolved quickly through direct communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Submit a Formal Complaint</h3>
                  <p className="text-gray-600">
                    If your issue is not resolved satisfactorily, you can submit a formal complaint to our complaints department 
                    at complaints@smh-markets.com. Please include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Your account number</li>
                    <li>Detailed description of the issue</li>
                    <li>Any relevant documentation</li>
                    <li>Your desired resolution</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Receive Acknowledgment</h3>
                  <p className="text-gray-600">
                    We will acknowledge receipt of your complaint within 2 business days and provide you with a reference number.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Investigation & Resolution</h3>
                  <p className="text-gray-600">
                    We will investigate your complaint thoroughly and provide a final response within 15 business days. 
                    In complex cases, we may need up to 30 days.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:complaints@smh-markets.com" className="text-green-600 hover:text-green-700">
                complaints@smh-markets.com
              </a>
            </Card>

            <Card className="p-6 text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 787 945 2353</p>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Written Post</h3>
              <p className="text-gray-600 text-sm">
                5 Westbrook Court<br />
                Sheffield, S11 8YZ<br />
                United Kingdom
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-blue-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">External Dispute Resolution</h3>
            <p className="text-gray-600">
              If you are not satisfied with our final response, you may have the right to refer your complaint to the 
              Financial Ombudsman Service or other relevant dispute resolution service in your jurisdiction. 
              We will provide details of these services in our final response if applicable.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Complaints;