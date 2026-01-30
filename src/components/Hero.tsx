'use client';

const Hero = () => {
    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
            <div className="bg-gradient-blur purple" style={{ top: '-200px', right: '-200px', position: 'absolute' }} />
            <div className="bg-gradient-blur pink" style={{ bottom: '-100px', left: '-200px', position: 'absolute' }} />

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <div className="animate-fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '50px', marginBottom: '24px' }}>
                        <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Available for freelance projects</span>
                    </div>

                    <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                        Hi, I&apos;m <span className="gradient-text">Maheen Laeeq</span>
                    </h1>

                    <h2 className="animate-fade-in-up" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Full Stack Developer
                    </h2>

                    <p className="animate-fade-in-up" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '40px' }}>
                        Crafting elegant digital experiences with modern technologies. I build scalable web applications that combine beautiful design with powerful functionality.
                    </p>

                    <div className="animate-fade-in-up" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '60px' }}>
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
            </div>

            {/* Scroll indicator */}
            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.6 }}>Scroll Down</span>
                <div className="scroll-indicator" style={{ width: '24px', height: '40px', border: '2px solid var(--text-secondary)', borderRadius: '12px', position: 'relative', opacity: 0.6 }}>
                    <div className="scroll-dot" style={{ width: '4px', height: '8px', background: 'var(--accent-primary)', borderRadius: '2px', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
