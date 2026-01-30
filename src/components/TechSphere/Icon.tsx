import { Float, Html, Billboard } from '@react-three/drei';
import { IconType } from 'react-icons';

interface IconProps {
    position: [number, number, number];
    icon: {
        component: IconType;
        color: string;
        name: string;
    };
    theme: string;
}

export function Icon({ position, icon: { component: IconComp, color }, theme }: IconProps) {
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
