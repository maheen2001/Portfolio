'use client';

import { skillCategories } from '@/data/skills';

const Skills = () => {

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="bg-gradient-blur pink" style={{ bottom: '-200px', left: '-200px', position: 'absolute' }} />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="gradient-text" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>My Skills</span>
                    <h2 className="section-title" style={{ marginTop: '8px' }}>Technologies I Work With</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>A comprehensive toolkit of modern technologies</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="card gradient-border" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>
                                    {cat.icon && <cat.icon size={32} />}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{cat.title}</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {cat.skills.map((skill, j) => (<span key={j} className="skill-badge">{skill}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
