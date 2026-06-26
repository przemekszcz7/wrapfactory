import React from 'react';
import { Phone, Mail, MapPin, Facebook, FileText, Check, ArrowUpRight, HelpCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Kontakt() {
  const preparationSteps = [
    {
      title: 'Formaty plików',
      desc: 'Najlepiej przesyłać grafiki wektorowe: PDF, EPS, AI lub CDR. Pliki rastrowe (JPG, PNG, TIFF) powinny mieć rozdzielczość minimum 300 DPI w skali 1:1.',
    },
    {
      title: 'Przestrzeń barwna',
      desc: 'Wszystkie projekty przeznaczone do druku powinny być przygotowane w palecie kolorów CMYK. Pliki przesłane w RGB zostaną automatycznie przekonwertowane.',
    },
    {
      title: 'Krzywe (czcionki)',
      desc: 'Upewnij się, że wszystkie teksty w plikach wektorowych są zamienione na krzywe. Zapobiega to brakom w czcionkach przy otwieraniu plików na naszych maszynach.',
    },
    {
      title: 'Spady i marginesy',
      desc: 'Dla projektów przycinanych do krawędzi prosimy o zachowanie spadów minimum 2-3 mm z każdej strony oraz bezpiecznego marginesu dla ważnych elementów.',
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-neutral-950 px-4 sm:px-6 lg:px-8 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-2">KONTAKT</span>
              <h2 className="text-3xl sm:text-5xl font-factory font-black tracking-wider uppercase text-white mb-6">
                Skontaktuj <span className="text-stroke-white">się z nami</span>
              </h2>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                Nasz warsztat i biuro obsługi mieszczą się w Kołczygłowach. Chętnie pomożemy w doborze materiałów, doradzimy i przygotujemy dla Ciebie indywidualną wycenę. Zadzwoń, napisz maila lub odwiedź nas osobiście.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:515188941"
                className="flex items-center gap-4 p-5 bg-black border border-neutral-900 hover:border-white transition-colors duration-200 group"
              >
                <div className="p-3 bg-neutral-900 group-hover:bg-white group-hover:text-black text-white transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">Zadzwoń bezpośrednio</span>
                  <span className="text-lg font-mono font-bold text-white">515 188 941</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kontakt@wrapfactory.pl"
                className="flex items-center gap-4 p-5 bg-black border border-neutral-900 hover:border-white transition-colors duration-200 group"
              >
                <div className="p-3 bg-neutral-900 group-hover:bg-white group-hover:text-black text-white transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">Napisz e-mail</span>
                  <span className="text-base font-mono font-bold text-white break-all">kontakt@wrapfactory.pl</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-5 bg-black border border-neutral-900 hover:border-neutral-800 transition-colors duration-200">
                <div className="p-3 bg-neutral-900 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">Odwiedź nas</span>
                  <span className="text-sm font-sans font-bold text-white block">ul. Szkolna 1a</span>
                  <span className="text-xs font-mono text-neutral-400">77-140 Kołczygłowy</span>
                </div>
              </div>

              {/* Facebook Page link */}
              <a
                href="https://www.facebook.com/WrapFactorypl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-black border border-neutral-900 hover:border-white transition-colors duration-200 group"
              >
                <div className="p-3 bg-neutral-900 group-hover:bg-[#1877F2] text-white transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">Śledź nas na Facebooku</span>
                  <span className="text-sm font-sans font-bold text-white">fb.com/WrapFactorypl</span>
                </div>
              </a>
            </div>

            {/* Embedded Google Maps with high contrast frame */}
            <div className="border border-neutral-900 bg-black p-2">
              <span className="block text-[10px] uppercase font-mono text-neutral-500 mb-2 px-2">Lokalizacja na mapie</span>
              <div className="relative aspect-video w-full overflow-hidden border border-neutral-900 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2331.601661318895!2d17.223775377195484!3d54.24023830746583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701ffc50bb188b7%3A0xd84ad632318b5004!2sSzkolna%201A%2C%2077-140%20Ko%C5%82czyg%C5%82owy!5e0!3m2!1spl!2spl!4v1782478662606!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Informative Preparation Guide & CTAs */}
          <div className="lg:col-span-7 bg-black border border-neutral-900 p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-neutral-900 opacity-20" />
            
            {/* Background branding */}
            <div className="absolute -bottom-12 -right-12 text-neutral-950 font-graffiti text-[14rem] select-none pointer-events-none font-bold opacity-20">
              W!
            </div>

            <div className="relative z-10 space-y-8">
              {/* Header */}
              <div className="border-b border-neutral-900 pb-6">
                <h3 className="text-xl uppercase font-mono font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-neutral-500" />
                  Jak przygotować pliki?
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Prawidłowe przygotowanie projektów gwarantuje najwyższą jakość druku i przyspiesza proces realizacji.
                </p>
              </div>

              {/* Guide steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {preparationSteps.map((step, index) => (
                  <div key={index} className="p-5 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-neutral-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wider">{step.title}</h4>
                    </div>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Fast turnaround standards info */}
              <div className="p-6 bg-neutral-950 border border-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neutral-900 text-white shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono font-bold text-white uppercase">Szybka wycena projektu</h5>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Odpowiadamy na wiadomości e-mail zazwyczaj w ciągu kilku godzin.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Warsztat otwarty</span>
                </div>
              </div>

              {/* Visual Divider */}
              <div className="h-px bg-neutral-900" />

              {/* Direct Communication Prompt */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Masz gotowy projekt lub szkic?</h4>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  Prześlij pliki na nasz e-mail lub skontaktuj się z nami telefonicznie. Chętnie doradzimy, jak zoptymalizować koszty i dobrać najlepsze materiały dla Twojej reklamy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="mailto:kontakt@wrapfactory.pl"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-mono uppercase text-xs tracking-widest font-bold py-4 hover:bg-neutral-200 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Wyślij e-mail</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  
                  <a
                    href="tel:515188941"
                    className="flex-1 flex items-center justify-center gap-2 bg-neutral-950 border border-neutral-800 text-white font-mono uppercase text-xs tracking-widest font-bold py-4 hover:border-white active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Zadzwoń teraz</span>
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
