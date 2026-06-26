import React, { useState } from 'react';
import { services } from '../data';
import { Layers, Car, Printer, Store, Tv, Shirt, FileText, Check, ChevronRight, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Map string names to Lucide icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  Layers: Layers,
  Car: Car,
  Printer: Printer,
  Store: Store,
  Tv: Tv,
  Shirt: Shirt,
  FileText: FileText,
};

export default function Services() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const [expandedIdMobile, setExpandedIdMobile] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedIdMobile(expandedIdMobile === id ? null : id);
  };

  const activeService = services.find((s) => s.id === activeId) || services[0];
  const ActiveIconComponent = iconMap[activeService.icon] || Layers;

  return (
    <section id="oferta" className="py-24 bg-neutral-950 px-4 sm:px-6 lg:px-8 relative border-t border-neutral-900">
      {/* Background decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-2">NASZE USŁUGI</span>
            <h2 className="text-3xl sm:text-5xl font-factory font-black tracking-wider uppercase text-white">
              Szeroki zakres <span className="text-stroke-white text-3xl sm:text-5xl block sm:inline">drukarni</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              Od mikro naklejek o nieregularnym kształcie po potężne banery, reklamy na samochodach czy podświetlane oznakowania 3D. Poznaj naszą pełną ofertę reklamową.
            </p>
          </div>
        </div>

        {/* Desktop View: Split Layout (Interactive List + Detail Showcase) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left Column: Vertical List */}
          <div className="col-span-6 space-y-2">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Layers;
              const isActive = service.id === activeId;
              
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group relative p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-neutral-900 border-white text-white'
                      : 'bg-black border-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Index */}
                    <span className={`text-xs font-mono font-bold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-neutral-700 group-hover:text-neutral-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className={`p-2 border transition-colors duration-300 ${
                      isActive ? 'bg-white text-black border-white' : 'bg-neutral-950 text-neutral-500 border-neutral-900 group-hover:border-neutral-800 group-hover:text-white'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <span className="text-lg font-factory font-bold uppercase tracking-wider">
                      {service.title}
                    </span>
                  </div>

                  {/* Indicator Arrow */}
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'translate-x-1 text-white' : 'text-neutral-800 group-hover:text-neutral-500'
                  }`} />

                  {/* Top-right corner graphic of active element */}
                  {isActive && (
                    <motion.div
                      layoutId="corner-graphic"
                      className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Detail Showcase Panel with Framed Background */}
          <div className="col-span-6 bg-black border border-neutral-900 p-10 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
            {/* Background absolute large logo decor */}
            <div className="absolute -bottom-16 -right-16 text-neutral-950 font-graffiti text-[18rem] select-none pointer-events-none font-bold opacity-30">
              W!
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative z-10"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-neutral-900 border border-neutral-800 text-white">
                    <ActiveIconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono tracking-[0.2em] text-neutral-500">
                    OFERTA #0{services.findIndex(s => s.id === activeId) + 1}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-factory font-black uppercase tracking-wider text-white">
                    {activeService.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Sub features list */}
                <div className="pt-6 border-t border-neutral-900 space-y-3">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">Specyfikacja i możliwości:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs text-neutral-400">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-neutral-900/40 relative z-10">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-300 transition-colors group"
              >
                <span>Zapytaj o tę usługę</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet View: Stacked Accordion List */}
        <div className="lg:hidden space-y-3">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layers;
            const isExpanded = expandedIdMobile === service.id;

            return (
              <div
                key={service.id}
                className="bg-black border border-neutral-900 transition-all duration-300 overflow-hidden"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggleMobileExpand(service.id)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-xs font-mono text-neutral-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="p-2 bg-neutral-900 border border-neutral-800 text-white shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-factory font-bold uppercase tracking-wider text-white">
                      {service.title}
                    </span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-neutral-500" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 pt-2 border-t border-neutral-900/50 space-y-4">
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 pt-2">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2 text-xs text-neutral-500">
                              <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <a
                            href="#kontakt"
                            className="inline-block text-center bg-white text-black font-mono text-[10px] uppercase tracking-wider font-bold px-4 py-2 border border-white"
                          >
                            Zapytaj o tę usługę
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA at the bottom */}
        <div className="mt-16 bg-black border border-neutral-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-neutral-800 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neutral-900 text-white font-graffiti text-xl rounded">
              W!
            </div>
            <div>
              <h4 className="text-sm uppercase font-mono tracking-wider font-bold text-white">Potrzebujesz niestandardowego projektu?</h4>
              <p className="text-xs text-neutral-500">Prześlij nam pliki graficzne i wymiary, a przygotujemy darmową wycenę.</p>
            </div>
          </div>
          <a
            href="#kontakt"
            className="w-full md:w-auto text-center bg-white text-black font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 border border-white hover:bg-neutral-200 transition-colors duration-200 active:scale-95"
          >
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
}
