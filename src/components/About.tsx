'use client';

const About = () => {
    const stats = [
        { number: '3+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '10+', label: 'Technologies' },
    ];

    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="bg-gradient-blur purple" style={{ top: '0', right: '-300px', position: 'absolute' }} />
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div className="gradient-border animate-pulse-glow" style={{ width: '100%', maxWidth: '400px', aspectRatio: '1', borderRadius: '24px', overflow: 'hidden', margin: '0 auto' }}>
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center', padding: '40px' }}>
                                    <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--gradient-1)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', fontWeight: 700, color: 'white' }}>ML</div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Full Stack Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="gradient-text" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>About Me</span>
                        <h2 className="section-title" style={{ marginTop: '8px' }}>Passionate Developer Creating Digital Excellence</h2>
                        <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                            I&apos;m Maheen Laeeq, a Full Stack Developer based in Pakistan with a passion for building exceptional digital experiences.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.8 }}>
                            With expertise in both frontend and backend technologies, I bring ideas to life through clean code and thoughtful design.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
                            {stats.map((stat, i) => (
                                <div key={i} className="card" style={{ textAlign: 'center', padding: '24px' }}>
                                    <div className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{stat.number}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
