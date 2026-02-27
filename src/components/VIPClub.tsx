"use client";

import { Crown, Gift, Zap, Star } from "lucide-react";

const benefits = [
  { icon: Gift, label: "Récompenses exclusives" },
  { icon: Zap, label: "Retraits accélérés" },
  { icon: Star, label: "Manager personnel" },
];

const confetti = [
  { color: "#f59e0b", top: 10, right: 15, delay: 0 },
  { color: "#22c55e", top: 25, right: 35, delay: 0.3 },
  { color: "#3b82f6", top: 5, right: 50, delay: 0.6 },
  { color: "#ec4899", top: 40, right: 20, delay: 0.9 },
  { color: "#8b5cf6", top: 30, right: 45, delay: 1.2 },
  { color: "#f97316", top: 15, right: 55, delay: 1.5 },
  { color: "#14b8a6", top: 45, right: 40, delay: 1.8 },
  { color: "#eab308", top: 20, right: 25, delay: 2.1 },
];

export function VIPClub() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/5 p-6 sm:p-8">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute -top-6 -right-6">
          <div className="relative">
            {confetti.map((item, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-float"
                style={{
                  backgroundColor: item.color,
                  top: `${item.top}px`,
                  right: `${item.right}px`,
                  animationDelay: `${item.delay}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">CLUB VIP</h3>
              <p className="text-white/50 text-sm">Débloquez des avantages exclusifs</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="flex items-center gap-2 text-white/70">
                <benefit.icon className="w-4 h-4 text-amber-500" />
                <span className="text-sm">{benefit.label}</span>
              </div>
            ))}
          </div>

          <button className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-white transition-all">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
