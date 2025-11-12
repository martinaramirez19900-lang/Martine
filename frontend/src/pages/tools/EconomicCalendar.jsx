import React from 'react';
import { Calendar, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { Card } from '../../components/ui/card';

const EconomicCalendar = () => {
  const events = [
    { time: '08:30', currency: 'USD', event: 'Non-Farm Payrolls', impact: 'High', forecast: '185K', previous: '177K' },
    { time: '10:00', currency: 'EUR', event: 'ECB Interest Rate Decision', impact: 'High', forecast: '4.50%', previous: '4.50%' },
    { time: '13:00', currency: 'GBP', event: 'GDP Growth Rate', impact: 'Medium', forecast: '0.2%', previous: '0.1%' },
    { time: '14:30', currency: 'USD', event: 'Unemployment Rate', impact: 'High', forecast: '3.8%', previous: '3.9%' },
    { time: '16:00', currency: 'USD', event: 'FOMC Statement', impact: 'High', forecast: '-', previous: '-' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Economic Calendar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about upcoming economic events that impact financial markets
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Calendar, title: 'Daily Updates', desc: 'Real-time event updates' },
              { icon: TrendingUp, title: 'Market Impact', desc: 'High/Medium/Low ratings' },
              { icon: AlertCircle, title: 'Alerts', desc: 'Get notified before events' },
              { icon: Clock, title: 'Time Zones', desc: 'Automatic timezone conversion' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="overflow-hidden">
            <div className="bg-gray-900 text-white p-4">
              <h2 className="text-2xl font-bold">Today's Economic Events</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Time</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Currency</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Event</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">Impact</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">Forecast</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">Previous</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {events.map((event, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{event.time}</td>
                      <td className="px-6 py-4 text-sm font-semibold">{event.currency}</td>
                      <td className="px-6 py-4 text-sm">{event.event}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          event.impact === 'High' ? 'bg-red-100 text-red-700' :
                          event.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {event.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm">{event.forecast}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">{event.previous}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How to Use the Calendar</h2>
          <div className="space-y-6">
            {[
              { title: 'Check Daily Events', desc: 'Review upcoming economic releases each morning to plan your trading day.' },
              { title: 'Focus on High Impact', desc: 'Pay special attention to high-impact events that can cause significant market movements.' },
              { title: 'Compare Forecasts', desc: 'Watch for differences between forecast and actual numbers - these create trading opportunities.' },
              { title: 'Set Alerts', desc: 'Enable notifications for important events to never miss a market-moving release.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomicCalendar;