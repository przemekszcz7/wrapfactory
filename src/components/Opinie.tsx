import React from 'react';
import { reviews } from '../data';
import { Star, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Opinie() {
  return (
    <section id="opinie" className="py-24 bg-black px-4 sm:px-6 lg:px-8 relative border-t border-neutral-900">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-2">ZADOWOLENI KLIENCI</span>
            <h2 className="text-3xl sm:text-5xl font-factory font-black tracking-wider uppercase text-white">
              Opinie z <span className="text-stroke-white text-3xl sm:text-5xl block sm:inline">Facebooka</span>
            </h2>
          </div>
          <div>
            <a
              href="https://www.facebook.com/WrapFactorypl/reviews/?id=100076172503393&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white border border-neutral-800 hover:border-white px-5 py-3 transition-colors duration-200"
            >
              Zobacz profil na FB
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-950 border border-neutral-900 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Backquote decorative symbol */}
              <div className="absolute top-4 right-4 text-7xl font-serif text-neutral-900 leading-none select-none pointer-events-none font-black opacity-30">
                ”
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-white">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white shrink-0" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm font-sans text-neutral-300 leading-relaxed italic mb-8 relative z-10">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-neutral-900">
                {/* Initial circle avatar */}
                <div className="w-10 h-10 rounded-full bg-white text-black font-mono font-bold text-sm flex items-center justify-center">
                  {review.author.split(' ').map(part => part[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-white">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mt-0.5">
                    <span className="font-mono">{review.date}</span>
                    <span>•</span>
                    <span className="text-neutral-400 flex items-center gap-0.5">
                      Polecam na FB
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Link Banner */}
        <div className="mt-16 bg-neutral-950 border border-neutral-900 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-neutral-800 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neutral-900 border border-neutral-800 text-white rounded">
              <ThumbsUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm uppercase font-mono tracking-wider font-bold text-white">Otrzymałeś od nas gotowy projekt?</h4>
              <p className="text-xs text-neutral-500">Podziel się swoją opinią na naszym profilu i pomóż nam się rozwijać.</p>
            </div>
          </div>
          <a
            href="https://www.facebook.com/WrapFactorypl/reviews/?id=100076172503393&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-white text-black font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 border border-white hover:bg-neutral-200 transition-all duration-200"
          >
            Dodaj Opinię na FB
          </a>
        </div>
      </div>
    </section>
  );
}
