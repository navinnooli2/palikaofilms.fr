"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Avant-Première Penguin King",
    subtitle: "EXCLUSIVITÉ",
    description: "Une exclusivité à découvrir sur Betify !",
    cta: "Créer un compte",
    image: "/images/177014_bf_mobile_banner-1-1.webp",
  },
  {
    id: 2,
    title: "Promotion Spéciale",
    subtitle: "BONUS INCROYABLES",
    description: "Des bonus incroyables vous attendent !",
    cta: "Créer un compte",
    image: "/images/177381_bf_mobile_banner.webp",
  },
  {
    id: 3,
    title: "Offre Exclusive",
    subtitle: "CASINO BETIFY",
    description: "Rejoignez le casino Betify dès maintenant !",
    cta: "Créer un compte",
    image: "/images/177469_bf_mobile_banner-10.webp",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4 py-6">
        <div className="relative rounded-2xl overflow-hidden border border-white/5 h-[280px] sm:h-[340px]">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 z-10">
                <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-3">
                  {slide.subtitle}
                </span>
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] max-w-lg">
                  {slide.title}
                </div>
                <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
                  {slide.description}
                </p>
                <a
                  href="https://betify.com"
                  className="w-fit px-10 py-4 rounded-full gradient-green font-bold text-white hover:opacity-90 transition-all glow-green text-sm sm:text-base uppercase tracking-wide"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 right-4 flex items-center gap-3 z-20">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm border border-white/10"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-green-500 w-8" : "bg-white/20 w-2 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm border border-white/10"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
