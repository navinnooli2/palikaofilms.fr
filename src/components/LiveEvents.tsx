"use client";

import { Circle, Clock } from "lucide-react";

const liveEvents = [
  {
    id: 1,
    league: "Premier League",
    teamA: "Manchester United",
    teamB: "Liverpool",
    colorA: "bg-red-600",
    colorB: "bg-red-500",
    scoreA: 2,
    scoreB: 1,
    time: "67'",
    odds: { home: 2.45, draw: 3.20, away: 2.80 },
  },
  {
    id: 2,
    league: "La Liga",
    teamA: "Real Madrid",
    teamB: "Barcelona",
    colorA: "bg-white",
    colorB: "bg-gradient-to-r from-blue-700 to-red-700",
    scoreA: 1,
    scoreB: 1,
    time: "45+2'",
    odds: { home: 2.10, draw: 3.50, away: 3.20 },
  },
  {
    id: 3,
    league: "NBA",
    teamA: "Lakers",
    teamB: "Warriors",
    colorA: "bg-purple-600",
    colorB: "bg-blue-600",
    scoreA: 98,
    scoreB: 102,
    time: "Q4 5:23",
    odds: { home: 1.85, draw: null, away: 1.95 },
  },
  {
    id: 4,
    league: "UFC 300",
    teamA: "Fighter A",
    teamB: "Fighter B",
    colorA: "bg-gray-700",
    colorB: "bg-gray-600",
    scoreA: null,
    scoreB: null,
    time: "R2",
    odds: { home: 1.65, draw: null, away: 2.25 },
  },
];

export function LiveEvents() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Circle className="w-3 h-3 text-red-500 fill-red-500" />
            <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Événements en Direct</h2>
          <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-white/50">
            {liveEvents.length} en direct
          </span>
        </div>
        <button className="text-sm text-green-500 hover:text-green-400 font-medium transition-colors">
          Voir tout
        </button>
      </div>

      <div className="grid gap-3">
        {liveEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-xl bg-[#111] border border-white/5 hover:border-white/10 p-4 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/40">{event.league}</span>
              <div className="flex items-center gap-1.5 text-xs">
                <Clock className="w-3 h-3 text-red-500" />
                <span className="text-red-500 font-medium">{event.time}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Teams */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-6 h-6 rounded-full ${event.colorA} flex items-center justify-center flex-shrink-0 border border-white/20`}>
                    <span className="text-[8px] font-bold text-white drop-shadow">
                      {event.teamA.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white flex-1">{event.teamA}</span>
                  {event.scoreA !== null && (
                    <span className="text-lg font-bold text-white">{event.scoreA}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full ${event.colorB} flex items-center justify-center flex-shrink-0 border border-white/20`}>
                    <span className="text-[8px] font-bold text-white drop-shadow">
                      {event.teamB.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white flex-1">{event.teamB}</span>
                  {event.scoreB !== null && (
                    <span className="text-lg font-bold text-white">{event.scoreB}</span>
                  )}
                </div>
              </div>

              {/* Odds */}
              <div className="flex gap-2 ml-6">
                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/5 hover:border-green-500/30 transition-all group">
                  <span className="text-xs text-white/50 block">1</span>
                  <span className="text-sm font-semibold text-white group-hover:text-green-400">
                    {event.odds.home.toFixed(2)}
                  </span>
                </button>
                {event.odds.draw && (
                  <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/5 hover:border-green-500/30 transition-all group">
                    <span className="text-xs text-white/50 block">X</span>
                    <span className="text-sm font-semibold text-white group-hover:text-green-400">
                      {event.odds.draw.toFixed(2)}
                    </span>
                  </button>
                )}
                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/5 hover:border-green-500/30 transition-all group">
                  <span className="text-xs text-white/50 block">2</span>
                  <span className="text-sm font-semibold text-white group-hover:text-green-400">
                    {event.odds.away.toFixed(2)}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
