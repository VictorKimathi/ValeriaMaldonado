import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Instagram, Twitter, Linkedin, Globe, Compass } from 'lucide-react';
export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset status after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  // Animation variants
  const formVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const infoVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };
  const mapVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    }
  };
  const buttonVariants = {
    idle: {
      scale: 1
    },
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  };
  return <section id="contact" className="relative py-24 bg-gradient-to-b from-stone-800 to-stone-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-stone-100 to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-20"></div>
      <motion.div className="absolute -bottom-20 -left-20 text-amber-500/10" animate={{
      rotate: 360
    }} transition={{
      duration: 40,
      repeat: Infinity,
      ease: 'linear'
    }}>
        <Compass size={240} />
      </motion.div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              The Next Adventure
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              Ready to collaborate? Let's plan the next great expedition
              together. Reach out to discuss your project or just to share
              travel stories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-6 text-amber-400">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-300 mb-2">
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none">
                    <option value="" disabled className="bg-stone-800">
                      Select a subject
                    </option>
                    <option value="collaboration" className="bg-stone-800">
                      Collaboration Opportunity
                    </option>
                    <option value="assignment" className="bg-stone-800">
                      Writing Assignment
                    </option>
                    <option value="speaking" className="bg-stone-800">
                      Speaking Engagement
                    </option>
                    <option value="other" className="bg-stone-800">
                      Other Inquiry
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                    Your Message
                  </label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Tell me about your project or inquiry..."></textarea>
                </div>
                <motion.button type="submit" disabled={formStatus === 'submitting'} variants={buttonVariants} initial="idle" whileHover="hover" whileTap="tap" className={`w-full py-3 px-6 flex items-center justify-center rounded-md font-medium transition-colors ${formStatus === 'submitting' ? 'bg-amber-600 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'}`}>
                  {formStatus === 'submitting' ? <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </> : <>
                      Send Message <Send size={18} className="ml-2" />
                    </>}
                </motion.button>
                {/* Form Status Messages */}
                {formStatus === 'success' && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-200">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent successfully! I'll respond as soon as
                      possible.
                    </p>
                  </motion.div>}
                {formStatus === 'error' && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-md text-red-200">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Something went wrong. Please try again later.
                    </p>
                  </motion.div>}
              </form>
            </motion.div>
            {/* Contact Information & Map */}
            <div>
              <motion.div variants={infoVariants} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl mb-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-amber-400">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-500/20 rounded-full mr-4">
                      <Mail className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Email</h4>
                      <p className="text-stone-300">
                        hello@valeriamaldonado.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-500/20 rounded-full mr-4">
                      <MapPin className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Based In</h4>
                      <p className="text-stone-300">
                        Barcelona, Spain (Available Worldwide)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-500/20 rounded-full mr-4">
                      <Phone className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Phone</h4>
                      <p className="text-stone-300">+34 612 345 678</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-white mb-4">
                    Connect on Social Media
                  </h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="Instagram">
                      <Instagram className="text-amber-400" size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="Twitter">
                      <Twitter className="text-amber-400" size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="LinkedIn">
                      <Linkedin className="text-amber-400" size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="Personal Website">
                      <Globe className="text-amber-400" size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={mapVariants} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl h-64 relative">
                {/* This would typically be a map component, using a placeholder image for now */}
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="World map" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">
                    Currently exploring stories in:
                  </p>
                  <p className="text-amber-400 font-serif text-xl">
                    Mediterranean Europe
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Available for Remote Work
                </div>
              </motion.div>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold mb-4">
              Join the Journey
            </h3>
            <p className="text-stone-300 mb-6">
              Subscribe to receive occasional updates with travel insights,
              writing tips, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" required />
              <motion.button type="submit" variants={buttonVariants} initial="idle" whileHover="hover" whileTap="tap" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-md font-medium transition-colors whitespace-nowrap">
                Subscribe
              </motion.button>
            </form>
            <p className="text-stone-400 text-sm mt-4">
              No spam, unsubscribe anytime. Privacy respected.
            </p>
          </div>
        </div>
      </div>
    </section>;
};