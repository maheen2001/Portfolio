'use client';

import { useState } from 'react';
import { FiMail, FiMapPin, FiBriefcase, FiSend } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: FiMail, label: 'Email', value: 'laeeqmaheen@gmail.com' },
        { icon: FiMapPin, label: 'Location', value: 'Peshawar, Pakistan' },
        { icon: FiBriefcase, label: 'Status', value: 'Open for opportunities' },
    ];

    return (
        <section id="contact" className="section" style={{ position: 'relative' }}>
            <div className="bg-gradient-blur purple" style={{ bottom: '-200px', right: '-200px', position: 'absolute' }} />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="gradient-text" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Get In Touch</span>
                    <h2 className="section-title" style={{ marginTop: '8px' }}>Let&apos;s Work Together</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>Have a project in mind? Let&apos;s discuss!</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px' }}>Contact Info</h3>
                        {contactInfo.map((item, i) => (
                            <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.label}</p>
                                    <p style={{ fontWeight: 500 }}>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="card" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                            <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', resize: 'vertical' }} />
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <FiSend size={18} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
