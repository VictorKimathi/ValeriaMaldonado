import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxImage } from '../ui/ParallaxImage';
import { AnimatedText } from '../ui/AnimatedText';
import { FloatingParticles } from '../ui/FloatingParticles';
import { Compass } from 'lucide-react';
export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  // Scroll-based animations
  const {
    scrollYProgress
  } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  return <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <ParallaxImage src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Distant mountains with mist" speed={0.2} className="absolute inset-0 w-full h-full" overlayClassName="bg-gradient-to-b from-amber-900/30 via-transparent to-stone-900/40" zIndex={-3} />
      <ParallaxImage src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80" alt="Misty forest" speed={0.4} className="absolute inset-0 w-full h-full" overlayClassName="bg-gradient-to-t from-stone-900/60 via-transparent to-amber-800/20" zIndex={-2} />
      <FloatingParticles className="z-0" />
      {/* Hero Content */}
      <motion.div className="relative z-10 text-center max-w-5xl px-4 sm:px-6" style={{
      opacity,
      scale
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-4 inline-block">
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-amber-500/20 text-amber-200 rounded-full border border-amber-500/30">
            Travel Storyteller
          </span>
        </motion.div>
        <AnimatedText text="Stories That Cross Borders" className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight" type="words" as="h1" delay={0.5} />
        <AnimatedText text="Capturing the soul of destinations through words and images that transport you to the heart of every journey." className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10" type="lines" as="p" delay={1.2} />
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1.8,
        duration: 0.8
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-md hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
            Explore Portfolio
            <Compass className="inline-block ml-1 group-hover:rotate-45 transition-transform" size={18} />
          </a>
          <a href="#about" className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-all">
            About Valeria
          </a>
        </motion.div>
      </motion.div>
      {/* Decorative compass element */}
      <motion.div className="absolute bottom-10 right-10 text-white/70 hidden md:block" style={{
      rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    }}>
        <Compass size={48} />
      </motion.div>
    </section>;
};