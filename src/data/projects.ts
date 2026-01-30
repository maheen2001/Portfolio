import { FiCoffee, FiHome, FiCpu, FiCamera, FiCheckSquare, FiUsers, FiTrendingUp, FiActivity, FiBook, FiMessageCircle, FiCode, FiMap, FiGlobe, FiGift, FiCloud } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface Project {
    title: string;
    desc: string;
    icon: IconType;
    color: string;
    tags: string[];
}

export const projects: Project[] = [
    { title: 'Zaika', desc: 'Modern restaurant and food delivery application.', icon: FiCoffee, color: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', tags: ['Next.js', 'Node.js', 'MongoDB'] },
    { title: 'Property Lounge', desc: 'Comprehensive real estate platform for property listings.', icon: FiHome, color: 'linear-gradient(135deg, #4facfe, #00f2fe)', tags: ['React', 'NestJS', 'PostgreSQL'] },
    { title: 'Domain GPT', desc: 'AI-powered domain name generator and availability checker.', icon: FiCpu, color: 'linear-gradient(135deg, #667eea, #764ba2)', tags: ['Next.js', 'Python', 'OpenAI'] },
    { title: 'Photomonix', desc: 'Professional photography portfolio and gallery.', icon: FiCamera, color: 'linear-gradient(135deg, #f093fb, #f5576c)', tags: ['React', 'Tailwind', 'Firebase'] },
    { title: 'TaskFlow Pro', desc: 'Collaborative project management tool with real-time updates.', icon: FiCheckSquare, color: 'linear-gradient(135deg, #89f7fe, #66a6ff)', tags: ['TypeScript', 'React', 'Redux'] },
    { title: 'DevSocial', desc: 'Social network tailored for developers and designers.', icon: FiUsers, color: 'linear-gradient(135deg, #30cfd0, #330867)', tags: ['Node.js', 'Express', 'MongoDB'] },
    { title: 'CryptoDash', desc: 'Real-time cryptocurrency analytics dashboard.', icon: FiTrendingUp, color: 'linear-gradient(135deg, #fa709a, #fee140)', tags: ['Next.js', 'Tailwind', 'API'] },
    { title: 'HealthPulse', desc: 'Personal health and fitness tracking application.', icon: FiActivity, color: 'linear-gradient(135deg, #ff9a9e, #fecfef)', tags: ['React', 'Node.js', 'PostgreSQL'] },
    { title: 'EduSphere', desc: 'Interactive learning management system for schools.', icon: FiBook, color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', tags: ['Next.js', 'Prisma', 'MySQL'] },
    { title: 'ChatStream', desc: 'Real-time messaging application with instant notifications.', icon: FiMessageCircle, color: 'linear-gradient(135deg, #84fab0, #8fd3f4)', tags: ['NestJS', 'Socket.io', 'React'] },
    { title: 'CodeSnippet', desc: 'Efficient code snippet manager for developers.', icon: FiCode, color: 'linear-gradient(135deg, #cfd9df, #e2ebf0)', tags: ['TypeScript', 'Electron', 'React'] },
    { title: 'TravelLog', desc: 'Travel journal and mapping application.', icon: FiMap, color: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)', tags: ['React', 'Mapbox', 'Node.js'] },
    { title: 'FitSync', desc: 'Cross-platform workout synchronization app.', icon: FiActivity, color: 'linear-gradient(135deg, #43e97b, #38f9d7)', tags: ['React Native', 'Firebase'] },
    { title: 'NewsNexus', desc: 'Aggregated news feed with personalized algorithms.', icon: FiGlobe, color: 'linear-gradient(135deg, #5ee7df, #b490ca)', tags: ['Next.js', 'GraphQL', 'PostgreSQL'] },
    { title: 'ArtisanMarket', desc: 'Online marketplace for handcrafted and unique goods.', icon: FiGift, color: 'linear-gradient(135deg, #d299c2, #fef9d7)', tags: ['NestJS', 'React', 'Stripe'] },
    { title: 'CloudCommander', desc: 'Interface for managing cloud resources and services.', icon: FiCloud, color: 'linear-gradient(135deg, #a8edea, #fed6e3)', tags: ['React', 'AWS SDK', 'Node.js'] },
];
