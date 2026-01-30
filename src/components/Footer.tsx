'use client';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';

const socialLinks: { name: string; icon: IconType; href: string }[] = [
    { name: 'GitHub', icon: FaGithub, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
];

const Footer = () => {
    return (
        <footer style={{ padding: '48px 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
                    <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, textDecoration: 'none' }}>
                        <span className="gradient-text">Maheen</span><span style={{ color: 'var(--text-primary)' }}>.dev</span>
                    </a>

                    <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                            <a key={link} href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.href} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.3s' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)'; e.currentTarget.style.color = 'var(--accent-secondary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Maheen Laeeq. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
