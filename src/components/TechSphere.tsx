'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Center, OrbitControls, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';
import {
    SiReact, SiNextdotjs, SiNestjs, SiNodedotjs, SiTypescript,
    SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPostgresql,
    SiMongodb, SiDocker, SiGit, SiPrisma, SiPython
} from 'react-icons/si';

const icons = [
    { component: SiReact, color: '#61DAFB', name: 'React' },
    { component: SiNextdotjs, color: '#FFFFFF', name: 'Next.js' },
    { component: SiNestjs, color: '#E0234E', name: 'NestJS' },
    { component: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { component: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { component: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { component: SiHtml5, color: '#E34F26', name: 'HTML5' },
    { component: SiCss3, color: '#1572B6', name: 'CSS3' },
    { component: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
    { component: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
    { component: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { component: SiDocker, color: '#2496ED', name: 'Docker' },
    { component: SiGit, color: '#F05032', name: 'Git' },
    { component: SiPrisma, color: '#2D3748', name: 'Prisma' },
    { component: SiPython, color: '#3776AB', name: 'Python' },
];

function Icon({ position, icon: { component: IconComp, color }, theme }: { position: [number, number, number], icon: any, theme: string }) {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Billboard position={position}>
                <Html transform center>
                    <div
                        className="tech-icon-wrapper"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            backdropFilter: 'blur(5px)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `1px solid ${color}40`,
                            boxShadow: `0 0 15px ${color}20`,
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <IconComp size={24} color={theme === 'light' && color === '#FFFFFF' ? '#000000' : color} />
                    </div>
                </Html>
            </Billboard>
        </Float>
    );
}

function OrbitRing({ radius, speed, icons, rotationOffset = 0, theme }: { radius: number, speed: number, icons: any[], rotationOffset?: number, theme: string }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += speed * 0.01;
        }
    });

    const ringColor = theme === 'dark' ? '#ffffff' : '#4b5563';

    return (
        <group ref={groupRef} rotation={[0, rotationOffset, 0]}>
            {/* Orbit path line */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
                <meshBasicMaterial color={ringColor} transparent opacity={theme === 'dark' ? 0.1 : 0.2} side={THREE.DoubleSide} />
            </mesh>

            {/* Icons on the ring */}
            {icons.map((icon, i) => {
                const angle = (i / icons.length) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                return (
                    <group key={i} position={[x, 0, z]}>
                        {/* Billboard the icon so it faces camera */}
                        <Icon position={[0, 0, 0]} icon={icon} theme={theme} />
                    </group>
                );
            })}
        </group>
    );
}

function SolarSystem({ theme }: { theme: string }) {
    // Distribute icons into 3 rings
    const ring1 = icons.slice(0, 4);   // Inner ring
    const ring2 = icons.slice(4, 9);   // Middle ring
    const ring3 = icons.slice(9, 15);  // Outer ring

    return (
        <group rotation={[0.3, 0, 0]} scale={1.3}> {/* Tilt the whole system slightly and scale up */}
            {/* Center Sun/Core */}
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color="#ec4899" transparent opacity={0.8} />
            </mesh>
            <pointLight position={[0, 0, 0]} intensity={2} color="#ec4899" distance={10} />

            {/* Rings */}
            <OrbitRing radius={1.8} speed={0.8} icons={ring1} rotationOffset={0} theme={theme} />
            <OrbitRing radius={2.8} speed={0.5} icons={ring2} rotationOffset={1} theme={theme} />
            <OrbitRing radius={3.8} speed={0.3} icons={ring3} rotationOffset={2} theme={theme} />
        </group>
    );
}

export default function TechSphere() {
    const { theme } = useTheme();

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
            <Canvas camera={{ position: [0, 8, 12], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.2} />
                <Center>
                    <SolarSystem theme={theme} />
                </Center>
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    );
}
