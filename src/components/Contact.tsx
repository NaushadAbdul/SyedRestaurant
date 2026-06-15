import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Send, CheckCircle, Clock, Calendar, Users, Info } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const guestsOptions = [
    { value: '1', label: '1 Royal Guest' },
    { value: '2', label: '2 Guests' },
    { value: '4', label: '4 Guests Family' },
    { value: '6', label: '6 Guests Party' },
    { value: '8', label: '8+ Guests Large Feast' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    
    // Numeric standard phone check
    const phoneTrimened = formData.phone.trim();
    if (!phoneTrimened) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+() -]{10,14}$/.test(phoneTrimened)) {
      newErrors.phone = 'Please insert a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate slow premium network dispatch
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset state
        setFormData({ name: '', phone: '', guests: '2', date: '', message: '' });
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Visual lighting spotlights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-maroon/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-gold">Get in Touch</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-off-white mb-4">
            Reservation & Inquiries
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Plan your next family feast or secure a table. Give us a call or send your inquiry details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Column 1 - Contacts Details & Google Maps Embed (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="font-serif text-xl text-gold pb-2 border-b border-white/10">
              Restaurant Information
            </h3>

            {/* Phone badge */}
            <div className="p-5 rounded-xl bg-surface-gray border border-white/5 flex gap-4 items-start hover:border-gold/20 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-maroon flex items-center justify-center text-gold shrink-0">
                <Phone className="w-5 h-5 animate-bounce" />
              </div>
              <div className="font-poppins">
                <span className="text-[10px] text-[#FF7A00] font-bold uppercase block mb-1">Click to call immediately</span>
                <a
                  href="tel:+919642477545"
                  className="text-base font-semibold text-off-white hover:text-gold transition-colors block"
                >
                  +91 96424 77545
                </a>
                <span className="text-[11px] text-white/40 font-sans block mt-1">Direct inquiries & bulk order bookings</span>
              </div>
            </div>

            {/* Location Address Badge */}
            <div className="p-5 rounded-xl bg-surface-gray border border-white/5 flex gap-4 items-start hover:border-gold/20 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-maroon flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-poppins">
                <span className="text-[10px] text-gold font-bold uppercase block mb-1">Our Location Address</span>
                <p className="text-xs sm:text-sm text-off-white leading-relaxed select-all">
                  Near Krishnaveni Complex, 1 Town, Islampet, Vijayawada, Andhra Pradesh 520001
                </p>
                <span className="text-[11px] text-white/40 font-sans block mt-2">📍 Centrally located for families in Islampet</span>
              </div>
            </div>

            {/* Fast Service / Open Times Indicator */}
            <div className="p-5 rounded-xl bg-surface-gray border border-white/5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-gold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-poppins">
                <span className="text-xs text-white/70 font-semibold block mb-1">Hours of Service</span>
                <div className="text-xs text-white/50 space-y-0.5">
                  <p>Daily Food Service: **11:00 AM – 11:30 PM**</p>
                  <p>Weekend Specialities: **11:00 AM – Midnight**</p>
                </div>
              </div>
            </div>

            {/* Google map iframe wrapper */}
            <div className="mt-2 rounded-xl overflow-hidden border border-white/15 h-64 shadow-lg shadow-black/50">
              <iframe
                title="Syed Royal Family Restaurant Location Map"
                src="https://maps.google.com/maps?q=Syed%20Royal%20Family%20Restaurant,%20Near%20Krishnaveni%20Complex,%201%20Town,%20Islampet,%20Vijayawada,%20Andhra%20Pradesh%20520001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2 - Responsive contact form section (7 columns) */}
          <div className="lg:col-span-7 bg-surface-gray border border-white/5 p-6 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <h3 className="font-serif text-xl text-gold pb-2 border-b border-white/10 mb-8 flex items-center justify-between">
              <span>Send Reservation Query</span>
              <span className="font-sans text-[10px] text-[#FF7A00] tracking-wide font-normal uppercase">Easy & Dynamic</span>
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-gold mb-6 stroke-[1.5]" />
                  <h4 className="font-serif text-2xl text-off-white mb-3">Inquiry Submitted Successfully</h4>
                  <p className="font-sans text-xs sm:text-sm text-white/70 max-w-md leading-relaxed mb-6">
                    Thank you. Your reservation request has been received. Our coordinators will ring your number back shortly to finalize details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 border border-gold/30 hover:border-gold hover:bg-gold hover:text-charcoal text-gold font-poppins text-xs font-semibold rounded cursor-pointer transition-all"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name-input" className="font-poppins text-xs font-semibold text-white/70 mb-2 cursor-pointer">
                      Full Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Kumar"
                      className={`w-full bg-charcoal border rounded-lg px-4 py-3 text-off-white text-xs sm:text-sm font-sans focus:outline-none focus:border-gold transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-1 font-sans">{errors.name}</span>}
                  </div>

                  {/* Phone + Guests Count (Responsive row) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="phone-input" className="font-poppins text-xs font-semibold text-white/70 mb-2 cursor-pointer">
                        Contact Mobile *
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full bg-charcoal border rounded-lg px-4 py-3 text-off-white text-xs sm:text-sm font-sans focus:outline-none focus:border-gold transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.phone && <span className="text-red-500 text-[10px] mt-1 font-sans">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="guests-select" className="font-poppins text-xs font-semibold text-white/70 mb-2 cursor-pointer">
                        Table Party Size
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <select
                          id="guests-select"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white/80 text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors font-poppins appearance-none cursor-pointer"
                        >
                          {guestsOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-surface-gray text-white">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Date selection field */}
                  <div className="flex flex-col">
                    <label htmlFor="date-input" className="font-poppins text-xs font-semibold text-white/70 mb-2 cursor-pointer">
                      Preferred Date (Optional)
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        id="date-input"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white/80 text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Special Message content */}
                  <div className="flex flex-col">
                    <label htmlFor="message-area" className="font-poppins text-xs font-semibold text-white/70 mb-2 cursor-pointer">
                      Special Requests / Event Details (Optional)
                    </label>
                    <textarea
                      id="message-area"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="List any allergens, spicy pref, kids booster seat details..."
                      className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-off-white text-xs sm:text-sm font-sans focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Anti-slop / validation info */}
                  <div className="p-3 bg-black/30 border border-[#FF7A00]/20 rounded-lg flex items-start gap-2.5 text-white/50 text-[10px] leading-relaxed">
                    <Info className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                    <span>
                      * All fields designated with * are core contact fields. This is an exploratory reservation dispatch. Our customer service team will call back within **15 minutes** to approve and confirm tables.
                    </span>
                  </div>

                  {/* Submission CTA button */}
                  <button
                    id="submit-contact"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 bg-gradient-to-r from-maroon to-[#8B1424] hover:from-[#8B1424] hover:to-[#B21E35] border border-gold/30 hover:border-gold text-off-white font-poppins font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-maroon/40"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-gold animate-spin" />
                        Dispersing inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold animate-pulse" />
                        Reserve Table Table Now
                      </>
                    )}
                  </button>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
