import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Feather, Flame, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Practică Activă din 2018',
      desc: 'Formare profesională continuă și sute de ore de perfecționare în anatomie aplicată și biomecanică musculară.',
      icon: Award,
    },
    {
      title: 'Peste 1000 de Sesiuni',
      desc: 'Experiență clinică vastă cu pacienți confruntați cu dureri paravertebrale, contracturi cronice și oboseală cronică.',
      icon: Heart,
    },
    {
      title: 'Terapii Complementare',
      desc: 'Integrare de ventuze medicinale, roci vulcanice de bazalt, eliberare miofascială și reflexologie podală.',
      icon: Flame,
    },
  ];

  return (
    <section id="despre" className="py-14 sm:py-16 bg-[#f5f3ee] text-[#1a241b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase on Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative luxury frame accent */}
              <div className="absolute -inset-3 rounded-2xl border border-[#c9a86a]/35 -rotate-1 hidden sm:block pointer-events-none" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#1a241b]/10">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
                  alt="Maria Folfa - Terapeut Masaj Terapeutic"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a241b]/85 via-transparent to-transparent" />

                {/* Floating identity card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#fbfaf7]/95 backdrop-blur-md shadow-xl border border-[#1a241b]/10">
                  <p className="font-serif text-2xl font-normal text-[#1a241b] tracking-wide">
                    Maria Folfa
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3d4f3e] mt-0.5">
                    Terapeut Masaj &middot; Specialist Terapii Manuale
                  </p>
                  <div className="mt-2.5 pt-2.5 border-t border-[#1a241b]/10 flex items-center justify-between text-xs text-[#1a241b]/80">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#c9a86a]" />
                      Practică din 2018
                    </span>
                    <span className="font-serif font-semibold text-[#b69151]">
                      Bistrița, România
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content on Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3d4f3e] mb-2.5">
              <Feather className="w-4 h-4 text-[#c9a86a]" />
              <span>Etică &amp; Misiune Terapeutică</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1a241b] mb-5 leading-tight">
              Rigoare tehnică, atingere vindecătoare și respect pentru corp.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4e5d4f] font-light leading-relaxed mb-6">
              <p className="text-justify">
                Mă numesc <strong className="font-semibold text-[#1a241b]">Maria Folfa</strong>, iar din anul{' '}
                <strong className="font-semibold text-[#1a241b]">2018</strong> am ales să transform masajul
                dintr-o simplă procedură într-o formă autentică de restabilire a sănătății musculare și emoționale.
                Cu <strong className="font-semibold text-[#1a241b]">peste 1000 de sesiuni terapeutice</strong> desfășurate
                până în prezent, am observat impactul profund pe care o tehnică adecvată îl are asupra calității vieții.
              </p>
              <p className="text-justify">
                Fiecare corp vine cu o istorie specifică: posturi asimetrice, stres acumulat la nivelul trapezului,
                dureri paravertebrale sau oboseală limfatică. În cabinetul meu din Bistrița combin masajul terapeutic
                profund cu tehnici complementare recunoscute: ventuzoterapie pentru eliberarea aderențelor tisulare,
                roci vulcanice încălzite pentru detensionarea în profunzime și reflexoterapie pentru echilibrul
                sistemelor biologice.
              </p>
              <blockquote className="border-l-2 border-[#c9a86a] pl-4 my-3 italic font-serif text-base sm:text-lg text-[#253327] text-justify">
                „Adevărata terapie nu forțează mușchiul, ci îl ghidează să renunțe la tensiune prin presiune precisă,
                ritm constant și căldură.”
              </blockquote>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-[#1a241b]/10">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#fbfaf7] border border-[#1a241b]/10 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3d4f3e]/10 text-[#3d4f3e] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4 text-[#c9a86a]" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#1a241b] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4e5d4f] leading-relaxed font-normal text-justify">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
