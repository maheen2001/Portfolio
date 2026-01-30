import { OrbitRing } from './OrbitRing';
import { techIcons } from '@/data/techIcons';

interface SolarSystemProps {
    theme: string;
}

export function SolarSystem({ theme }: SolarSystemProps) {
    // Distribute icons into 3 rings
    const ring1 = techIcons.slice(0, 4);   // Inner ring
    const ring2 = techIcons.slice(4, 9);   // Middle ring
    const ring3 = techIcons.slice(9, 15);  // Outer ring

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
