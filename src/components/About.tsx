import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, ChefHat, UserCheck, Flame } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Authentic Taste',
      desc: 'Formulated using secret age-old family recipes containing hand-prepared spices.',
      icon: Flame,
      color: 'text-gold'
    },
    {
      title: 'Family-Friendly Dining',
      desc: 'Warm, secluded partitions designed for privacy and wholesome family atmosphere.',
      icon: Heart,
      color: 'text-maroon'
    },
    {
      title: 'Premium Ingredients',
      desc: '100% fresh, premium standard Halal meats and fresh organic crops sourced twice daily.',
      icon: ShieldCheck,
      color: 'text-gold'
    },
    {
      title: 'Hygienic Cooking',
      desc: 'Strict sanitization protocols following luxury hotel kitchen standards.',
      icon: Sparkles,
      color: 'text-gold'
    },
    {
      title: 'Excellent Service',
      desc: 'Attentive, swift staff dedicated to delivering royal hospitality to your table.',
      icon: UserCheck,
      color: 'text-maroon'
    }
  ];

  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-maroon/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1 - Interactive Images & Achievements (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl group"
            >
              {/* Image zoom on hover */}
              <div className="overflow-hidden aspect-[3/4] h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                  alt="Syed Royal Executive Chef preparing food"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Luxury gold banner overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Inside Badge card */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface-gray/95 backdrop-blur-md border border-gold/30 p-5 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center border border-gold/40">
                  <ChefHat className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-gold">25+ Years Legacy</h4>
                  <p className="font-sans text-[11px] text-white/65">Mastering the true art of authentic slow-cooking.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 - Narrative & High-end Card List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Culinary Story</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-off-white mb-4">
                The Heritage of Royal Mughal Andhra Flavors
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Nestled in the historical hub of Islampet, Vijayawada, **Syed Royal Family Restaurant** stands as a beacon of rich culinary traditions. We preserve legacy recipes passed down through generations, combining high-grade wholesome spices with slow-cooked tenderness to craft unforgettable family memories.
              </p>
            </div>

            {/* List of 5 Highlights (Grid arrangement) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-4 bg-surface-gray/70 border border-white/5 rounded-xl hover:border-gold/30 transition-all duration-300 card-glow flex gap-3.5"
                  >
                    <div className="shrink-0">
                      <div className="w-9 h-9 rounded-lg bg-charcoal border border-white/10 flex items-center justify-center">
                        <IconComponent className={`w-4.5 h-4.5 ${item.color}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-poppins text-xs sm:text-sm font-semibold text-off-white mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
