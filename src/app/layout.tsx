import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Betify : Casino en Ligne & Paris Sportifs en France | Bonus & VIP",
  description: "Betify : votre casino en ligne et plateforme de paris sportifs en France. Plus de 10 000 jeux, 87 fournisseurs, bonus de bienvenue 100% jusqu'à 500€, programme VIP 18 niveaux, retraits rapides. Jouez et gagnez avec Betify.",
  keywords: "betify, betify casino, betify paris sportif, betify avis, betify france, betify connexion, betify login, betify bonus, casino en ligne, paris sportifs, aviator, machines à sous, casino en direct",
  openGraph: {
    title: "Betify : Casino en Ligne & Paris Sportifs en France",
    description: "Plus de 10 000 jeux, cotes compétitives sur 40+ sports, bonus exclusifs et programme VIP. Jouez sur Betify.",
    url: "https://palikaofilms.fr",
    siteName: "Betify",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Betify : Casino en Ligne & Paris Sportifs en France",
    description: "Plus de 10 000 jeux, cotes compétitives, bonus exclusifs. Jouez sur Betify.",
  },
  alternates: {
    canonical: "https://palikaofilms.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Betify",
  url: "https://betify.com",
  logo: "https://betify.com/logo.png",
  description: "Betify est une plateforme de casino en ligne et de paris sportifs proposant plus de 10 000 jeux et des cotes compétitives sur 40+ sports.",
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+35725654149",
    contactType: "customer service",
    availableLanguage: ["French", "English"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  },
  sameAs: [
    "https://betify.com",
    "https://betify.world",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Betify",
  url: "https://palikaofilms.fr",
  description: "Betify : Casino en Ligne & Paris Sportifs en France",
  inLanguage: "fr",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://betify.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const gamblingSchema = {
  "@context": "https://schema.org",
  "@type": "GamblingService",  // Note: custom type - will be interpreted as Thing
  name: "Betify Casino & Paris Sportifs",
  url: "https://betify.com",
  description: "Casino en ligne et paris sportifs avec plus de 10 000 jeux, 87 fournisseurs, bonus de bienvenue, programme VIP 18 niveaux.",
  provider: {
    "@type": "Organization",
    name: "Altacore N.V.",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Bonus de bienvenue Casino",
      description: "100% jusqu'à 500€ + Free Spins sur le premier dépôt",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Bonus Paris Sportifs",
      description: "50% du premier dépôt en freebet jusqu'à 200€",
      priceCurrency: "EUR",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que Betify ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Betify est une plateforme de casino en ligne et de paris sportifs proposant plus de 10 000 jeux, des cotes compétitives sur 40+ sports, un programme VIP à 18 niveaux et des paiements rapides et sécurisés. Accessible aux joueurs en France.",
      },
    },
    {
      "@type": "Question",
      name: "Comment s'inscrire sur Betify ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'inscription sur Betify est gratuite et prend 2 minutes. Cliquez sur « Inscription », renseignez vos informations (pseudo, email, mot de passe, pays), confirmez votre email et commencez à jouer immédiatement. Vous pouvez aussi vous inscrire via Google ou Twitch.",
      },
    },
    {
      "@type": "Question",
      name: "Betify est-il fiable ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Betify détient une licence Curaçao eGaming, utilise un chiffrement SSL, et affiche une note de 4.7/5 sur Trustpilot avec plus de 1 500 avis. Les retraits sont traités sous 24 à 48 heures sans aucun frais caché.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les moyens de paiement acceptés sur Betify ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Betify accepte : Visa, Mastercard, Skrill, Neteller, MiFinity, ecoPayz, Cashlib, Flexepin, les cryptomonnaies (Bitcoin, Ethereum, USDT, Litecoin) et les virements bancaires. Tous les paiements sont sans frais.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend un retrait sur Betify ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les retraits en crypto sont quasi instantanés. Les portefeuilles électroniques (Skrill, Neteller, MiFinity) prennent 24 à 48 heures. Les cartes bancaires et virements nécessitent 48 à 72 heures.",
      },
    },
    {
      "@type": "Question",
      name: "Betify est-il accessible en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Betify est entièrement accessible aux joueurs en France, avec une interface en français, un support client francophone disponible 24/7 et des méthodes de paiement adaptées au marché français.",
      },
    },
    {
      "@type": "Question",
      name: "Betify propose-t-il une application mobile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Betify fonctionne via une PWA (Progressive Web App) que vous pouvez installer directement depuis votre navigateur. Elle offre la même expérience qu'une application native, sans téléchargement depuis un store.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le dépôt minimum sur Betify ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le dépôt minimum sur Betify est de 20€ pour la plupart des méthodes de paiement (Visa, Mastercard, Skrill, MiFinity). Pour les cryptomonnaies, le minimum est de 50€.",
      },
    },
    {
      "@type": "Question",
      name: "Betify propose-t-il un bonus de bienvenue ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Betify offre un bonus de bienvenue casino de 100% jusqu'à 500€ + Free Spins, ainsi qu'un bonus paris sportifs de 50% du premier dépôt en freebet. Des free spins sans dépôt sont également disponibles pour les nouveaux inscrits.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://palikaofilms.fr",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-gambling"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gamblingSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
