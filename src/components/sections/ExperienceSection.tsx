import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Award, Briefcase, ChevronRight, ChevronLeft, Compass } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  image: string;
}

const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Freelance Travel Contributor',
    organization: 'Wanderlight Media',
    location: 'Remote',
    period: '2020 – Present',
    description: [
      'Created destination features highlighting hidden gems, eco-friendly travel, and cultural exploration.',
      'Researched and developed long-form trip planning guides tailored to different audiences.',
      'Implemented SEO strategies that boosted article reach across travel search categories.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 'exp2',
    role: 'Travel & Lifestyle Writer',
    organization: 'Nomad Path Publishing',
    location: 'Remote',
    period: '2018 – 2020',
    description: [
      'Authored feature stories covering U.S. national parks, family travel, and cruise experiences.',
      'Collaborated with editors to refine headlines and align with AP Style.',
      'Delivered clean, compelling drafts under short turnaround deadlines.'
    ],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 'exp3',
    role: 'Staff Writer – Travel Features',
    organization: 'Blue Horizon Collective',
    location: 'Remote',
    period: '2016 – 2018',
    description: [
      'Wrote detailed destination profiles and vacation itineraries for digital readers.',
      'Developed newsletter and social media copy to complement published features.',
      'Maintained accuracy through thorough fact-checking and credible sourcing.'
    ],
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1470&q=80'
  }
];

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  const nextExperience = () => setActiveIndex((prev) => (prev + 1) % experiences.length);
  const prevExperience = () => setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <section id="experience" className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              A proven track record of delivering engaging, research-driven travel content across leading publications.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Timeline Navigation */}
            <div className="md:col-span-1 flex md:flex-col justify-center items-center gap-4 order-2 md:order-1">
              <button onClick={prevExperience} className="p-2 rounded-full bg-white shadow-md text-stone-600 hover:text-amber-600">
                <ChevronLeft size={20} />
              </button>
              <div className="flex md:flex-col items-center gap-3">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.id}
                    className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-amber-500' : 'bg-stone-300'}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <button onClick={nextExperience} className="p-2 rounded-full bg-white shadow-md text-stone-600 hover:text-amber-600">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Experience Image */}
            <div className="md:col-span-5 order-1 md:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExperience.id}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
                >
                  <img src={activeExperience.image} alt={activeExperience.role} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 text-stone-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
                    <Calendar size={16} className="mr-1 text-amber-600" />
                    {activeExperience.period}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 text-stone-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
                    <MapPin size={16} className="mr-1 text-amber-600" />
                    {activeExperience.location}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Experience Content */}
            <div className="md:col-span-6 order-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExperience.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-lg p-8 shadow-lg"
                >
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
                    {activeExperience.role}
                  </h3>
                  <p className="text-stone-600 font-medium mb-4">{activeExperience.organization}</p>
                  <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                    {activeExperience.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex items-center text-stone-500 text-sm">
                    <Briefcase size={16} className="mr-1" />
                    <span>
                      Role {activeIndex + 1} of {experiences.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
