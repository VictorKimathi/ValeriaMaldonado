import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
  rating: number;
  location: string;
}
const testimonials: Testimonial[] = [{
  id: 'test1',
  name: 'James Rivera',
  role: 'Editor-in-Chief',
  organization: 'Wanderlust Magazine',
  quote: "Valeria's writing doesn't just describe destinations—it transports you there. Her ability to weave cultural insights with personal narrative has made her features consistently among our most read pieces. Readers often write in specifically to praise her work.",
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  rating: 5,
  location: 'New York, USA'
}, {
  id: 'test2',
  name: 'Sofia Chen',
  role: 'Travel Editor',
  organization: 'The Global Post',
  quote: 'Working with Valeria on our Southeast Asia series was a revelation. Her meticulous research and genuine connections with locals resulted in stories that went far beyond the typical travel piece. She uncovers the heartbeat of a place like few writers can.',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  rating: 5,
  location: 'London, UK'
}, {
  id: 'test3',
  name: 'Marcus Johnson',
  role: 'Founder',
  organization: 'Authentic Journeys',
  quote: "Valeria's content strategy transformed how we communicate with our adventure travel clients. She has a unique talent for understanding what makes a destination special and communicating that essence in a way that resonates with our target audience.",
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  rating: 4,
  location: 'Cape Town, South Africa'
}, {
  id: 'test4',
  name: 'Leila Patel',
  role: 'Marketing Director',
  organization: 'EcoTrek Adventures',
  quote: 'The storytelling workshop Valeria conducted for our marketing team was transformative. She taught us how to find the narrative thread in our sustainable tourism initiatives and communicate them in ways that inspire rather than preach. Bookings for our eco-tours increased 45% after implementing her approach.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
  rating: 5,
  location: 'Vancouver, Canada'
}];
export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  const currentTestimonial = testimonials[currentIndex];
  // Animation variants
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    })
  };
  return <section id="testimonials" className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-200 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl">
            <Quote className="w-full h-full text-stone-200 opacity-20" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
              Voices from the Trail
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Reflections from editors, clients, and collaborators who have been
              part of the journey.
            </p>
          </div>
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="relative h-[450px] md:h-[400px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div key={currentTestimonial.id} custom={direction} variants={cardVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2">
                      {/* Image Side */}
                      <div className="relative h-64 md:h-full bg-amber-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-teal-500/20"></div>
                        <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover opacity-90" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} className={`${i < currentTestimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-400'} mr-1`} />)}
                          </div>
                          <p className="text-white text-sm">
                            {currentTestimonial.location}
                          </p>
                        </div>
                      </div>
                      {/* Content Side */}
                      <div className="p-8 md:p-10 flex flex-col justify-between">
                        <div>
                          <Quote className="text-amber-400 mb-4" size={36} />
                          <p className="text-stone-700 italic mb-6 text-lg leading-relaxed">
                            "{currentTestimonial.quote}"
                          </p>
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-stone-800">
                            {currentTestimonial.name}
                          </h3>
                          <p className="text-stone-600">
                            {currentTestimonial.role},{' '}
                            {currentTestimonial.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 items-center gap-4">
              <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow-md text-stone-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2" aria-label="Previous testimonial">
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }} className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-amber-500 w-4' : 'bg-stone-300 hover:bg-stone-400'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>
              <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow-md text-stone-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2" aria-label="Next testimonial">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};