import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, StarHalf } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto sliding carousel configuration - slides every 5s
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [currentIndex]);

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Abstract luxury glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-maroon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic header & score board layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Huge customer score display panel (4 columns) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left bg-surface-gray border border-gold/20 p-8 rounded-2xl relative shadow-2xl">
            <div className="absolute top-4 right-4 text-white/[0.03] pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1.5]" />
            </div>

            <span className="font-poppins text-xs font-semibold text-[#FF7A00] uppercase tracking-widest mb-2 block">
              Global Trust Score
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-off-white mb-6">
              Loved by Local Families
            </h2>

            {/* Glowing gold circular score meter */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full border-4 border-gold/40 flex items-center justify-center bg-black/45 shadow-lg shadow-gold/20 relative">
                <span className="font-serif text-2xl font-black text-gold">4.5</span>
              </div>
              <div className="text-left font-poppins">
                <div className="flex text-gold mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold stroke-[1.5]" />
                  ))}
                  <StarHalf className="w-4 h-4 fill-gold stroke-[1.5]" />
                </div>
                <p className="text-xs text-white/50 leading-none">Average Score</p>
              </div>
            </div>

            {/* Aggregate Counts */}
            <div className="w-full border-t border-white/10 pt-6">
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Aggregated from **116 verified customer reviews** across premium digital dining services and food exploration logs.
              </p>
              <div className="flex items-center gap-2 mt-4 text-gold font-poppins text-xs font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>100% Honest Feedback</span>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel slider containing glassmorphism reviews (8 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Carousel display box */}
            <div className="min-h-[280px] flex items-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full p-8 md:p-10 rounded-2xl bg-surface-gray/40 backdrop-blur-md border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Backdrop golden quote water marks */}
                  <div className="absolute top-6 left-6 text-gold/5 select-none pointer-events-none">
                    <Quote className="w-16 h-16 transform -scale-x-100" />
                  </div>

                  <div>
                    {/* Stars in testimonial */}
                    <div className="flex text-gold mb-5">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-gold stroke-[1.5]" />
                      ))}
                    </div>

                    {/* Testimonial text block */}
                    <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed italic mb-8 select-text">
                      "{activeReview.text}"
                    </p>
                  </div>

                  {/* Customer author profile details */}
                  <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <img
                        src={activeReview.image}
                        alt={`${activeReview.name}'s Profile portrait photo`}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border border-gold/30"
                      />
                      <div>
                        <h4 className="font-poppins text-xs sm:text-sm font-bold text-off-white">
                          {activeReview.name}
                        </h4>
                        <span className="text-[10px] sm:text-xs text-[#FF7A00] font-sans">
                          {activeReview.role}
                        </span>
                      </div>
                    </div>

                    <span className="font-sans text-[10px] text-white/30 shrink-0">
                      {activeReview.date}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider control arrows */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full bg-surface-gray border border-white/10 hover:border-gold text-white hover:text-gold flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-1.5 px-3">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full bg-surface-gray border border-white/10 hover:border-gold text-white hover:text-gold flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
