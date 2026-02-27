"use client";

import {
  Trophy,
  Gamepad2,
  Plane,
  Bomb,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Sports",
    label: "Parier",
    icon: Trophy,
    bgImage: "/images/bg-sports.1e07834.webp",
    large: true,
  },
  {
    id: 2,
    name: "eSports",
    label: "Parier",
    icon: Gamepad2,
    bgImage: "/images/bg-e-sports.aa76f08.webp",
    large: true,
  },
  {
    id: 3,
    name: "Aviator",
    label: "Jouer",
    icon: Plane,
    bgImage: "/images/bg-aviator.4a036bb.webp",
    large: false,
  },
  {
    id: 4,
    name: "Mines",
    label: "Jouer",
    icon: Bomb,
    bgImage: "/images/bg-mines.3e7b49b.webp",
    large: false,
  },
];

export function PlayBet() {
  const largeCards = categories.filter(c => c.large);
  const smallCards = categories.filter(c => !c.large);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Jouer & Parier</h2>
        <a href="https://betify.com" className="text-sm text-green-500 hover:text-green-400 font-medium transition-colors">
          Voir tout
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {largeCards.map((category) => (
          <a
            key={category.id}
            href="https://betify.com"
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 row-span-2 min-h-[280px] sm:min-h-[320px]"
          >
            <img
              src={category.bgImage}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative flex flex-col items-center justify-end h-full p-6 pb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 font-medium">
                {category.label}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">{category.name}</span>
            </div>
          </a>
        ))}

        {smallCards.map((category) => (
          <a
            key={category.id}
            href="https://betify.com"
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
          >
            <img
              src={category.bgImage}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative flex flex-col items-center justify-end py-6 sm:py-8 px-4">
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/60 mb-1 font-medium">
                {category.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-white">{category.name}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Cashback Banner */}
      <div className="mt-4 relative rounded-xl overflow-hidden">
        <img
          src="/images/bg-cashback.996e87b.webp"
          alt="Cashback jusqu'à 20%"
          className="w-full h-[100px] sm:h-[120px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6">
          <span className="text-lg sm:text-xl font-bold text-white">CASHBACK JUSQU&apos;À 20%</span>
        </div>
      </div>
    </section>
  );
}
