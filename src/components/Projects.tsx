'use client';

import { FiShoppingCart, FiClipboard, FiBarChart2, FiCpu, FiHome, FiBook, FiExternalLink, FiGithub } from 'react-icons/fi';
import { IconType } from 'react-icons';

const Projects = () => {
    const projects: { title: string; desc: string; icon: IconType; color: string; tags: string[] }[] = [
        { title: 'E-Commerce Platform', desc: 'Full-featured online shopping platform with authentication and payments.', icon: FiShoppingCart, color: 'linear-gradient(135deg, #8b5cf6, #ec4899)', tags: ['Next.js', 'Node.js', 'MongoDB'] },
        { title: 'Task Management App', desc: 'Collaborative project management tool with real-time updates.', icon: FiClipboard, color: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', tags: ['React', 'Firebase', 'Tailwind'] },
        { title: 'Social Media Dashboard', desc: 'Analytics dashboard for managing social media accounts.', icon: FiBarChart2, color: 'linear-gradient(135deg, #22c55e, #06b6d4)', tags: ['TypeScript', 'Express', 'PostgreSQL'] },
        { title: 'AI Content Generator', desc: 'Smart content generation platform powered by AI.', icon: FiCpu, color: 'linear-gradient(135deg, #f59e0b, #ec4899)', tags: ['Python', 'OpenAI', 'FastAPI'] },
        { title: 'Real Estate Platform', desc: 'Property listing system with advanced search features.', icon: FiHome, color: 'linear-gradient(135deg, #ec4899, #8b5cf6)', tags: ['Next.js', 'Prisma', 'AWS S3'] },
        { title: 'Learning Management System', desc: 'Educational platform with courses and progress tracking.', icon: FiBook, color: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', tags: ['React', 'Node.js', 'MySQL'] },
    ];

    return (
        <section id="projects" className="section" style={{ position: 'relative' }}>
            <div className="bg-gradient-blur purple animate-float" style={{ top: '200px', right: '-200px', position: 'absolute' }} />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="gradient-text" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>My Work</span>
                    <h2 className="section-title" style={{ marginTop: '8px' }}>Featured Projects</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>A selection of my recent work</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                    {projects.map((p, i) => (
                        <div key={i} className="card gradient-border" style={{ overflow: 'hidden', padding: 0 }}>
                            <div style={{ height: '180px', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p.icon size={64} color="white" />
                            </div>
                            <div style={{ padding: '28px' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '12px' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>{p.desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                    {p.tags.map((tag, j) => (<span key={j} style={{ padding: '4px 12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>{tag}</span>))}
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                        <FiExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                        <FiGithub size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
