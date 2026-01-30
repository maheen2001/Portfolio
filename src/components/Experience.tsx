'use client';

const Experience = () => {
    const experiences = [
        { role: 'Senior Full Stack Developer', company: 'Tech Solutions Inc.', duration: '2023 - Present', desc: 'Leading development of enterprise web applications.', achievements: ['Increased performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD'] },
        { role: 'Full Stack Developer', company: 'Digital Agency XYZ', duration: '2021 - 2023', desc: 'Developed client projects including e-commerce and SaaS apps.', achievements: ['Delivered 20+ projects', 'Reduced deployment time by 60%', 'Built component library'] },
        { role: 'Frontend Developer', company: 'StartupHub', duration: '2020 - 2021', desc: 'Built responsive UIs for startup products.', achievements: ['Improved engagement by 35%', 'Migrated to React', 'Implemented a11y standards'] },
    ];

    return (
        <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="bg-gradient-blur cyan" style={{ top: '-100px', left: '-200px', position: 'absolute' }} />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="gradient-text" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Career Path</span>
                    <h2 className="section-title" style={{ marginTop: '8px' }}>Work Experience</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>My professional journey</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
                    {experiences.map((exp, i) => (
                        <div key={i} style={{ display: 'flex', gap: '32px', marginBottom: i !== experiences.length - 1 ? '48px' : 0, position: 'relative' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '3px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                            </div>
                            <div className="card" style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px' }}>{exp.role}</h3>
                                        <p className="gradient-text" style={{ fontWeight: 500 }}>{exp.company}</p>
                                    </div>
                                    <span style={{ padding: '6px 16px', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '50px', fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>{exp.duration}</span>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{exp.desc}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {exp.achievements.map((a, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                            {a}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
