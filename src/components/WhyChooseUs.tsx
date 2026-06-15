import { motion } from 'motion/react';
import { 
  Heart, 
  Sparkles, 
  Users, 
  Zap, 
  IndianRupee, 
  Soup 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

// Map icon names safely
const iconMap = {
  'heart': Heart,
  'sparkles': Sparkles,
  'users': Users,
  'zap': Zap,
  'indian-rupee': IndianRupee,
  'soup': Soup
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Absolute floating luxury layout accent lines */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-maroon/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-gold">Exceptional Quality</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-off-white mb-4">
            Why Dine With Us?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            We hold ourselves to a royal standard of excellence across every culinary and service department.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group p-6 bg-surface-gray/50 border border-white/5 rounded-2xl hover:border-gold/25 card-glow transition-all duration-300 relative overflow-hidden"
              >
                {/* Floating corner background watermark */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none">
                  <IconComponent className="w-full h-full" />
                </div>

                {/* Animated Icon Bubble */}
                <div className="w-12 h-12 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:bg-maroon group-hover:border-gold/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-maroon/20 transition-all duration-300">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>

                {/* Typography */}
                <h3 className="font-poppins text-base font-semibold text-off-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
