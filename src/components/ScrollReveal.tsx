'use client';

import { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    style?: CSSProperties;
}

export default function ScrollReveal({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    style = {}
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollAnimation();

    const getTransform = () => {
        switch (direction) {
            case 'up': return 'translateY(40px)';
            case 'down': return 'translateY(-40px)';
            case 'left': return 'translateX(40px)';
            case 'right': return 'translateX(-40px)';
            default: return 'translateY(40px)';
        }
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                ...style,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0)' : getTransform(),
                transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
