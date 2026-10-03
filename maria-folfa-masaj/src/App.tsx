import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ReviewsSection from './components/ReviewsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#1b231c] flex flex-col font-sans selection:bg-[#c9a86a]/25 selection:text-[#1a241b]">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Despre Terapeut */}
        <About />

        {/* 4. Servicii & Meniu Terapeutic */}
        <Services />

        {/* 5. Galerie Foto */}
        <Gallery />

        {/* 6. Recenzii Live Firestore */}
        <ReviewsSection />

        {/* 7. Contact & Locație */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
