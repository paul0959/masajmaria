import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Sparkles,
  Droplets,
  CircleDot,
  Flame,
  Footprints,
  Zap,
  Target,
  Clock,
  Phone,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  SlidersHorizontal
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  categoryKey: 'medical' | 'wellness' | 'drainage';
  duration: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
  indication: string;
  shortDesc: string;
  fullDesc: string;
  protocol: string[];
  effects: string[];
  recommendations: string;
}

const servicesCatalog: ServiceDetail[] = [
  {
    id: 'masaj-terapeutic',
    title: 'Masaj Terapeutic',
    category: 'Terapii Decontracturante & Medicale',
    categoryKey: 'medical',
    duration: '60 min',
    price: '140 RON',
    icon: Activity,
    indication: 'Recomandat pentru dureri de spate, contracturi musculare cronice și postură deficitară.',
    shortDesc:
      'Terapie manuală de mare precizie axată pe decontracturarea musculaturii paravertebrale, a zonei lombare și a centurii scapulare. Ameliorează durerile cronice și restabilește mobilitatea.',
    fullDesc:
      'Masajul terapeutic este o procedură medical-recuperatorie structurată pe biomecanica musculară. Intervenția începe prin încălzirea treptată a straturilor superficiale, urmată de fricțiuni profunde, presiuni paravertebrale țintite și tehnici de elongație musculară. Se insistă pe segmentele anatomice cu rigiditate crescută pentru reducerea compresiei nervoase și deblocarea circulației locale.',
    protocol: [
      'Evaluare posturală și palpare pentru identificarea zonelor de hipertonie musculară.',
      'Pregătirea țesutului cu uleiuri nutritive calde și mișcări preparatorii de effleurage.',
      'Frământare profundă a fasciei musculare și decontracturare pas cu pas.',
      'Manevre pasive de stretching și restabilirea mobilității articulare.',
    ],
    effects: [
      'Decontracturarea musculaturii paravertebrale și cervicale',
      'Reducerea presiunii exercitate pe rădăcinile nervoase',
      'Ameliorarea mobilității coloanei și relaxare tisulară',
      'Accelerarea eliminării acidului lactic și a deșeurilor celulare',
    ],
    recommendations:
      'Se recomandă consumul ridicat de apă după ședință pentru facilitarea eliminării toxinelor și evitarea efortului fizic intens timp de câteva ore.',
  },
  {
    id: 'terapia-trigger-points',
    title: 'Terapia Trigger Points',
    category: 'Terapii Decontracturante & Medicale',
    categoryKey: 'medical',
    duration: '60 min',
    price: '140 RON',
    icon: Target,
    indication: 'Pentru dureri refractare iradiate în umeri, membre sau ceafă, migrene de tensiune.',
    shortDesc:
      'Identificarea și dezactivarea manuală a nodulilor hiperiritabili (puncte trigger) din mușchiul scheletic prin compresie ischemică controlată și manevre miofasciale.',
    fullDesc:
      'Punctele trigger sunt focare hiperiritabile din benzile musculare tensionate, responsabile de dureri locale și dureri referite la distanță. Tehnica utilizează presiune ischemică susținută cu degetele sau eminența tenară, forțând țesutul să se oxigeneze după eliberare, rupând astfel cercul vicios durere-spasm-ischemie.',
    protocol: [
      'Cartografierea manuală a zonelor de durere referită și identificarea nodulilor dureroși.',
      'Compresie digitală ischemică progresivă până la diminuarea pragului algic.',
      'Elongare lentă a fibrelor tratate și eliberare fascială asistată.',
      'Netezire calmantă și drenaj vascular al zonei tratate.',
    ],
    effects: [
      'Dezactivarea focarelor de durere cronică iradiată',
      'Restaurarea lungimii anatomice fiziologice a fibrei',
      'Diminuarea tensiunilor ce provoacă cefalee cervicogenă',
      'Restabilirea libertății firești de mișcare',
    ],
    recommendations:
      'Zona tratată poate resimți o ușoară febră musculară tranzitorie timp de 24 de ore, semn al reactivării circulației și al regenerării fibrelor.',
  },
  {
    id: 'terapie-ventuze',
    title: 'Terapie cu Ventuze',
    category: 'Terapii Decontracturante & Medicale',
    categoryKey: 'medical',
    duration: '60 min',
    price: '140 RON',
    icon: CircleDot,
    indication: 'Eficientă pentru aderențe fasciale rigide, congestie musculară și recuperare.',
    shortDesc:
      'Procedură tradițională prin crearea unui vid controlat ce aduce sânge oxigenat proaspăt în țesuturile profunde, degajând straturile fasciale blocate.',
    fullDesc:
      'Terapia cu ventuze medicinale utilizează principiul presiunii negative (vacuum). Prin aspirarea controlată a pielii și a straturilor subcutanate, spațiile intercelulare se lărgesc, aderențele miofasciale se separă, iar microcirculația sangvină și limfatică este intens stimulată.',
    protocol: [
      'Ungerea generoasă a spatelui cu uleiuri de bază naturale pentru glisare optimă.',
      'Aplicarea ventuzelor prin vacuum controlat pe traseele meridianelor musculare.',
      'Tehnica ventuzelor glisate (masaj cu ventuze) pentru dispersarea congestiilor.',
      'Fixare punctiformă pe zonele cu spasm muscular profund, urmată de masaj liniștitor.',
    ],
    effects: [
      'Separarea aderențelor fasciale rigide și fibroase',
      'Aflux masiv de sânge proaspăt și oxigen în mușchi',
      'Decongestionarea profundă a țesuturilor paravertebrale',
      'Accelerarea proceselor naturale de autovindecare',
    ],
    recommendations:
      'Urmele circulare roșiatice sunt o reacție fiziologică normală de detoxifiere (nu sunt echimoze traumatice) și dispar natural în 3-7 zile.',
  },
  {
    id: 'masaj-relaxare',
    title: 'Masaj de Relaxare',
    category: 'Stare de Bine & Recuperare Senzorială',
    categoryKey: 'wellness',
    duration: '60 min',
    price: '140 RON',
    icon: Sparkles,
    indication: 'Ideal pentru eliberarea stresului psiho-emoțional, insomnii și epuizare fizică.',
    shortDesc:
      'Manevre fluide, blânde și ritmice aplicate cu uleiuri calde aromatice. Stimulează sistemul nervos parasimpatic și induce o stare profundă de armonie.',
    fullDesc:
      'O experiență imersivă dedicată calmării sistemului nervos central. Cu o viteză constantă și o presiune plăcut calibrată, mișcările lungi de netezire și fricțiune ușoară ajută creierul să secrete endorfine și serotonină, reducând nivelul de cortizol și tensiunea psihosomatică acumulată.',
    protocol: [
      'Pregătirea atmosferei senzoriale: lumină caldă discretă și aromaterapie subtilă.',
      'Aplicarea uleiului vegetal încălzit pe spate, umeri, membre și zona cervicală.',
      'Manevre blânde de efleuraj, frământare superficială și vibrații ritmice armonioase.',
      'Finalizare cu neteziri calmante ce induc o stare meditativă de odihnă.',
    ],
    effects: [
      'Reducerea semnificativă a cortizolului și a anxietății',
      'Favorizarea unui somn nocturn profund și odihnitor',
      'Stimularea circulației capilare și hidratarea pielii',
      'Stare generală de serenitate și echilibru interior',
    ],
    recommendations:
      'După sesiune se recomandă o tranziție lentă către activitățile zilnice și evitarea stimulilor puternici pentru menținerea stării de relaxare.',
  },
  {
    id: 'masaj-pietre-calde',
    title: 'Masaj cu Pietre Calde',
    category: 'Stare de Bine & Recuperare Senzorială',
    categoryKey: 'wellness',
    duration: '60 min',
    price: '140 RON',
    icon: Flame,
    indication: 'Pentru rigiditate articulară, frig interior, tensiune profundă și oboseală cronică.',
    shortDesc:
      'Rocile vulcanice naturale de bazalt transferă căldura terapeutică adânc în masa musculară, dizolvând nodurile de tensiune fără durere.',
    fullDesc:
      'Terapia geotermală combină proprietățile energetice și capacitive ale pietrelor vulcanice de bazalt încălzite la 50-55°C. Căldura radiată pătrunde până la 3-4 centimetri în profunzimea țesuturilor musculare, dilatând vasele de sânge și relaxând fibrele fără presiuni agresive.',
    protocol: [
      'Așezarea strategică a rocilor calde pe centrii energetici și paravertebrali.',
      'Masaj activ executat direct cu pietrele vulcanice unse în uleiuri aromatice.',
      'Glisări termice lungi de-a lungul coloanei vertebrale și al membrelor.',
      'Integrarea manevrelor manuale cu pietre staționare pentru amplificarea efectului termic.',
    ],
    effects: [
      'Vasodilatație puternică și oxigenare celulară superioară',
      'Relaxare musculară profundă indusă termic fără disconfort',
      'Calmarea terminațiilor nervoase periferice sensibile',
      'Stimularea metabolismului și eliminarea toxinelor prin sudorație fină',
    ],
    recommendations:
      'Nu este recomandat în stări febrile, inflamații acute, varice pronunțate sau afecțiuni dermatologice active.',
  },
  {
    id: 'reflexoterapie',
    title: 'Reflexoterapie Podală',
    category: 'Stare de Bine & Recuperare Senzorială',
    categoryKey: 'wellness',
    duration: '60 min',
    price: '140 RON',
    icon: Footprints,
    indication: 'Pentru dezechilibre funcționale, tulburări digestive, retenție și reglare energetică.',
    shortDesc:
      'Presopunctură precisă pe centrii reflexogeni ai tălpilor conectați cu organele interne, stimulând procesele naturale de autovindecare.',
    fullDesc:
      'Reflexoterapia se bazează pe harta terminatiilor nervoase ale tălpilor, unde fiecare punct corespunde unui organ sau sistem biologic. Prin tehnici specifice de apăsare, fricțiune și rotire cu policele, se stimulează impulsurile nervoase care ajung la organele corespondente, deblocând fluxurile circulatorii și bioenergetice.',
    protocol: [
      'Pregătirea tălpilor și încălzirea articulațiilor gleznelor.',
      'Palparea de diagnoză pentru detectarea depozitelor de cristale de urați și a sensibilității.',
      'Lucru sistematic pe centrii reflexi: coloană, plex solar, sistem renal, digestiv și limfatic.',
      'Masaj reconfortant de încheiere pentru relaxarea completă a picioarelor.',
    ],
    effects: [
      'Echilibrarea funcțională a organelor interne și a digestiei',
      'Stimularea eliminării reziduurilor metabolice stagnante',
      'Reglarea tonusului vegetativ și a circulației periferice',
      'Senzație intensă de lejeritate la nivelul întregului corp',
    ],
    recommendations:
      'Hidratarea post-sesiune este esențială pentru a sprijini rinichii în filtrarea toxinelor mobilizate în timpul masajului.',
  },
  {
    id: 'drenaj-limfatic',
    title: 'Drenaj Limfatic Manual',
    category: 'Drenaj & Detoxifiere Tisulară',
    categoryKey: 'drainage',
    duration: '60 min',
    price: '140 RON',
    icon: Droplets,
    indication: 'Pentru retenție de lichide, picioare grele, edeme post-traumatice și detoxifiere.',
    shortDesc:
      'Presiuni ușoare și pompaje ritmice de-a lungul ganglionilor limfatici, stimulând eliminarea lichidelor captive și susținând imunitatea.',
    fullDesc:
      'Spre deosebire de masajul muscular, drenajul limfatic acționează la nivelul țesutului conjunctiv lax superficial. Prin mișcări extrem de blânde, circulare și de pompaj ritmic orientate către stațiile ganglionare (inghinale, axilare, supraclaviculare), este stimulată motricitatea vaselor limfatice, facilitând resorbția edemelor.',
    protocol: [
      'Deblocarea inițială a marilor stații ganglionare prin presiuni ușoare sincrone cu respirația.',
      'Manevre blânde de apel și absorbție pe membrele inferioare și superioare.',
      'Pompaje ritmice ascendente ce conduc lichidul interstițial către filtrele ganglionare.',
      'Neteziri delicate pentru stabilizarea presiunii vasculare.',
    ],
    effects: [
      'Resorbția rapidă a retenției hidrice și a senzației de picioare grele',
      'Susținerea filtrării imunitare și a detoxifierii organismului',
      'Reducerea inflamațiilor tisulare non-infecțioase',
      'Senzație de ușurință și lejeritate corporală imediată',
    ],
    recommendations:
      'Terapia are un puternic efect diuretic natural; asigurați-vă că beți apă plată înainte și după ședință.',
  },
  {
    id: 'masaj-anticelulitic',
    title: 'Masaj Anticelulitic',
    category: 'Drenaj & Detoxifiere Tisulară',
    categoryKey: 'drainage',
    duration: '60 min',
    price: '140 RON',
    icon: Zap,
    indication: 'Pentru diminuarea nodulilor adiposi, ameliorarea texturii pielii și tonifiere.',
    shortDesc:
      'Manevre viguroase, frământări și fricțiuni energice ce vizează activarea metabolismului local și redarea fermității pielii.',
    fullDesc:
      'Masajul anticelulitic este un tratament intensiv care acționează asupra hipodermului. Manevrele ferme de palpare-rulare, frământare profundă și percuție activează circulația sangvină locală, cresc temperatura țesutului și stimulează fibroblastele să sintetizeze colagen și elastină, netezind aspectul de coajă de portocală.',
    protocol: [
      'Încălzirea musculaturii și a tegumentului prin fricțiuni rapide.',
      'Tehnici de palpare-rulare manuală aplicate pe zonele cu depozite adipoase.',
      'Frământări ferme adaptate pentru fragmentarea micronodulilor de celulită.',
      'Drenaj limfatic local pentru evacuarea lichidelor mobilizate.',
    ],
    effects: [
      'Ameliorarea vizibilă a texturii și tonusului tegumentar',
      'Stimularea drenajului limfatic și al retenției din țesutul adipos',
      'Îmbunătățirea sintezei naturale de colagen și elastină',
      'Revitalizarea microcirculației capilare subcutanate',
    ],
    recommendations:
      'Pentru rezultate optime, se recomandă serii consecutive însoțite de o hidratare adecvată și o alimentație echilibrată.',
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'medical' | 'wellness' | 'drainage'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceDetail | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredServices = activeCategory === 'all'
    ? servicesCatalog
    : servicesCatalog.filter((s) => s.categoryKey === activeCategory);

  return (
    <section id="servicii" className="py-14 sm:py-16 bg-[#fbfaf7] text-[#1a241b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3d4f3e] mb-2.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#c9a86a]" />
            <span>Meniu Terapeutic Specializat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1a241b] mb-3">
            Terapii &amp; Servicii de Masaj
          </h2>
          <p className="text-sm sm:text-base text-[#4e5d4f] font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            Toate tratamentele au durata standard de 60 de minute și tariful unic de 140 RON.
            Selectează oricare terapie pentru a deschide fișa completă de informații medicale și protocol.
          </p>
        </div>

        {/* Structured Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'Toate Terapiile (8)' },
            { key: 'medical', label: 'Terapii Medicale & Decontracturante' },
            { key: 'wellness', label: 'Relaxare & Roci Vulcanice' },
            { key: 'drainage', label: 'Drenaj & Detoxifiere' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeCategory === tab.key
                  ? 'bg-[#1a241b] text-[#fbfaf7] shadow-sm'
                  : 'bg-[#f5f3ee] text-[#4e5d4f] hover:text-[#1a241b] hover:bg-[#ede9e0] border border-[#1a241b]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setActiveModalService(service)}
                className="cursor-pointer flex flex-col justify-between p-6 rounded-2xl bg-[#f5f3ee] border border-[#1a241b]/10 hover:border-[#c9a86a]/60 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Top card row: Icon & Price */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#1a241b] text-[#c9a86a] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#2e3e30] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1a241b] tabular-nums tracking-tight">
                        {service.price}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#3d4f3e] font-medium">
                        <Clock className="w-3 h-3 text-[#b69151]" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category note */}
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#b69151] font-semibold block mb-1">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#1a241b] mb-2 group-hover:text-[#3d4f3e] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description: Aliniat stanga dreapta */}
                  <p className="text-xs text-[#4e5d4f] font-light leading-relaxed mb-4 text-justify">
                    {service.shortDesc}
                  </p>

                  {/* Indication bullet */}
                  <div className="p-2.5 rounded-lg bg-[#fbfaf7] border border-[#1a241b]/5 text-[11px] text-[#3d4f3e] font-medium leading-snug mb-4">
                    <span className="font-semibold text-[#1a241b]">Indicație: </span>
                    {service.indication}
                  </div>
                </div>

                {/* Card Action Trigger */}
                <div className="pt-2 border-t border-[#1a241b]/10 flex items-center justify-between text-xs font-semibold text-[#1a241b] group-hover:text-[#b69151] transition-colors">
                  <span>Vezi Fișa Completă</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c9a86a] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Window: Fereastră cu informații, descriere, protocol etc. */}
        <AnimatePresence>
          {activeModalService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="fixed inset-0 z-50 bg-[#1a241b]/80 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#fbfaf7] rounded-2xl shadow-2xl border border-[#c9a86a]/35 overflow-hidden my-auto text-[#1a241b]"
              >
                {/* Modal Header */}
                <div className="p-6 sm:p-8 bg-[#1a241b] text-[#fbfaf7] flex items-start justify-between gap-4 border-b border-[#c9a86a]/30">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c9a86a]">
                      {activeModalService.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#fbfaf7]">
                      {activeModalService.title}
                    </h3>
                    <div className="flex items-center gap-3 pt-1 text-xs text-[#f4f1ea]/80">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#c9a86a]" />
                        Durată: {activeModalService.duration}
                      </span>
                      <span>&middot;</span>
                      <span className="font-serif font-bold text-base text-[#c9a86a] tabular-nums">
                        Tarif: {activeModalService.price}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalService(null)}
                    className="p-2 rounded-full bg-[#fbfaf7]/10 hover:bg-[#fbfaf7]/20 text-[#fbfaf7] transition-colors focus:outline-none shrink-0"
                    aria-label="Închide fereastra"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                  {/* Descriere Terapeutică: Aliniat stânga-dreapta */}
                  <div>
                    <h4 className="font-serif text-lg font-normal text-[#1a241b] mb-2 flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-[#b69151]" />
                      <span>Descriere &amp; Acțiune Terapeutică</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4e5d4f] font-light leading-relaxed text-justify">
                      {activeModalService.fullDesc}
                    </p>
                  </div>

                  {/* Protocolul Sesiunii */}
                  <div className="p-5 rounded-xl bg-[#f5f3ee] border border-[#1a241b]/10 space-y-3">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1a241b] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#3d4f3e]" />
                      <span>Desfășurarea Ședinței (Protocol 60 min)</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4e5d4f] font-light">
                      {activeModalService.protocol.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#1a241b] text-[#c9a86a] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-justify">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Efecte & Beneficii */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1a241b] mb-2.5">
                      Beneficii &amp; Efecte Fiziologice
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4e5d4f]">
                      {activeModalService.effects.map((eff, i) => (
                        <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-[#f5f3ee]/60">
                          <Check className="w-3.5 h-3.5 text-[#b69151] shrink-0 mt-0.5" />
                          <span>{eff}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recomandări */}
                  <div className="text-xs text-[#4e5d4f] font-light p-3.5 rounded-lg border-l-2 border-[#c9a86a] bg-[#f5f3ee] text-justify">
                    <strong className="font-semibold text-[#1a241b]">Recomandare post-ședință: </strong>
                    {activeModalService.recommendations}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-5 sm:p-6 bg-[#f5f3ee] border-t border-[#1a241b]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-[#4e5d4f] text-center sm:text-left">
                    Stabilirea ședințelor se realizează prin apel direct.
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveModalService(null)}
                      className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-[#1a241b]/20 text-xs font-semibold uppercase tracking-wider hover:bg-[#ede9e0] transition-colors"
                    >
                      Închide
                    </button>
                    <a
                      href="tel:0745240799"
                      className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a241b] hover:bg-[#2e3e30] text-[#fbfaf7] text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#c9a86a]" />
                      <span>0745 240 799</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
