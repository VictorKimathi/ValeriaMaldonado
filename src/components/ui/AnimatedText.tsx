import React, { Component } from 'react';
import { motion } from 'framer-motion';
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'words' | 'letters' | 'lines';
  as?: React.ElementType;
}
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  type = 'words',
  as: Component = 'div'
}) => {
  const getAnimationVariants = () => {
    switch (type) {
      case 'letters':
        return {
          hidden: {
            opacity: 0
          },
          visible: (i: number) => ({
            opacity: 1,
            transition: {
              delay: delay + i * 0.1,
              duration
            }
          })
        };
      case 'lines':
        return {
          hidden: {
            y: 20,
            opacity: 0
          },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * 0.15,
              duration,
              ease: 'easeOut'
            }
          })
        };
      case 'words':
      default:
        return {
          hidden: {
            y: 20,
            opacity: 0
          },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * 0.1,
              duration,
              ease: 'easeOut'
            }
          })
        };
    }
  };
  const renderContent = () => {
    const variants = getAnimationVariants();
    switch (type) {
      case 'letters':
        return text.split('').map((char, index) => <motion.span key={`${char}-${index}`} custom={index} variants={variants} initial="hidden" animate="visible" className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>);
      case 'lines':
        return text.split('\n').map((line, index) => <motion.div key={`line-${index}`} custom={index} variants={variants} initial="hidden" animate="visible" className="block">
            {line || '\u00A0'}
          </motion.div>);
      case 'words':
      default:
        return text.split(' ').map((word, index) => <motion.span key={`${word}-${index}`} custom={index} variants={variants} initial="hidden" animate="visible" className="inline-block mr-[0.25em]">
            {word}
          </motion.span>);
    }
  };
  return <Component className={className}>{renderContent()}</Component>;
};