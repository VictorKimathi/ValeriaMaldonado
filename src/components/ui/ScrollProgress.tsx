import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass } from 'lucide-react';
export const ScrollProgress = () => {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [showScrollHint, setShowScrollHint] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-teal-500 to-orange-500 origin-left z-50" style={{
      scaleX
    }} />
      {showScrollHint && <motion.div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-40" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 2,
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse'
    }}>
          <Compass className="text-amber-600 mb-2" size={28} />
          <span className="text-sm font-medium text-stone-700">
            Scroll to explore
          </span>
        </motion.div>}
    </>;
};