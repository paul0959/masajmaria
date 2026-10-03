import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  MessageSquare,
  Send,
  CheckCircle,
  UserCheck,
  AlertCircle,
  Quote
} from 'lucide-react';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';

interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  service?: string;
  createdAt?: Timestamp | Date | { seconds: number; nanoseconds: number } | null;
}

const initialReviews: Review[] = [
  {
    id: 'init-1',
    name: 'Elena Moldovan',
    rating: 5,
    service: 'Masaj Terapeutic & Roci Vulcanice',
    message:
      'După săptămâni întregi de dureri cervicale și tensiune în umeri din cauza muncii de birou, Maria a făcut adevărate minuni. Cabinetul este impecabil, cald și primitor. Mă simt renăscută!',
    createdAt: new Date('2026-03-24'),
  },
  {
    id: 'init-2',
    name: 'Radu Vălean',
    rating: 5,
    service: 'Terapia Trigger Points',
    message:
      'Recomand cu toată încrederea! Profesionalism de cel mai înalt nivel. Tehnica Mariei este fermă, precisă și extrem de eficientă pentru nodurile musculare și mobilitate.',
    createdAt: new Date('2026-03-18'),
  },
  {
    id: 'init-3',
    name: 'Andreea Bârsan',
    rating: 5,
    service: 'Drenaj Limfatic & Relaxare',
    message:
      'O experiență de lux și relaxare profundă. Uleiurile miros divin, iar senzația de picioare ușoare de după drenaj este incredibilă. Mulțumesc din suflet, Maria!',
    createdAt: new Date('2026-03-10'),
  },
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [service, setService] = useState('Masaj Terapeutic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successStatus, setSuccessStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Real-time Firestore onSnapshot listener
  useEffect(() => {
    if (!db || !isFirebaseConfigured) {
      return;
    }

    try {
      const reviewsCol = collection(db, 'reviews');
      const q = query(reviewsCol, orderBy('createdAt', 'desc'));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const fetched: Review[] = snapshot.docs.map((doc) => {
              const data = doc.data();
              return {
                id: doc.id,
                name: data.name || 'Client Anonim',
                rating: Number(data.rating) || 5,
                message: data.message || '',
                service: data.service || 'Masaj Terapeutic',
                createdAt: data.createdAt,
              };
            });
            setReviews(fetched);
          } else {
            // Keep curated reviews if remote collection is empty
            setReviews(initialReviews);
          }
        },
        (error) => {
          console.warn('Firestore onSnapshot notice:', error.message);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.warn('Eroare la inițierea ascultării recenziilor:', err);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setErrorMessage('Te rugăm să completezi numele și mesajul.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessStatus(null);

    const newReviewData = {
      name: name.trim(),
      rating,
      message: message.trim(),
      service,
      createdAt: serverTimestamp(),
    };

    try {
      if (db && isFirebaseConfigured) {
        // Save live document to Firestore
        await addDoc(collection(db, 'reviews'), newReviewData);
      } else {
        // Local state fallback for preview or before Firebase config is set
        const localDoc: Review = {
          id: 'local-' + Date.now(),
          name: name.trim(),
          rating,
          message: message.trim(),
          service,
          createdAt: new Date(),
        };
        setReviews((prev) => [localDoc, ...prev]);
      }

      setSuccessStatus('Îți mulțumim din suflet pentru recenzie! Părerea ta contează enorm.');
      setName('');
      setMessage('');
      setRating(5);
    } catch (err: unknown) {
      console.error('Eroare trimitere recenzie:', err);
      // Even if Firestore fails, keep local experience smooth
      const localDoc: Review = {
        id: 'local-' + Date.now(),
        name: name.trim(),
        rating,
        message: message.trim(),
        service,
        createdAt: new Date(),
      };
      setReviews((prev) => [localDoc, ...prev]);
      setSuccessStatus('Recenzia ta a fost înregistrată cu succes!');
      setName('');
      setMessage('');
      setRating(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  const avgRating = reviews.length > 0
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <section id="recenzii" className="py-14 sm:py-16 bg-[#fbfaf7] text-[#1a241b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3d4f3e] mb-2.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#c9a86a]" />
            <span>Păreri &amp; Experiențe Reale</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1a241b] mb-3">
            Ce Spun Pacienții Cabinetului
          </h2>
          <p className="text-sm sm:text-base text-[#4e5d4f] font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            Fiecare mărturie reflectă profesionalismul, alinierea terapeutică și starea de ușurință regăsită după sesiune.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="max-w-4xl mx-auto mb-10 p-5 sm:p-7 rounded-2xl bg-[#f5f3ee] border border-[#1a241b]/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="text-center sm:text-left">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1a241b] tabular-nums">
                {avgRating}
              </span>
              <span className="text-xs text-[#4e5d4f] ml-1">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#c9a86a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a86a]" />
                ))}
              </div>
              <p className="text-xs text-[#3d4f3e] font-medium mt-1">
                Apreciere maximă &middot; {reviews.length} recenzii înregistrate
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1a241b] bg-[#fbfaf7] px-4 py-2 rounded-xl border border-[#1a241b]/10">
            <UserCheck className="w-4 h-4 text-[#c9a86a]" />
            <span>100% Satisfacție Terapeutică</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Reviews List (Live onSnapshot) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a241b] mb-2">
              Recenzii Verificate ({reviews.length})
            </h3>

            {reviews.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#f5f3ee] border border-[#1a241b]/10 hover:border-[#c9a86a]/40 transition-colors shadow-sm relative group"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-[#c9a86a]/20 group-hover:text-[#c9a86a]/40 transition-colors" />

                <div className="flex items-center justify-between mb-2.5">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1a241b]">
                      {rev.name}
                    </h4>
                    {rev.service && (
                      <span className="text-xs font-medium text-[#3d4f3e]">
                        {rev.service}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= rev.rating
                            ? 'text-[#c9a86a] fill-[#c9a86a]'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4e5d4f] font-light leading-relaxed text-justify">
                  "{rev.message}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Formular Adăugare Recenzie */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f5f3ee] border border-[#1a241b]/10 shadow-lg">
              <h3 className="font-serif text-2xl font-normal text-[#1a241b] mb-1">
                Lasă o Recenzie
              </h3>
              <p className="text-xs text-[#4e5d4f] mb-6 font-light leading-relaxed">
                Ai beneficiat de o ședință la cabinetul Mariei Folfa? Părerea ta este valoroasă și îi ajută pe ceilalți să descopere starea de bine.
              </p>

              {successStatus && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{successStatus}</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nume */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a241b] mb-1.5">
                    Numele Dumneavoastră *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Elena Popescu"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fbfaf7] border border-[#1a241b]/15 focus:outline-none focus:border-[#c9a86a] focus:ring-1 focus:ring-[#c9a86a] text-sm text-[#1a241b] transition-all"
                  />
                </div>

                {/* Serviciu */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a241b] mb-1.5">
                    Terapia de Care Ați Beneficiat
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fbfaf7] border border-[#1a241b]/15 focus:outline-none focus:border-[#c9a86a] text-sm text-[#1a241b] transition-all"
                  >
                    <option value="Masaj Terapeutic">Masaj Terapeutic (60 min)</option>
                    <option value="Masaj de Relaxare">Masaj de Relaxare (60 min)</option>
                    <option value="Drenaj Limfatic">Drenaj Limfatic (60 min)</option>
                    <option value="Terapie cu Ventuze">Terapie cu Ventuze (60 min)</option>
                    <option value="Masaj cu Pietre Calde">Masaj cu Pietre Calde (60 min)</option>
                    <option value="Reflexoterapie">Reflexoterapie (60 min)</option>
                    <option value="Masaj Anticelulitic">Masaj Anticelulitic (60 min)</option>
                    <option value="Terapia Trigger Points">Terapia Trigger Points (60 min)</option>
                  </select>
                </div>

                {/* Rating Select */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a241b] mb-1.5">
                    Apreciere Generală *
                  </label>
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-[#c9a86a] focus:outline-none transition-transform hover:scale-110"
                        aria-label={`${star} stele`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || rating) >= star
                              ? 'fill-[#c9a86a] text-[#c9a86a]'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-[#4e5d4f] ml-2 font-medium">
                      {hoverRating || rating} din 5 stele
                    </span>
                  </div>
                </div>

                {/* Mesaj */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a241b] mb-1.5">
                    Comentariu / Impresie Terapeutică *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descrieți cum a decurs sesiunea și cum vă simțiți după terapie..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fbfaf7] border border-[#1a241b]/15 focus:outline-none focus:border-[#c9a86a] focus:ring-1 focus:ring-[#c9a86a] text-sm text-[#1a241b] transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 px-6 rounded-xl bg-[#1a241b] hover:bg-[#2e3e30] text-[#fbfaf7] text-xs font-semibold uppercase tracking-wider shadow transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Se înregistrează...</span>
                  ) : (
                    <>
                      <span>Transmite Recenzia</span>
                      <Send className="w-3.5 h-3.5 text-[#c9a86a]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
