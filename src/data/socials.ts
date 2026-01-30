import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';

export interface SocialLink {
    name: string;
    icon: IconType;
    href: string;
}

export const socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/maheen2001' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/maheen-laeeq-a224342a6/' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
];

export const contactDetails = [
    { icon: FiMail, label: 'Email', value: 'laeeqmaheen@gmail.com' },
    { icon: FiMapPin, label: 'Location', value: 'Peshawar, Pakistan' },
    { icon: FiBriefcase, label: 'Status', value: 'Open for opportunities' },
];

export const heroText = {
    titles: ["Maheen Laeeq", "a Full Stack Developer", "a Problem Solver"],
    intro: "I'm passionate about turning ideas into reality through code. I love creating web experiences that not only look great but also solve real problems and make people's lives easier."
};
