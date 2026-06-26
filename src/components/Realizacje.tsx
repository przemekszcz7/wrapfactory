import React, { useState } from 'react';
import { realizacje } from '../data';
import { RealizacjaItem } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Realizacje() {
  const [activeProject, setActiveProject] = useState<RealizacjaItem>(realizacje[0]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Lightbox navigation
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentImages = activeProject.images;
    const currentIndex = currentImages.indexOf(lightboxImage || '');
    if (currentIndex > -1) {
      const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      setLightboxImage(currentImages[prevIndex]);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentImages = activeProject.images;
    const currentIndex = currentImages.indexOf(lightboxImage || '');
    if (currentIndex > -1) {
      const nextIndex = (currentIndex + 1) % currentImages.length;
      setLightboxImage(currentImages[nextIndex]);
    }
  };

  return (
    <section id="realizacje" className="py-24 bg-black px-4 sm:px-6 lg:px-8 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-2">NASZE PORTFOLIO</span>
            <h2 className="text-3xl sm:text-5xl font-factory font-black tracking-wider uppercase text-white">
              Ostatnie <span className="text-stroke-white text-3xl sm:text-5xl block sm:inline">Realizacje</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {realizacje.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(project);
                  setActiveImageIndex(0);
                }}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 border ${
                  activeProject.id === project.id
                    ? 'bg-white text-black border-white'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-500'
                }`}
              >
                {project.id === 'litery-przestrzenne' ? 'Litery 3D' : project.id === 'obrandowanie-pojazdow' ? 'Flota Pojazdów' : 'Naszywki'}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery View (Left side) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Active Image container with Hover Effect */}
            <div className="relative aspect-4/3 bg-neutral-950 border border-neutral-900 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeProject.id}-${activeImageIndex}`}
                  src={activeProject.images[activeImageIndex]}
                  alt={`${activeProject.title} - ${activeImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Lightbox Trigger Icon */}
              <button
                onClick={() => setLightboxImage(activeProject.images[activeImageIndex])}
                className="absolute top-4 right-4 p-2 bg-black/80 backdrop-blur border border-neutral-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black cursor-pointer"
                title="Powiększ zdjęcie"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-neutral-800 px-3 py-1 font-mono text-[10px] tracking-wider text-neutral-400">
                {activeImageIndex + 1} / {activeProject.images.length}
              </div>
            </div>

            {/* Thumbnail Selectors (if more than 1 image) */}
            {activeProject.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {activeProject.images.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-24 h-16 border bg-neutral-950 overflow-hidden shrink-0 transition-colors duration-200 ${
                      activeImageIndex === index ? 'border-white' : 'border-neutral-800 hover:border-neutral-500'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Miniaturka ${index + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column (Right side) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-2">PROJEKT ZBLIŻENIOWY</span>
            <h3 className="text-2xl sm:text-3xl font-factory font-bold uppercase tracking-wider text-white mb-6">
              {activeProject.title}
            </h3>

            <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed mb-8">
              {activeProject.description}
            </p>

            {/* Bullet Points from request */}
            <div className="space-y-4 mb-8">
              {activeProject.bullets.map((bullet, idx) => {
                // Split bullet to bold prefix if it contains custom bullet formatting
                const hasDelimiter = bullet.includes('–');
                const part1 = hasDelimiter ? bullet.split('–')[0] : bullet;
                const part2 = hasDelimiter ? bullet.split('–')[1] : '';
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-white text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-sans text-neutral-300">
                      {hasDelimiter ? (
                        <>
                          <strong className="text-white font-semibold">{part1}–</strong>
                          {part2}
                        </>
                      ) : (
                        bullet
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Extra content block from description */}
            {activeProject.extraText && (
              <div className="bg-neutral-950 border border-neutral-900 p-5 font-mono text-xs tracking-wide leading-relaxed text-neutral-400 border-l-4 border-l-white">
                {activeProject.extraText}
              </div>
            )}

            {/* Next Steps CTA */}
            <div className="mt-8 pt-8 border-t border-neutral-900 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="bg-white text-black font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 border border-white hover:bg-neutral-200 transition-colors duration-200"
              >
                Chcę podobny projekt
              </a>
              <a
                href="#kontakt"
                className="bg-neutral-950 text-neutral-400 font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 border border-neutral-800 hover:border-white hover:text-white transition-colors duration-200"
              >
                Zapytaj o wycenę
              </a>
            </div>
          </div>
        </div>

        {/* Lightbox Modal (For zoom/swiping) */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-2 bg-neutral-900 text-white border border-neutral-800 hover:bg-white hover:text-black cursor-pointer transition-all duration-200"
                title="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev button */}
              {activeProject.images.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-6 p-3 bg-neutral-900 text-white border border-neutral-800 hover:bg-white hover:text-black cursor-pointer transition-all duration-200"
                  title="Poprzednie"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Main Image */}
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={lightboxImage}
                alt="Full Resolution View"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain border border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next button */}
              {activeProject.images.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-6 p-3 bg-neutral-900 text-white border border-neutral-800 hover:bg-white hover:text-black cursor-pointer transition-all duration-200"
                  title="Następne"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Caption Indicator */}
              <div className="absolute bottom-6 bg-neutral-950 border border-neutral-800 px-4 py-2 text-center text-xs font-mono text-neutral-400">
                {activeProject.title} — Zdjęcie {activeProject.images.indexOf(lightboxImage) + 1} z {activeProject.images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
