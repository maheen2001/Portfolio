'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { heroText, socialLinks } from '@/data/socials';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = heroText.titles[textIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % heroText.titles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
            <div className="bg-gradient-blur purple" style={{ top: '-200px', right: '-200px', position: 'absolute' }} />
            <div className="bg-gradient-blur pink" style={{ bottom: '-100px', left: '-200px', position: 'absolute' }} />

            <div className="container">
                <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    {/* Left side - Text content */}
                    <div style={{ maxWidth: '600px' }}>
                        <div className="animate-fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '50px', marginBottom: '24px' }}>
                            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Available for freelance projects</span>
                        </div>

                        <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', minHeight: '2.3em' }}>
                            Hi, I&apos;m <span className="gradient-text">{displayText}</span>
                            <span className="typing-cursor" style={{ display: 'inline-block', width: '4px', height: '1em', background: 'var(--accent-primary)', marginLeft: '4px', verticalAlign: 'text-bottom' }} />
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '40px',
                            lineHeight: 1.6,
                            maxWidth: '600px'
                        }}>
                            {heroText.intro}
                        </p>

                        <div className="animate-fade-in-up" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                            <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>View My Work</a>
                            <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>Get In Touch</a>
                        </div>

                        <div className="animate-fade-in-up" style={{ display: 'flex', gap: '16px' }}>
                            {socialLinks.map((social) => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', transition: 'all 0.3s ease' }}>
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Profile Picture */}
                    <div className="animate-fade-in-up hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            {/* Glow effect behind image */}
                            <div style={{
                                position: 'absolute',
                                inset: '-20px',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4))',
                                borderRadius: '50%',
                                filter: 'blur(60px)',
                                zIndex: 0,
                            }} />

                            {/* Animated ring */}
                            <div className="animate-pulse-glow" style={{
                                position: 'absolute',
                                inset: '-8px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--accent-primary), #ec4899, #06b6d4)',
                                padding: '4px',
                                zIndex: 1,
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                }} />
                            </div>

                            {/* Profile image */}
                            <div style={{
                                position: 'relative',
                                width: '350px',
                                height: '350px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid var(--bg-primary)',
                                zIndex: 2,
                            }}>
                                <Image
                                    src="/mahnoor_pic.png"
                                    alt="Maheen Laeeq"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.6 }}>Scroll Down</span>
                <div className="scroll-indicator" style={{ width: '28px', height: '44px', border: '2px solid var(--text-secondary)', borderRadius: '14px', position: 'relative', opacity: 0.6, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6px' }}>
                    <div className="scroll-dot" style={{ color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="6" y1="1" x2="6" y2="12" />
                            <path d="M2 9l4 4 4-4" />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .hero-content {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .hero-image {
                        order: -1;
                        margin-bottom: 40px;
                    }
                }
                @media (max-width: 600px) {
                    .hero-image > div > div[style*="width: 350px"] {
                        width: 280px !important;
                        height: 280px !important;
                    }
                    h1 {
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
