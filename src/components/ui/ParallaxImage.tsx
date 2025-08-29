import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlayClassName?: string;
  zIndex?: number;
}
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.5,
  className = '',
  overlayClassName = '',
  zIndex = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  return <div ref={ref} className={`relative overflow-hidden ${className}`} style={{
    zIndex
  }}>
      <motion.img src={src} alt={alt} style={{
      y
    }} className="w-full h-full object-cover" />
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`}></div>}
    </div>;
};