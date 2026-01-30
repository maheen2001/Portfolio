'use client';

const Experience = () => {
    const experiences = [
        { role: 'Full Stack Developer', company: 'Nexus Sunc Limited', desc: 'Leading the development of scalable web applications and enhancing user experiences.', achievements: ['Spearheaded main product development', 'Optimized application performance', 'Implemented modern UI/UX designs'] },
        { role: 'Full Stack Developer', company: 'Encoder Bytes', desc: 'Contributed to full-cycle development of various client projects.', achievements: ['Developed robust API integrations', 'Collaborated with cross-functional teams', 'Ensured code quality and best practices'] },
        { role: 'Full Stack Developer', company: 'COOGNORISE INFO TECH', desc: 'Built and maintained responsive web solutions for diverse business needs.', achievements: ['Delivered projects ahead of schedule', 'Enhanced database efficiency', 'Resolved critical technical issues'] },
        { role: 'Full Stack Developer', company: 'INTERNEE', desc: 'Gained hands-on experience in full stack technologies and agile methodologies.', achievements: ['Assisted in frontend and backend tasks', 'Learned industry-standard workflows', 'Participated in code reviews'] },
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

                <div className="experience-timeline" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    <div className="timeline-line" style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
                    {experiences.map((exp, i) => (
                        <div key={i} className="experience-item" style={{ display: 'flex', gap: '32px', marginBottom: i !== experiences.length - 1 ? '48px' : 0, position: 'relative' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '3px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                            </div>
                            <div className="card" style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px' }}>{exp.role}</h3>
                                        <p className="gradient-text" style={{ fontWeight: 500 }}>{exp.company}</p>
                                    </div>
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
            <style jsx>{`
                @media (max-width: 600px) {
                    .experience-item {
                        gap: 16px !important;
                    }
                    .timeline-line {
                        left: 14px !important;
                    }
                    .experience-item > div:first-child {
                        width: 30px !important;
                        height: 30px !important;
                    }
                    .experience-item > div:first-child > div {
                        width: 8px !important;
                        height: 8px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
