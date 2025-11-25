import React from 'react';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const VideoTutorials = () => {
  const { t } = useLanguage();

  const videos = [
    {
      id: 1,
      title: 'How to Read Candlestick Charts',
      duration: '15:30',
      views: '12.5K',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80'
    },
    {
      id: 2,
      title: 'Understanding Market Trends',
      duration: '22:45',
      views: '18.2K',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
    },
    {
      id: 3,
      title: 'Trading Platform Tutorial',
      duration: '18:15',
      views: '25.1K',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
    },
    {
      id: 4,
      title: 'Risk Management Basics',
      duration: '12:50',
      views: '15.8K',
      thumbnail: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Video Tutorials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn trading through our comprehensive video tutorial library
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{video.views} views</p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = '/open-account'}
                  >
                    Watch Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoTutorials;