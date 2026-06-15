import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Sparkles, Phone, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'biryani', label: 'Biryanis' },
    { id: 'chicken', label: 'Chicken' },
    { id: 'mutton', label: 'Mutton' },
    { id: 'tandoori', label: 'Tandoor' },
    { id: 'chinese', label: 'Chinese' },
    { id: 'drinks', label: 'Beverages & Sweets' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="menu-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-5xl h-[85vh] bg-surface-gray border border-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-charcoal">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#FF7A00]">The Feast of Nobles</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-gold">Explore Royal Menu</h2>
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-3">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search mutton, biryani..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#121212] border border-white/15 rounded-lg pl-9 pr-4 py-2 text-off-white text-sm focus:outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>

                <button
                  id="close-menu-modal"
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Category Scrollable row */}
            <div className="px-6 py-4 bg-charcoal/40 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-poppins transition-all duration-300 whitespace-nowrap border cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-gold border-gold text-charcoal font-semibold shadow-md shadow-gold/20'
                      : 'border-white/15 text-white/70 hover:border-white/30 hover:text-white bg-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Content Area - Scrollable food items */}
            <div className="flex-1 overflow-y-auto p-6 bg-radial-gold-glow">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                  {filteredItems.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-xl border border-white/5 bg-charcoal/60 backdrop-blur-sm flex flex-col justify-between group relative overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-maroon/10"
                      key={item.id}
                    >
                      {/* Popular tag accent */}
                      {item.isPopular && (
                        <div className="absolute top-0 right-0 bg-maroon border-b border-l border-gold/30 px-3 py-1 text-[10px] font-poppins font-semibold text-gold tracking-wider flex items-center gap-1 uppercase rounded-bl-xl">
                          <Sparkles className="w-3 h-3 text-gold" />
                          Signature
                        </div>
                      )}

                      <div>
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="font-poppins text-base font-semibold text-off-white group-hover:text-gold transition-colors duration-300">
                            {item.name}
                          </h4>
                          <span className="font-serif text-lg font-bold text-gold tracking-tight border-b border-gold/20 shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-white/60 leading-relaxed max-w-[85%] pr-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Call to Order info inside cards */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] text-white/40">
                        <span className="flex items-center gap-1 font-poppins text-gold text-[10px]">
                          <Check className="w-3 h-3 text-[#FF7A00]" /> Halal & Handcrafted
                        </span>
                        <span className="hover:text-gold transition-colors duration-300 cursor-pointer">
                          Serve Time: ~15 mins
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <Search className="w-12 h-12 text-white/20 mb-4 stroke-[1.5]" />
                  <p className="font-poppins text-lg text-white/70">No royal dishes found</p>
                  <p className="font-sans text-xs text-white/40 max-w-sm mt-1">
                    Try checking spelling or switching to another category tab
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-4 px-4 py-2 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal rounded text-xs transition-all pointer-events-auto"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Sticky footer call CTA */}
            <div className="p-4 bg-[#121212] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 px-6">
              <span className="text-xs text-white/50 font-sans text-center sm:text-left">
                📞 Prefer calling? Speak directly with Syed royal coordinators to book bulk menus or orders!
              </span>
              <a
                href="tel:+919642477545"
                className="flex items-center gap-2 bg-gradient-to-r from-maroon to-[#8B1424] text-off-white border border-gold/20 px-4 py-1.5 rounded-lg text-xs font-poppins font-semibold cursor-pointer btn-glow-maroon transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-gold animate-bounce" />
                Call +91 96424 77545
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
