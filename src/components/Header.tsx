"use client";

import { Search, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="https://m-traff.net/ultimate-2025?sub_id_2=betify" className="flex items-center">
          <img src="/images/logo.svg" alt="Betify" className="h-8" />
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <Search className="w-5 h-5 text-white/70" />
          </button>

          <a href="https://m-traff.net/ultimate-2025?sub_id_2=betify" className="h-10 px-5 rounded-full bg-white/5 hover:bg-white/10 flex items-center gap-2 transition-colors border border-white/10">
            <LogIn className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-white hidden sm:inline">Connexion</span>
          </a>

          <a href="https://m-traff.net/ultimate-2025?sub_id_2=betify" className="h-10 px-5 rounded-full gradient-green hover:opacity-90 flex items-center gap-2 transition-all glow-green">
            <UserPlus className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white hidden sm:inline">Inscription</span>
          </a>
        </div>
      </div>

      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0a0a0a] border-b border-white/5 p-4">
          <div className="container mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Rechercher des jeux, sports ou événements..."
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
