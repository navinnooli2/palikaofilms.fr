"use client";

import { ChevronLeft, ChevronRight, Star, Flame } from "lucide-react";
import { useRef } from "react";

const games = [
  {
    id: 1,
    name: "Gates of Olympus 1000",
    provider: "Pragmatic Play",
    rating: 4.8,
    isHot: true,
    image: "/images/132832-gates-of-olympus-1000_thumbnailx2.jpg",
  },
  {
    id: 2,
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    rating: 4.9,
    isHot: true,
    image: "/images/170766-sweet-rush-bonanza_thumbnailx2.jpg",
  },
  {
    id: 3,
    name: "Serpent Gold",
    provider: "Boongo",
    rating: 4.7,
    isHot: true,
    image: "/images/169706-serpent-gold-hold-amp-win_thumbnailx2.jpg",
  },
  {
    id: 4,
    name: "Le Bandit",
    provider: "Hacksaw Gaming",
    rating: 4.6,
    isHot: true,
    image: "/images/120394-le-bandit_thumbnailx2.jpg",
  },
  {
    id: 5,
    name: "Blackjack",
    provider: "Evolution",
    rating: 4.8,
    isHot: false,
    image: "/images/177024-blackjack_thumbnailx2.jpg",
  },
  {
    id: 6,
    name: "Chicken Road 2",
    provider: "EvoPlay",
    rating: 4.7,
    isHot: true,
    image: "/images/161535-chicken-road-2_thumbnailx2.jpg",
  },
  {
    id: 7,
    name: "Hot Ross",
    provider: "Pragmatic Play",
    rating: 4.6,
    isHot: false,
    image: "/images/177282-hot-ross_thumbnailx2.jpg",
  },
  {
    id: 8,
    name: "Supersized",
    provider: "Pragmatic Play",
    rating: 4.5,
    isHot: false,
    image: "/images/176967-supersized_thumbnailx2.jpg",
  },
  {
    id: 9,
    name: "Dark Spiral",
    provider: "Hacksaw Gaming",
    rating: 4.7,
    isHot: true,
    image: "/images/177394-dark-spiral_thumbnailx2.jpg",
  },
  {
    id: 10,
    name: "Crazy Time",
    provider: "Evolution",
    rating: 4.9,
    isHot: true,
    image: "/images/170223-crazy-time-a_thumbnailx2.jpg",
  },
];

export function FeaturedGames() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Flame className="w-6 h-6 text-orange-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">Jeux Populaires</h2>
          <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-white/50">
            {games.length} jeux
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
      >
        {games.map((game) => (
          <a
            key={game.id}
            href="https://m-traff.net/ultimate-2025?sub_id_2=betify"
            className="group flex-shrink-0 w-[160px] sm:w-[200px] rounded-xl overflow-hidden bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-300"
          >
            <div className="relative h-[120px] sm:h-[150px] overflow-hidden">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {game.isHot && (
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-orange-500/90 flex items-center gap-1 z-10">
                  <Flame className="w-3 h-3 text-white" />
                  <span className="text-[10px] font-semibold text-white">TOP</span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#111] to-transparent" />
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-white truncate">{game.name}</h3>
              <p className="text-xs text-white/40 truncate">{game.provider}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs text-white/60">{game.rating}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
