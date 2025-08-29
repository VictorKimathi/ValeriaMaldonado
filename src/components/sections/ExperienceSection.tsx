import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Award, Briefcase, ChevronRight, ChevronLeft, Compass } from 'lucide-react';
interface Experience {
  id: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  image: string;
  achievement?: string;
}
const experiences: Experience[] = [{
  id: 'exp1',
  title: 'The Genesis Expedition',
  role: 'Travel Editor',
  organization: 'Wanderlust Magazine',
  location: 'New York, USA',
  period: '2019 - Present',
  description: 'Leading a team of writers to create immersive travel narratives that transport readers across continents. Developing editorial strategies that blend traditional travel journalism with multimedia storytelling.',
  image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  achievement: 'Increased digital readership by 78% through innovative storytelling formats'
}, {
  id: 'exp2',
  title: 'The Silk Road Chronicles',
  role: 'Senior Travel Writer',
  organization: 'Global Explorer',
  location: 'London, UK',
  period: '2016 - 2019',
  description: 'Journeyed through 14 countries to document the modern revival of ancient trade routes. Created long-form narratives and photo essays that captured the cultural exchanges happening along these historic pathways.',
  image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  achievement: "Published anthology 'New Silk Roads' featuring 20 original stories"
}, {
  id: 'exp3',
  title: 'The Andean Passage',
  role: 'Travel Correspondent',
  organization: 'The Continental Times',
  location: 'Buenos Aires, Argentina',
  period: '2013 - 2016',
  description: 'Embedded with local communities across South America to report on sustainable tourism initiatives and environmental conservation efforts. Specialized in stories that highlighted indigenous perspectives on travel and cultural heritage.',
  image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80'
}, {
  id: 'exp4',
  title: 'The Mediterranean Odyssey',
  role: 'Freelance Writer',
  organization: 'Various Publications',
  location: 'Barcelona, Spain',
  period: '2010 - 2013',
  description: 'Crafted narratives for international travel publications, focusing on culinary traditions and artisanal crafts across Mediterranean coastal communities. Developed a distinctive voice that blended personal experience with cultural insights.',
  image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  achievement: 'Won Travel Writer of the Year award from International Travel Media Association'
}];
export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];
  const nextExperience = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % experiences.length);
  };
  const prevExperience = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + experiences.length) % experiences.length);
  };
  const dotVariants = {
    inactive: {
      scale: 1
    },
    active: {
      scale: 1.5
    }
  };
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };
  return <section id="experience" className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 text-amber-200 opacity-10 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M47.7,-57.2C59.9,-45.8,66.8,-28.5,68.1,-11.1C69.4,6.3,65.2,23.8,55.7,38.8C46.2,53.8,31.4,66.2,13.2,71.8C-5,77.3,-26.6,76,-42.8,66.2C-59,56.4,-69.8,38.1,-73.5,18.5C-77.3,-1.1,-74.1,-22,-63.8,-37.8C-53.6,-53.6,-36.4,-64.3,-18.8,-67.7C-1.2,-71.1,17.8,-67.2,34.1,-63.6C50.3,-60,67,-68.6,47.7,-57.2Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-0 left-0 text-teal-200 opacity-10 w-80 h-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M42.8,-62.2C54.9,-52.7,63.6,-39,69.7,-23.7C75.8,-8.4,79.3,8.5,75.5,24.2C71.8,39.8,60.8,54.1,46.6,62.8C32.3,71.5,14.9,74.5,-1.2,76.1C-17.3,77.6,-32.3,77.7,-44.8,70.4C-57.3,63.2,-67.4,48.7,-74.3,32.1C-81.2,15.5,-85,(-3.1,-81.2,-19.8C-77.4,-36.5,-66,-51.3,-51.6,-60.1C-37.2,-68.9,-19.8,-71.8,-1.9,-69.2C16,-66.6,30.7,-71.7,42.8,-62.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
              The Journey Timeline
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              A professional journey mapped as an epic quest across continents,
              each role a chapter in an evolving travel narrative.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Timeline Navigation */}
            <div className="md:col-span-1 flex md:flex-col justify-center items-center gap-4 order-2 md:order-1">
              <button onClick={prevExperience} className="p-2 rounded-full bg-white shadow-md text-stone-600 hover:text-amber-600 transition-colors" aria-label="Previous experience">
                <ChevronLeft size={20} />
              </button>
              <div className="flex md:flex-col items-center gap-3">
                {experiences.map((exp, index) => <motion.button key={exp.id} className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-amber-500' : 'bg-stone-300'}`} onClick={() => setActiveIndex(index)} variants={dotVariants} animate={activeIndex === index ? 'active' : 'inactive'} transition={{
                duration: 0.3
              }} aria-label={`Go to ${exp.title}`} />)}
              </div>
              <button onClick={nextExperience} className="p-2 rounded-full bg-white shadow-md text-stone-600 hover:text-amber-600 transition-colors" aria-label="Next experience">
                <ChevronRight size={20} />
              </button>
            </div>
            {/* Experience Image */}
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div key={activeExperience.id} variants={imageVariants} initial="hidden" animate="visible" exit="exit" className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img src={activeExperience.image} alt={activeExperience.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
                      <Calendar size={16} className="mr-1 text-amber-600" />
                      {activeExperience.period}
                    </div>
                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-stone-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
                      <MapPin size={16} className="mr-1 text-amber-600" />
                      {activeExperience.location}
                    </div>
                    {/* Compass Decoration */}
                    <motion.div className="absolute -bottom-8 -right-8 text-amber-500/30" animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}>
                      <Compass size={80} />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* Experience Content */}
            <div className="md:col-span-6 order-3">
              <AnimatePresence mode="wait">
                <motion.div key={activeExperience.id} variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="bg-white rounded-lg p-8 shadow-lg relative">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-2">
                    {activeExperience.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-medium text-amber-600">
                      {activeExperience.role}
                    </span>
                    <span className="mx-2 text-stone-400">•</span>
                    <span className="text-stone-600">
                      {activeExperience.organization}
                    </span>
                  </div>
                  <p className="text-stone-700 mb-6">
                    {activeExperience.description}
                  </p>
                  {activeExperience.achievement && <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-4">
                      <div className="flex items-start">
                        <Award size={20} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                        <p className="text-amber-800 font-medium">
                          {activeExperience.achievement}
                        </p>
                      </div>
                    </div>}
                  <div className="flex items-center text-stone-500 text-sm">
                    <Briefcase size={16} className="mr-1" />
                    <span>
                      Journey {activeIndex + 1} of {experiences.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>;
};