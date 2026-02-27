"use client";

import { Menu, Gamepad2, Plus, Dice1, Trophy } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "menu", label: "Menu", icon: Menu },
  { id: "mini-games", label: "Mini-Jeux", icon: Gamepad2 },
  { id: "deposit", label: "Dépôt", icon: Plus, primary: true },
  { id: "casino", label: "Casino", icon: Dice1 },
  { id: "sports", label: "Sports", icon: Trophy },
];

export function BottomNav() {
  const [activeItem, setActiveItem] = useState("sports");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/5 sm:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 transition-all ${
              item.primary
                ? "-mt-6"
                : activeItem === item.id
                  ? "text-green-500"
                  : "text-white/40"
            }`}
          >
            {item.primary ? (
              <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center glow-green">
                <item.icon className="w-6 h-6 text-white" />
              </div>
            ) : (
              <>
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
