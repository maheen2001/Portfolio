import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Icon } from './Icon';
import { IconType } from 'react-icons';

interface OrbitRingProps {
    radius: number;
    speed: number;
    icons: {
        component: IconType;
        color: string;
        name: string;
    }[];
    rotationOffset?: number;
    theme: string;
}

export function OrbitRing({ radius, speed, icons, rotationOffset = 0, theme }: OrbitRingProps) {
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
