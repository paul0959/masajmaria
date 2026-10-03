import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="acasa" className="relative min-h-[96vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with luxury spa imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=2200&q=85"
          alt="Cabinet Masaj Terapeutic Folfa Maria Bistrița"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient: deep forest sage overlay with high clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a241b]/92 via-[#223023]/80 to-[#1a241b]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a241b] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#fbfaf7]">
        {/* Subtle Luxury Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fbfaf7]/10 backdrop-blur-md border border-[#c9a86a]/40 text-xs tracking-[0.2em] font-medium text-[#c9a86a] uppercase mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c9a86a]" />
          <span>Sanctuar Terapeutic &middot; Bistrița</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#fbfaf7] leading-[1.08] mb-6 max-w-4xl mx-auto"
        >
          Răsfăț pentru corp, <br className="hidden sm:inline" />
          <span className="italic font-light text-[#f4f1ea]">liniște pentru suflet.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#f4f1ea]/85 max-w-2xl mx-auto font-light leading-relaxed mb-8 text-justify sm:text-center"
        >
          Arta masajului terapeutic executată cu rigoare medicală și delicatețe profundă.
          Eliberare miofascială, decontracturare și echilibrare nervoasă într-un cadru privat exclusivist.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12"
        >
          <a
            href="#servicii"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#c9a86a] hover:bg-[#b89355] text-[#1a241b] text-xs uppercase tracking-[0.16em] font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            Meniu Servicii &amp; Tarife
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#fbfaf7]/10 hover:bg-[#fbfaf7]/20 border border-[#f4f1ea]/30 text-[#fbfaf7] text-xs uppercase tracking-[0.16em] font-medium backdrop-blur-sm transition-all duration-300 text-center"
          >
            Informații &amp; Contact
          </a>
        </motion.div>

        {/* Trust Markers Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#f4f1ea]/15 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3.5 text-left">
            <div className="w-11 h-11 rounded-full bg-[#fbfaf7]/10 flex items-center justify-center shrink-0 border border-[#c9a86a]/30">
              <ShieldCheck className="w-5 h-5 text-[#c9a86a]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#f4f1ea]/60 font-medium">Experiență Profesională</p>
              <p className="text-sm font-semibold text-[#fbfaf7]">Practică din 2018</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5 text-left">
            <div className="w-11 h-11 rounded-full bg-[#fbfaf7]/10 flex items-center justify-center shrink-0 border border-[#c9a86a]/30">
              <HeartHandshake className="w-5 h-5 text-[#c9a86a]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#f4f1ea]/60 font-medium">Încrederea Pacienților</p>
              <p className="text-sm font-semibold text-[#fbfaf7]">Peste 1000 de sesiuni</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5 text-left">
            <div className="w-11 h-11 rounded-full bg-[#fbfaf7]/10 flex items-center justify-center shrink-0 border border-[#c9a86a]/30">
              <Award className="w-5 h-5 text-[#c9a86a]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#f4f1ea]/60 font-medium">Metodologie</p>
              <p className="text-sm font-semibold text-[#fbfaf7]">Terapii Complementare</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <a
        href="#despre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#f4f1ea]/50 hover:text-[#c9a86a] transition-colors p-2"
        aria-label="Navighează la secțiunea Despre"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
