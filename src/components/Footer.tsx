import { ChefHat, Phone, MapPin, Mail, MessageSquare, Star, ArrowUp } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'specialities', label: 'Specialities' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal border-t border-white/10 pt-20 pb-8 relative overflow-hidden">
      {/* Footer background glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Logo & Socials (4 columns) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center bg-maroon/20">
                <ChefHat className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="font-serif text-base font-bold tracking-widest text-[#F5F5F5] uppercase block">
                  Syed <span className="text-gold">Royal</span>
                </span>
                <span className="font-poppins text-[9px] tracking-widest text-white/40 block -mt-1 font-semibold">
                  FAMILY RESTAURANT
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-white/50 leading-relaxed mb-6 max-w-xs">
              Savor the taste of pure heritage! Presenting Vijayawada with stellar, slow-cooked family biryanis, spicy tandoori recipes, and elite Mughlai curries.
            </p>

            {/* Simulated social links with standard Lucide badges */}
            <div className="flex items-center gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=919642477545"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-gray hover:bg-[#25D366] text-white hover:text-white flex items-center justify-center border border-white/10 hover:border-[#25D366] transition-all duration-300"
                aria-label="Connect on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <div 
                className="w-10 h-10 rounded-full bg-surface-gray hover:bg-gold text-white hover:text-charcoal flex items-center justify-center border border-white/10 hover:border-gold cursor-help transition-all duration-300"
                title="Connect on Instagram"
              >
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          {/* Col 2: Navigation links (3 columns) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-poppins text-xs font-bold uppercase tracking-[0.15em] text-gold mb-6 border-b border-gold/20 pb-1.5 w-full">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 w-full">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="font-poppins text-xs text-white/60 hover:text-gold transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact coordinates (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h4 className="font-poppins text-xs font-bold uppercase tracking-[0.15em] text-gold mb-6 border-b border-gold/20 pb-1.5 w-full">
              Royal Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start select-all">
                <MapPin className="w-4.5 h-4.5 text-gold shrink-0" />
                <span className="font-sans text-xs text-white/75 leading-relaxed">
                  Near Krishnaveni Complex, 1 Town, Islampet, Vijayawada, Andhra Pradesh 520001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4.5 h-4.5 text-gold shrink-0" />
                <a
                  href="tel:+919642477545"
                  className="font-poppins text-xs text-white/75 hover:text-gold transition-colors font-medium"
                >
                  +91 96424 77545
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4.5 h-4.5 text-gold shrink-0" />
                <span className="font-sans text-xs text-white/75">
                  syedroyalfamily@gmail.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row & Sleek Interface Contact/Social Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1">Find Us At</span>
            <span className="text-xs sm:text-sm font-light text-white/80">
              Near Krishnaveni Complex, Islampet, Vijayawada, AP
            </span>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-white/10" />

          <div className="flex flex-col text-center items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1">Contact Support</span>
            <a 
              href="tel:+919642477545" 
              className="text-xs sm:text-sm font-bold text-[#D4AF37] hover:underline"
            >
              +91 96424 77545
            </a>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-white/10" />

          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=919642477545"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer text-xs font-semibold text-white/70 hover:text-white"
            >
              WA
            </a>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer text-xs font-semibold text-white/70 hover:text-white" title="Instagram">
              IG
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer text-xs font-semibold text-white/70 hover:text-white" title="Facebook">
              FB
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xxs sm:text-xs text-white/30 text-center sm:text-left">
            © 2026 Syed Royal Family Restaurant. All Rights Reserved. Crafted for deep trust & fine culinary taste.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 font-poppins text-xxs sm:text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
          >
            Back To Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
