'use client';

import { useState, useEffect } from 'react';
import { FiShoppingCart, FiClipboard, FiBarChart2, FiCpu, FiHome, FiBook, FiGithub, FiCoffee, FiCamera, FiUsers, FiTrendingUp, FiActivity, FiMessageCircle, FiCode, FiMap, FiGlobe, FiGift, FiCloud, FiCheckSquare, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const projects: { title: string; desc: string; icon: IconType; color: string; tags: string[] }[] = [
        { title: 'Zaika', desc: 'Modern restaurant and food delivery application.', icon: FiCoffee, color: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', tags: ['Next.js', 'Node.js', 'MongoDB'] },
        { title: 'Property Lounge', desc: 'Comprehensive real estate platform for property listings.', icon: FiHome, color: 'linear-gradient(135deg, #4facfe, #00f2fe)', tags: ['React', 'NestJS', 'PostgreSQL'] },
        { title: 'Domain GPT', desc: 'AI-powered domain name generator and availability checker.', icon: FiCpu, color: 'linear-gradient(135deg, #667eea, #764ba2)', tags: ['Next.js', 'Python', 'OpenAI'] },
        { title: 'Photomonix', desc: 'Professional photography portfolio and gallery.', icon: FiCamera, color: 'linear-gradient(135deg, #f093fb, #f5576c)', tags: ['React', 'Tailwind', 'Firebase'] },
        { title: 'TaskFlow Pro', desc: 'Collaborative project management tool with real-time updates.', icon: FiCheckSquare, color: 'linear-gradient(135deg, #89f7fe, #66a6ff)', tags: ['TypeScript', 'React', 'Redux'] },
        { title: 'DevSocial', desc: 'Social network tailored for developers and designers.', icon: FiUsers, color: 'linear-gradient(135deg, #30cfd0, #330867)', tags: ['Node.js', 'Express', 'MongoDB'] },
        { title: 'CryptoDash', desc: 'Real-time cryptocurrency analytics dashboard.', icon: FiTrendingUp, color: 'linear-gradient(135deg, #fa709a, #fee140)', tags: ['Next.js', 'Tailwind', 'API'] },
        { title: 'HealthPulse', desc: 'Personal health and fitness tracking application.', icon: FiActivity, color: 'linear-gradient(135deg, #ff9a9e, #fecfef)', tags: ['React', 'Node.js', 'PostgreSQL'] },
        { title: 'EduSphere', desc: 'Interactive learning management system for schools.', icon: FiBook, color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', tags: ['Next.js', 'Prisma', 'MySQL'] },
        { title: 'ChatStream', desc: 'Real-time messaging application with instant notifications.', icon: FiMessageCircle, color: 'linear-gradient(135deg, #84fab0, #8fd3f4)', tags: ['NestJS', 'Socket.io', 'React'] },
        { title: 'CodeSnippet', desc: 'Efficient code snippet manager for developers.', icon: FiCode, color: 'linear-gradient(135deg, #cfd9df, #e2ebf0)', tags: ['TypeScript', 'Electron', 'React'] },
        { title: 'TravelLog', desc: 'Travel journal and mapping application.', icon: FiMap, color: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)', tags: ['React', 'Mapbox', 'Node.js'] },
        { title: 'FitSync', desc: 'Cross-platform workout synchronization app.', icon: FiActivity, color: 'linear-gradient(135deg, #43e97b, #38f9d7)', tags: ['React Native', 'Firebase'] },
        { title: 'NewsNexus', desc: 'Aggregated news feed with personalized algorithms.', icon: FiGlobe, color: 'linear-gradient(135deg, #5ee7df, #b490ca)', tags: ['Next.js', 'GraphQL', 'PostgreSQL'] },
        { title: 'ArtisanMarket', desc: 'Online marketplace for handcrafted and unique goods.', icon: FiGift, color: 'linear-gradient(135deg, #d299c2, #fef9d7)', tags: ['NestJS', 'React', 'Stripe'] },
        { title: 'CloudCommander', desc: 'Interface for managing cloud resources and services.', icon: FiCloud, color: 'linear-gradient(135deg, #a8edea, #fed6e3)', tags: ['React', 'AWS SDK', 'Node.js'] },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(3);

    const totalProjects = projects.length;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalProjects);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, totalProjects]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalProjects);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    };

    // Calculate the visible projects based on currentIndex
    const visibleProjects = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleProjects.push(projects[(currentIndex + i) % totalProjects]);
    }

    return (
        <section id="projects" className="section" style={{ position: 'relative' }}>
            <div className="bg-gradient-blur purple animate-float" style={{ top: '200px', right: '-200px', position: 'absolute' }} />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="gradient-text" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>My Work</span>
                    <h2 className="section-title" style={{ marginTop: '8px' }}>Featured Projects</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>A selection of my recent work</p>
                </div>

                <div style={{ position: 'relative', padding: '0 60px' }}>
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'white',
                            backdropFilter: 'blur(5px)'
                        }}
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    {/* Carousel Container */}
                    <div
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <motion.div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${itemsToShow}, 1fr)`,
                                gap: '32px'
                            }}
                            initial={false}
                            animate={{ opacity: 1 }}
                        >
                            <AnimatePresence mode='popLayout'>
                                {visibleProjects.map((p, i) => (
                                    <motion.div
                                        key={`${p.title}-${currentIndex + i}`} // Unique key for animation
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        className="card gradient-border"
                                        style={{ overflow: 'hidden', padding: 0 }}
                                    >
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
                                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                                    <FiGithub size={16} /> Source
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'white',
                            backdropFilter: 'blur(5px)'
                        }}
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
