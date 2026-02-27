"use client";

import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="container mx-auto px-4 py-4 space-y-3">
      {/* Main Promo */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-4 sm:p-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white rounded-full blur-[80px]" />
        </div>

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/icon-animated-rocket.e8576b9.gif" alt="" className="w-12 h-12" />
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-white/80 font-medium">Offre limitée</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Bonus 1er dépôt : 50% Freebet + 100 Free Spins sans wager
              </h3>
            </div>
          </div>

          <a href="https://betify.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-green-700 font-bold hover:bg-white/90 transition-all shadow-lg">
            <span>Récupérer</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-2 gap-3">
        <a href="https://betify.com" className="flex items-center gap-3 rounded-xl bg-[#111] border border-white/5 hover:border-white/20 p-4 transition-all">
          <img src="/images/icon-colored-mission.60e7c40.webp" alt="Missions" className="w-10 h-10" />
          <div>
            <span className="text-sm font-semibold text-white block">Daily Mission</span>
            <span className="text-xs text-white/40">Récompenses quotidiennes</span>
          </div>
        </a>
        <a href="https://betify.com" className="flex items-center gap-3 rounded-xl bg-[#111] border border-white/5 hover:border-white/20 p-4 transition-all">
          <img src="/images/icon-colored-wheel.366b757.webp" alt="Roue" className="w-10 h-10" />
          <div>
            <span className="text-sm font-semibold text-white block">Roue de la Fortune</span>
            <span className="text-xs text-white/40">Gains jusqu&apos;à 3 000€</span>
          </div>
        </a>
      </div>
    </section>
  );
}
