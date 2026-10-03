import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a241b] text-[#f4f1ea] border-t border-[#c9a86a]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10">
          {/* Brand Col */}
          <div className="space-y-3.5">
            <span className="font-serif text-2xl font-normal tracking-[0.16em] uppercase text-[#fbfaf7] block">
              Folfa Maria
            </span>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#c9a86a] font-semibold">
              Cabinet Masaj Terapeutic &middot; Bistrița
            </p>
            <p className="text-xs sm:text-sm text-[#f4f1ea]/75 font-light leading-relaxed text-justify">
              Dedicare, rigoare tehnică și abordare holistică pentru sănătatea aparatului locomotor și liniștea sistemului nervos.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#c9a86a]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Practică profesională activă din 2018</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:pl-6">
            <h4 className="font-serif text-lg font-normal text-[#fbfaf7] mb-3.5 border-b border-[#f4f1ea]/10 pb-2">
              Navigare
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#f4f1ea]/80 font-light">
              <li>
                <a href="#acasa" className="hover:text-[#c9a86a] transition-colors">Acasă</a>
              </li>
              <li>
                <a href="#despre" className="hover:text-[#c9a86a] transition-colors">Despre Terapeut</a>
              </li>
              <li>
                <a href="#servicii" className="hover:text-[#c9a86a] transition-colors">Terapii &amp; Servicii</a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-[#c9a86a] transition-colors">Galerie Foto</a>
              </li>
              <li>
                <a href="#recenzii" className="hover:text-[#c9a86a] transition-colors">Recenzii Pacienți</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c9a86a] transition-colors">Contact &amp; Harta</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-normal text-[#fbfaf7] mb-3.5 border-b border-[#f4f1ea]/10 pb-2">
              Cabinet Bistrița
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#f4f1ea]/80">
              <MapPin className="w-4 h-4 text-[#c9a86a] shrink-0 mt-0.5" />
              <span>Strada Zorilor Nr. 15, Bistrița, Jud. Bistrița-Năsăud</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#f4f1ea]/80">
              <Phone className="w-4 h-4 text-[#c9a86a] shrink-0" />
              <a href="tel:0745240799" className="hover:text-[#c9a86a] transition-colors font-medium tabular-nums">
                0745 240 799
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#f4f1ea]/80">
              <Mail className="w-4 h-4 text-[#c9a86a] shrink-0" />
              <a href="mailto:folfamaria@yahoo.com" className="hover:text-[#c9a86a] transition-colors">
                folfamaria@yahoo.com
              </a>
            </div>
            <div className="pt-1.5 text-xs text-[#f4f1ea]/65">
              <p className="font-medium text-[#f4f1ea]/90">Program de lucru:</p>
              <p>Luni &ndash; Vineri: 08:00 &ndash; 20:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#f4f1ea]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f4f1ea]/60 gap-3">
          <p>&copy; 2026 Folfa Maria. Toate drepturile rezervate.</p>
          <div className="flex items-center gap-1.5 text-[#f4f1ea]/50">
            <span>Cabinet de Masaj Terapeutic</span>
            <span>&middot;</span>
            <span>Bistrița</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
