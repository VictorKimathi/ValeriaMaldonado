import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ParallaxImage } from '../ui/ParallaxImage';
import { AnimatedText } from '../ui/AnimatedText';
export const AboutSection = () => {
  return <section id="about" className="relative py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.8
          }} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl bg-white p-3">
                <img src="va.JPG" alt="Valeria Maldonado writing in her travel journal" className="w-full h-full object-cover rounded" />
                <div className="absolute top-6 -right-8 rotate-12 w-32 h-32 bg-amber-100 p-3 shadow-md">
                  <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Travel memory" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-8 -left-10 -rotate-6 w-36 h-28 bg-teal-50 p-2 shadow-md">
                  <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" alt="Travel memory" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6 relative">
                The Storyteller's Origin
                <span className="absolute -bottom-3 left-0 w-20 h-1 bg-amber-500"></span>
              </h2>
              <div className="prose prose-lg prose-stone max-w-none">
                <p className="mb-4 text-stone-700">
                  My journey began when I traded my news reporter's notebook for
                  a traveler's journal, seeking stories beyond headlines—those
                  found in hidden alleyways, local kitchens, and conversations
                  with strangers who quickly became friends.
                </p>
                <p className="mb-4 text-stone-700">
                  With a background in journalism and an insatiable curiosity
                  about cultures, I've spent the last decade documenting
                  experiences from the misty mountains of Patagonia to the
                  bustling markets of Marrakech.
                </p>
                <p className="text-stone-700">
                  My mission is to craft narratives that not only transport
                  readers to extraordinary places but also illuminate the human
                  connections that make travel transformative.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src="val.JPG" alt="Valeria Maldonado" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-stone-800">
                    Valeria Maldonado
                  </h3>
                  <p className="text-stone-600 text-sm">
                    Travel Writer & Storyteller
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/3"></div>
    </section>;
};