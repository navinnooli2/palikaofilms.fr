import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon-betify.webp", type: "image/webp" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon-betify.webp",
  },
  title: "Betify : Casino en Ligne & Paris Sportifs en France | Bonus & VIP",
  description: "Betify : votre casino en ligne et plateforme de paris sportifs en France. Plus de 10 000 jeux, 87 fournisseurs, bonus de bienvenue 100% jusqu'a 500€, programme VIP 18 niveaux, retraits rapides. Jouez et gagnez avec Betify.",
  keywords: "betify, betify casino, betify paris sportif, betify avis, betify france, betify connexion, betify login, betify bonus, betify inscription, casino en ligne, paris sportifs, aviator betify, machines a sous, casino en direct, betify app, betify retrait, betify vip, betify cashback, betify freebet",
  openGraph: {
    title: "Betify : Casino en Ligne & Paris Sportifs en France",
    description: "Plus de 10 000 jeux, cotes competitives sur 40+ sports, bonus exclusifs et programme VIP 18 niveaux. Jouez sur Betify.",
    url: "https://palikaofilms.fr",
    siteName: "Betify",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://palikaofilms.fr/images/logo.svg",
        width: 200,
        height: 60,
        alt: "Betify Casino en Ligne & Paris Sportifs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betify : Casino en Ligne & Paris Sportifs en France",
    description: "Plus de 10 000 jeux, cotes competitives, bonus exclusifs. Jouez sur Betify.",
  },
  alternates: {
    canonical: "https://palikaofilms.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemas = [
  // 1. Organization + Brand
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://palikaofilms.fr/#organization",
    name: "Betify",
    alternateName: ["Betify Casino", "Betify Paris Sportifs", "Betify France"],
    url: "https://betify.com",
    logo: {
      "@type": "ImageObject",
      url: "https://palikaofilms.fr/images/logo.svg",
      width: 200,
      height: 60,
    },
    image: "https://palikaofilms.fr/images/logo.svg",
    description: "Betify est une plateforme de casino en ligne et de paris sportifs proposant plus de 10 000 jeux de 87 fournisseurs, des cotes competitives sur 40+ sports, un programme VIP a 18 niveaux avec cashback jusqu'a 20%, et des paiements rapides et securises.",
    foundingDate: "2023",
    slogan: "Casino en Ligne & Paris Sportifs en France",
    brand: {
      "@type": "Brand",
      name: "Betify",
      logo: "https://palikaofilms.fr/images/logo.svg",
      slogan: "Jouez et gagnez avec Betify",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+35725654149",
        contactType: "customer service",
        url: "https://betify.com",
        availableLanguage: ["French", "English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        url: "https://betify.com",
        availableLanguage: ["French", "English"],
      },
    ],
    sameAs: [
      "https://betify.com",
      "https://betify.world",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1500",
      reviewCount: "1500",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Altacore N.V.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CW",
      },
    },
    knowsAbout: [
      "Casino en ligne",
      "Paris sportifs",
      "Machines a sous",
      "Blackjack",
      "Roulette",
      "Aviator",
      "Crash games",
      "Casino en direct",
      "eSports betting",
      "Cryptomonnaie",
    ],
  },

  // 2. WebSite with SearchAction
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://palikaofilms.fr/#website",
    name: "Betify",
    alternateName: "Betify Casino France",
    url: "https://palikaofilms.fr",
    description: "Betify : Casino en Ligne & Paris Sportifs en France. Plus de 10 000 jeux, bonus de bienvenue, programme VIP 18 niveaux.",
    inLanguage: "fr-FR",
    publisher: { "@id": "https://palikaofilms.fr/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://betify.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://palikaofilms.fr/#webpage",
    url: "https://palikaofilms.fr",
    name: "Betify : Casino en Ligne & Paris Sportifs en France | Bonus & VIP",
    description: "Decouvrez Betify, votre casino en ligne et plateforme de paris sportifs en France. Plus de 10 000 jeux, 87 fournisseurs, bonus de bienvenue 100% jusqu'a 500€.",
    isPartOf: { "@id": "https://palikaofilms.fr/#website" },
    about: { "@id": "https://palikaofilms.fr/#organization" },
    inLanguage: "fr-FR",
    datePublished: "2025-01-01",
    dateModified: "2026-02-27",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://palikaofilms.fr/images/logo.svg",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".prose p:first-of-type"],
    },
  },

  // 4. SoftwareApplication (PWA Betify)
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Betify",
    alternateName: "Betify App",
    operatingSystem: "Android, iOS",
    applicationCategory: "GameApplication",
    description: "Application mobile Betify (PWA) : casino en ligne, paris sportifs, mini-jeux et casino en direct. Accessible sur iOS et Android sans telechargement.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      ratingCount: "1500",
    },
    creator: { "@id": "https://palikaofilms.fr/#organization" },
  },

  // 5. Product (Betify as gambling product)
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://palikaofilms.fr/#product",
    name: "Betify Casino & Paris Sportifs",
    description: "Casino en ligne et paris sportifs avec plus de 10 000 jeux, 87 fournisseurs, bonus de bienvenue 100% jusqu'a 500€, programme VIP 18 niveaux avec cashback jusqu'a 20%.",
    brand: {
      "@type": "Brand",
      name: "Betify",
      logo: "https://palikaofilms.fr/images/logo.svg",
    },
    image: "https://palikaofilms.fr/images/logo.svg",
    url: "https://betify.com",
    category: "Casino en ligne, Paris sportifs",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1500",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Julien93" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "La variete des machines a sous est impressionnante, chaque session donne envie de revenir sur Betify.",
        datePublished: "2025-11-15",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Claire_Lyon" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Le casino en direct Betify est excellent, croupiers professionnels et ambiance immersive garantie.",
        datePublished: "2025-12-01",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "PtonioP" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Plateforme tres interessante pour les paris sportifs, je recommande. Service technique tres reactif.",
        datePublished: "2026-01-10",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Arnaud S." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Tres bonne plateforme, variee et complete. Les paris sportifs sont au top avec des cotes competitives.",
        datePublished: "2026-01-22",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Marc75" },
        reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
        reviewBody: "Beaucoup de jeux, plateforme stable. Betify offre toujours de quoi tester sans jamais s'ennuyer.",
        datePublished: "2026-02-05",
      },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Bonus de bienvenue Casino Betify",
        description: "100% jusqu'a 500€ + Free Spins sur le premier depot. Wager x35, validite 14 jours.",
        priceCurrency: "EUR",
        price: "0",
        availability: "https://schema.org/InStock",
        url: "https://betify.com",
      },
      {
        "@type": "Offer",
        name: "Bonus Paris Sportifs Betify",
        description: "50% du premier depot en freebet jusqu'a 200€. Wager x1.",
        priceCurrency: "EUR",
        price: "0",
        availability: "https://schema.org/InStock",
        url: "https://betify.com",
      },
      {
        "@type": "Offer",
        name: "Bonus sans depot Betify",
        description: "20 Free Spins sans wager pour les nouveaux inscrits. Gains max 50€.",
        priceCurrency: "EUR",
        price: "0",
        availability: "https://schema.org/InStock",
        url: "https://betify.com",
      },
    ],
  },

  // 6. FAQPage
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://palikaofilms.fr/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Betify est une plateforme de casino en ligne et de paris sportifs proposant plus de 10 000 jeux de 87 fournisseurs, des cotes competitives sur 40+ sports, un programme VIP a 18 niveaux et des paiements rapides et securises. Accessible aux joueurs en France avec un support francophone 24/7.",
        },
      },
      {
        "@type": "Question",
        name: "Comment s'inscrire sur Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'inscription sur Betify est gratuite et prend 2 minutes. Cliquez sur Inscription, renseignez vos informations (pseudo, email, mot de passe, pays), confirmez votre email et commencez a jouer. Vous pouvez aussi vous inscrire via Google ou Twitch.",
        },
      },
      {
        "@type": "Question",
        name: "Betify est-il fiable ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Betify detient une licence Curacao eGaming (n° OGL/2023/109/0075), utilise un chiffrement SSL, et affiche une note de 4.7/5 sur Trustpilot avec plus de 1 500 avis. Les retraits sont traites sous 24 a 48 heures sans frais.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les moyens de paiement acceptes sur Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Betify accepte Visa, Mastercard, Skrill, Neteller, MiFinity, ecoPayz, Cashlib, Flexepin, Google Pay, Apple Pay, les cryptomonnaies (Bitcoin, Ethereum, USDT, Litecoin) et les virements bancaires. Tous les paiements sont sans frais.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps prend un retrait sur Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les retraits en crypto sont quasi instantanes (quelques minutes). Les portefeuilles electroniques (Skrill, Neteller, MiFinity) prennent 24 a 48 heures. Les cartes bancaires et virements necessitent 48 a 72 heures. Aucun frais sur les retraits.",
        },
      },
      {
        "@type": "Question",
        name: "Betify est-il accessible en France ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, Betify est entierement accessible aux joueurs en France, avec une interface en francais, un support client francophone disponible 24/7, des methodes de paiement adaptees au marche francais et des bonus exclusifs pour la France.",
        },
      },
      {
        "@type": "Question",
        name: "Betify propose-t-il une application mobile ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Betify fonctionne via une PWA (Progressive Web App) installable depuis votre navigateur sur iOS et Android. Elle offre la meme experience qu'une application native avec tous les jeux, paris et fonctionnalites, sans telechargement depuis un store.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le depot minimum sur Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le depot minimum sur Betify est de 20€ pour la plupart des methodes de paiement (Visa, Mastercard, Skrill, MiFinity, virement). Pour les cryptomonnaies, le minimum est de 50€. Le depot maximum varie selon la methode choisie.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le bonus de bienvenue Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Betify offre un bonus de bienvenue casino de 100% jusqu'a 500€ + Free Spins (wager x35), un bonus paris sportifs de 50% du premier depot en freebet jusqu'a 200€ (wager x1), et 20 free spins sans depot sans wager pour les nouveaux inscrits.",
        },
      },
      {
        "@type": "Question",
        name: "Comment fonctionne le programme VIP Betify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le programme VIP Betify comporte 18 niveaux progressifs. Le cashback augmente de 1% (niveau 1) a 20% (niveau 18). A partir du niveau 10, un gestionnaire de compte personnel dedie est attribue. Les limites de retrait augmentent a chaque niveau, jusqu'a l'illimite au niveau 18.",
        },
      },
    ],
  },

  // 7. BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Betify France",
        item: "https://palikaofilms.fr",
      },
    ],
  },

  // 8. ItemList (top games)
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jeux les plus populaires sur Betify",
    description: "Top 10 des jeux de casino les plus joues sur Betify France",
    numberOfItems: 10,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Gates of Olympus 1000", url: "https://betify.com" },
      { "@type": "ListItem", position: 2, name: "Sweet Bonanza", url: "https://betify.com" },
      { "@type": "ListItem", position: 3, name: "Serpent Gold: Hold & Win", url: "https://betify.com" },
      { "@type": "ListItem", position: 4, name: "Le Bandit", url: "https://betify.com" },
      { "@type": "ListItem", position: 5, name: "Aviator", url: "https://betify.com" },
      { "@type": "ListItem", position: 6, name: "Crazy Time", url: "https://betify.com" },
      { "@type": "ListItem", position: 7, name: "Blackjack", url: "https://betify.com" },
      { "@type": "ListItem", position: 8, name: "Chicken Road 2", url: "https://betify.com" },
      { "@type": "ListItem", position: 9, name: "Mines", url: "https://betify.com" },
      { "@type": "ListItem", position: 10, name: "Lightning Roulette", url: "https://betify.com" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
