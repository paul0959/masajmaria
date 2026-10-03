import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface GalleryPhoto {
  id: number;
  url: string;
  title: string;
  category: string;
  categoryKey: 'ambient' | 'therapies' | 'details';
  locationNote: string;
  description: string;
}

const photoCollection: GalleryPhoto[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
    title: 'Sanctuar de Liniște & Aromaterapie',
    category: 'Cabinet & Ambianță',
    categoryKey: 'ambient',
    locationNote: 'Cabinet Folfa Maria · Bistrița',
    description: 'Ambianță calmă cu lumină difuză, esențe naturale și un decor minimalist creat pentru deconectarea totală de la agitația urbană.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85',
    title: 'Roci Vulcanice de Bazalt',
    category: 'Ingrediente & Accesorii',
    categoryKey: 'details',
    locationNote: 'Terapie Geotermală',
    description: 'Pietre vulcanice șlefuite natural, încălzite la o temperatură terapeutică controlată pentru transmiterea căldurii profunde în mușchi.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85',
    title: 'Manevre de Decontracturare Profundă',
    category: 'Terapii & Tehnici',
    categoryKey: 'therapies',
    locationNote: 'Masaj Terapeutic',
    description: 'Tehnici manuale de mare precizie aplicate pe musculatura paravertebrală și punctele de tensiune miofascială.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85',
    title: 'Uleiuri Esențiale Presate la Rece',
    category: 'Ingrediente & Accesorii',
    categoryKey: 'details',
    locationNote: 'Ingrediente Pure 100%',
    description: 'Baze vegetale de migdale dulci și jojoba îmbogățite cu picături de lavandă și eucalipt pentru relaxare și hrănire tisulară.',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
    title: 'Confort Anatomic & Calitate Textilă',
    category: 'Cabinet & Ambianță',
    categoryKey: 'ambient',
    locationNote: 'Standarde Medicale',
    description: 'Lenjerii din bumbac organic de înaltă densitate, prosoape igienizate la standarde clinice și o masă ergonomică cu încălzire.',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85',
    title: 'Tratament Reflexogen & Relaxare Periferică',
    category: 'Terapii & Tehnici',
    categoryKey: 'therapies',
    locationNote: 'Reflexologie Podală',
    description: 'Presopunctură specifică aplicată pe zonele reflexogene ale tălpilor pentru echilibrarea funcțiilor viscerale și deblocare limfatică.',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ambient' | 'therapies' | 'details'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = activeFilter === 'all'
    ? photoCollection
    : photoCollection.filter((p) => p.categoryKey === activeFilter);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! - 1 + filteredPhotos.length) % filteredPhotos.length));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section id="galerie" className="py-14 sm:py-16 bg-[#f5f3ee] text-[#1a241b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3d4f3e] mb-2.5">
            <Camera className="w-3.5 h-3.5 text-[#c9a86a]" />
            <span>Portofoliu &amp; Ambianță</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1a241b] mb-3">
            Galerie Foto
          </h2>
          <p className="text-sm sm:text-base text-[#4e5d4f] font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            O incursiune vizuală în atmosfera cabinetului Maria Folfa din Bistrița: dotări premium, igienă riguroasă și detalii create pentru regenerare.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'Toate Imaginile (6)' },
            { key: 'ambient', label: 'Cabinet & Ambianță' },
            { key: 'therapies', label: 'Terapii & Tehnici' },
            { key: 'details', label: 'Ingrediente & Accesorii' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveFilter(tab.key as any);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeFilter === tab.key
                  ? 'bg-[#1a241b] text-[#fbfaf7] shadow-sm'
                  : 'bg-[#fbfaf7] text-[#4e5d4f] hover:text-[#1a241b] hover:bg-[#ede9e0] border border-[#1a241b]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Well-Organized Structured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => setSelectedPhotoIndex(index)}
              className="cursor-pointer group flex flex-col bg-[#fbfaf7] rounded-2xl overflow-hidden border border-[#1a241b]/10 hover:border-[#c9a86a]/60 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a241b]/10">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#1a241b]/20 group-hover:bg-[#1a241b]/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#fbfaf7]/90 text-[#1a241b] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4 text-[#c9a86a]" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#fbfaf7] bg-[#1a241b]/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Photo Caption below image for clean organization */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#b69151] font-medium block mb-1">
                    {photo.locationNote}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#1a241b] mb-1.5 group-hover:text-[#3d4f3e] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#4e5d4f] font-light leading-relaxed text-justify">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1a241b]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#fbfaf7]/10 hover:bg-[#fbfaf7]/25 text-[#fbfaf7] transition-colors focus:outline-none"
              aria-label="Închide fotografia"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#fbfaf7]/10 hover:bg-[#fbfaf7]/25 text-[#fbfaf7] transition-colors focus:outline-none hidden sm:flex items-center justify-center"
              aria-label="Fotografia precedentă"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#fbfaf7]/10 hover:bg-[#fbfaf7]/25 text-[#fbfaf7] transition-colors focus:outline-none hidden sm:flex items-center justify-center"
              aria-label="Fotografia următoare"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Card */}
            <motion.div
              key={currentPhoto.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full bg-[#fbfaf7] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#c9a86a]/35"
            >
              {/* Photo Viewport */}
              <div className="relative bg-[#1a241b] flex items-center justify-center max-h-[65vh] overflow-hidden">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption Bar */}
              <div className="p-5 sm:p-6 bg-[#fbfaf7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1a241b]/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#b69151]">
                      {currentPhoto.category}
                    </span>
                    <span className="text-[#1a241b]/30">&middot;</span>
                    <span className="text-xs text-[#4e5d4f]">
                      {currentPhoto.locationNote}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1a241b]">
                    {currentPhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4e5d4f] font-light text-justify max-w-2xl">
                    {currentPhoto.description}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="text-xs tracking-widest font-mono text-[#b69151]">
                    {(selectedPhotoIndex! + 1).toString().padStart(2, '0')} / {filteredPhotos.length.toString().padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1 sm:hidden">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-lg bg-[#1a241b]/5 text-[#1a241b]"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-lg bg-[#1a241b]/5 text-[#1a241b]"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
