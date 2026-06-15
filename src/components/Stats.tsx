import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';

interface StatCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

// Custom Counter Hook component that runs safely on scroll-into-view
function Counter({ target, duration = 1500, suffix = '', decimals = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentVal = progress * target;
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      label: 'Happy Customer Reviews',
      target: 116,
      suffix: '+',
      decimals: 0,
      icon: Heart,
      desc: 'Glowing local testimonies'
    },
    {
      label: 'Average Rating',
      target: 4.5,
      suffix: '★',
      decimals: 1,
      icon: Star,
      desc: 'Top-rated family spot'
    },
    {
      label: 'Quality Ingredients',
      target: 100,
      suffix: '%',
      decimals: 0,
      icon: ShieldCheck,
      desc: 'Halal certified culinary meats'
    },
    {
      label: 'Customer Satisfaction',
      target: 5.0,
      suffix: '★',
      decimals: 1,
      icon: ThumbsUp,
      desc: 'Flawless culinary ratings'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-maroon via-[#520912] to-maroon relative overflow-hidden border-y border-gold/20 shadow-xl shadow-black/30">
      {/* Overlay radial mesh */}
      <div className="absolute inset-0 bg-radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center group"
              >
                {/* Micro icon badge with subtle spin on hover */}
                <div className="w-10 h-10 rounded-full bg-black/30 border border-gold/25 flex items-center justify-center text-gold mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="w-4.5 h-4.5" />
                </div>

                {/* Counter */}
                <div className="font-serif text-3.5xl sm:text-4.5xl font-black text-gold tracking-tight mb-2 select-all">
                  <Counter 
                    target={stat.target} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </div>

                {/* Text titles */}
                <h4 className="font-poppins text-xs font-bold text-white/95 uppercase tracking-wider mb-1">
                  {stat.label}
                </h4>
                <p className="font-sans text-[10px] text-white/50 block">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
