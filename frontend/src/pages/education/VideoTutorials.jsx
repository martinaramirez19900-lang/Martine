import React from 'react';
import { Video, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

const VideoTutorials = () => {
  const { t } = useLanguage();

  const videos = [
    {
      id: 1,
      title: 'Introduction to Forex Trading',
      duration: '15:30',
      category: t.educationPages?.beginner || 'Beginner',
      views: '10K'
    },
    {
      id: 2,
      title: 'Technical Analysis Basics',
      duration: '20:45',
      category: t.educationPages?.beginner || 'Beginner',
      views: '8K'
    },
    {
      id: 3,
      title: 'Risk Management Strategies',
      duration: '18:20',
      category: t.educationPages?.intermediate || 'Intermediate',
      views: '12K'
    },
    {
      id: 4,
      title: 'Advanced Chart Patterns',
      duration: '25:10',
      category: t.educationPages?.advanced || 'Advanced',
      views: '6K'
    },
    {
      id: 5,
      title: 'Trading Psychology',
      duration: '22:35',
      category: t.educationPages?.intermediate || 'Intermediate',
      views: '9K'
    },
    {
      id: 6,
      title: 'Algorithmic Trading Intro',
      duration: '30:00',
      category: t.educationPages?.advanced || 'Advanced',
      views: '5K'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{t.educationPages?.videosTitle || 'Trading Videos'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.educationPages?.videosSubtitle || 'Learn trading at your own pace with our comprehensive video library'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <Play className="w-16 h-16 text-purple-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{video.category}</Badge>
                    <span className="text-sm text-gray-600">{video.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.views} views</p>
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