/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialities from './components/Specialities';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import MenuModal from './components/MenuModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-charcoal text-off-white font-sans selection:bg-gold selection:text-charcoal antialiased">
      {/* Loading Intro Animation Screen */}
      <LoadingScreen />

      {/* Floating Glassmorphic Header Navigation */}
      <Navbar onExploreMenuPress={handleOpenMenu} />

      {/* Main Full-page sections */}
      <main>
        {/* Full-Screen Premium Hero section */}
        <Hero onExploreMenuPress={handleOpenMenu} />

        {/* Elegant Story Section */}
        <About />

        {/* Signature specialties category cards */}
        <Specialities onExploreMenuPress={handleOpenMenu} />

        {/* High-end Why Choose Us feature lists */}
        <WhyChooseUs />

        {/* Live Counters Banner */}
        <Stats />

        {/* Interactive masonry photo gallery and Lightbox */}
        <Gallery />

        {/* Reviews dynamic slider */}
        <Reviews />

        {/* Map, numbers, and validation reservations shape */}
        <Contact />
      </main>

      {/* Traditional footer coordinates and credits */}
      <Footer />

      {/* Auxiliary interactive badges */}
      <WhatsAppButton />
      <ScrollToTop />

      {/* Highly interactive food catalog popup modal */}
      <MenuModal isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
}

