'use client';

import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import { SolarSystem } from './TechSphere/SolarSystem';

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
