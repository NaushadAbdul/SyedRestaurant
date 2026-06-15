import { motion } from 'motion/react';
import { 
  ChefHat, 
  Flame, 
  Utensils, 
  Globe, 
  Star, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { SPECIALITIES } from '../data';

interface SpecialitiesProps {
  onExploreMenuPress: () => void;
}

// Convert string key to dynamic lucide icon component
const iconMap = {
  'chef-hat': ChefHat,
  'flame': Flame,
  'star': Star,
  'utensils': Utensils,
  'globe': Globe,
  'shield': ChefHat,
  'clock': ChefHat
};

export default function Specialities({ onExploreMenuPress }: SpecialitiesProps) {
  return (
    <section id="specialities" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-gold">The House Specialties</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-off-white mb-4">
            Signature Royal Creations
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Every dish is handcrafted by Syed heritage chefs using authentic recipes, premium slow-cooking methods, and local aromatics.
          </p>
        </div>

        {/* Categories Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALITIES.map((spec, index) => {
            // Retrieve associated icon safely
            const IconComponent = iconMap[spec.iconName as keyof typeof iconMap] || ChefHat;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group bg-surface-gray border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 card-glow transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  {/* Luxury dynamic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/10 to-transparent opacity-80" />
                  
                  {/* Dynamic absolute category icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-maroon/90 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-gold shadow-lg shadow-black/40">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins text-lg font-bold text-off-white group-hover:text-gold transition-colors duration-300 mb-2">
                      {spec.title}
                    </h3>
                    <p className="font-sans text-xs text-white/60 leading-relaxed max-h-[80px] overflow-hidden mb-6">
                      {spec.description}
                    </p>

                    {/* Popular dishes bullets inside card to build trust */}
                    <div className="border-t border-white/5 pt-4 mb-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        <TrendingUp className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span className="font-poppins text-[10px] font-semibold text-gold uppercase tracking-wider">Chef Recommends</span>
                      </div>
                      <ul className="flex flex-col gap-1">
                        {spec.popularDishes.map((dish, idx) => (
                          <li key={idx} className="font-sans text-[11px] text-white/45 flex items-start gap-1.5">
                            <span className="text-gold text-xs leading-none select-none">•</span>
                            <span className="leading-tight">{dish}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Inside card CTA */}
                  <button
                    onClick={onExploreMenuPress}
                    className="w-full py-2.5 border border-gold/20 group-hover:border-gold hover:bg-gold hover:text-charcoal text-gold font-poppins font-semibold text-[11px] uppercase tracking-wider rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    View Selection
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
