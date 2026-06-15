import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat } from 'lucide-react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-maroon/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Crest Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: 1,
                rotate: 360
              }}
              transition={{ 
                scale: { duration: 0.8, ease: 'easeOut' },
                rotate: { duration: 1.5, ease: 'easeInOut' }
              }}
              className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center bg-surface-gray/50 backdrop-blur-md shadow-lg shadow-gold/20 mb-8"
            >
              <ChefHat className="w-12 h-12 text-gold" />
            </motion.div>

            {/* Typography Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl text-center text-gold tracking-widest uppercase mb-2"
            >
              Syed Royal
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-poppins text-xs uppercase tracking-[0.3em] text-off-white/60"
            >
              Family Restaurant
            </motion.p>

            {/* Loading Accent Line */}
            <div className="w-32 h-[1px] bg-white/20 mt-6 relative overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
