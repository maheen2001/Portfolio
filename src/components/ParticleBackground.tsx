'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 1500 }: { count?: number }) {
    const ref = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.03;
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#8b5cf6"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

function FloatingShapes() {
    const mesh1 = useRef<THREE.Mesh>(null);
    const mesh2 = useRef<THREE.Mesh>(null);
    const mesh3 = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (mesh1.current) {
            mesh1.current.rotation.x = t * 0.3;
            mesh1.current.rotation.y = t * 0.2;
            mesh1.current.position.y = Math.sin(t * 0.5) * 0.5 + 1;
        }
        if (mesh2.current) {
            mesh2.current.rotation.x = t * 0.2;
            mesh2.current.rotation.z = t * 0.3;
            mesh2.current.position.y = Math.sin(t * 0.4 + 1) * 0.5 - 1;
        }
        if (mesh3.current) {
            mesh3.current.rotation.y = t * 0.25;
            mesh3.current.rotation.z = t * 0.15;
            mesh3.current.position.y = Math.sin(t * 0.6 + 2) * 0.5;
        }
    });

    return (
        <>
            <mesh ref={mesh1} position={[4, 1, -3]}>
                <octahedronGeometry args={[0.7, 0]} />
                <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.08} />
            </mesh>
            <mesh ref={mesh2} position={[-4, -1, -4]}>
                <torusGeometry args={[0.5, 0.2, 16, 32]} />
                <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.06} />
            </mesh>
            <mesh ref={mesh3} position={[3, 0, -5]}>
                <icosahedronGeometry args={[0.8, 0]} />
                <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.05} />
            </mesh>
        </>
    );
}

export default function ParticleBackground() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                background: 'transparent',
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <Particles count={1200} />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
