import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'ambience' | 'chef'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Culinary Masterpieces' },
    { id: 'ambience', label: 'Royal Ambience' },
    { id: 'chef', label: 'Kitchen & Passion' }
  ] as const;

  const filteredItems = GALLERY.filter((item) => activeTab === 'all' || item.category === activeTab);

  const openLightbox = (id: string) => {
    const originalIndex = GALLERY.findIndex((item) => item.id === id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
      setLightboxIndex(prevIdx);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % GALLERY.length;
      setLightboxIndex(nextIdx);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-maroon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-gold">Visual Feast</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-off-white mb-4">
            Our Luxury Gallery
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Step inside Syed Royal Family Restaurant. A visual celebration of our exquisite platings and royal, comforting atmosphere.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-xs font-poppins tracking-wider font-semibold uppercase cursor-pointer border transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-maroon to-[#8B1424] border-gold/40 text-off-white shadow-lg shadow-maroon/20 scale-105'
                  : 'bg-surface-gray/50 border-white/5 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden border border-white/5 bg-[#1A1A1A] aspect-[4/3] cursor-pointer shadow-lg hover:shadow-gold/10 hover:border-gold/20 transition-all duration-300"
                onClick={() => openLightbox(item.id)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Hover contents overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <span className="font-poppins text-[9px] font-bold uppercase tracking-widest text-[#FF7A00] block mb-1">
                      {item.category === 'ambience' ? 'AMBIENCE' : item.category === 'food' ? 'CULINARY' : 'HERITAGE'}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-off-white">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold hover:bg-[#E3C561] flex items-center justify-center text-charcoal shadow-lg shadow-black/40">
                    <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Preview popup Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              {/* Lightbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full flex flex-col items-center justify-center z-10"
              >
                {/* Image panel */}
                <div className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-charcoal rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
                  <img
                    src={GALLERY[lightboxIndex].image}
                    alt={GALLERY[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain"
                  />

                  {/* Left Controls */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-gold transition-colors cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                  </button>

                  {/* Right Controls */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-gold transition-colors cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </button>

                  {/* Close floating button */}
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-white hover:text-gold transition-colors cursor-pointer"
                    aria-label="Close review lightbox"
                  >
                    <X className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Subtitle details */}
                <div className="w-full mt-4 flex justify-between items-start gap-4 px-2">
                  <div>
                    <h3 className="font-serif text-lg text-gold font-bold">
                      {GALLERY[lightboxIndex].title}
                    </h3>
                    <p className="font-poppins text-xs text-white/50 uppercase tracking-widest mt-1 flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-gold" />
                      {GALLERY[lightboxIndex].category} collection — Scene {lightboxIndex + 1} of {GALLERY.length}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block font-sans text-[10px] text-white/30 tracking-wider">
                    Use left/right buttons to scroll
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
