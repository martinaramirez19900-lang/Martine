// Mock data for SMH Markets

export const tradingInstruments = [
  {
    id: 1,
    symbol: 'EUR/USD',
    name: 'Euro vs US Dollar',
    price: '1.0876',
    change: '+0.23%',
    category: 'forex'
  },
  {
    id: 2,
    symbol: 'GBP/USD',
    name: 'British Pound vs US Dollar',
    price: '1.2634',
    change: '-0.15%',
    category: 'forex'
  },
  {
    id: 3,
    symbol: 'USD/JPY',
    name: 'US Dollar vs Japanese Yen',
    price: '148.52',
    change: '+0.45%',
    category: 'forex'
  },
  {
    id: 4,
    symbol: 'AAPL',
    name: 'Apple Inc',
    price: '189.43',
    change: '+1.23%',
    category: 'stocks'
  },
  {
    id: 5,
    symbol: 'TSLA',
    name: 'Tesla Inc',
    price: '242.78',
    change: '+2.15%',
    category: 'stocks'
  },
  {
    id: 6,
    symbol: 'BTC/USD',
    name: 'Bitcoin',
    price: '67432.50',
    change: '+3.45%',
    category: 'crypto'
  },
  {
    id: 7,
    symbol: 'ETH/USD',
    name: 'Ethereum',
    price: '3456.78',
    change: '+2.89%',
    category: 'crypto'
  },
  {
    id: 8,
    symbol: 'XAU/USD',
    name: 'Gold',
    price: '2634.50',
    change: '+0.78%',
    category: 'metals'
  },
  {
    id: 9,
    symbol: 'XAG/USD',
    name: 'Silver',
    price: '31.25',
    change: '+1.05%',
    category: 'metals'
  },
  {
    id: 10,
    symbol: 'US30',
    name: 'Dow Jones',
    price: '43729.80',
    change: '+0.67%',
    category: 'indices'
  },
  {
    id: 11,
    symbol: 'WTI',
    name: 'Crude Oil',
    price: '68.45',
    change: '-0.45%',
    category: 'energy'
  }
];

export const platforms = [
  {
    id: 1,
    name: 'MetaTrader 4',
    description: 'The world\'s most popular trading platform',
    features: ['Advanced charting', 'Expert Advisors', 'Mobile trading', 'Custom indicators'],
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80'
  },
  {
    id: 2,
    name: 'MetaTrader 5',
    description: 'Next generation multi-asset platform',
    features: ['Multiple timeframes', 'Economic calendar', 'Depth of Market', 'Built-in signals'],
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 3,
    name: 'cTrader',
    description: 'Professional trading platform',
    features: ['Level II pricing', 'cAlgo automation', 'Fast execution', 'Advanced orders'],
    icon: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: 4,
    name: 'SMH Edge',
    description: 'Our proprietary trading platform',
    features: ['Intuitive interface', 'One-click trading', 'Real-time data', 'Risk management'],
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80'
  }
];

export const accountTypes = [
  {
    id: 1,
    name: 'Demo Account',
    minDeposit: '$0',
    leverage: 'Up to 1:500',
    spreads: 'From 0.6 pips',
    features: ['Virtual funds', 'Risk-free practice', 'All platforms', 'Full features'],
    recommended: false
  },
  {
    id: 2,
    name: 'Standard Account',
    minDeposit: '$100',
    leverage: 'Up to 1:200',
    spreads: 'From 1.2 pips',
    features: ['Instant execution', 'No commission', 'Swap-free option', '24/7 support'],
    recommended: false
  },
  {
    id: 3,
    name: 'Pro Account',
    minDeposit: '$500',
    leverage: 'Up to 1:500',
    spreads: 'From 0.6 pips',
    features: ['Low spreads', 'Priority support', 'Advanced tools', 'Dedicated manager'],
    recommended: true
  },
  {
    id: 4,
    name: 'VIP Account',
    minDeposit: '$10,000',
    leverage: 'Up to 1:500',
    spreads: 'From 0.0 pips',
    features: ['Raw spreads', 'VIP support', 'Premium analytics', 'Personal advisor'],
    recommended: false
  }
];

export const features = [
  {
    id: 1,
    title: 'Fast Execution',
    description: 'Lightning-fast order execution with minimal latency',
    icon: 'Zap'
  },
  {
    id: 2,
    title: 'Advanced Tools',
    description: 'Professional trading tools and indicators',
    icon: 'Settings'
  },
  {
    id: 3,
    title: 'Secure Trading',
    description: 'Bank-level security and fund protection',
    icon: 'Shield'
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Round-the-clock customer support',
    icon: 'Headphones'
  },
  {
    id: 5,
    title: 'Mobile Trading',
    description: 'Trade anywhere with our mobile apps',
    icon: 'Smartphone'
  },
  {
    id: 6,
    title: 'Low Spreads',
    description: 'Competitive spreads from 0.0 pips',
    icon: 'DollarSign'
  }
];

export const educationContent = [
  {
    id: 1,
    title: 'Introduction to Forex Trading',
    category: 'Beginner',
    duration: '15 min',
    description: 'Learn the basics of forex trading and currency pairs'
  },
  {
    id: 2,
    title: 'Technical Analysis Fundamentals',
    category: 'Intermediate',
    duration: '30 min',
    description: 'Master chart patterns and technical indicators'
  },
  {
    id: 3,
    title: 'Risk Management Strategies',
    category: 'Advanced',
    duration: '25 min',
    description: 'Advanced techniques for protecting your capital'
  },
  {
    id: 4,
    title: 'Trading Psychology',
    category: 'Intermediate',
    duration: '20 min',
    description: 'Develop the right mindset for successful trading'
  }
];

export const marketNews = [
  {
    id: 1,
    title: 'Federal Reserve Holds Interest Rates Steady',
    date: '2025-01-10',
    category: 'Central Banks',
    excerpt: 'The Fed maintains its current stance amid economic uncertainty...'
  },
  {
    id: 2,
    title: 'Gold Reaches New Highs Amid Global Tensions',
    date: '2025-01-09',
    category: 'Commodities',
    excerpt: 'Safe-haven assets surge as investors seek stability...'
  },
  {
    id: 3,
    title: 'Tech Stocks Rally on Strong Earnings',
    date: '2025-01-08',
    category: 'Stocks',
    excerpt: 'Major technology companies exceed market expectations...'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'John Mitchell',
    role: 'Professional Trader',
    country: 'United Kingdom',
    rating: 5,
    text: 'SMH Markets provides excellent execution and competitive spreads. The platform is reliable and customer support is outstanding.'
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Day Trader',
    country: 'Spain',
    rating: 5,
    text: 'I\'ve been trading with SMH Markets for 2 years. The low spreads and fast execution make a real difference to my profitability.'
  },
  {
    id: 3,
    name: 'Andreas Weber',
    role: 'Investment Manager',
    country: 'Germany',
    rating: 5,
    text: 'Professional platform with advanced tools. The educational resources helped me improve my trading strategies significantly.'
  }
];