import { FiMonitor, FiServer, FiDatabase, FiSettings } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface SkillCategory {
    title: string;
    icon: IconType;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    { title: 'Frontend', icon: FiMonitor, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { title: 'Backend', icon: FiServer, skills: ['Node.js', 'Express.js', 'Python', 'Java', 'Spring Boot', 'REST APIs'] },
    { title: 'Database', icon: FiDatabase, skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Prisma'] },
    { title: 'DevOps & Tools', icon: FiSettings, skills: ['Git', 'Docker', 'VPS', 'Vercel', 'CI/CD', 'Linux'] },
];
