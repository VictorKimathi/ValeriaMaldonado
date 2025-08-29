import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}
interface FloatingParticlesProps {
  count?: number;
  className?: string;
}
export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 20,
  className = ''
}) => {
  const generateParticles = (): Particle[] => {
    return Array.from({
      length: count
    }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10
    }));
  };
  const particles = useRef<Particle[]>(generateParticles());
  return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.current.map(particle => <motion.div key={particle.id} className="absolute rounded-full bg-white" style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity
    }} animate={{
      y: [0, -30, 0],
      x: [0, Math.random() * 20 - 10, 0],
      opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
    }} transition={{
      duration: particle.duration,
      delay: particle.delay,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />)}
    </div>;
};