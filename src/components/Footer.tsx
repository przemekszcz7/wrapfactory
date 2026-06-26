import React from 'react';
import { Phone, Mail, MapPin, Facebook, ArrowUp, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic line effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/PsmHWRsZ/415745246-381297111086036-3519046571881379586-n.jpg"
                alt="WrapFactory Logo"
                className="h-10 w-10 object-contain rounded border border-neutral-800"
              />
              <div className="flex flex-col">
                <span className="text-xl tracking-tight leading-none text-white">
                  <span className="font-graffiti text-neutral-300">wrap</span>
                  <span className="font-factory font-bold uppercase tracking-wider pl-1">FACTORY</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-neutral-400">drukarnia & reklama</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed font-sans">
              Specjalistyczne naklejki o dowolnym kształcie, wielkoformatowy druk najwyższej jakości, oklejanie pojazdów firmowych, banery reklamowe i gadżety z Twoim logo.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/WrapFactorypl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-white transition-all rounded-full"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Szybkie Linki */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
              Nawigacja
            </h4>
            <ul className="space-y-2 font-mono text-xs text-neutral-500">
              <li>
                <a href="#o-nas" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  O nas / Start
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Nasza Oferta
                </a>
              </li>
              <li>
                <a href="#realizacje" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Ostatnie Realizacje
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Kontakt i Wycena
                </a>
              </li>
              <li>
                <a href="#opinie" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Opinie Klientów
                </a>
              </li>
            </ul>
          </div>

          {/* Godziny Otwarcia / Dane */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
              Informacje
            </h4>
            <ul className="space-y-3.5 font-sans text-xs text-neutral-500">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Szkolna 1a</span>
                  <span>77-140 Kołczygłowy</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-600 shrink-0" />
                <a href="tel:515188941" className="hover:text-white font-mono transition-colors">
                  515 188 941
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-600 shrink-0" />
                <a href="mailto:kontakt@wrapfactory.pl" className="hover:text-white font-mono transition-colors">
                  kontakt@wrapfactory.pl
                </a>
              </li>
            </ul>
          </div>

          {/* Up arrow shortcuts */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-start">
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-white transition-all cursor-pointer flex items-center gap-2 font-mono text-xs uppercase tracking-wider"
              title="Do góry"
            >
              <ArrowUp className="w-4 h-4" />
              Góra
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] font-mono text-neutral-600 gap-4">
          <div>
            © {new Date().getFullYear()} Drukarnia WrapFactory. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Polityka Prywatności</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Regulamin Usług</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
