import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { PromoBanner } from "@/components/PromoBanner";
import { VIPClub } from "@/components/VIPClub";
import { SportsCategories } from "@/components/SportsCategories";
import { PlayBet } from "@/components/PlayBet";
import { FeaturedGames } from "@/components/FeaturedGames";
import { LiveEvents } from "@/components/LiveEvents";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { SEOContent } from "@/components/SEOContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <div className="container mx-auto px-4 pt-6 pb-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center">
            Betify : Casino en Ligne <span className="text-gradient">&</span> Paris Sportifs
          </h1>
        </div>
        <HeroBanner />
        <PromoBanner />
        <VIPClub />
        <SportsCategories />
        <PlayBet />
        <FeaturedGames />
        <LiveEvents />
      </main>
      <Footer />
      <SEOContent />
      <BottomNav />
    </div>
  );
}
