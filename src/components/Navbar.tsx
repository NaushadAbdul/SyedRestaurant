import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChefHat, Phone } from 'lucide-react';

interface NavbarProps {
  onExploreMenuPress: () => void;
}

export default function Navbar({ onExploreMenuPress }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'specialities', label: 'Specialities' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed z-40 transition-all duration-500 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${
        isScrolled
          ? 'top-2 py-2 sm:max-w-[90%] md:max-w-[85%]'
          : 'top-4 py-4 sm:max-w-[95%] md:max-w-[90%]'
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 py-3.5 rounded-full border border-white/10 backdrop-blur-md bg-white/5 shadow-2xl transition-all duration-500">
        {/* Logo block */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-[#D4AF37] to-[#FF7A00] rounded-full flex items-center justify-center font-serif font-bold text-black text-xl border-2 border-white/20 shadow-md">
            S
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-base tracking-[0.15em] text-[#D4AF37] uppercase block font-bold leading-none">
              Syed Royal
            </span>
            <span className="font-sans text-[8px] tracking-[0.25em] text-white/50 block mt-1 uppercase font-semibold">
              Family Restaurant
            </span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-sans text-[11px] uppercase tracking-[0.18em] font-medium cursor-pointer py-1 relative transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-[#D4AF37] opacity-100'
                  : 'text-white opacity-70 hover:opacity-100 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="navbar-active-underline"
                  className="absolute -bottom-1 left-1/4 w-1/2 h-[1.5px] bg-[#D4AF37]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+919642477545"
            className="flex items-center gap-1.5 font-sans text-xs font-semibold text-[#FF7A00] hover:scale-105 transition-transform"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 96424 77545
          </a>
          <button
            id="navbar-explore-menu"
            onClick={onExploreMenuPress}
            className="bg-gradient-to-r from-[#D4AF37] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#D4AF37] text-black px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-gold/25 cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Book Table
          </button>
        </div>

        {/* Hamburger Toggler */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            id="navbar-mobile-order"
            onClick={onExploreMenuPress}
            className="px-3.5 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#FF7A00] text-black font-sans font-bold text-[10px] tracking-wider rounded-full cursor-pointer hover:scale-105 transition-all duration-300 md:hidden"
          >
            Book Table
          </button>
          <button
            id="navbar-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navbar-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 px-3 rounded-lg text-left font-poppins text-xs uppercase tracking-wider cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-gold/10 text-gold font-medium border-l-2 border-gold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <a
                  href="tel:+919642477545"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-off-white font-poppins text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  Call: +91 9642477545
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
