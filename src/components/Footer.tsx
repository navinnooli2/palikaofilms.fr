"use client";

import { Shield, Lock, Clock, Headphones } from "lucide-react";

const footerLinks = [
  {
    title: "Produits",
    links: ["Sports", "Casino", "Casino en Direct", "eSports", "Mini-Jeux"],
  },
  {
    title: "Support",
    links: ["Centre d'aide", "FAQ", "Nous contacter", "Jeu responsable"],
  },
  {
    title: "Légal",
    links: ["Conditions générales", "Politique de confidentialité", "Politique de cookies", "Politique LCB-FT"],
  },
];

const features = [
  { icon: Shield, label: "Sécurisé & Licencié" },
  { icon: Lock, label: "Chiffrement SSL" },
  { icon: Clock, label: "Disponible 24/7" },
  { icon: Headphones, label: "Support en direct" },
];

const paymentLogos = [
  { name: "Visa", src: "/images/visa.svg" },
  { name: "Mastercard", src: "/images/mastercard.svg" },
  { name: "JCB", src: "/images/jcb.svg" },
  { name: "Skrill", src: "/images/skrill.svg" },
  { name: "Neteller", src: "/images/neteller.svg" },
  { name: "ecoPayz", src: "/images/ecopayz.svg" },
  { name: "MiFinity", src: "/images/mifinity-2.svg" },
  { name: "Neosurf", src: "/images/neosurf.svg" },
  { name: "Interac", src: "/images/interac.svg" },
  { name: "Bitcoin", src: "/images/bitcoin.svg" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pb-20 sm:pb-8">
      <div className="container mx-auto px-4 py-8 border-b border-white/5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-green-500" />
              </div>
              <span className="text-sm text-white/60">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <a href="https://m-traff.net/ultimate-2025?sub_id_2=betify" className="flex items-center mb-4">
              <img src="/images/logo.svg" alt="Betify" className="h-7" />
            </a>
            <p className="text-sm text-white/40 max-w-xs">
              Votre destination premium pour les paris sportifs et les jeux de casino en ligne. Jouez de manière responsable.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="https://m-traff.net/ultimate-2025?sub_id_2=betify"
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 border-t border-white/5">
        <h4 className="text-sm font-semibold text-white mb-4">Moyens de paiement</h4>
        <div className="flex flex-wrap gap-3 mb-6">
          {paymentLogos.map((method) => (
            <div
              key={method.name}
              className="flex items-center justify-center px-3 py-2 rounded-lg bg-white/5 border border-white/10 h-10 min-w-[60px]"
            >
              <img src={method.src} alt={method.name} className="h-5 max-w-[40px] object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © 2025 Betify. Tous droits réservés. 18+ Jouez de manière responsable. Altacore N.V. — Licence Curaçao eGaming.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-white/50 px-2 py-1 rounded bg-red-500/20 border border-red-500/30">18+</span>
            <span className="text-xs text-white/30">Jeu responsable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
