'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 2000 }) {
    const ref = useRef<THREE.Points>(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        if (!ref.current) return;
        ref.current.rotation.x = state.clock.elapsedTime * 0.05;
        ref.current.rotation.y = state.clock.elapsedTime * 0.08;

        // Subtle mouse influence
        ref.current.rotation.x += mousePosition.current.y * 0.0001;
        ref.current.rotation.y += mousePosition.current.x * 0.0001;
    });

    return (
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

function FloatingGeometry() {
    const meshRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);
    const icosaRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.3;
            meshRef.current.rotation.y = t * 0.2;
            meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
        }

        if (torusRef.current) {
            torusRef.current.rotation.x = t * 0.4;
            torusRef.current.rotation.z = t * 0.2;
            torusRef.current.position.y = Math.sin(t * 0.6 + 1) * 0.3;
        }

        if (icosaRef.current) {
            icosaRef.current.rotation.y = t * 0.3;
            icosaRef.current.rotation.z = t * 0.1;
            icosaRef.current.position.y = Math.sin(t * 0.4 + 2) * 0.3;
        }
    });

    return (
        <>
            <mesh ref={meshRef} position={[3, 0, -2]}>
                <octahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>

            <mesh ref={torusRef} position={[-3, 1, -3]}>
                <torusGeometry args={[0.4, 0.15, 16, 32]} />
                <meshStandardMaterial
                    color="#ec4899"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>

            <mesh ref={icosaRef} position={[2, -1.5, -4]}>
                <icosahedronGeometry args={[0.6, 0]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </>
    );
}

export default function ParticleBackground() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <ParticleField count={1500} />
                <FloatingGeometry />
            </Canvas>
        </div>
    );
}
