import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Realizacje', href: '#realizacje' },
    { name: 'Opinie', href: '#opinie' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-neutral-800 py-3'
          : 'bg-black/50 border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="https://i.ibb.co/PsmHWRsZ/415745246-381297111086036-3519046571881379586-n.jpg"
                alt="WrapFactory Logo"
                className="h-10 w-10 object-contain rounded border border-neutral-800 group-hover:border-white transition-colors duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl tracking-tight leading-none text-white">
                  <span className="font-graffiti text-neutral-300 group-hover:text-white transition-colors duration-300">wrap</span>
                  <span className="font-factory font-bold uppercase tracking-wider pl-1">FACTORY</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-neutral-400">drukarnia & reklama</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-xs uppercase font-mono tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 py-2 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Phone */}
            <a
              href="tel:515188941"
              className="flex items-center gap-2 bg-white text-black text-xs font-mono tracking-wider font-bold px-4 py-2 hover:bg-neutral-200 active:scale-95 transition-all duration-200 border border-white"
            >
              <Phone className="w-3.5 h-3.5" />
              515 188 941
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Otwórz menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 border-b border-neutral-800"
            id="mobile-menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm uppercase font-mono tracking-widest text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors duration-200 border-l border-transparent hover:border-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3 px-3">
                <a
                  href="tel:515188941"
                  className="flex items-center justify-center gap-2 bg-white text-black text-sm font-mono tracking-wider font-bold py-3 hover:bg-neutral-200 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Zadzwoń: 515 188 941
                </a>
                <a
                  href="mailto:kontakt@wrapfactory.pl"
                  className="flex items-center justify-center gap-2 bg-neutral-900 text-white border border-neutral-700 text-sm font-mono tracking-wider py-3 hover:bg-neutral-800 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  kontakt@wrapfactory.pl
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
