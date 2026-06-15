import { motion } from 'motion/react';
import { Star, Users, Phone, ArrowRight, Award } from 'lucide-react';

interface HeroProps {
  onExploreMenuPress: () => void;
}

export default function Hero({ onExploreMenuPress }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-charcoal flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Luxury Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1600"
            alt="Luxury Restaurant Dining Ambience background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
        </motion.div>
        {/* Superior premium overlay vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-[#121212]/60" />
        <div className="absolute inset-0 bg-radial-luxury" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs tracking-tighter text-[#D4AF37]"
            >
              <span className="flex">★★★★★</span>
              <span className="opacity-60 text-[10px] sm:text-xs">4.5 (116 Verified Reviews, Vijayawada)</span>
            </motion.div>

            {/* Custom Heading with luxury Playfair serifs */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-serif text-5xl sm:text-6.5xl lg:text-7xl leading-[1.0] text-transparent bg-clip-text bg-gradient-to-b from-[#F5F5F5] to-[#D4AF37]"
            >
              Experience Royal Hospitality
            </motion.h1>

            {/* Explanatory Subtitle with premium left-border quote style */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light italic border-l-2 border-[#6B0F1A] pl-6 pr-4"
            >
              Authentic luxury Mughlai & Tandoor delicacies curated with premium ingredients. A sanctuary for memorable family dining in the heart of Vijayawada.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-explore-menu"
                onClick={onExploreMenuPress}
                className="px-8 py-3.5 bg-[#6B0F1A] text-white rounded-xl border border-white/10 hover:scale-105 active:scale-95 transition-transform font-semibold tracking-wide cursor-pointer text-center"
              >
                Explore Menu
              </button>

              <button
                id="hero-view-gallery"
                onClick={() => {
                  const el = document.getElementById('gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold tracking-wide hover:bg-white/10 transition-colors cursor-pointer text-center"
              >
                Visit Gallery
              </button>
            </motion.div>

            {/* Reviews display block - sleek grid cells */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 w-full"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">116+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Reviews</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">4.5★</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Rating</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Hygienic</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Service</div>
              </div>
            </motion.div>
          </div>

          {/* Floating Luxury Image Presentation (5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Outer golden circular lines */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="hidden md:block absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-gold/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="hidden md:block absolute w-[360px] h-[360px] rounded-full border border-double border-[#6B0F1A]/40"
            />

            {/* Main floating circle food image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -12, 0]
              }}
              transition={{
                scale: { duration: 0.8, ease: 'easeOut' },
                opacity: { duration: 0.8 },
                y: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
              }}
              className="relative w-72 h-72 sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-gold bg-[#1E1E1E] shadow-2xl shadow-gold/15 flex items-center justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=650&h=650"
                alt="Syed Royal Chicken Dum Biryani Signature Dish"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Gold gradient inner ring */}
              <div className="absolute inset-0 rounded-full border-4 border-black/40" />
            </motion.div>

            {/* Small floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 right-4 sm:right-10 bg-surface-gray border-2 border-gold text-off-white px-4 py-2 rounded-xl shadow-lg shadow-black/50 z-10 font-poppins"
            >
              <span className="text-[10px] text-gold block tracking-wider uppercase font-semibold">Legacy Recipe</span>
              <span className="text-xs font-bold block">Biryani Dum Specialist</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
