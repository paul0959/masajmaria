import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Acasă', href: '#acasa' },
    { name: 'Despre Terapeut', href: '#despre' },
    { name: 'Terapii & Servicii', href: '#servicii' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Recenzii', href: '#recenzii' },
    { name: 'Contact & Locație', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fbfaf7]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(26,36,27,0.06)] border-b border-[#1a241b]/10 py-3.5'
          : 'bg-gradient-to-b from-[#1a241b]/90 via-[#1a241b]/50 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Prestige Brand Lockup */}
          <a
            href="#acasa"
            className="group flex flex-col focus:outline-none"
            aria-label="Cabinet Masaj Terapeutic Folfa Maria"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.18em] uppercase font-normal transition-colors duration-300 ${
                isScrolled ? 'text-[#1a241b]' : 'text-[#fbfaf7]'
              }`}
            >
              Folfa Maria
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-medium transition-colors duration-300 ${
                isScrolled ? 'text-[#b69151]' : 'text-[#c9a86a]'
              }`}
            >
              Cabinet Masaj Terapeutic
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors duration-300 relative py-1 hover:text-[#c9a86a] ${
                  isScrolled ? 'text-[#1a241b]/80' : 'text-[#f4f1ea]/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0745240799"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 border ${
                isScrolled
                  ? 'bg-[#1a241b] text-[#fbfaf7] border-[#1a241b] hover:bg-[#2e3e30]'
                  : 'bg-[#fbfaf7]/10 text-[#fbfaf7] border-[#c9a86a]/40 backdrop-blur-sm hover:bg-[#c9a86a] hover:text-[#1a241b] hover:border-[#c9a86a]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#c9a86a]" />
              <span className="tabular-nums">0745 240 799</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2.5 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[#1a241b] hover:bg-[#1a241b]/5'
                  : 'text-[#fbfaf7] bg-[#fbfaf7]/10 backdrop-blur-sm'
              }`}
              aria-label="Meniu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbfaf7] border-b border-[#1a241b]/10 px-5 pt-4 pb-7 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1a241b] hover:text-[#c9a86a] font-serif text-lg tracking-wide py-2 border-b border-[#1a241b]/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="tel:0745240799"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#1a241b] text-[#fbfaf7] text-xs uppercase tracking-wider font-semibold shadow"
              >
                <Phone className="w-4 h-4 text-[#c9a86a]" />
                <span className="tabular-nums">Apelează Cabinetul: 0745 240 799</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
