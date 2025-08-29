import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Globe, Book, Camera } from 'lucide-react';
// Portfolio item type
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'essay' | 'photography' | 'guide';
  region: 'americas' | 'europe' | 'asia' | 'africa' | 'oceania';
  featured?: boolean;
}
// Portfolio data
const portfolioItems: PortfolioItem[] = [{
  id: '1',
  title: 'Whispers of the Andes',
  description: "A journey through the ancient trails and living traditions of Peru's sacred mountains.",
  image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'essay',
  region: 'americas',
  featured: true
}, {
  id: '2',
  title: 'Tokyo After Dark',
  description: "Exploring the neon labyrinths and hidden izakayas of Japan's electric metropolis.",
  image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  category: 'photography',
  region: 'asia'
}, {
  id: '3',
  title: 'Saharan Rhythms',
  description: "A musical odyssey through Morocco's desert landscapes and ancient medinas.",
  image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'essay',
  region: 'africa',
  featured: true
}, {
  id: '4',
  title: 'Adriatic Chronicles',
  description: "Island-hopping through Croatia's sun-drenched archipelago and stone-walled history.",
  image: 'https://images.unsplash.com/photo-1555990633-9b795fa2ca2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  category: 'guide',
  region: 'europe'
}, {
  id: '5',
  title: 'Tasmanian Wilderness',
  description: "Venturing into Australia's untamed island through ancient rainforests and rugged coastlines.",
  image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'photography',
  region: 'oceania'
}, {
  id: '6',
  title: 'Himalayan Heights',
  description: "Trekking through Nepal's mountain kingdoms and meeting the guardians of ancient traditions.",
  image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'essay',
  region: 'asia',
  featured: true
}];
// Filter types
type CategoryFilter = 'all' | 'essay' | 'photography' | 'guide';
type RegionFilter = 'all' | 'americas' | 'europe' | 'asia' | 'africa' | 'oceania';
export const PortfolioSection = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // Filter items based on selected filters
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesRegion = regionFilter === 'all' || item.region === regionFilter;
    return matchesCategory && matchesRegion;
  });
  // Category icon mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'essay':
        return <Book size={16} className="mr-1" />;
      case 'photography':
        return <Camera size={16} className="mr-1" />;
      case 'guide':
        return <Globe size={16} className="mr-1" />;
      default:
        return null;
    }
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
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return <section id="portfolio" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Destinations of Words
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Each article is a journey waiting to be experienced. Explore stories
            that transport you to distant lands.
          </p>
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => setCategoryFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${categoryFilter === 'all' ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                All Types
              </button>
              <button onClick={() => setCategoryFilter('essay')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${categoryFilter === 'essay' ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                <Book size={14} className="mr-1" /> Essays
              </button>
              <button onClick={() => setCategoryFilter('photography')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${categoryFilter === 'photography' ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                <Camera size={14} className="mr-1" /> Photography
              </button>
              <button onClick={() => setCategoryFilter('guide')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${categoryFilter === 'guide' ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                <Globe size={14} className="mr-1" /> Guides
              </button>
            </div>
            <div className="h-6 border-l border-stone-300 hidden md:block"></div>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => setRegionFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${regionFilter === 'all' ? 'bg-teal-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                All Regions
              </button>
              <button onClick={() => setRegionFilter('americas')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${regionFilter === 'americas' ? 'bg-teal-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                Americas
              </button>
              <button onClick={() => setRegionFilter('europe')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${regionFilter === 'europe' ? 'bg-teal-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                Europe
              </button>
              <button onClick={() => setRegionFilter('asia')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${regionFilter === 'asia' ? 'bg-teal-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                Asia
              </button>
              <button onClick={() => setRegionFilter('africa')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${regionFilter === 'africa' ? 'bg-teal-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                Africa
              </button>
              <button onClick={() => setRegionFilter('oceania')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${regionFilter === 'oceania' ? 'bg-teal-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}>
                Oceania
              </button>
            </div>
          </div>
        </div>
        {/* Portfolio Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {filteredItems.length > 0 ? filteredItems.map(item => <motion.div key={item.id} className="group relative" variants={itemVariants} onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}>
                <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
                  {/* Featured badge */}
                  {item.featured && <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>}
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img src={item.image} alt={item.title} className="w-full h-full object-cover" initial={{
                scale: 1
              }} animate={{
                scale: hoveredItem === item.id ? 1.05 : 1
              }} transition={{
                duration: 0.4
              }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"></div>
                  </div>
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <span className="flex items-center text-xs font-medium bg-stone-800/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {getCategoryIcon(item.category)}
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <span className="flex items-center text-xs font-medium ml-2 bg-stone-800/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        <MapPin size={14} className="mr-1" />
                        {item.region.charAt(0).toUpperCase() + item.region.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-100 mb-4">
                      {item.description}
                    </p>
                    <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: hoveredItem === item.id ? 1 : 0,
                y: hoveredItem === item.id ? 0 : 10
              }} transition={{
                duration: 0.3
              }}>
                      <a href="#" className="inline-flex items-center text-amber-300 text-sm font-medium group-hover:text-amber-200">
                        Read the story{' '}
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>) : <div className="col-span-full text-center py-12 text-stone-500">
              No stories found with the selected filters. Try adjusting your
              criteria.
            </div>}
        </motion.div>
        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-amber-600 text-amber-600 font-medium rounded-md hover:bg-amber-600 hover:text-white transition-colors">
            View All Stories <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};