'use client';

import dynamic from 'next/dynamic';

const TechSphere = dynamic(() => import('./TechSphere'), { ssr: false });

const About = () => {
    const stats = [
        { number: '4+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '10+', label: 'Technologies' },
    ];

    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="bg-gradient-blur purple" style={{ top: '0', right: '-300px', position: 'absolute' }} />
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TechSphere />
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
