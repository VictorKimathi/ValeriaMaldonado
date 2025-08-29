import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Pen, Camera, Globe, Languages, Compass, Map, Video, Sparkles, Palette, BookOpen, Laptop, Binoculars, Users, HeartHandshake } from 'lucide-react';
interface Skill {
  id: string;
  name: string;
  level: number; // 1-10
  category: 'storytelling' | 'technical' | 'languages' | 'interpersonal';
  icon: React.ReactNode;
  description: string;
}
const skills: Skill[] = [{
  id: 'skill1',
  name: 'Narrative Writing',
  level: 10,
  category: 'storytelling',
  icon: <Pen />,
  description: 'Crafting immersive stories that transport readers to distant locations through vivid descriptions and emotional resonance.'
}, {
  id: 'skill2',
  name: 'Travel Photography',
  level: 8,
  category: 'technical',
  icon: <Camera />,
  description: 'Capturing the essence of destinations through composition, lighting, and moment-driven imagery.'
}, {
  id: 'skill3',
  name: 'Cultural Research',
  level: 9,
  category: 'storytelling',
  icon: <BookOpen />,
  description: 'Investigating local customs, histories, and traditions to provide authentic context for travel narratives.'
}, {
  id: 'skill4',
  name: 'Spanish',
  level: 9,
  category: 'languages',
  icon: <Languages />,
  description: 'Native-level fluency in reading, writing, and speaking, with particular expertise in regional dialects.'
}, {
  id: 'skill5',
  name: 'French',
  level: 7,
  category: 'languages',
  icon: <Languages />,
  description: 'Advanced conversational ability with strong reading comprehension and writing skills.'
}, {
  id: 'skill6',
  name: 'Destination Research',
  level: 9,
  category: 'technical',
  icon: <Map />,
  description: 'Identifying unique angles and hidden gems through meticulous pre-trip planning and local connections.'
}, {
  id: 'skill7',
  name: 'Video Storytelling',
  level: 7,
  category: 'technical',
  icon: <Video />,
  description: 'Creating compelling short-form video content that complements written narratives with visual storytelling.'
}, {
  id: 'skill8',
  name: 'Cross-cultural Communication',
  level: 9,
  category: 'interpersonal',
  icon: <HeartHandshake />,
  description: 'Building rapport across cultural boundaries through respect, active listening, and cultural sensitivity.'
}, {
  id: 'skill9',
  name: 'Italian',
  level: 6,
  category: 'languages',
  icon: <Languages />,
  description: 'Intermediate conversational ability with strong focus on culinary and artistic terminology.'
}, {
  id: 'skill10',
  name: 'Editorial Direction',
  level: 8,
  category: 'storytelling',
  icon: <Sparkles />,
  description: 'Shaping editorial vision and guiding writers to produce cohesive, thematic travel content.'
}, {
  id: 'skill11',
  name: 'Sustainable Tourism Expertise',
  level: 8,
  category: 'technical',
  icon: <Globe />,
  description: 'Analyzing and advocating for responsible travel practices that benefit local communities and environments.'
}, {
  id: 'skill12',
  name: 'Interviewing',
  level: 9,
  category: 'interpersonal',
  icon: <Users />,
  description: 'Eliciting meaningful stories from locals and experts through thoughtful questioning and active listening.'
}];
// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);
// Category metadata
const categories = [{
  id: 'storytelling',
  name: 'Storytelling Craft',
  icon: <Pen />,
  color: 'amber-500',
  description: 'The art of weaving narratives that captivate and transport readers'
}, {
  id: 'technical',
  name: "Explorer's Techniques",
  icon: <Compass />,
  color: 'teal-500',
  description: 'Practical skills that enhance the journey and its documentation'
}, {
  id: 'languages',
  name: 'Language Arsenal',
  icon: <Globe />,
  color: 'rose-500',
  description: 'Communication tools that open doors to authentic cultural experiences'
}, {
  id: 'interpersonal',
  name: 'Human Connection',
  icon: <HeartHandshake />,
  color: 'indigo-500',
  description: 'Abilities that foster meaningful relationships across cultures'
}];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('storytelling');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  // Get the active category color
  const getActiveColor = () => {
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.color : 'amber-500';
  };
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  return <section id="skills" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            The Traveler's Toolkit
          </h2>
          <p className="text-lg text-stone-600">
            Essential skills and expertise that transform journeys into stories
            worth sharing.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center px-5 py-3 rounded-lg transition-all ${activeCategory === category.id ? `bg-${category.color} text-white shadow-lg` : 'bg-white text-stone-700 hover:bg-stone-100 shadow'}`}>
              <span className="mr-2">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>)}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-stone-600 italic">
            {categories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }}>
          {groupedSkills[activeCategory]?.map(skill => <motion.div key={skill.id} variants={itemVariants} className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-${getActiveColor()}`} onClick={() => setSelectedSkill(skill)}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-full bg-${getActiveColor()} bg-opacity-10 text-${getActiveColor()}`}>
                  {skill.icon}
                </div>
                <div className="flex items-center">
                  {Array.from({
                length: 5
              }).map((_, i) => <div key={i} className={`w-2 h-6 mx-0.5 rounded-full ${i < Math.ceil(skill.level / 2) ? `bg-${getActiveColor()}` : 'bg-stone-200'}`} style={{
                height: `${(i < Math.ceil(skill.level / 2) ? skill.level % 2 === 0 || i < Math.floor(skill.level / 2) ? 24 : 16 : 24) * 0.25}rem`
              }} />)}
                </div>
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-stone-600 line-clamp-2">
                {skill.description}
              </p>
            </motion.div>)}
        </motion.div>

        {/* Selected Skill Detail */}
        {selectedSkill && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-xl border-l-4 border-amber-500 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full bg-${getActiveColor()} text-white mr-4`}>
                  {selectedSkill.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800">
                  {selectedSkill.name}
                </h3>
              </div>
              <button onClick={() => setSelectedSkill(null)} className="text-stone-400 hover:text-stone-600">
                ✕
              </button>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-stone-600">
                  Proficiency
                </span>
                <span className="text-sm font-medium text-stone-800">
                  {selectedSkill.level}/10
                </span>
              </div>
              <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                <div className={`h-full bg-${getActiveColor()}`} style={{
              width: `${selectedSkill.level * 10}%`
            }} />
              </div>
            </div>
            <p className="text-stone-700">{selectedSkill.description}</p>
          </motion.div>}

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-stone-600">
          {categories.map(category => <div key={category.id} className="flex items-center">
              <div className={`w-3 h-3 rounded-full bg-${category.color} mr-2`}></div>
              <span>{category.name}</span>
            </div>)}
        </div>
      </div>
    </section>;
};