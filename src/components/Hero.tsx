'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
    const texts = ["Maheen Laeeq", "a Full Stack Developer", "a Problem Solver"];
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
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
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts]);

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

                        <p className="animate-fade-in-up" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '32px' }}>
                            Crafting elegant digital experiences with modern technologies. I build scalable web applications that combine beautiful design with powerful functionality.
                        </p>

                        <div className="animate-fade-in-up" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                            <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>View My Work</a>
                            <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>Get In Touch</a>
                        </div>

                        <div className="animate-fade-in-up" style={{ display: 'flex', gap: '20px' }}>
                            {[
                                { name: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                            ].map((social) => (
                                <a key={social.name} href="#" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', transition: 'all 0.3s ease' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={social.icon} /></svg>
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

                            {/* Floating decorative elements */}
                            <div className="animate-float" style={{
                                position: 'absolute',
                                top: '20px',
                                right: '-30px',
                                width: '60px',
                                height: '60px',
                                background: 'linear-gradient(135deg, var(--accent-primary), #ec4899)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                zIndex: 3,
                                boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)',
                            }}>
                                💻
                            </div>
                            <div className="animate-float" style={{
                                position: 'absolute',
                                bottom: '40px',
                                left: '-20px',
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #06b6d4, var(--accent-primary))',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                                zIndex: 3,
                                animationDelay: '1s',
                                boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3)',
                            }}>
                                ⚡
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.6 }}>Scroll Down</span>
                <div className="scroll-indicator" style={{ width: '24px', height: '40px', border: '2px solid var(--text-secondary)', borderRadius: '12px', position: 'relative', opacity: 0.6 }}>
                    <div className="scroll-dot" style={{ width: '4px', height: '8px', background: 'var(--accent-primary)', borderRadius: '2px', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }} />
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
                    .hero-image > div > div:last-child,
                    .hero-image > div > div:nth-last-child(2) {
                        display: none;
                    }
                }
                @media (max-width: 600px) {
                    .hero-image > div > div[style*="width: 350px"] {
                        width: 250px !important;
                        height: 250px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
