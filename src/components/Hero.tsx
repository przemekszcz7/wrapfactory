import React from 'react';
import { ChevronDown, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="o-nas"
      className="relative min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden pt-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      
      {/* Diagonal grid lines for a brutalist look */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neutral-800/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-neutral-800/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">


        {/* Big styled Heading mirroring user's logo style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-6"
        >
          {/* Subtle text stroke backdrop */}
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl font-factory font-black tracking-wider opacity-5 text-stroke-white pointer-events-none select-none uppercase">
            WRAPPING
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none text-white">
            <span className="font-graffiti text-neutral-300 block sm:inline-block rotate-[-3deg] sm:mr-4 select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
              wrap
            </span>
            <span className="font-factory font-black tracking-wider block sm:inline-block">
              FACTORY
            </span>
          </h1>
        </motion.div>

        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-sm sm:text-base text-neutral-400 font-sans tracking-wide mb-10 leading-relaxed"
        >
          Twój partner w brandingu wizualnym. Drukujemy, wycinamy i oklejamy bez kompromisów. Realizujemy autorskie projekty reklamowe na pojazdach, witrynach, odzieży oraz gadżetach na terenie województwa pomorskiego i całego kraju.
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full sm:w-auto"
        >
          <a
            href="#kontakt"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-mono uppercase text-xs tracking-widest font-bold px-8 py-4 border border-white hover:bg-neutral-200 transition-all duration-200 shadow-[0_4px_14px_rgba(255,255,255,0.1)] active:scale-95"
          >
            Wycena Naklejek i Druku
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#oferta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-950 text-white font-mono uppercase text-xs tracking-widest font-bold px-8 py-4 border border-neutral-800 hover:border-white transition-all duration-200 active:scale-95"
          >
            Nasza Oferta
          </a>
        </motion.div>

        {/* Quick Highlights / Bullet points from actual user info or high value specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full border-t border-neutral-900 pt-8 text-left"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-white mb-1">Dowolny Kształt i Rozmiar</h3>
              <p className="text-xs text-neutral-500">Specjalistyczne naklejki wycinane precyzyjnie po obrysie w dowolnej konfiguracji.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-white mb-1">Materiały Klasy Premium</h3>
              <p className="text-xs text-neutral-500">Stosujemy wyłącznie folie o podwyższonej trwałości i odporności na czynniki zewnętrzne.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-white mb-1">Sprawny Kontakt i Szybkość</h3>
              <p className="text-xs text-neutral-500">Doceń nasz krótki czas realizacji oraz rzetelną wycenę i terminową dostawę.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-600 mb-1">Przewiń</span>
        <ChevronDown className="w-4 h-4 text-neutral-600" />
      </div>
    </section>
  );
}
