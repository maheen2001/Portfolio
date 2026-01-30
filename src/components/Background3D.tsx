'use client';

import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false });
const MouseParticles = dynamic(() => import('./MouseParticles'), { ssr: false });

export default function Background3D() {
    return (
        <>
            <ParticleBackground />
            <MouseParticles />
        </>
    );
}
