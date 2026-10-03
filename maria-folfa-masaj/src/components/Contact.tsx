import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Compass,
  Sparkles,
  Car
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#f7f6f2] text-[#2a342a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4a604a] mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Contact &amp; Cabinet</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1b241b] mb-3">
            Locație &amp; Informații Utile
          </h2>
          <p className="text-sm sm:text-base text-[#2a342a]/70 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            Pentru a asigura o atmosferă de liniște totală, toate sesiunile sunt stabilite
            în prealabil prin contact telefonic direct.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Official Contact Info Card */}
          <div className="lg:col-span-6 bg-[#fcfcfb] p-8 sm:p-10 rounded-2xl border border-[#2a342a]/10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="border-b border-[#2a342a]/10 pb-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#aa8c2c] font-semibold block mb-1">
                  Sediu Terapeutic Oficial
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1b241b]">
                  Cabinet Maria Folfa
                </h3>
              </div>

              {/* Adresă */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1b241b] text-[#d4af37] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#aa8c2c]">Adresă Fixă</p>
                  <p className="text-base font-medium text-[#1b241b] mt-0.5">
                    Municipiul Bistrița, strada Zorilor Nr. 15
                  </p>
                  <p className="text-xs text-[#2a342a]/70">Județul Bistrița-Năsăud, România</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1b241b] text-[#d4af37] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#aa8c2c]">Contact Telefonic Direct</p>
                  <a
                    href="tel:0745240799"
                    className="block text-xl font-serif font-bold text-[#1b241b] hover:text-[#aa8c2c] transition-colors mt-0.5 tabular-nums"
                  >
                    0745 240 799
                  </a>
                  <p className="text-xs text-[#2a342a]/60">Apel direct sau conversație directă pe WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1b241b] text-[#d4af37] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#aa8c2c]">Corespondență Electronică</p>
                  <a
                    href="mailto:folfamaria@yahoo.com"
                    className="text-sm font-medium text-[#1b241b] hover:text-[#aa8c2c] transition-colors mt-0.5 block"
                  >
                    folfamaria@yahoo.com
                  </a>
                </div>
              </div>

              {/* Program */}
              <div className="flex items-start gap-4 pt-3 border-t border-[#2a342a]/10">
                <div className="w-11 h-11 rounded-xl bg-[#4a604a]/15 text-[#4a604a] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#aa8c2c]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#aa8c2c]">Orar de Funcționare</p>
                  <p className="text-base font-semibold text-[#1b241b] mt-0.5">
                    Luni &ndash; Vineri: 08:00 &ndash; 20:00
                  </p>
                  <p className="text-xs text-[#2a342a]/60 mt-0.5">
                    Sâmbătă &amp; Duminică: Închis (dedicat studiului și refacerii)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Instant Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <a
                href="tel:0745240799"
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#1a241b] hover:bg-[#2e3e30] text-[#fbfaf7] text-xs uppercase tracking-wider font-semibold shadow-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#c9a86a]" />
                <span className="tabular-nums">Apelează: 0745 240 799</span>
              </a>

              <a
                href="https://wa.me/40745240799"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#c9a86a] hover:bg-[#b89355] text-[#1a241b] text-xs uppercase tracking-wider font-semibold shadow-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#1a241b]" />
                <span>Mesaj WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Practical Visit Protocol & Etiquette */}
          <div className="lg:col-span-6 bg-[#fcfcfb] p-8 sm:p-10 rounded-2xl border border-[#2a342a]/10 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="border-b border-[#2a342a]/10 pb-5 mb-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#aa8c2c] font-semibold block mb-1">
                  Ghid pentru Pacienți
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1b241b]">
                  Eticheta &amp; Confortul Sesiunii
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#4a604a]/10 text-[#4a604a] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1b241b]">Punctualitate &amp; Sosire</h4>
                    <p className="text-xs text-[#2a342a]/70 font-light mt-0.5 leading-relaxed text-justify">
                      Pentru a beneficia integral de cele 60 de minute alocate, vă recomandăm să sosiți cu 5 minute înainte de ora stabilită.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#4a604a]/10 text-[#4a604a] flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1b241b]">Acces &amp; Parcare</h4>
                    <p className="text-xs text-[#2a342a]/70 font-light mt-0.5 leading-relaxed text-justify">
                      Locația din strada Zorilor nr. 15 oferă acces facil și posibilități comode de parcare în imediata apropiere a imobilului.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#4a604a]/10 text-[#4a604a] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1b241b]">Anamneză &amp; Evaluare</h4>
                    <p className="text-xs text-[#2a342a]/70 font-light mt-0.5 leading-relaxed text-justify">
                      La prima sesiune, vom discuta istoricul oricăror afecțiuni cronice, hernii de disc sau contraindicații pentru adaptarea manevrelor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#4a604a]/10 text-[#4a604a] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1b241b]">Igienă Absolută</h4>
                    <p className="text-xs text-[#2a342a]/70 font-light mt-0.5 leading-relaxed text-justify">
                      Se utilizează materiale sterile, prosoape curate și dezinfectarea minuțioasă a suprafețelor după fiecare client.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f7f6f2] border border-[#2a342a]/10 text-xs text-[#2a342a]/80 font-light text-justify">
              <span className="font-semibold text-[#1b241b]">Notă importantă: </span>
              În cazul în care doriți reprogramarea unei ședințe stabilite telefonic, vă rugăm să anunțați cu cel puțin 24 de ore înainte.
            </div>
          </div>
        </div>

        {/* Google Maps iFrame Section with CSS grayscale filter */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-[#2a342a]/10 bg-[#fcfcfb]">
          <div className="p-4 sm:p-5 bg-[#1b241b] text-[#fcfcfb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[#d4af37]" />
              <span className="font-serif text-lg font-normal tracking-wide">Harta Cabinetului</span>
              <span className="text-xs text-[#f3f2ec]/60">&middot; Bistrița, str. Zorilor nr. 15</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Strada+Zorilor+15+Bistrita+Romania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline"
            >
              <span>Deschide în Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-[360px] sm:h-[420px] bg-neutral-200">
            {/* Google Maps iFrame with grayscale filter for cohesive luxury look */}
            <iframe
              title="Locație Cabinet Maria Folfa Bistrița"
              src="https://maps.google.com/maps?q=Strada%20Zorilor%2015,%20Bistrita,%20Romania&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:filter-none hover:opacity-100 transition-all duration-700"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
