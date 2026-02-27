"use client";

import { useState } from "react";

const sportsCategories = [
  { id: "all", name: "Tous les sports", emoji: "🎯" },
  { id: "football", name: "Football", emoji: "⚽" },
  { id: "basketball", name: "Basketball", emoji: "🏀" },
  { id: "tennis", name: "Tennis", emoji: "🎾" },
  { id: "hockey", name: "Hockey", emoji: "🏒" },
  { id: "baseball", name: "Baseball", emoji: "⚾" },
  { id: "mma", name: "MMA", emoji: "🥊" },
  { id: "cricket", name: "Cricket", emoji: "🏏" },
  { id: "rugby", name: "Rugby", emoji: "🏉" },
];

export function SportsCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
        {sportsCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all ${
              activeCategory === category.id
                ? "bg-green-500 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="text-base">{category.emoji}</span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
