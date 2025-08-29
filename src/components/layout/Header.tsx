import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.a href="#hero" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="text-xl md:text-2xl font-bold font-serif tracking-wider">
          Valeria Maldonado
        </motion.a>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(link => <motion.li key={link.name} whileHover={{
            y: -2
          }} className="relative">
                <a href={link.href} className="font-medium hover:text-amber-600 transition-colors">
                  {link.name}
                </a>
              </motion.li>)}
          </ul>
        </nav>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-stone-800 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.3
    }} className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              {navLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="block py-2 font-medium hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </nav>
        </motion.div>}
    </header>;
};